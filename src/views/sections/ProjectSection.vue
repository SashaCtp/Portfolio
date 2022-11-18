<template>
    <section class="bright" id="projects" ref="projects">

            <div class="sectionHeader">
                <img class="icon" src="/images/rocket.png" alt="Icone représentant une fusée" />
                <h3>MES PROJETS</h3>
                <div class="spacer"></div>
                <h4>Voici quelques projets sur lesquels j'ai pu travailler ces dernières années.</h4>
            </div>

            <button class="btn btn-primary" v-if="displayLoadButton" @click="loadTimeline">
                <i class="fas fa-sync-alt"></i> Charger les projets
            </button>

            <Loader text="Loading projects ..." type="loader-primary" v-if="displayLoader"/>

            <div class="timeline" v-if="displayProjects">

                <template v-for="(year, index) in getYears" :key="'projects-year-' + year">

                    <div class="divider divider-row" v-if="index != 0" :key="'year-' + year">
                        <div class="bar"></div>
                        <div class="text">{{ year }}</div>
                        <div class="bar"></div>
                    </div>

                    <div class="row justify-content-center align-items-center" >
                        <project-card v-bind="project" v-for="(project, projectIndex) in timeline[year].projects" :key="year + '-' + projectIndex" />
                    </div>

                </template>

            </div>

        </section>
</template>

<script lang=ts>
import ProjectCard from '../../components/ProjectCard.vue'
import Loader from '../../components/Loader.vue'
import LoadState from '../../types/LoadState'
import { API_URL } from '../../config'
export default{
  components: { ProjectCard, Loader },
    data: () => {
        return {
            
            timeline: {} as any,
            loadState: LoadState.BEFORE_LOADING as LoadState

        }
    },
    methods: {
        loadTimeline: function(){
            this.loadState = LoadState.LOADING;
            fetch(API_URL + '/v1/projects/timeline')
            .then(data => data.json())
            .then(data => {
                this.timeline = data;
                this.timeline;
                this.loadState = LoadState.SUCCESS;
            })
            .catch(err => {
                console.error('😢 Failed to load projects');
                this.loadState = LoadState.ERROR;
            });
        }
    },
    computed: {
        displayLoader() {
            return this.loadState == LoadState.BEFORE_LOADING || this.loadState == LoadState.LOADING;
        },
        displayLoadButton() {
            return this.loadState == LoadState.ERROR;
        },
        displayProjects() {
            return this.loadState == LoadState.SUCCESS;
        },
        getYears(){
            return Object.keys(this.timeline).sort((a: any, b: any) => {
                // Return the list of years, ordered by decreasing order
                return parseInt(b) - parseInt(a)
            })
        }
    },
    mounted: function(){
        
        this.loadTimeline()

    }
}
</script>
