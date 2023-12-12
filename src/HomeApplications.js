import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const HomeApplications = () => {
  const HomeApplicationsList = [
    {
      imgSrc: "./assets/productGrid/HomeAppliances/2.jpg",
      heading: `OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)|Display : Bezel-less Design | Decoding of HDR10+ HDR10, HLG | 1 billion colors | Gamma Engine with MEMC`,
      rating: 4,
      finalPrice: "24,999",
      mrp: "39,999",
      offerPercent: "38",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/1.jpg",
      heading: `Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black)|Display: 4K LED Panel | Dolby Vision | HDR10 | HLG | Reality Flow | Vivid Picture Engine | MEMC`,
      rating: 4,
      finalPrice: "22,999",
      mrp: "42,999",
      offerPercent: "47",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/3.jpg",
      heading: `VW 109 cm (43 inches) Linux Series Frameless Full HD Smart LED TV VW43S1 (Black)|Display: A+ Grade Panel | IPE Technology | True Colour | Frameless Design`,
      rating: 4,
      finalPrice: "13,499",
      mrp: "28,999",
      offerPercent: "48",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/4.jpg",
      heading: `Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)|Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)`,
      rating: 4,
      finalPrice: "39,999",
      mrp: "69,999",
      offerPercent: "44",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/5.webp",
      heading: `Panasonic 1.5 Ton 3 Star Split AC (Copper Condenser, 7 in 1 Convertible Mode, PM 0.1 Air Purification Filter, CS/CU-SU18YKYTK,2023 Model, White)`,
      rating: 4,
      finalPrice: "34,559",
      mrp: "53,999",
      offerPercent: "36",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/6.webp",
      heading: `Hindware Smart Appliances Nadia IN 60 cm 1350 m³/hr Stylish Filterless Auto-Clean Kitchen Chimney With Metallic Oil Collector, Motion Sensor & Touch Control For Easy Operation (Curved Glass, Black)`,
      rating: 4,
      finalPrice: "12,999",
      mrp: "27,599",
      offerPercent: "54",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/7.webp",
      heading: `Hindware Smart Appliances Skyla Neo 60 Cm kitchen chimney comes with Autoclean technology and maximum suction power 1350 m3/hr having filterless and motion sensor technology (Black, 60cm)`,
      rating: 4,
      finalPrice: "16,499",
      mrp: "32,499",
      offerPercent: "51",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/8.webp",
      heading: `Samsung 7 kg Fully-Automatic Top Loading Washing Machine (WA70A4002GS/TL, Imperial Silver, Diamond drum)`,
      rating: 4,
      finalPrice: "15,399",
      mrp: "21,799",
      offerPercent: "26",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/9.webp",
      heading: `Samsung 28L, Convection Microwave Oven with Curd Making(MC28A5013AK/TL, Black, Best Diwali Gift, 10 Yr warranty)`,
      rating: 4,
      finalPrice: "10,299",
      mrp: "15,999",
      offerPercent: "31",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/10.webp",
      heading: `LG 7 Kg 5 Star Inverter Touch panel Fully-Automatic Front Load Washing Machine with In-Built Heater (FHM1207SDM, Middle Black, Steam for Hygiene Wash), Free 1 Year Extended warranty`,
      rating: 4,
      finalPrice: "27,999",
      mrp: "43,599",
      offerPercent: "36",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/11.webp",
      heading: `Cruise 1.5 Ton 3 Star Inverter Split AC with 7-Stage Air Filtration (100% Copper, Convertible 4-in-1, PM 2.5 Filter, 2023 Model, CWCVBH-VQ1W183, White)`,
      rating: 4,
      finalPrice: "29,900",
      mrp: "52,999",
      offerPercent: "43",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/12.webp",
      heading: `Samsung 189 L, 5 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR21C2H25CR/HL, Camellia Purple, Base Stand Drawer, 2023 Model)`,
      rating: 4,
      finalPrice: "17,499",
      mrp: "24,999",
      offerPercent: "30",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/13.webp",
      heading: `Haier 190 L 4 Star Direct Cool Single Door Refrigerator Appliance (2023 Model, HED-204DS-P, Dazzle Steel)`,
      rating: 4,
      finalPrice: "14,599",
      mrp: "19,999",
      offerPercent: "31",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/14.webp",
      heading: `Samsung 183 L, 3 Star, Digital Inverter, Direct-Cool Single Door Refrigerator (RR20C1723S8/HL, Silver, Elegant Inox, 2023 Model)`,
      rating: 4,
      finalPrice: "14,599",
      mrp: "18,999",
      offerPercent: "24",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/15.webp",
      heading: `Godrej 180 L 4 Star Turbo Cooling Technology, With 24 Days Farm Freshness Direct Cool Single Door Refrigerator(2023 Model, RD EDGENEO 207D THF AQ BL, Aqua Blue)`,
      rating: 4,
      finalPrice: "14,259",
      mrp: "18,999",
      offerPercent: "25",
      productsPath: "HomeAppliances",
    },
    {
      imgSrc: "./assets/productGrid/HomeAppliances/16.webp",
      heading: `Bosch 8 kg 5 Star Fully-Automatic Front Loading Washing Machine (WAJ28262IN, Silver, AI active water plus, In-Built Heater)`,
      rating: 4,
      finalPrice: "34,999",
      mrp: "58,899",
      offerPercent: "40",
      productsPath: "HomeAppliances",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={HomeApplicationsList} />
      <Footer backToTop={"/HomeAppliances"} />
    </>
  );
};

export default HomeApplications;
