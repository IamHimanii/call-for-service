////PlumbercardCtrl controller to provide plumber list
callforService.controller('PlumbercardCtrl', function ($scope) {
  $scope.plumberList = [
    {
      Id: '1',
      ImageUrl: 'image/plumber/basin.avif',
      post: 'Wash basin installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '2',
      imageUrl: 'image/plumber/toilet-blockage.jpg',
      post: 'Toilet blockage',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',

    },
    {
      Id: '3',
      imageUrl: 'image/plumber/waste-pipe.jpg',
      post: 'Waste pipe leakage',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '4',
      imageUrl: 'image/plumber/commode.jpg',
      post: 'Commode leakage',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '5',
      imageUrl: 'image/plumber/urinal.jpg',
      post: 'Urinal installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '6',
      imageUrl: 'image/plumber/flush-tank.jpg',
      post: 'Flash tank repair',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '7',
      imageUrl: 'image/plumber/shower.jpg',
      post: 'Shower installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '8',
      imageUrl: 'image/plumber/geyser.jpg',
      post: 'Electrical geyger installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '9',
      imageUrl: 'image/plumber/plumber_man.jpg',
      post: 'Hire plumber expert',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '10',
      imageUrl: 'image/plumber/basin.webp',
      post: 'Basin installation',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
  ]
});
//service detail controller of plumber card to provide services data and detail view functionality
callforService.controller('PlumberServiceDetailCtrl', function ($scope, $stateParams) {
  $scope.plumberDetail = [
    {
      Id: '1',
      imageUrl: 'image/plumber/basin.avif',
      post: 'Wash basin installation',
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
      imageUrl: 'image/plumber/toilet-blockage.jpg',
      post: 'Toilet blockage',
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
      imageUrl: 'image/plumber/waste-pipe.jpg',
      post: 'Waste pipe leakage',
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
      imageUrl: 'image/plumber/commode.jpg',
      post: 'Commode leakage',
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
      imageUrl: 'image/plumber/urinal.jpg',
      post: 'Urinal installation',
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
      Id: '6',
      imageUrl: 'image/plumber/flush-tank.jpg',
      post: 'Flash tank repair',
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
      Id: '7',
      imageUrl: 'image/plumber/shower.jpg',
      post: 'Shower installation',
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
      Id: '8',
      imageUrl: 'image/plumber/geyser.jpg',
      post: 'Electrical geyger installation',
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
      Id: '9',
      imageUrl: 'image/plumber/plumber_man.jpg',
      post: 'Hire plumber expert',
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
      Id: '10',
      imageUrl: 'image/plumber/basin.webp',
      post: 'Basin installation',
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
  ]
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.plumberDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);
});