//Toggle responsive nav
$('#navButton').click(function(){
    $(this).toggleClass('is-active');
    $('nav').toggleClass('display');
});

function checkHeader(){
    var fromTop = $(window).scrollTop();

    if(fromTop >= 50)
        $('header').addClass('scrolled');
    else
        $('header').removeClass('scrolled');
};

$(document).ready(function(){checkHeader();})

//Scroll
$(window).scroll(function(){checkHeader();});
