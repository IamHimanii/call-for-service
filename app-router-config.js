
callforService.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
  // creating routes or states 
  $stateProvider
    .state('Home', {
      url: '/home',
      templateUrl: "home.html",
      controller: "HomeCtrl"
    })
    .state('Aboutus', {
      url: '/aboutus',
      templateUrl: "/aboutus.html",
      controller: "AboutCtrl"
    })
    .state('Profile', {   
      url: '/profile',
      templateUrl: "/profile.html",
      controller: "ProfileCtrl"
    })
    .state('Electricians', {
      url: '/electricians',
      templateUrl: "serviceProvider/serviceProviderElectrician.template.html",
      controller: "ElectriciansCtrl"
    })
    .state('Plumbercard', {
      url: '/plumbercard',
      templateUrl: "serviceProvider/serviceProviderPlumber.template.html",
      controller: "PlumbercardCtrl"
    })
    .state('Cleaning', {
      url: '/cleaning',
      templateUrl: "serviceProvider/serviceProviderCleaning.template.html",
      controller: "CleaningCtrl"
    })
    .state('It', {
      url: '/it',
      templateUrl: "serviceProvider/serviceProviderItSupport.template.html",
      controller: "ItCtrl"
    })
    .state('AmcPackage', {
      url: '/amcPackage',
      templateUrl: "amcPackage/amcPackage.template.html",
      controller: "AmcPackageCtrl"
    })
    .state('Contact', {
      url: '/contact',
      templateUrl: "contact.html",
      controller: "ContactCtrl"
    })
    .state('Faq', {
      url: '/faq',
      templateUrl: "faq.html",
      controller: "FaqCtrl"
    })
    .state('privacyPolicy', {
      url: '/privacy-policy',
      templateUrl: 'privacy-policy.html',
      controller: 'PrivacyPolicyCtrl'
    })
    .state('Team', {
      url: '/team',
      templateUrl: "team.html",
      controller: "TeamCtrl"
    })
     .state('requestForService', {
      url: '/request-for-service',
      templateUrl: 'request-for-service/request-for-service.template.html',
      controller: 'RequestForServiceCtrl'
    })
    .state('Customerreview', {
      url: '/customerreview',
      templateUrl: "customerreview.html",
      controller: "CustomerreviewCtrl"
    })
    .state('servicedetail', {
      url: '/servicedetail/:id',
      templateUrl: "servicedetail.html",
      controller: "ServicedetailCtrl"
    })
    .state('plumberServiceDetail', {
      url: '/plumberServiceDetail/:id',
      templateUrl: "plumberServiceDetail.html",
      controller: "PlumberServiceDetailCtrl"
    })
    .state('itServiceDetail', {
      url: '/itServiceDetail/:id',
      templateUrl: "itServiceDetail.html",
      controller: "ItServiceDetailCtrl"
    })
     .state('clearnerServiceDetail', {
      url: '/clearnerServiceDetail/:id',
      templateUrl: "clearnerServiceDetail.html",
      controller: "ClearnerServiceDetailCtrl"
    })
    .state('amcpackagedetail', {
      url: '/amcpackagedetail/:id',
      templateUrl: "amcpackagedetail.html",
      controller: "AmcpackagedetailCtrl"
    });
  // Redirect to home page if url does not  
  // matches any of the three mentioned above 
  $urlRouterProvider.otherwise("/home");
});