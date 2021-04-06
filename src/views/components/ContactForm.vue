<template>

    <div id="contactWindow" :class="{ 'open' : open }">

			<div class="row">

				<div class="aside colored col-12" :class="{ 'col-lg-4' : open}">

					<p class="title">Vous souhaitez me contacter ?</p>

					<p>
						Vous pouvez vous adresser directement par mail à l'adresse suivante
					</p>
					<p>
						<a href="mailto:sasha.contrepois@protonmail.com" style="color: #fff">
                            sasha.contrepois@protonmail.com
                        </a>
					</p>

					<p>
                        Ou alors envoyez-moi un message depuis ce formulaire !
                    </p>

					<div class="btn btn-border" @click="toggleForm">
						<i class="fas fa-paper-plane"></i> Envoyer un message
					</div>

				</div>

				<form class="col-lg-8 col-12" method="POST">

					<label>
						<input type="text" name="name" id="name" required v-model="inputName" />
						<span class="labelText">Nom, prénom ou société</span>
					</label>

					<label>
						<input type="text" name="email" id="email" required v-model="inputEmail" />
						<span class="labelText">Adresse email</span>
					</label>

					<label>
						<textarea name="message" id="message" required v-model="inputMessage"></textarea>
						<span class="labelText">Votre message</span>
					</label>

					<div class="row">

						<p class="col-lg-6 col-12 text-center text-italic text-small">
						    Aucune donnée n'est utilisée à des fins commerciales.
						</p>
						<div class="col-lg-6 col-12">
                            <button
                                type="submit"
                                class="btn btn-light"
                                @click="submitContact"
                            >
                                Envoyer
                            </button>
						</div>

					</div>

				</form>

			</div>
		</div>

</template>

<script>
export default{
	props: {
		connectedAPI: Boolean
	},
    data() {
        return {

            open: false,
            inputName: '',
            inputEmail: '',
            inputMessage: '',

        }
    },
	methods: {

        toggleForm: function(){

			if(this.open || !this.open && this.connectedAPI)
				this.open = !this.open;
			else if(!this.open && !this.connectedAPI){
				alert('Le formulaire n\'est pas connecté au serveur, contactez-moi directement à l\'adresse mail indiqué !')
			}

        },
        submitContact: function(event){
            event.preventDefault()

			if(!this.connectedAPI)
				alert('Le formulaire n\'est pas connecté au serveur, contactez-moi directement à l\'adresse mail indiqué !')

        }

    }
}
</script>