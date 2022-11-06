<template>

    <div>
        <not-found-view v-if="notFound" />

        <section class="dividedSection" v-if="!notFound">

            <div class="colored header">
                <template v-if="page">
                    <h1>{{ page.title }}</h1>
                    <h2 v-if="page.subtitle">{{ page.subtitle }}</h2>
                </template>
                <template v-else>
                    <load-placeholder :type="'h1'" :size="'medium'"/>
                    <load-placeholder :type="'h2'" :size="'small'"/>
                </template>
            </div>

            <div class="body">

                <div class="container-fluid">

                    <template v-if="page && !notFound">

                        <div class="row" v-for="(row, rowIndex) in page.rows" :key="rowIndex">

                            <div class="col-12 col-lg-6" v-for="(col, colIndex) in row.cols" :key="+rowIndex+'#'+colIndex">
                                
                                <element-parser v-for="(el, elIndex) in col.elements" :key="elIndex" :element="el"/>

                            </div>

                        </div>
                    
                    </template>
                    <template v-else-if="!notFound">

                        <loader type="loader-primary" text="Chargement des informations du projet"/>

                    </template>
                
                </div>

            </div>

        </section>

    </div>
    
</template>

<script lang="ts">
import Loader from '../components/Loader.vue'
import NotFound from './NotFound.vue'
import ElementParser from '../components/ElementParser.vue'
import LoadPlaceholder from '../components/LoadPlaceholder.vue'

import Page from '../types/Page'

export default{

    components: {
        'not-found-view': NotFound,
        'loader' : Loader,
        'element-parser' : ElementParser,
        LoadPlaceholder
    },
    data() {
        return{
            notFound: false as boolean,
            page: null as Page | null
        }
    },
    methods: {

        loadPage: function(){

            // Loading project
            try{
                console.log('🔁 Fetching data from the server ...')

                // TODO : Verifier les possibles problèmes de sécurité
                let id = this.$route.params.id;
                let url = '/data/projects/' + id + '.json'

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
