////ITcardCtrl controller to provide IT list
callforService.controller('ItCtrl', function ($scope) {
  $scope.supportList = [
    {
      Id: '1',
      imageUrl: 'image/itSupport/antivirus.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Anti-virus/malware protection',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '2',
      imageUrl: 'image/itSupport/hardware.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Hardware support',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',

    },
    {
      Id: '3',
      imageUrl: 'image/itSupport/software.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Software installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '4',
      imageUrl: 'image/itSupport/vpn.png',
      link: 'serviceProviderDetail.html',
      post: 'VPN Setup & Support',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '5',
      imageUrl: 'image/itSupport/mobile.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Mobile device support',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
  ];
});
//service detail controller of IT card to provide services data and detail view functionality
callforService.controller('ItServiceDetailCtrl', function ($scope, $stateParams) {
  $scope.supportDetail = [
    {
      Id: '1',
      imageUrl: 'image/itSupport/antivirus.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Anti-virus/malware protection',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 500.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '2',
      imageUrl: 'image/itSupport/hardware.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Hardware support',
     description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 500.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],

    },
    {
      Id: '3',
      imageUrl: 'image/itSupport/software.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Software installation',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 500.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '4',
      imageUrl: 'image/itSupport/vpn.png',
      link: 'serviceProviderDetail.html',
      post: 'VPN Setup & Support',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 500.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '5',
      imageUrl: 'image/itSupport/mobile.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Mobile device support',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 500.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.supportDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);
});