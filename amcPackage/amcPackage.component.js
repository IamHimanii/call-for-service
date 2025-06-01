angular.module('callforService').component('amcPlaceholder', {
    templateUrl:"amcPackage/amcPackage.template.html",
    controller: function Controller($scope) {
      $scope.amcList =[
        {
          Id:'1',
            imageUrl:'image/itSupport/antivirus.jpg',
            post:'AMC Packages',
        },
        {
          Id:'2',
            imageUrl:'image/itSupport/hardware.jpg',
            post:'Hardware support',
        },
        {
          Id:'3',
            imageUrl:'image/itSupport/software.jpg',
            post:'Software installation',
        },
        {
          Id:'4',
            imageUrl:'image/itSupport/vpn.png',
            post:'VPN Setup & Support',
        },
        {
          Id:'5',
            imageUrl:'image/itSupport/mobile.jpg',
            post:'Mobile device support',
        },
      ]
    }
  });
