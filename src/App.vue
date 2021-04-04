<template>

	<div>

	    <Header />

        <router-view></router-view>
	
		<Footer/>

	</div>

</template>

<script>
import Header from './js/sections/Header.vue'
import Footer from './js/sections/Footer.vue'

// Pages ==========----------

export default {
	components: {
		'Header' : Header,
		'Footer' : Footer,
	}
}
</script>
