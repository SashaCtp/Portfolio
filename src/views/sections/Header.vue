<template>
    <header class="">
    	<nav :class="{ display : openNav }">
      		<ul>
        		<li id="link_presentation">
					<a href="/#presentation">QUI SUIS-JE ?</a>
          			
					<ul id="link_loisirs" class="dropdown">
            			<li>
              				<router-link to="/parcours">Mon parcours</router-link>
            			</li>
          			</ul>
        		</li>
				<li id="link_skills">
					<a href="/#skills" exact-path>MES COMPETENCES</a>
				</li>
				<li id="link_projects">
					<a href="/#projects">MES PROJETS</a>
				</li>
				<li id="link_cv">
					<a href="/#cv">MON CV</a>
				</li>
				<li id="link_contact">
					<a href="/#contact">ME CONTACTER</a>
				</li>
      		</ul>
    	</nav>

    	<button class="hamburger hamburger--collapse" :class="{ 'is-active' : openNav }" id="navButton" type="button" @click="toggleNav">
      		<span class="hamburger-box">
        		<span class="hamburger-inner"></span>
      		</span>
    	</button>
  	</header>
</template>

<script>
// TODO - Remove jquery 🤮
import $ from 'jquery'

export default {
	data(){
		return{
			openNav: false
		}
	},
    methods: {

		toggleNav: function(){
			this.openNav = !this.openNav
		},
		scrollTo: function(el){
			document.getElementById(el).scroll({
				top: 0,
				left: 0,
				behaviour: 'smooth'
			})
		}

	},
	computed: {
		currentRoute() {
			return this.$router.currentRoute.fullPath;
		}
	}
}


$(window).on('ready', () => {
    checkHeader();
    changeActiveSection();
})

$(window).on('scroll', () => {
    checkHeader();
    changeActiveSection();
})

/**
 * @brief Change the header status if the user scroll down under 50px
 */
function checkHeader(){
    let fromTop = $(window).scrollTop();

    if(fromTop >= 50)
        $('header').addClass('scrolled');
    else
        $('header').removeClass('scrolled');
};

/**
 * @brief Change the active element in header according to the position of the window
 */
function changeActiveSection(){

    let cursor = $(window).scrollTop() + $(window).height() / 2;

    $.each($('section'), function (index, el) {

        var offset = $(this).offset();

        let start = Math.floor(offset.top);
        let end = start + $(this).height();

        var id = el.id;
        
        if(cursor >= start && cursor <= end){

            //Clear all from class active
            $('nav li').each(function(index){

                $(this).removeClass('active');

            });

            $('#link_' + id).addClass('active');

        }

    });

}
</script>