/*
    CLIENT
*/

var app = new Vue({
    el: '#app',
    data : {
        msgWindowOpen : false,
        skillLists : [
            [
                { name :"Javascript",informations: "jQuery, VueJS",},
                { name: "HTML & CSS", informations: ""},
                { name: "Java", informations: ""},
                { name: "Git", informations: "Gitlab, GitHub, AzureDevops"} 
            ],
            [
                { name:"PHP", informations : "Wordpress"},
                { name:"NodeJS", informations: "" },
                { name:"SQL", informations : ""},
                { name:"C/C++", informations : ""}
            ],
            [
                { name: "Bureautique", informations : "Word, Excel, Powerpoint"},
                { name: "SolidWorks", informations: ""},
                { name: "SuiteAdobe", informations : "Photoshop, AdobeXD, After Effects"},
                { name: "Gestion de projet", informations: "Trello, AzureDevops"}
            ],
            [
                { name : "Français", informations: ""},
                { name: "Anglais", informations: "Cambdrige Certificate"},
                { name: "Italien", informations: ""},
                { name: "Russe", informations: "Niveau débutant"}
            ]
        ],
        projectTimeline : [
            {   
                year: 2020,
                projects: [
                    {
                        name: "CoinCoin du FPV",
                        description: "Un site d'achat et de revente de pièces dédiées au FPV.",
                        imageUrl: "/img/projects/coincoinfpv.png",
                        specitifactionsUrl : null,
                        learnMoreUrl: null,
                        technos : [
                            "HTML & CSS",
                            "PHP (WordPress)",
                            "SQL",
                            "Javascript",
                            "Bootstrap"
                            
                        ]
                    },
                ],
            },
            {
                year: 2019,
                projects: [
                    {
                        name: "AeroSaver",
                        description: "Projet de fin d'année pour porter secours aux victimes de noyades.",
                        imageUrl: "/img/projects/aerosaver.png",
                        specificationsUrl: null,
                        learnMoreUrl: null,
                        technos: [
                            "C++"
                        ]
                    },
                    {
                        name: "Relax Bot",
                        description: "Un projet pour prendre en main la librairie Discord.JS.",
                        imageUrl: "/img/projects/relaxbot.png",
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
                        imageUrl : "/img/projects/monopoli.png",
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
                        description: "Un serveur de jeu amusant et innovant.",
                        imageUrl: "/img/projects/rubyzgames.png",
                        specitifactionsUrl: null,
                        learnMoreUrl: null,
                        technos: [
                            "Java",
                            "SQL",
                            "Bash",
                            "HTML & CSS",
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

