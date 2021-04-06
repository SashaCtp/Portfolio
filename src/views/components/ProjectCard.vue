<template>
  	<div class="project" v-if="isValid">
		<div class="row">
			<div class="col-md-3 col-12">
				<img
					class="logo"
					:src="'public/images/projects/' + logo"
					alt="Logo du projet"
				/>
			</div>

			<div class="col-md-9 col-12 d-flex flex-column justify-content-center">
				<div class="name">
					<span class="prefix">- </span>
						{{ name }}
					</div>
				<p>{{ description }}</p>
			</div>
		</div>

		<div class="card row">
			<div class="col-md-6 col-12 buttons">
				<a v-if="repository" :href="repository" target="_blank" class="btn btn-border">
					<i class="fab fa-github" aria-hidden="true"></i> Voir sur GitHub
                </a>
				<a class="btn" href="#">En savoir plus</a>
			</div>

			<ul class="col-md-6 col-12 technos">
				<li class="title">Développé avec</li>
				<li v-for="(techno, index) in technos" :key="name + index">{{ techno }}</li>
			</ul>
		</div>
  	</div>
</template>

<script>
export default {

	props: {
		name: String,
		description: String,
		technos: Array,
		repository: String,
		logo: String
	},
	methods: {

		isValid: function(){

			this.name = this.name.trim()
			this.description = this.description.trim()

			return (this.name != '' && this.description != '')

		}

	}

}
</script>