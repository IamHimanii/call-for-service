////ITcardCtrl controller to provide IT list
callforService.controller('ItCtrl', function ($scope) {
  $scope.supportList = [
    {
      Id: '1',
      ImageUrl: 'image/itSupport/antivirus.jpg',
      Post: 'Anti-virus/malware protection',
      currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',  
    },
    {
      Id: '2',
      ImageUrl: 'image/itSupport/hardware.jpg',
      Post: 'Hardware support',
      currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',

    },
    {
      Id: '3',
      ImageUrl: 'image/itSupport/software.jpg',
      Post: 'Software installation',
      currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '4',
      ImageUrl: 'image/itSupport/vpn.png',
      Post: 'VPN Setup & Support',
      currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
    {
      Id: '5',
      ImageUrl: 'image/itSupport/mobile.jpg',
      Post: 'Mobile device support',
      currentrating: '5.0',
      Rating: '(0)',
      Rate: 'Rs.7700 / Hour',
      Description: 'Looking for Electrician in Birgunj?',
    },
  ];
});
//service detail controller of IT card to provide services data and detail view functionality
callforService.controller('ItServiceDetailCtrl', function ($scope, $stateParams) {
  $scope.supportDetail = [
    {
      Id: '1',
      ImageUrl: 'image/itSupport/antivirus.jpg',
      Post: 'Anti-virus/malware protection',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '2',
      ImageUrl: 'image/itSupport/hardware.jpg',
      Post: 'Hardware support',
     Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],

    },
    {
      Id: '3',
      ImageUrl: 'image/itSupport/software.jpg',
      Post: 'Software installation',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '4',
      ImageUrl: 'image/itSupport/vpn.png',
      Post: 'VPN Setup & Support',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
    {
      Id: '5',
      ImageUrl: 'image/itSupport/mobile.jpg',
      Post: 'Mobile device support',
      Description: `Looking for an electrician in Kathmandu? Sajilo Sewa provides professional and affordable electrical services for homes and offices. 
        From wiring and electrical repairs to appliance installations and maintenance — we’ve got you covered.
        • Trusted and hassle-free electrician services near you  
        • Certified electricians available at your convenience  
        • Enjoy peace of mind with a 30-day service warranty`,
      Price: 'Rs. 500.00 / Hour',
      Pricedescription: `Searching for affordable electrician services near you? Sajilo Sewa has got you covered with certified electricians. 
          Rates start at Rs. 500 for 1 hour, Rs. 1,500 for 3 hours, and Rs. 2,500 for 8 hours.`,
       DayList: ['Sun 20', 'Mon 21 ', 'Tue 22', 'Wed 23', 'Thu 24', 'Fri 25'],
      DateList: ['3am-7pm', '2am-9pm', '3am-9pm', '8am-8pm' ],
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.supportDetail.find(x => x.Id == serviceId);
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