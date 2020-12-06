/**
 * @file portfolio.js
 * @author Sasha Contrepois
 */

var app = new Vue({
    el: '#app',
    data : {
        msgWindowOpen : false,
        skillLists : [
            [
                { name :"HTML & CSS",informations: "",},
                { name: "Javascript", informations: "jQuery, VueJS"},
                { name: "PHP", informations: "WordPress"},
                { name: "SQL", informations: ""} 
            ],
            [
                { name:"NodeJS", informations : "Wordpress"},
                { name:"C/C++", informations: "" },
                { name:"JAVA", informations : ""},
                { name:"Git", informations : "Gitlab, GitHub, AzureDevops"}
            ],
            [
                { name: "Unix", informations: "Administration système"},
                { name: "Docker", informations: ""},
                { name: "Bureautique", informations : "Word, Excel, Powerpoint"},
                { name: "Gestion de projet", informations: "Trello, AzureDevops"}
            ],
            [
                { name: "SuiteAdobe", informations : "Photoshop, Adobe XD, After Effects"},
                { name : "Français", informations: ""},
                { name: "Anglais", informations: "Cambdrige Certificate"},
                { name: "Italien", informations: ""},
            ]
        ],
        projectTimeline : [
            {   
                year: 2020,
                projects: [
                    {
                        name: "Portfolio",
                        description: "Un site pour présenter mes compétences, mes projets et ma personnalitée",
                        imageUrl: "/public/img/projects/portfolio.jpg",
                        githubUrl: "https://github.com/SashaCtp/Portfolio",
                        specitifactionsUrl : null,
                        learnMoreUrl: null,
                        technos : [
                            "HTML & CSS (Boostrap)",
                            "Javascript (VueJS)",
                            "NodeJS & Express",
                            "Docker"
                        ]
                    },
                    {
                        name: "CoinCoin du FPV",
                        description: "Un site d'achat et de revente de pièces dédiées au FPV",
                        imageUrl: "/public/img/projects/coincoinfpv.png",
                        githubUrl: null,
                        specitifactionsUrl : null,
                        learnMoreUrl: null,
                        technos : [
                            "HTML & CSS (Boostrap)",
                            "PHP (WordPress) & SQL",
                            "Javascript"
                        ]
                    },
                ],
            },
            {
                year: 2019,
                projects: [
                    {
                        name: "AeroSaver",
                        description: "Projet de fin d'année pour porter secours aux victimes de noyades",
                        imageUrl: "/public/img/projects/aerosaver.png",
                        githubUrl: null,
                        specificationsUrl: null,
                        learnMoreUrl: null,
                        technos: [
                            "C++"
                        ]
                    },
                    {
                        name: "Relax Bot",
                        description: "Un projet pour prendre en main la librairie Discord.JS",
                        imageUrl: "/public/img/projects/relaxbot.png",
                        githubUrl: null,
                        specitifactionsUrl : null,
                        learnMoreUrl: null,
                        technos : [
                            "NodeJS",
                            "Javascript",
                            "Discord.JS"
                        ]
                    }
                ]

            },{
                year : 2017,
                projects : [
                    {
                        name: "Monopo.li",
                        description: "Un vrai jeu Monopoly sur un navigateur internet !",
                        imageUrl : "/public/img/projects/monopoli.png",
                        githubUrl: null,
                        specitifactionsUrl: null,
                        learnMoreUrl: null,
                        technos: [
                            "HTML & CSS",
                            "Javascript",
                            "VueJS",
                            "SocketIO",
                            "NodeJS"
                        ]
                    }
                ]

            },
            {
                year: 2016,
                projects: [
                    {
                        name: "RubyzGames",
                        description: "Un serveur de jeu amusant et innovant",
                        imageUrl: "/public/img/projects/rubyzgames.png",
                        githubUrl: null,
                        specitifactionsUrl: null,
                        learnMoreUrl: null,
                        technos: [
                            "Java",
                            "HTML & CSS",
                            "PHP & SQL",
                            "Javascript"
                        ]
                    }

                ]
            }
        ]
    },
    methods : {
        openMsgWindow : function(){

            this.msgWindowOpen = true;

        }
    }
});

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

