<template>

	<div>

	    <Header />

        <router-view></router-view>
	
		<Footer/>

	</div>

</template>

<script>
import Header from './views/sections/Header.vue'
import Footer from './views/sections/Footer.vue'

// Pages ==========----------

export default {
	components: {
		'Header' : Header,
		'Footer' : Footer,
	}
}
</script>
