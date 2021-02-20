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
        ],
        mainBoxCar2:[
            {
                icon:'fab fa-google',
                title:'Google SEO',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro voluptatibus non! Quisquam quas libero doloribus laudantium vitae iure? Labore consequatur animi dolorum excepturi corrupti ratione hic quasi, aut quo.',
            },
            {
                icon:'fas fa-cog',
                title:'Brand Strategy',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro voluptatibus non! Quisquam quas libero doloribus laudantium vitae iure? Labore consequatur animi dolorum excepturi corrupti ratione hic quasi, aut quo.',
            },
            {
                icon:'fas fa-building',
                title:'Local SEO',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro voluptatibus non! Quisquam quas libero doloribus laudantium vitae iure? Labore consequatur animi dolorum excepturi corrupti ratione hic quasi, aut quo.',
            },
            {
                icon:'far fa-chart-bar',
                title:'SEO Analysis',
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque porro voluptatibus non! Quisquam quas libero doloribus laudantium vitae iure? Labore consequatur animi dolorum excepturi corrupti ratione hic quasi, aut quo.',
            },
        ],
        sliderOne:[
            {images:'case-study-gallery-3-1-600x450'},
            {images:'case-study-gallery-2-600x450'},
            {images:'case-study-gallery-1-1-600x450'},

        ],
        sliderTwo:[
            {images:'case-study-gallery-4-1-600x450'},
            {images:'case-study-gallery-5-1-600x450'},
            {images:'case-study-gallery-6-1-600x450'},


        ],
        cardsOurPlans:[
            {
                title:'Standard',
                price:'19',
                proj:'5 Project',
                storege:'5 GB Storage',
                UN:'Unlimited User'
            },
            {
                title:'Premiun',
                price:'29',
                proj:'10 Project',
                storege:'15 GB Storage',
                UN:'Unlimited User'
            },
            {
                title:'Professional',
                price:'39',
                proj:'15 Project',
                storege:'15 GB Storage',
                UN:'Unlimited User'
            },
            {
                title:'Extreme',
                price:'59',
                proj:'Unlimited  Project',
                storege:'Unlimited Storage',
                UN:'Unlimited User'
            },
        ]
    },
})//fine vue
console.log('tutto ok')
