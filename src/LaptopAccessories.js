import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const LaptopAccessories = () => {
  const Accessorieslist = [
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/1.webp",
      heading: `Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver, Optical Tracking, 12-Months Battery Life, Ambidextrous, PC/Mac/Laptop - Black`,
      rating: 4,
      finalPrice: "499",
      mrp: "845",
      offerPercent: "45",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/2.webp",
      heading: `Ant Esports MK1400 Pro Backlit Membrane Wired Gaming Keyboard with Mixed Colour Lighting, White & Black Keycaps, Double Injection Key Caps - Black`,
      rating: 4,
      finalPrice: "489",
      mrp: "999",
      offerPercent: "51",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/3.webp",
      heading: `Dell MS116 Wired Optical Mouse, 1000Dpi, Led Tracking, Scrolling Wheel, Plug and Play`,
      rating: 4,
      finalPrice: "269",
      mrp: "650",
      offerPercent: "59",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/4.webp",
      heading: `HP M120 Wireless Mouse, USB-A Nano dongle, 2.4 GHz Wireless Connection, 6 Buttons, Up to 1600 dpi, Optical Sensor, Ergonomic Design, 12-Month Battery Life, 3-Year Warranty, 60g±5%, Black, 7J4G4AA`,
      rating: 4,
      finalPrice: "429",
      mrp: "999",
      offerPercent: "57",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/5.webp",
      heading: `STRIFF Adjustable Laptop Tabletop Stand Patented Riser Ventilated Portable Foldable Compatible with MacBook Notebook Tablet Tray Desk Table Book with Free Phone Stand (Black)`,
      rating: 4,
      finalPrice: "255",
      mrp: "1,499",
      offerPercent: "83",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/6.webp",
      heading: `Gizga Essentials Laptop Bag Sleeve Case Cover Pouch for 15.6 Inch Laptop for Men & Women, Padded Laptop Compartment, Free Accessories Pouch, Premium Zipper Closure, Water Repellent Nylon Fabric, Grey`,
      rating: 4,
      finalPrice: "289",
      mrp: "999",
      offerPercent: "71",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/7.webp",
      heading: `amazon basics Laptop Stand, Height-Adjustable, Foldable, Portable, Ventilated, Fits Up to 15.6-Inch Laptops (Aluminium Alloy, Silver) Tabletop`,
      rating: 4,
      finalPrice: "317",
      mrp: "999",
      offerPercent: "68",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/8.webp",
      heading: `Florican Portable Invisible Laptop Riser Stand | Mini Aluminum Cooling Pad, Lightweight Laptop Desk Stand for MacBook, Lenovo, Dell, HP & Other Laptops (Silver)`,
      rating: 4,
      finalPrice: "249",
      mrp: "1,299",
      offerPercent: "81",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/9.webp",
      heading: `Amazon Basics Wireless Keyboard and Mouse Set | 1000 DPI Mouse | 12 Function Keys | Compatible with Mac and Windows | Silent Keys | Auto Stand-by | Spill-Resistant (Black)`,
      rating: 4,
      finalPrice: "749",
      mrp: "1,999",
      offerPercent: "63",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/10.webp",
      heading: `cimetech Wireless Keyboard and Mouse, 2.4G USB Portable Ergonomic Keyboard Mouse Combo with Ultra-Thin Design, Compact Full Size Slim Keyboard for Mac, Windows, Laptop, Computer - Grey`,
      rating: 4,
      finalPrice: "2,089",
      mrp: "5,999",
      offerPercent: "65",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/11.jpg",
      heading: `Lemorele USB C Hub, USB C Multiport Adapter Hub 7-in-2 with Thunderbolt 3, USB 3.0 Ports, 4K HDMI, 100W Power Delivery, SD/TF Port, Suitable for MacBook Pro/Air M1 M2 2022 2021 2020 2019 2018`,
      rating: 4,
      finalPrice: "3,799",
      mrp: "3,999",
      offerPercent: "30",
    },
    {
      productsPath: "LaptopsAccessories",
      imgSrc: "./assets/productGrid/laptopAccessories/12.jpg",
      heading: `ARTISTIX Alpine Business Class Series | Anti Theft Laptop Backpack (32 Litre, 15.6 inch) (Black)`,
      rating: 4,
      finalPrice: "1,783",
      mrp: "3,899",
      offerPercent: "55",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={Accessorieslist} />
      <Footer backToTop={"/laptopsAccessories"} />
    </>
  );
};

export default LaptopAccessories;
