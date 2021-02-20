// const { vue } = require("laravel-mix");

new Vue({
    el:'#app',
    data:{
        iconLogoNav:'logo_seo_w_1x',
        imgTestimonial:'testimonials-2',
        iconLogoFooter:'logo_seo_1x',
        linkNav:[
            'Home',
            'Who We Are',
            'What We Do',
            'Where We Work',
            'Careers',
            'APPLY',
            'News',
        ],
        footerLink:[
            'Home',
            'Who We Are',
            'What We Do',
            'Where We Work',
            'Careers',
            'News',
            'Get In Touch Now',
        ],

        copy:[
            'Copyright 2012 - 2020 |',
            'Avada Theme by ThemeFusion |',
            'All Right Reserved |',
            'Powered by WordPress',
        ],
        footerSocial:[
            {
                icon:'fab fa-facebook-f'
            },
            {
                icon:'fab fa-instagram'
            },
            {
                icon:'fab fa-twitter'
            },
            {
                icon:'fab fa-youtube'
            },
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
        ],
        cardsOurNews:[
           { 
            img:'related-service-2-700x441',
            title:'Why You Need A SEO Agency Now',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit, dolores vitae impedit nostrum illo cumque, adipisci veniam ut vero voluptas'
            },
            { 
             img:'related-service-4-700x441',
             title:'SEO Tips For Your Startup',
             text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit, dolores vitae impedit nostrum illo cumque, adipisci veniam ut vero voluptas'
            },
            { 
             img:'blog-post-6-700x441',
             title:'Image Optimization For Your Site',
             text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit, dolores vitae impedit nostrum illo cumque, adipisci veniam ut vero voluptas'    
             },
        ],
        mainTestimonialSlider:[
            {
                imgTestimonial:'clients_partner_5-200x202'
            },
            {
                imgTestimonial:'clients_partner_6-200x202'
            },
            {
                imgTestimonial:'clients_partner_1-200x202'
            },
            {
                imgTestimonial:'clients_partner_2-200x202'
            },
        ]
    },
})//fine vue
console.log('tutto ok')
