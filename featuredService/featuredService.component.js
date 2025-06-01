angular.module('callforService').component('featuredPlaceholder',{
    templateUrl:'/featuredService/featuredService.template.html',
    controller: function controller($scope){
        $scope.featuredServiceList = [{
            id:'1',
            imageUrl:'/image/Electrician_resized.jpg',
            link: '#!/electricians',
            post:'Hire an Electrician',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
        {
            id:'2',
            imageUrl:'image/plumber_man.jpg',
            link: '#!/plumbercard',
            post:'Hire a Plumber',
            currentrating:'4.0',
            rating:'(0)',
            rate:'Rs.5500 / Hour',
            description:'Looking for Plumber in Birgunj?',
        },
        {
            id:'3',
            imageUrl:'image/it-man.jpg',
             link: '#!/it',
            post:'Hire an IT Support',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.6600 / Hour',
            description:'Looking for IT Support in Birgunj?',
        },
        {
            id:'4',
            imageUrl:'image/cleaning-service.jpeg',
             link: '#!/cleaning',
            post:'Hire a Cleaner',
            currentrating:'3.0',
            rating:'(0)',
            rate:'Rs.5500 / Hour',
            description:'Looking for Cleaner in Birgunj?',
        },
        {
            imageUrl:'/image/parlour.webp',
            post:'Hire a Palour ',
            currentrating:'2.0',
            rating:'(0)',
            rate:'Rs.4400 / Hour',
            description:'Looking for Parlour at home in Birgunj?',
        },
        {
            imageUrl:'image/cook.webp',
            post:'Hire a Cook',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.3700 / Hour',
            description:'Looking for Cook in Birgunj?',
        },
    ]
    } 
});

