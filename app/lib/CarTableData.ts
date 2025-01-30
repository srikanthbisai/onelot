interface Car {
    title: string;
    price: string;
    description: string;
    details: string[];
    image: string;
  }
  
  export const carsData: Car[] = [
    {
      title: "Car Loan",
      price: "PHP 878,000",
      description: "2015 Toyota Camry 2.5V VVT-i Auto 40,001 – 50,000 km",
      details: [
        "1.5%/month Interest",
        "60 Days Financing Period",
        "70% Financing for vehicle purchase",
      ],
      image: "/car2.webp",
    },
    {
      title: "Car Loan",
      price: "PHP 1,000,000",
      description: "2020 Toyota Camry 2.5V VVT-i Auto 10,000 – 15,000 km",
      details: [
        "1.5%/month Interest",
        "60 Days Financing Period",
        "70% Financing for vehicle purchase",
      ],
      image: "/car2.webp",
    },
    {
      title: "Car Loan",
      price: "PHP 788,000",
      description: "2015 Toyota Camry 2.5V VVT-i Auto 40,001 – 50,000 km",
      details: [
        "1.5%/month Interest",
        "60 Days Financing Period",
        "70% Financing for vehicle purchase",
      ],
      image: "/car2.webp",
    },
  ];
  
  export const imagesRow: string[] = [
    "/car2.webp",
    "/car2.webp",
    "/car2.webp",
  ];