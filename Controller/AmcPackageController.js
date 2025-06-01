callforService.controller('AmcPackageCtrl', function ($scope) {
  $scope.amcList = [
    {
      Id: '1',
      imageUrl: 'image/itSupport/antivirus.jpg',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.'
    },
    {
      Id: '2',
      imageUrl: 'image/itSupport/hardware.jpg',
      post: 'Hardware support',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.'

    },
    {
      Id: '3',
      imageUrl: 'image/itSupport/software.jpg',
      post: 'Software installation',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.'

    },
    {
      Id: '4',
      imageUrl: 'image/itSupport/vpn.png',
      post: 'VPN Setup & Support',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.'

    },
    {
      Id: '5',
      imageUrl: 'image/itSupport/mobile.jpg',
      post: 'Mobile device support',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.'

    },
  ];
});
//service detail controller of IT card to provide services data and detail view functionality
callforService.controller('AmcpackagedetailCtrl', function ($scope, $stateParams) {
  $scope.amcDetail = [
    {
      Id: '1',
      imageUrl: 'image/itSupport/antivirus.jpg',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.',
      amcList: [
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Himani Package',
          price: '2,000',
          bullets: [
            'One Hour Tution FOr student',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
      ]
    },
    {
      Id: '2',
      imageUrl: 'image/itSupport/hardware.jpg',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.',
      amcList: [
        {
          name: 'Safe Package',
          price: '3,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Himani Package',
          price: '3,000',
          bullets: [
            'One Hour Tution FOr student',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '3,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '3,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
      ]
    },
    {
      Id: '3',
      imageUrl: 'image/itSupport/software.jpg',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.',
      amcList: [
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Himani Package',
          price: '2,000',
          bullets: [
            'One Hour Tution FOr student',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
      ]
    },
    {
      Id: '4',
      imageUrl: 'image/itSupport/vpn.png',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.',
      amcList: [
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Himani Package',
          price: '2,000',
          bullets: [
            'One Hour Tution FOr student',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
      ]
    },
    {
      Id: '5',
      imageUrl: 'image/itSupport/mobile.jpg',
      post: 'AMC Packages',
      description: 'These service packages are thoughtfully designed to ensure that facilities remain operational, well-maintained, and secure. By minimizing downtime and providing prompt, reliable support, they offer peace of mind through comprehensive service coverage and timely responses. Each package is tailored to deliver optimal maintenance and emergency support, offering varying levels of service, benefits, and reporting frequencies to meet the unique needs of different types of facilities. Whether you\'re managing a restaurant, hotel, IT company, NGO, INGO, manufacturing unit, small business, or corporate office, these packages provide a reliable solution for plumbing maintenance and emergency response. The Safe, Secured, and Settled packages cater to different budget levels and service requirements—ranging from basic repair services to extensive installations and monthly maintenance. Key features include significant staff discounts, comprehensive database checklists, and detailed service and maintenance reports. These packages are meticulously crafted to support the seamless operation of your business, allowing you to focus on delivering exceptional service to your customers while we take care of your facility’s plumbing needs.',
      amcList: [
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Himani Package',
          price: '2,000',
          bullets: [
            'One Hour Tution FOr student',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
        {
          name: 'Safe Package',
          price: '2,000',
          bullets: [
            'One Hour Response Time',
            'One Routine Scheduled Visit',
            'Three Emergency Visits',
            'Expert Team'
          ]
        },
      ]
    },
  ];
  const serviceId = $stateParams.id;
  $scope.serviceDetail = $scope.amcDetail.find(x => x.Id == serviceId);
  console.log($scope.serviceDetail);
});
