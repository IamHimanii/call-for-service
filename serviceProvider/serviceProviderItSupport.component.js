angular.module('callforService').component('supportPlaceholder', {
    templateUrl:"serviceProvider/serviceProviderItSupport.template.html",
    controller: function Controller($scope) {
      
      $scope.supportList =[
        {
          Id:'1',
            imageUrl:'image/itSupport/antivirus.jpg',
            link: 'serviceProviderDetail.html',
            post:'Anti-virus/malware protection',
            currentrating:'5.0',  
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
        {
          Id:'2',
            imageUrl:'image/itSupport/hardware.jpg',
            link: 'serviceProviderDetail.html',
            post:'Hardware support',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        
        },
        {
          Id:'3',
            imageUrl:'image/itSupport/software.jpg',
            link: 'serviceProviderDetail.html',
            post:'Software installation',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
        {
          Id:'4',
            imageUrl:'image/itSupport/vpn.png',
            link: 'serviceProviderDetail.html',
            post:'VPN Setup & Support',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
        {
          Id:'5',
            imageUrl:'image/itSupport/mobile.jpg',
            link: 'serviceProviderDetail.html',
            post:'Mobile device support',
            currentrating:'5.0',
            rating:'(0)',
            rate:'Rs.7700 / Hour',
            description:'Looking for Electrician in Birgunj?',
        },
      ];
      
    }
  });
