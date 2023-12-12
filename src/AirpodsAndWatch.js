import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const AirpodsAndWatch = () => {
  const watchList = [
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/1.jpg",
      heading: `OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass - 12.4 Mm Drivers, 10 Mins Charge - 20 Hrs Music, 30 Hrs Battery Life (Magico Black)`,
      rating: 4,
      finalPrice: "1,599",
      productsPath: "AirpodsAndWatch",
      mrp: "2,299",
      offerPercent: "30",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/2.jpg",
      heading: `Samsung Galaxy Buds2 Pro, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Bora Purple, with Mic)`,
      rating: 4,
      finalPrice: "14,999",
      productsPath: "AirpodsAndWatch",
      mrp: "19,559",
      offerPercent: "25",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/3.jpg",
      heading: `boAt Rockerz 258 Pro+ Bluetooth in Ear Earphones with Upto 60 Hours Playback, ASAP Charge, IPX7, Dual Pairing and Bluetooth v5.0(Active Black)`,
      rating: 4,
      finalPrice: "1,199",
      productsPath: "AirpodsAndWatch",
      mrp: "3,999",
      offerPercent: "70",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/4.jpg",
      heading: `boAt Airdopes 170 TWS Earbuds with 50H Playtime, Quad Mics ENx™ Tech, Low Latency Mode, 13mm Drivers, ASAP™ Charge, IPX4, IWP™, Touch Controls & BT v5.3(Classic Black)`,
      rating: 4,
      finalPrice: "1,499",
      productsPath: "AirpodsAndWatch",
      mrp: "4,459",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/5.jpg",
      heading: `Fastrack New Limitless Glide Advanced UltraVU HD Display|BT Calling|ATS Chipset|100+ Sports Modes & Watchfaces|Calculator|Voice Assistant|in-Built Games|24 * 7 Health Suite|IP68 Smartwatch(Black)`,
      rating: 4,
      finalPrice: "1,399",
      productsPath: "AirpodsAndWatch",
      mrp: "3,999",
      offerPercent: "65",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/6.webp",
      heading: `Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch) Large Display, S-Pen in Box, Slim Metal Body, Dolby Atmos Sound, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Mystic Black`,
      rating: 4,
      finalPrice: "32,999",
      productsPath: "AirpodsAndWatch",
      mrp: "49,999",
      offerPercent: "35",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/7.webp",
      heading: `Lenovo Tab P11 Plus Tablet (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling), Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TUV Certified Eye Protection`,
      rating: 4,
      finalPrice: "23,999",
      productsPath: "AirpodsAndWatch",
      mrp: "39,999",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/8.jpg",
      heading: `Titan Neo Analog Grey Dial Women's Watch-2648WL01|Minimalistic contemporary design|Genuine Light Olive Green colored leather strap`,
      rating: 4,
      finalPrice: "1,999",
      productsPath: "AirpodsAndWatch",
      mrp: "2,999",
      offerPercent: "33",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/9.jpg",
      heading: `boAt Aavante Bar 610 Bluetooth Soundbar with 25W RMS Signature Sound, 2.0 Channel with Dual Passive Radiators, Upto 7 Hours Playback & Multi Connectivity(Charcoal Black)`,
      rating: 4,
      finalPrice: "1,999",
      productsPath: "AirpodsAndWatch",
      mrp: "5,999",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/10.jpg",
      heading: `boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Pure White)`,
      rating: 4,
      finalPrice: "1,299",
      productsPath: "AirpodsAndWatch",
      mrp: "4,790",
      offerPercent: "71",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/12.jpg",
      heading: `Apple Wired EarPods with Lightning Connector|Warranty Description: 1 Year Warranty Provided By The Manufacturer From Date Of Purchase`,
      rating: 4,
      finalPrice: "1,549",
      productsPath: "AirpodsAndWatch",
      mrp: "2,000",
      offerPercent: "27",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/11.jpg",
      heading: ` Apple AirPods Pro (2nd Generation) |Personalised Spatial Audio with dynamic head tracking places sound all around you|Active Noise Cancellation reduces unwanted background noise`,
      rating: 4,
      finalPrice: "18,999",
      productsPath: "AirpodsAndWatch",
      mrp: "26,990",
      offerPercent: "29",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/13.jpg",
      heading: `OnePlus Pad 29.49cm (11.61 inch) LCD Display, 12GB RAM,256GB Storage, MediaTek Dimensity 9000, Android 13.1, 144HZ Refresh Rate, Dolby Vision Atmos, Wi-Fi with Cellular Data Sharing Tablet`,
      rating: 4,
      finalPrice: "37,990",
      productsPath: "AirpodsAndWatch",
      mrp: "39,999",
      offerPercent: "6",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/15.webp",
      heading: `Casio Edifice Analog Black Dial Men EFR-526D-1AVUDF ( EX093 )|Dial Color: Black; Case Shape: Round; Dial Glass Material: Mineral`,
      rating: 4,
      finalPrice: "7,604",
      productsPath: "AirpodsAndWatch",
      mrp: "8,499",
      offerPercent: "10",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/14.jpg",
      heading: `Samsung Galaxy Tab S8 Ultra 37.08 cm (14.6 inch) sAMOLED Display, RAM 12 GB, ROM 256 GB Expandable, S Pen in-Box, Wi-Fi+ 5G Tablet, Graphite`,
      rating: 4,
      finalPrice: "1,25,999",
      productsPath: "AirpodsAndWatch",
      mrp: "1,41,999",
      offerPercent: "11",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/16.webp",
      heading: `Fire-Boltt Ninja Call Pro Smart Watch Dual Chip Bluetooth Calling, 1.69" Display, AI Voice Assistance with 100 Sports Modes, with SpO2 & Heart Rate Monitoring`,
      rating: 4,
      finalPrice: "1,049",
      productsPath: "AirpodsAndWatch",
      mrp: "17,999",
      offerPercent: "94",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/17.webp",
      heading: `Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch w/Midnight Aluminium Case & Midnight Sport Band. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display, Water Resistant`,
      rating: 4,
      finalPrice: "21,999",
      productsPath: "AirpodsAndWatch",
      mrp: "29,999",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/18.webp",
      heading: `Apple 2022 12.9-inch iPad Pro (Wi-Fi, 128GB) - Silver (6th Generation)|Brilliant 12.9-inch Liquid Retina XDR display with ProMotion|True Tone, and P3 wide color
      M2 chip with 8-core CPU and 10-core GPU`,
      rating: 4,
      finalPrice: "1,09,999",
      productsPath: "AirpodsAndWatch",
      mrp: "1,12,999",
      offerPercent: "3",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/19.webp",
      heading: `Apple Watch Series 9 [GPS + Cellular 45mm] Smartwatch with Graphite Stainless steel Case with Graphite Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant`,
      rating: 4,
      finalPrice: "60,000",
      productsPath: "AirpodsAndWatch",
      mrp: "75,999",
      offerPercent: "21",
    },
    {
      imgSrc: "./assets/productGrid/AirpodsAndWatch/20.webp",
      heading: `Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Gray (5th Generation)|27.69 cm (10.9-inch) Liquid Retina display1 with True Tone| P3 wide colour and an anti-reflective coating
      Apple M1 chip with Neural Engine`,
      rating: 4,
      finalPrice: "50,999",
      productsPath: "AirpodsAndWatch",
      mrp: "59,999",
      offerPercent: "15",
    },
  ];

  return (
    <>
      <Header />
      <Productgrid productArray={watchList} />
      <Footer backToTop={"/AirpodsAndWatch"} />
    </>
  );
};

export default AirpodsAndWatch;
