callforService.controller('CleaningCtrl', function ($scope) {
  $scope.cleanerList = [
    {
      Id: '1',
      imageUrl: 'image/cleaning/office-cleaning.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Office cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '2',
      imageUrl: 'image/cleaning/house-cleaning.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Regular/Standard Home Cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '3',
      imageUrl: 'image/cleaning/window.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Window Cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '4',
      imageUrl: 'image/cleaning/carpet.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Carpet cleaning"',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '5',
      imageUrl: 'image/cleaning/bathroom.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Bathroom Cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '6',
      imageUrl: 'image/cleaning/kitchen.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Kitchen cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '7',
      imageUrl: 'image/cleaning/hospital.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Hospital cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '8',
      imageUrl: 'image/cleaning/school.jpg',
      link: 'serviceProviderDetail.html',
      post: 'School cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '9',
      imageUrl: 'image/cleaning/floor.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Floor Stripping and Waxing',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '10',
      imageUrl: 'image/cleaning/appliance.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Appliance cleaning',
      currentrating: '5.0',
      rating: '(0)',
      rate: 'Rs.7700 / Hour',
      description: 'Looking for Electrician in Birgunj?',
    },
  ];
});
//service detail controller of IT card to provide services data and detail view functionality
callforService.controller('ClearnerServiceDetailCtrl', function ($scope, $stateParams) {
  $scope.cleanerDetail = [
    {
      Id: '1',
      imageUrl: 'image/cleaning/office-cleaning.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Office cleaning',
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
      Id: '2',
      imageUrl: 'image/cleaning/house-cleaning.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Regular/Standard Home Cleaning',
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
      imageUrl: 'image/cleaning/window.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Window Cleaning',
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
      imageUrl: 'image/cleaning/carpet.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Carpet cleaning"',
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
      imageUrl: 'image/cleaning/bathroom.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Bathroom Cleaning',
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
      imageUrl: 'image/cleaning/kitchen.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Kitchen cleaning',
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
      imageUrl: 'image/cleaning/hospital.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Hospital cleaning',
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
      imageUrl: 'image/cleaning/school.jpg',
      link: 'serviceProviderDetail.html',
      post: 'School cleaning',
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
      imageUrl: 'image/cleaning/floor.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Floor Stripping and Waxing',
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
      imageUrl: 'image/cleaning/appliance.jpg',
      link: 'serviceProviderDetail.html',
      post: 'Appliance cleaning',
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
  $scope.serviceDetail = $scope.cleanerDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);
});