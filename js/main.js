// const { vue } = require("laravel-mix");

new Vue({
    el:'#app',
    data:{
        iconLogoNav:'logo_seo_w_1x',
        linkNav:[
            'Home',
            'Who We Are',
            'What We Do',
            'Where We Work',
            'Careers',
            'APPLY',
            'News',
        ],
        mainMiniBox:[
            {
                icon:'fas fa-road',
                title:'Establish Goals',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at impedit ipsa dolor accusamus!',
            },
            {
                icon:'fas fa-video',
                title:'Work With a Team',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at impedit ipsa dolor accusamus!',
            },
            {
                icon:'fas fa-tint',
                title:'Get Result',
                text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis at impedit ipsa dolor accusamus!',
            }
        ]
    },
})//fine vue
console.log('tutto ok')
