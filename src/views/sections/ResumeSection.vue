<template>
    <section class="colored" id="cv">

        <div class="sectionHeader">
            <img class="icon" src="/images/resume.png" alt="Icone représentant un CV" />
            <h3>MON CV</h3>
            <div class="spacer"></div>
            <h4>Je résume tout en une page !</h4>
        </div>

        <div class="container">

            <div class="row choice">

                <div class="col-md-5 col-12 cvSection">
                    <img class="illustration" src="/images/pdf.png" alt="Icone représentant un fichier PDF" />

                    <a class="btn btn-large" href="/pdf/Sasha_Contrepois.pdf" download>Télécharger le CV</a>
                </div>

                <div class="col-2 d-md-flex d-none justify-content-center">

                    <div class="divider white divider-column">
                        <div class="bar"></div>
                        <div class="text">Ou</div>
                        <div class="bar"></div>
                    </div>

                </div>

                <div class="col-12 d-md-none d-flex justify-content-center">

                    <div class="divider white divider-row">
                        <div class="bar"></div>
                        <div class="text">Ou</div>
                        <div class="bar"></div>
                    </div>

                </div>
                    
                <div class="col-md-5 col-12 cvSection">
                    <img class="illustration" src="/images/cloud.png" alt="Icone représentant un nuage" />
                    <a class="btn btn-large" href="/pdf/Sasha_Contrepois.pdf" target="_blank">Consulter en ligne</a>
                </div>

            </div>

        </div>

    </section>
</template>

<script lang="ts">
export default {
    
}
</script>
