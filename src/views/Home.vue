<template>

    <div>
    
        <section class="colored" id="accueil">
                <div class="container">
                    <div class="imgContainer">
                        <img class="accueilImg" src="public/images/sasha.jpg" alt="Photo de Sasha Contrepois" />
                    </div>
                    <h1>Sasha Contrepois</h1>
                    <h2>Etudiant & Développeur</h2>
                </div>
        </section>

        <presentation-section />

        <skill-section/>

        <project-section/>

        <resume-section/>

        <contact-section/>

    </div>

</template>

<script>
// Sections ==========----------
import PresentationSection from './sections/PresentationSection.vue'
import SkillSection from './sections/SkillSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import ResumeSection from './sections/ResumeSection.vue'
import ContactSection from './sections/ContactSection.vue'

export default {
	components: {
        'presentation-section': PresentationSection,
        'skill-section': SkillSection,
        'project-section': ProjectSection,
        'resume-section': ResumeSection,
        'contact-section': ContactSection,
	}
}
</script>
