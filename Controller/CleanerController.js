callforService.controller('CleaningCtrl', function ($scope) {
  $scope.cleanerList = [
    {
      Id: '1',
      ImageUrl: 'image/cleaning/office-cleaning.jpg',
      Post: 'Office cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '2',
       ImageUrl: 'image/cleaning/house-cleaning.jpg',
      Post: 'Regular/Standard Home Cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '3',
       ImageUrl: 'image/cleaning/window.jpg',
      Post: 'Window Cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '4',
       ImageUrl: 'image/cleaning/carpet.jpg',
      Post: 'Carpet cleaning"',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '5',
       ImageUrl: 'image/cleaning/bathroom.jpg',
      Post: 'Bathroom Cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '6',
       ImageUrl: 'image/cleaning/kitchen.jpg',
      Post: 'Kitchen cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '7',
        ImageUrl: 'image/cleaning/hospital.jpg',
      Post: 'Hospital cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '8',
       ImageUrl: 'image/cleaning/school.jpg',
      Post: 'School cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '9',
       ImageUrl: 'image/cleaning/floor.jpg',
      Post: 'Floor Stripping and Waxing',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '10',
       ImageUrl: 'image/cleaning/appliance.jpg',
      Post: 'Appliance cleaning',
      Currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
  ];
});
//service detail controller of IT card to provide services data and detail view functionality
callforService.controller('ClearnerServiceDetailCtrl', function ($scope, $stateParams) {
  $scope.cleanerDetail = [
    {
      Id: '1',
       ImageUrl: 'image/cleaning/office-cleaning.jpg',
      Post: 'Office cleaning',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '2',
       ImageUrl: 'image/cleaning/house-cleaning.jpg',
      Post: 'Regular/Standard Home Cleaning',
     Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '3',
       ImageUrl: 'image/cleaning/window.jpg',
      Post: 'Window Cleaning',
     Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '4',
       ImageUrl: 'image/cleaning/carpet.jpg',
      Post: 'Carpet cleaning"',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '5',
       ImageUrl: 'image/cleaning/bathroom.jpg',
      Post: 'Bathroom Cleaning',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '6',
       ImageUrl: 'image/cleaning/kitchen.jpg',
      Post: 'Kitchen cleaning',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '7',
       ImageUrl: 'image/cleaning/hospital.jpg',
      Post: 'Hospital cleaning',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '8',
       ImageUrl: 'image/cleaning/school.jpg',
      Post: 'School cleaning',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '9',
       ImageUrl: 'image/cleaning/floor.jpg',
      Post: 'Floor Stripping and Waxing',
     Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '10',
       ImageUrl: 'image/cleaning/appliance.jpg',
      Post: 'Appliance cleaning',
     Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.cleanerDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);
  //local storage
  function checkIfAddedToCart(serviceId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.some(x => x.id === serviceId);
  }
  $scope.isAddedToCart = checkIfAddedToCart($scope.serviceDetail.Id);
  $scope.addToCart = function (service) {
    const quantity = $scope.quantity || 1;
    const productToAdd = {
      id: service.Id,
      ImageUrl: service.ImageUrl, 
      Post: service.Post,
      Description: service.Description,
      Price: service.Price,
      quantity: quantity,
      DayList: service.DayList,
      // selectedDay: $scope.selectedDay, 
      DateList: service.DateList
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === productToAdd.id);
    if (index !== -1) {
      cart[index].quantity += quantity;
     cart[index].selectedDay = $scope.selectedDay;  // Update selected day
    } else {
      cart.push(productToAdd);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to Cart ! ')

    $scope.isAddedToCart = true;
  };
});  