<template>

    <div>
        <not-found v-if="notFound"/>

        <section class="dividedSection" v-if="!notFound">

            <div class="colored header">
                <template v-if="this.page">
                    <h1>{{ this.page.title }}</h1>
                    <h2 v-if="this.page.subtitle">{{ this.page.subtitle }}</h2>
                </template>
                <template v-else>
                    <load-placeholder :type="'h1'" :size="'medium'"/>
                    <load-placeholder :type="'h2'" :size="'small'"/>
                </template>
            </div>

            <div class="body">

                <div class="container-fluid">

                    <template v-if="this.page && !this.notFound">

                        <div class="row" v-for="(row, rowIndex) in page.rows" :key="rowIndex">

                            <div class="col-12 col-lg-6" v-for="(col, colIndex) in row.cols" :key="+rowIndex+'#'+colIndex">
                                
                                <element-parser v-for="(el, elIndex) in col.elements" :key="elIndex" :element="el"/>

                            </div>

                        </div>
                    
                    </template>
                    <template v-else-if="!this.notFound">

                        <loader type="loader-primary" text="Chargement des informations du projet"/>

                    </template>
                
                </div>

            </div>

        </section>

    </div>
    
</template>

<script>
import Loader from './components/Loader.vue'
import NotFound from './NotFound.vue'
import ElementParser from './components/ElementParser.vue'
import LoadPlaceholder from './components/LoadPlaceholder.vue'

export default{

    components: {
        'not-found': NotFound,
        'loader' : Loader,
        'element-parser' : ElementParser,
        LoadPlaceholder
    },
    data(){
        return{
            notFound: false,
            page: null
        }
    },
    methods: {

        loadPage: function(){

            // Loading project
            try{
                console.log('🔁 Fetching data from the server ...')

                // TODO : Verifier les possibles problèmes de sécurité
                let id = this.$route.params.id;
                let url = '/public/data/projects/' + id + '.json'

                // TODO : A remplacer avec l'appel à l'API -- SOLUTION TEMPORAIRE
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.page = data;
                    this.notFound = false;
                })
                .catch(err => {
                    console.log('❌ An error occured')
                    this.notFound = true;
                })
            }catch(e){
                console.log('❌ An error occured')
                this.notFound = true;
            }
            
        }

    },
    mounted: function(){
        this.loadPage()
    }

}
</script>
