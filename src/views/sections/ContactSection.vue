<template>
	
	<section class="bright padded" id="contact">
		
		<div class="sectionHeader">
			<img
				class="icon"
				src="/images/paperplane.png"
				alt="Icone représentant un avion en papier"
			/>

			<h3>ME CONTACTER</h3>

			<div class="spacer"></div>
		</div>

		<contact-form :connectedAPI='false' />

	</section>

</template>

<script>
import ContactForm from '../../components/ContactForm.vue'

export default{
	
	data() {
		return{

		}
	},
	components: {
		'contact-form': ContactForm
	},
	methods: {
		
	}
	
}
</script>
