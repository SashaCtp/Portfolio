<template>
<div class="col-12 col-md-6 col-ld-4">
  	<div class="project" v-if="isValid">
		<img
			class="logo"
			:src="'public/images/projects/' + logo"
			alt="Logo du projet"
		/>

		<div>
			<div class="name">{{ name }}</div>
			<p class="text-center">{{ description }}</p>
		</div>

		<div class="tags">
			<div class="item" v-for="(techno, index) in technos" :key="name + index" >{{ techno }}</div>
		</div>

		<div class="buttons">
			<a v-if="repository" :href="repository" target="_blank" class="btn btn-primary">
				<i class="fab fa-github" aria-hidden="true"></i> Voir sur GitHub
            </a>
			<router-link class="btn btn-secondary btn-border" :to="getProjectLink()" v-if="id">En savoir plus</router-link>
		</div>

  	</div>
</div>
</template>

<script>
export default {

	props: {
		id: Number,
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
		},
		getProjectLink : function(){

			let url = '/project/' + this.id + '/' + this.name.toLowerCase().replace(/\s/g, "")
			return url

		}

	}

}
</script>