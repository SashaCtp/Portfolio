<template>
           <section class="colored" id="skills">

                <div class="sectionHeader">
                    <img class="icon" src="public/images/cogwheel.png" alt="Icone représentant un engrenage" />
                    <h3>MES COMPETENCES</h3>
                    <div class="spacer"></div>
                    <h4>J'ai appris de nombreuses choses, en voici une liste non exhaustive.</h4>
                </div>

                <div class="row align-items-center" v-if="skills.length == 0">
                    
                    <button class="btn btn-secondary" @click="loadSkills">Charger <i class="fas fa-sync-alt"></i></button>

                </div>

                <div class="skills" v-if="skills.length != 0">

                    <div class="row">

                        <div class="col-12 col-sm-6 col-lg-3" v-for='(skill, index) in skills' :key='index'>
                            <skill-card v-bind='skill' />
                        </div>

                    </div>
                
                </div>

        </section>

</template>

<script>
import SkillCard from '../components/SkillCard.vue'

export default {
    
    data(){
        return {

            skills : []

        }
    },
    methods: {

        loadSkills : function(){

            if(this.skills.length == 0){
                fetch('public/data/skills.json')
                .then(data => data.json())
                .then(data => {
                    this.skills = data
                })
            }

        }

    },
    components: {
        'skill-card' : SkillCard
    },
    mounted() {

        this.loadSkills()

    }

}
</script>