var app = new Vue({
    el: "#app",
    data: {
        projects: [/*{
            name: "GAW #1",
            description: "",
            takeaways: [],
            video: ""
        }*/],
        workExperience: [{
            function: "Coding/Finetuning - Monobanda",
            date: "oct 2020",
            description: "Created game mechanics and assisted with implementing existing game mechanics for an interactive VR story",
            link: "http://monobanda.eu/",
            additionalLink: "https://heartwire.org/the-shape-of-us/"
        },{
            function: "Game programmer / co-founder - Ember Glitch",
            date: "oct 2017 - present",
            description: "I work on our own projects as the lead programmer and as a freelance gameplay programmer on various projects",
            link: "https://emberglitch.com"
        }, {
            function: "Game programmer - Monobanda",
            date: "dec 2017 - apr 2018",
            description: "worked as Game programmer on Timbre in de klas. My function was to create the main loop and gameplay mechanics",
            link: "http://monobanda.eu/project/timbreclass"
        }, {
            function: "Game programmer - Monobanda-PLAY",
            date: "dec 2016 - jun 2017",
            description: "worked on Timbre VR, I researched possible interaction with voice control",
            link: "http://monobanda.eu/project/timbre"
        }, {
            function: "(Intership) game programmer - Monobanda-PLAY",
            date: "sept 2016 - dec 2016",
            description: "during my interschip I worked on Weltatem VR as Gameplay programmer",
            link: "http://www.weltatem.eu"
        }, {
            function: "(Intership) game programmer - Hibernate studios",
            date: "feb 2016 - jun 2016",
            description: "during my interschip I worked on Rumble Run's UI and server backend",
            link: "https://hibernatestudios.com"
        }],
        skills: {
            languages: [{
                    icon: "devicon-csharp-plain",
                    skill: "advanced",
                    name: "C#"
                },{
                    icon: "devicon-cplusplus-plain",
                    skill: "intermidiate",
                    name: "C++"
                },{
                    icon: "devicon-javascript-plain",
                    skill: "intermidiate",
                    name: "Javascript"
                },{
                    icon: "devicon-html5-plain",
                    skill: "advanced",
                    name: "HTML5"
                },{
                    icon: "devicon-css3-plain",
                    skill: "advanced",
                    name: "CSS3"
                },{
                    icon: "devicon-python-plain",
                    skill: "intermidiate",
                    name: "Python"
                },{
                    icon: "devicon-php-plain",
                    skill: "intermidiate",
                    name: "PHP"
                },{
                    icon: "devicon-less-plain-wordmark",
                    skill: "advanced",
                    name: "LESS"
                },{
                    icon: "icon-shaders",
                    skill: "intermidiate",
                    name: "Shaders"
                },{
                    icon: "icon-lua",
                    skill: "intermidiate",
                    name: "Lua"
                }
            ],
            tools: [{
                    icon: "devicon-django-plain",
                    skill: "intermidiate",
                    name: "Django"
                },{
                    icon: "devicon-git-plain",
                    skill: "intermidiate",
                    name: "Git"
                },{
                    icon: "devicon-dot-net-plain",
                    skill: "intermidiate",
                    name: "Dot-net"
                },{
                    icon: "devicon-visualstudio-plain",
                    skill: "intermidiate",
                    name: "Visualstudio"
                },{
                    icon: "devicon-vuejs-plain",
                    skill: "beginner",
                    name: "Vuejs"
                },{
                    icon: "devicon-mongodb-plain",
                    skill: "intermidiate",
                    name: "Mongodb"
                },{
                    icon: "icons8-unreal-engine",
                    skill: "beginner",
                    name: "Unreal"
                },{
                    icon: "icon8-unity3d",
                    skill: "advanced",
                    name: "Unity3D"
                },{
                    icon: "icon-blender",
                    skill: "beginner",
                    name: "Blender"
                },{
                    icon: "devicon-trello-plain",
                    name: "Trello"
                },{
                    icon: "devicon-slack-plain",
                    name: "Slack"
                },
                
            ],
        }
    }
});