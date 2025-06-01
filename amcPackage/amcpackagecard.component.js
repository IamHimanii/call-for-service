angular.module('callforService').component('amccardPlaceholder', {
  templateUrl: "amcPackage/amcpackagecard.template.html",
  controller: function Controller($scope) {
    $scope.amccardheadList =[
      {
        imageUrl:'image/plumber/plumber_man.jpg',
        post:'Plumbing AMC Packages',
      }
    ]
    $scope.amccardList = [
      {
        id: '1',
        imageUrl: 'image/itSupport/antivirus.jpg',
         price:'3000',
            bullet1:'One Hour Response Time',
            bullet2:'One Routine Scheduled Visit',
            bullet3:'Three Emergency Visits',
            bullet4:'Expert Team',
      },
      {
        id: '2',
        imageUrl: 'image/itSupport/hardware.jpg',
            price:'2000',
            bullet1:'One Hour Response Time',
            bullet2:'One Routine Scheduled Visit',
            bullet3:'Three Emergency Visits',
            bullet4:'Expert Team'
      },
      {
        id: '3',
        imageUrl: 'image/itSupport/software.jpg',
            price:'3000',
            bullet1:'One Hour Response Time',
            bullet2:'One Routine Scheduled Visit',
            bullet3:'Three Emergency Visits',
            bullet4:'Expert Team'
      },
       {
        id: '4',
        imageUrl: 'image/itSupport/vpn.png',
            price:'3000',
            bullet1:'One Hour Response Time',
            bullet2:'One Routine Scheduled Visit',
            bullet3:'Three Emergency Visits',
            bullet4:'Expert Team'
      },
       {
        id: '5',
        imageUrl: 'image/itSupport/mobile.jpg',
            price:'3000',
            bullet1:'One Hour Response Time',
            bullet2:'One Routine Scheduled Visit',
            bullet3:'Three Emergency Visits',
            bullet4:'Expert Team'
      },
    ]
  }
});
