<template>
    <section class="bright" id="projects" ref="projects">

            <div class="sectionHeader">
                <img class="icon" src="/images/rocket.png" alt="Icone représentant une fusée" />
                <h3>MES PROJETS</h3>
                <div class="spacer"></div>
                <h4>Voici quelques projets sur lesquels j'ai pu travailler ces dernières années.</h4>
            </div>

            <button class="btn btn-primary" v-if="timeline.length == 0" @click="loadTimeline">
                <i class="fas fa-sync-alt"></i> Charger les projets
            </button>

            <div class="timeline" v-if="timeline.length != 0">

                <template v-for="(row, index) in timeline" :key="'projects-year-' + row.year">

                    <div class="divider divider-row" v-if="index != 0" :key="'year-' + row.year">
                        <div class="bar"></div>
                        <div class="text">{{ row.year }}</div>
                        <div class="bar"></div>
                    </div>

                    <div class="row justify-content-center align-items-center" >
                        <project-card v-bind="project" v-for="(project, projectIndex) in row.projects" :key="row.year + '-' + projectIndex" />
                    </div>

                </template>

            </div>

        </section>
</template>

<script>
import ProjectCard from '../../components/ProjectCard.vue'
export default{
  components: { ProjectCard },
    data(){
        return {
            
            timeline: []

        }
    },
    methods: {
        loadTimeline: function(){
            fetch('/data/projectTimeline.json')
            .then(data => data.json())
            .then(data => {
                this.timeline = data
            })
        }
    },
    mounted: function(){
        
        this.loadTimeline()

    }
}
</script>
