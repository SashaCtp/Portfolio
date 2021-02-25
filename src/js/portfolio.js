/**
 * @file portfolio.js
 * @author Sasha Contrepois
 */

//Toggle responsive nav
$('#navButton').click(function(){
    $(this).toggleClass('is-active');
    $('nav').toggleClass('display');
});

/**
 * @brief Change the header status if the user scroll down under 50px
 */
function checkHeader(){
    var fromTop = $(window).scrollTop();

    if(fromTop >= 50)
        $('header').addClass('scrolled');
    else
        $('header').removeClass('scrolled');
};

/**
 * @brief Change the active element in header according to the position of the window
 */
function changeActiveSection(){

    var cursor = $(window).scrollTop() + $(window).height() / 2;

    $.each($("section"), function (index, el) {

        var offset = $(this).offset();

        let start = Math.floor(offset.top);
        let end = start + $(this).height();

        var id = el.id;
        
        if(cursor >= start && cursor <= end){

            //Clear all from class active
            $("nav li").each(function(index){

                $(this).removeClass("active");

            });

            $("#link_" + id).addClass("active");

        }

    });

}

$(document).ready(function(){
    checkHeader();

    changeActiveSection();
});

//Scroll
$(window).scroll(function(e){
    checkHeader();

    changeActiveSection();
});


/**
 *  @brief Toggle the contact form display
 */

function toggleContactForm(e){

    /*
        When contact form is displayed :
        - contactWindow : 'open'
        - Aside : 'col-12 col-lg-4'

        When contact form is closed :
        - contactWindow : x
        - Aside : 'col-12'
    */
    if($('#contactWindow').hasClass('open')){

        //Close the contact form
        $('#contactWindow').removeClass('open');
        $('#contactWindow .aside').removeClass('col-lg-4');

    }else{

        //Open the contact form
        $('#contactWindow').addClass('open');
        $('#contactWindow .aside').addClass('col-lg-4');

    }

    e.preventDefault();

}

/**
 * @brief Handle the form submit
 */

function submitContactForm(e){

    alert("Message envoyé !");

    e.preventDefault();

}

/*
    Dynamic Backgrounds
*/

/* Dark color : rgb(54, 55, 149)   , Light color : rgb(0, 92, 151) */
var darkBlue = [54, 55, 149];
var lightBlue = [0, 92, 151];

var n = 0, increment = 1, amplitude = 30;

function changeColor(){

    setTimeout(function(){

        if(n >= amplitude){
            n = 0;
            increment *= -1;
        }else{
            n += 1;
        }

        for(k = 0; k < 3; k++){
            
                darkBlue[k] += increment;
            
            lightBlue[k] -= increment;
        }

        darkBlueText = "rgb(" + darkBlue[0] + "," + darkBlue[1] + "," + darkBlue[2] + ")";
        lightBlueText = "rgb(" + lightBlue[0] + "," + lightBlue[1] + "," + lightBlue[2] + ")";

        $(".colored").css("background", "linear-gradient(to bottom right, "+darkBlueText+", "+lightBlueText+")");

        //console.log("Change color : " + darkBlueText + " & " + lightBlueText + "     n = " + n);

        changeColor();

    }, 60);

}

changeColor();

