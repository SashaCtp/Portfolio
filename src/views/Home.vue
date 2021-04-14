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

        <section class="bright" id="presentation">

                <div class="sectionHeader">
                    <img class="icon" src="public/images/boy_gray.png" alt="Icone représentant un homme" />
                    <h3>QUI SUIS-JE ?</h3>
                    <div class="spacer"></div>
                </div>

                <div class="container-fluid">

                    <div class="row">

                        <article class="col-lg-6 col-12">

                            <h5 data-nosnippet>Présentation</h5>

                            <p>
                                <span class="tab">Je</span> suis Sasha Contrepois, j'ai 19 ans et je suis avant tout un passioné de technologie,
                                d'informatique, d'aéronautique et d'ingéniérie.
                            </p>
                            <p>
                                <span class="tab">Après</span> avoir suivis un an de CPGE, j'ai décidé d'intégrer l'IUT Informatique de Paris afin d'acquérir de solides compétences en Informatique en vu de faire un parcours en apprentissage en école d'ingénieur. Cette première année m'a permis d'acquérir de bonnes méthodes de travail, de la rigueur et de nombreuses connaissances dans les domaines scientifiques, notamment en ingéniérie.
                            </p>
                            <p>
                                <span class="tab">A</span> la sortie de cette école d'ingénieur, je vise de travailler en tant qu'ingénieur dans le secteur de la défense, en cybersécurité ou systèmes embarqués. Vous trouverez ici <a href="https://www.linkedin.com/in/sasha-contrepois/" target="_blank">mon profil LinkedIn</a>.
                            </p> 
                            <p>
                                <span class="tab">Je</span> suis quelqu'un de curieux, dynamique, toujours prêt à apprendre de nouvelles choses, et cela depuis tout petit. J'ai commencé à programmer dès l'âge de 13 ans, et depuis, je passe mon temps libre à programmer de petits projets personnels ou de plus grande envergure. Vous pouvez en retrouver quelques'un sur ma page <a href="https://github.com/SashaCtp" target="_blank">GitHub</a>.
                            </p>

                            <div class="row justify-content-center">
                                <div class="col-12 col-sm-6">
                                    <a href="parcours.html" class="btn btn-primary">Mon parcours</a>
                                </div>
                            </div>
							
                            <table class="table-blue">

                                <thead>
                                    <tr>
                                        <td colspan="2">Je recherche actuellement</td>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td colspan="2">Une alternance de 2<span class="text-exp">ème</span> année d'IUT Informatique</td>
                                    </tr>

                                    <tr>
                                        <td class="text-bold">Dans quel secteur ?</td>
                                        <td>Informatique, défense et systèmes embarqués</td>
                                    </tr>

                                    <tr>
                                        <td class="text-bold">Pour quelles dates ?</td>
                                        <td>Du 1<span class="text-exp">er</span> Septembre 2021 au 31 Août 2022</td>
                                    </tr>

                                </tbody>

                            </table>

                        </article>

                        <div class="col-lg-6 col-12 timeline">

                            <h5>Diplômes et études</h5>

                            <div class="item item-medium item-red">
                                <div class="info">
                                    Depuis Octobre 2020
                                </div>
                                Etudiant en 1<span class="text-exp">ère</span> année d'informatique à l'IUT de l'Université de Paris
                            </div>

                            <div class="divider divider-row">
                                <div class="bar"></div>
                                <div class="text">2020</div>
                                <div class="bar"></div>
                            </div>

                            <div class="item item-medium item-dark item-border">
                                <div class="info">
                                    Classe de PCSI puis PSI - De Sep. 2019 à Oct. 2020
                                </div>
                                Etudiant en CPGE au Lycée Chaptal
                            </div>

                            <div class="item item-medium item-blue item-icon">
                                <i class="fas fa-graduation-cap"></i>

                                Baccalauréat S - Sciences de l'Ingénieur, Mention TB & Anglais Européen
                            </div>

                            <div class="divider divider-row">
                                <div class="bar"></div>
                                <div class="text">2019</div>
                                <div class="bar"></div>
                            </div>

                            <div class="item item-medium item-blue item-icon">
                                <i class="fas fa-graduation-cap"></i>

                                Brevet d'Initiation à l'Aéronautique - Félicitations du Jury
                            </div>

                            <div class="divider divider-row">
                                <div class="bar"></div>
                                <div class="text">2018</div>
                                <div class="bar"></div>
                            </div>

                        </div>

                    </div>

                </div>

        </section>

        <skill-section/>

        <project-section/>

        <resume-section/>

        <contact-section/>

    </div>

</template>

<script>
// Sections ==========----------
import SkillSection from './sections/SkillSection.vue'
import ProjectSection from './sections/ProjectSection.vue'
import ResumeSection from './sections/ResumeSection.vue'
import ContactSection from './sections/ContactSection.vue'

export default {
	components: {
        'skill-section': SkillSection,
        'project-section': ProjectSection,
        'resume-section': ResumeSection,
        'contact-section': ContactSection,
	}
}
</script>
