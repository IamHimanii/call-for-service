// callforService.controller('seviceDetailController', function () {
//   this.providerDetailList = [
//     {
//       id: '1',
//       image: 'image/electrician/button.webp',
//       heading: 'Plumbing: Tap Installation',
//       detail: 'Searching for affordable electrician services near you? Call For Service has got you covered with certified electricians. Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours and Rs. 2,500 for 8 hours.',
//       rating: '5.0',
//       Rs: 'Rs. 500.00 / Hour',
//       p: 'Looking for electrician in Kathmandu? Call For Service provides professional and affordable electrical services for homes and offices. From wiring and electrical repairs to appliance installations and maintenance, we’ve got you covered. Book now for trusted and hassle-free electrician services near me. - Enjoy peace of mind with a 30-day service warranty - Our certified electricians are ready to assist you at your convenience',
//       rate: '',
//     }
//   ];
// });
angular.module('callforService').component('servicedetailPlaceholder', {
  templateUrl: 'serviceDetail/serviceDetail.template.html',
  controller: function () {
    $scope.providerDetailList = [
      {
        Id: '1',
        imageUrl: 'image/electrician/button.webp',
        heading: 'Plumbing: Tap Installation',
        detail: 'Searching for affordable electrician services near you? Call For Service has got you covered with certified electricians. Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours and Rs. 2,500 for 8 hours.',
        rating: '5.0',
        Rs: 'Rs. 500.00 / Hour',
        p: 'Looking for electrician in Kathmandu? Call For Service provides professional and affordable electrical services for homes and offices. From wiring and electrical repairs to appliance installations and maintenance, we’ve got you covered. Book now for trusted and hassle-free electrician services near me. - Enjoy peace of mind with a 30-day service warranty - Our certified electricians are ready to assist you at your convenience',
        rate: '',
      },
      {
        Id: '2',
        imageUrl: 'image/switch.webp',
        heading: 'Plumbing: Tap Installation',
        detail: 'Searching for affordable electrician services near you? Call For Service has got you covered with certified electricians. Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours and Rs. 2,500 for 8 hours.',
        rating: '5.0',
        Rs: 'Rs. 500.00 / Hour',
        p: 'Looking for electrician in Kathmandu? Call For Service provides professional and affordable electrical services for homes and offices. From wiring and electrical repairs to appliance installations and maintenance, we’ve got you covered. Book now for trusted and hassle-free electrician services near me. - Enjoy peace of mind with a 30-day service warranty - Our certified electricians are ready to assist you at your convenience',
        rate: '',
      },
      {
        Id: '3',
        imageUrl: 'image/light.webp',
        heading: 'Plumbing: Tap Installation',
        detail: 'Searching for affordable electrician services near you? Call For Service has got you covered with certified electricians. Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours and Rs. 2,500 for 8 hours.',
        rating: '5.0',
        Rs: 'Rs. 500.00 / Hour',
        p: 'Looking for electrician in Kathmandu? Call For Service provides professional and affordable electrical services for homes and offices. From wiring and electrical repairs to appliance installations and maintenance, we’ve got you covered. Book now for trusted and hassle-free electrician services near me. - Enjoy peace of mind with a 30-day service warranty - Our certified electricians are ready to assist you at your convenience',
        rate: '',
      },
      
    ];
  }
});