angular.module('callforService').component('popularPlaceholder',{
    templateUrl:'popularServices/popularServices.template.html',
    controller: function controller($scope){
        $scope.popularServiceList = [{
            imageUrl:'/image/Electrician_resized.jpg',
            link: 'serviceProviderDetail.html',
            post:'Hire an Electrician',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
        {
            imageUrl:'image/plumber_man.jpg',
            link:'cleaning.html',
            post:'Hire a Plumber',
            currentrating:'4.0',
            rating:'(0)',
            rate:'Rs.5500 / Hour',
            description:'Looking for Plumber in Birgunj?',
        },
        {
            imageUrl:'image/it-man.jpg',
            post:'Hire an IT Support',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.6600 / Hour',
            description:'Looking for IT Support in Birgunj?',
        },
        {
            imageUrl:'image/cleaning-service.jpeg',
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

