import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";

const Mobile = () => {
  const mobileList = [
    {
      imgSrc: "./assets/productGrid/mobiles/1.webp",
      heading:
        "OnePlus 11 5G (Titan Black, 16GB RAM, 256GB Storage)|Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming",
      rating: 5,
      finalPrice: "58,900",
      productsPath: "Mobiles",
      mrp: "62,999",
      offerPercent: "5",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/2.webp",
      heading:
        "itel S23+| 3D Curved Amoled Display| 16GB* RAM+256GB ROM| in-Display Fingerprint| 50MP AI Dual Rear + 32MP Front Camera| 5000mAh Battery| 2 Years Warranty| Lake Cyan",
      rating: 4,
      finalPrice: "13,999",
      productsPath: "Mobiles",
      mrp: "15,999",
      offerPercent: "13",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/3.webp",
      heading:
        "Redmi A2 (Sea Green, 2GB RAM, 64GB Storage)|Display: Large 16.5 cm HD+ display with Scratch resistant glass | 400nits peak brightness | 120Hz Touch sampling Rate",
      rating: 4,
      finalPrice: "5,300",
      productsPath: "Mobiles",
      mrp: "9,999",
      offerPercent: "47",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/4.webp",
      heading:
        "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
      rating: 4,
      finalPrice: "6,528",
      productsPath: "Mobiles",
      mrp: "11,999",
      offerPercent: "46",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/5.webp",
      heading:
        "realme narzo 60X 5G(Nebula Purple 6GB,128GB Storage) Up to 2TB External Memory | 50 MP AI Primary Camera | Segments only 33W Supervooc Charge",
      rating: 5,
      finalPrice: "12,999",
      productsPath: "Mobiles",
      mrp: "15,999",
      offerPercent: "19",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/6.webp",
      heading:
        "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 Octa-core Processor | 5000 mAh Battery | 13MP Dual Camera",
      rating: 3,
      finalPrice: "6,528",
      productsPath: "Mobiles",
      mrp: "11,999",
      offerPercent: "48",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/7.webp",
      heading:
        "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus|Android 12,One UI Core 4 with a powerful Octa Core Processor",
      rating: 4,
      finalPrice: "9,220",
      productsPath: "Mobiles",
      mrp: "14,999",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/8.webp",
      heading:
        "realme narzo N53 (Feather Black, 6GB+128GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display|Capture stunning, detailed photos with the high-resolution 50MP AI camera",
      rating: 4,
      finalPrice: "9,499",
      productsPath: "Mobiles",
      mrp: "12,999",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/9.webp",
      heading:
        "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus|50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam",
      rating: 4,
      finalPrice: "9,220",
      productsPath: "Mobiles",
      mrp: "14,999",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/10.webp",
      heading:
        "Samsung Galaxy M14 5G (Smoky Teal,6GB,128GB)|50MP Triple Cam|Segment's Only 6000 mAh 5G SP|5nm Processor|2 Gen. OS Upgrade & 4 Year Security Update|12GB RAM with RAM Plus",
      rating: 4,
      finalPrice: "13,999",
      productsPath: "Mobiles",
      mrp: "18,999",
      offerPercent: "31",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/11.webp",
      heading:
        "TECNO Pova 5 Pro 5G (Dark Illusion, 8GB RAM,256GB Storage)| Segment 1st 68W Ultra Fast Charging | India's 1st Multi-Colored Backlit ARC Interface | 50MP AI Dual Camera | 6.78”FHD+ Dot-in Display",
      rating: 4,
      finalPrice: "15,999",
      productsPath: "Mobiles",
      mrp: "16,999",
      offerPercent: "6",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/12.webp",
      heading:
        "Oneplus Open (Emerald Dusk, 16GB RAM, 512GB Storage)|OxygenOS 13.2: Game-changing multitasking you’ll finally love using. Dual split screen and fast focus Drag and drop sharing Triple split-screen",
      rating: 4,
      finalPrice: "1,35,999",
      productsPath: "Mobiles",
      mrp: "1,39,999",
      offerPercent: "3",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/13.webp",
      heading:
        "realme 11 5G (Glory Gold, 8GB RAM, 256GB Storage) | Dynamic Ultra Smooth Display | Up to 8GB+8GB Dynamic RAM | 108MP 3× Zoom | 16MP Selfie Camera | Dimensity 6100+ 5G Processor | 67W SUPERVOOC Charge",
      rating: 4,
      finalPrice: "18,020",
      productsPath: "Mobiles",
      mrp: "22,999",
      offerPercent: "22",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/14.webp",
      heading:
        "realme narzo N53 (Feather Black, 4GB+64GB) 33W Segment Fastest Charging | Slimmest Phone in Segment | 90 Hz Smooth Display",
      rating: 4,
      finalPrice: "7,999",
      productsPath: "Mobiles",
      mrp: "11,999",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/15.webp",
      heading:
        "Redmi 12C (Matte Black, 4GB RAM, 128GB Storage)| 50MP f/1.8 AI Dual camera with Portrait mode & Night Mode | 5MP Selfie camera Large 17cm HD+ display with Scratch resistant Glass and Oleophobic coating ",
      rating: 4,
      finalPrice: "8,299",
      productsPath: "Mobiles",
      mrp: "14,999",
      offerPercent: "45",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/16.webp",
      heading:
        "Samsung Galaxy S21 FE 5G (Olive, 8GB, 128GB Storage)|5G Ready with Octa-core Exynos 2100 (5nm) Processor. Android 12 operating system. Dual Sim.",
      rating: 5,
      finalPrice: "34,349",
      productsPath: "Mobiles",
      mrp: "74,999",
      offerPercent: "54",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/17.webp",
      heading:
        "itel P55 5G | Dimensity 6080 | 12GB* RAM+128GB ROM with Memory Fusion| 50MP AI Dual Rear Camera| 5000mAh Battery | 2 Years Warranty | Galaxy Blue",
      rating: 3,
      finalPrice: "9,999",
      productsPath: "Mobiles",
      mrp: "13,499",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/18.webp",
      heading:
        "HONOR 90 (Midnight Black, 12GB + 512GB) | India's First Eye Risk-Free Display | 200MP Main & 50MP Selfie Camera | Segment First Quad-Curved AMOLED Screen | Without Charger",
      rating: 4,
      finalPrice: "33,999",
      productsPath: "Mobiles",
      mrp: "49,999",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/19.webp",
      heading:
        "iPhone 13 (128GB) - Midnight|15 cm (6.1-inch) Super Retina XDR display|A15 Bionic chip for lightning-fast performance|Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
      rating: 4,
      finalPrice: "50499",
      productsPath: "Mobiles",
      mrp: "69900",
      offerPercent: "28",
    },
    {
      imgSrc: "./assets/productGrid/mobiles/20.webp",
      heading:
        "iPhone 15 (128 GB) - Blue|POWERHOUSE A16 BIONIC CHIP — The superfast chip|NEXT-GENERATION PORTRAITS — Capture portraits with dramatically more detail and color",
      rating: 5,
      finalPrice: "75999",
      productsPath: "Mobiles",
      mrp: "79999",
      offerPercent: "5",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={mobileList} />
      <Footer backToTop={"/mobiles"} />
    </>
  );
};

export default Mobile;
