callforService.controller('ElectriciansCtrl', function ($scope, $window) {
  $scope.electricianList = [
    { Id: '1', ImageUrl: 'image/electrician/button.webp', Post: 'Install power socket', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Install power socket in Birgunj?' },
    { Id: '2', ImageUrl: 'image/switch.webp', Post: 'Power socket fitting', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Power socket fittingin Birgunj?' },
    { Id: '3', ImageUrl: 'image/light.webp', Post: 'Intall decorative light', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Intall decorative light in Birgunj?' },
    { Id: '4', ImageUrl: 'image/tv.webp', Post: 'television installation above 43"', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for television installation above 43" in Birgunj?' },
    { Id: '5', ImageUrl: 'image/bulb.webp', Post: 'New light point', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for New light point in Birgunj?' },
    { Id: '6', ImageUrl: 'image/tubelight.webp', Post: 'Install bulb or tube light', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Install bulb or tube light in Birgunj?' },
    { Id: '7', ImageUrl: 'image/invertor.webp', Post: 'inverter installation (12v)', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for inverter installation (12v) in Birgunj?' },
    { Id: '8', ImageUrl: 'image/mcb.webp', Post: 'TP MCB installation', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for TP MCB installation in Birgunj?' },
    { Id: '9', ImageUrl: 'image/elec.webp', Post: 'Hire electrical expert', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Hire electrical expert in Birgunj?' },
    { Id: '10', ImageUrl: 'image/meter.webp', Post: 'Energy meter installation', Currentrating: '5.0', Rating: '(0)', Rate: 'Rs.7700 / Hour', Description: 'Looking for Energy meter installation in Birgunj?' }
  ];
});
//service detail controller of electrician card to provide services data and detail view functionality
callforService.controller('ServicedetailCtrl', function ($scope, $stateParams, $window) {
  $scope.electricianDetail = [
    {
      Id: '1',
      ImageUrl: 'image/electrician/button.webp',
      Post: 'Install power socket',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm', '2am-5pm', '6am-8pm', '2am-2pm'],
    },
    {
      Id: '2',
      ImageUrl: 'Image/switch.webp',
      Post: 'Power socket fitting',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '3',
      ImageUrl: 'Image/light.webp',
      Post: 'Intall decorative light',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '4',
      ImageUrl: 'Image/tv.webp',
      Post: 'television installation above 43"',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '5',
      ImageUrl: 'Image/bulb.webp',
      Post: 'New light point',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '6',
      ImageUrl: 'Image/tubelight.webp',
      Post: 'Install bulb or tube light',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '7',
      ImageUrl: 'image/invertor.webp',
      Post: 'inverter installation (12v)',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm', '5am-4pm', '3am-4pm', '4am-9pm'],
    },
    {
      Id: '8',
      ImageUrl: 'image/mcb.webp',
      Post: 'TP MCB installation',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '9',
      ImageUrl: 'image/elec.webp',
      Post: 'Hire electrical expert',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
    {
      Id: '10',
      ImageUrl: 'image/meter.webp',
      Post: 'Energy meter installation',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 6400.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
      DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm'],
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.electricianDetail.find(x => x.Id == serviceId);

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
      selectedDay: $scope.selectedDay, 
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
