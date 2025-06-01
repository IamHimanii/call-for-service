callforService.controller('ElectriciansCtrl', function ($scope, $window) {
  $scope.electricianList = [
    { Id: '1', imageUrl: 'image/electrician/button.webp', post: 'Install power socket', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Install power socket in Birgunj?', },
    { Id: '2', imageUrl: 'image/switch.webp', post: 'Power socket fitting', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Power socket fittingin Birgunj?', },
    { Id: '3', imageUrl: 'image/light.webp', post: 'Intall decorative light', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Intall decorative light in Birgunj?', },
    { Id: '4', imageUrl: 'image/tv.webp', post: 'television installation above 43"', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for television installation above 43" in Birgunj?', },
    { Id: '5', imageUrl: 'image/bulb.webp', post: 'New light point', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for New light point in Birgunj?', },
    { Id: '6', imageUrl: 'image/tubelight.webp', post: 'Install bulb or tube light', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Install bulb or tube light in Birgunj?', },
    { Id: '7', imageUrl: 'image/invertor.webp', post: 'inverter installation (12v)', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for inverter installation (12v) in Birgunj?', },
    { Id: '8', imageUrl: 'image/mcb.webp', post: 'TP MCB installation', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for TP MCB installation in Birgunj?', },
    { Id: '9', imageUrl: 'image/elec.webp', post: 'Hire electrical expert', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Hire electrical expert in Birgunj?', },
    { Id: '10', imageUrl: 'image/meter.webp', post: 'Energy meter installation', currentrating: '5.0', rating: '(0)', rate: 'Rs.7700 / Hour', description: 'Looking for Energy meter installation in Birgunj?', },
  ];
  // Store to localStorage
  $window.localStorage.setItem('electricianData', JSON.stringify($scope.electricianList));
  // Retrieve from localStorage (not required here since you just stored it, but okay if needed)
  $scope.electricianList = JSON.parse($window.localStorage.getItem('electricianData'));
});
//service detail controller of electrician card to provide services data and detail view functionality
callforService.controller('ServicedetailCtrl', function ($scope, $stateParams, $window) {
  $scope.electricianDetail = [
    {
      Id: '1',
      imageUrl: 'image/electrician/button.webp',
      post: 'Install power socket',
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
      imageUrl: 'image/switch.webp',
      post: 'Power socket fitting',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '3',
      imageUrl: 'image/light.webp',
      post: 'Intall decorative light',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
    dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '4',
      imageUrl: 'image/tv.webp',
      post: 'television installation above 43"',
     description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '5',
      imageUrl: 'image/bulb.webp',
      post: 'New light point',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '6',
      imageUrl: 'image/tubelight.webp',
      link: 'serviceProviderDetail.html',
      post: 'Install bulb or tube light',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '7',
      imageUrl: 'image/invertor.webp',
      link: 'serviceProviderDetail.html',
      post: 'inverter installation (12v)',
     description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '8',
      imageUrl: 'image/mcb.webp',
      link: 'serviceProviderDetail.html',
      post: 'TP MCB installation',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
     dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '9',
      imageUrl: 'image/elec.webp',
      link: 'serviceProviderDetail.html',
      post: 'Hire electrical expert',
    description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
     dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '10',
      imageUrl: 'image/meter.webp',
      link: 'serviceProviderDetail.html',
      post: 'Energy meter installation',
      description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
     dayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      dateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.electricianDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);

  $window.localStorage.setItem('electricianDetailData', JSON.stringify($scope.electricianList));
});