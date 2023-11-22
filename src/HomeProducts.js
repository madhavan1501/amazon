import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const HomeProducts = () => {
  const HomeProductsList = [
    {
      imgSrc: "./assets/productGrid/HomeProducts/1.webp",
      heading: `Ambra Linen Premium Luxury Silky Soft Sateen Pillow Cover, Solid Color,Silk Like Soft, Skin Friendly for All-Season use (Yellow)`,
      rating: 4,
      finalPrice: "365",
      mrp: "599",
      offerPercent: "39",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/3.jpg",
      heading: `AmazonBasics Room - Polyester Solid Darkening Blackout Curtain Set with Grommets - 245 GSM - 42" x 84", Beige`,
      rating: 4,
      finalPrice: "2,049",
      mrp: "2,149",
      offerPercent: "7",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/2.webp",
      heading: `BSB HOME Microfiber 144 TC Football Printed Double Bedsheets with 2 King Size Pillow Cover  Dark Blue and Light Blue)`,
      rating: 4,
      finalPrice: "209",
      mrp: "799",
      offerPercent: "74",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/4.jpg",
      heading: `Story@Home Blackout Curtains 5 feet Long Set of 2 Room Darkening Window Curtain Plain, Navy Blue`,
      rating: 4,
      finalPrice: "949",
      mrp: "3,149",
      offerPercent: "70",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/5.jpg",
      heading: `Xtore Beautiful Finish Uniquely Hand Crafted Home Dcor African Tribal Women Art Piece - (Set of 3, Multicolour), Resin`,
      rating: 4,
      finalPrice: "899",
      mrp: "2,499",
      offerPercent: "64",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/6.jpg",
      heading: `LIFEHAXTORE® Seven Lucky Running Vastu Horses Art Framed Painting - (Ocean Blue, 12 Inch x 18 Inch)`,
      rating: 4,
      finalPrice: "379",
      mrp: "1,299",
      offerPercent: "71",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/7.jpg",
      heading: `Xtore® Modern Classy Lucky Owl Resin Art Figure Showpiece -(Pack of 1, White)`,
      rating: 4,
      finalPrice: "649",
      mrp: "1,999",
      offerPercent: "68",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/8.jpg",
      heading: `Xtore ® Plastic 3D Home Build Beautiful Butterfly with Sticking Pad (Ocean Blue) -Set of 12`,
      rating: 4,
      finalPrice: "329",
      mrp: "999",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/9.webp",
      heading: `Mi Arcus Storage Basket for Kids Toys I Clothes I Books I Fruit Basket I Multipurpose Home Storage Basket for Modern Home (37 * 30cm) - Showering Love Collection`,
      rating: 4,
      finalPrice: "846",
      mrp: "1,199",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/10.webp",
      heading: `Cutting EDGE Plastic Storage Baskets Lidded Shelf Turkish Rack, Large Set of 2 with Lid for Storage Baskets for Fruit Vegetable Bathroom Stationary Home Basket with Handle (Cream, Large)`,
      rating: 4,
      finalPrice: "499",
      mrp: "999",
      offerPercent: "51",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/11.webp",
      heading: `CELLO Knits Style Plastic Basket (Pink), Rectangular`,
      rating: 4,
      finalPrice: "825",
      mrp: "1,068",
      offerPercent: "26",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/12.webp",
      heading: `Amazon Brand - Solimo Fabric Foldable Storage Organiser, Black`,
      rating: 4,
      finalPrice: "209",
      mrp: "899",
      offerPercent: "77",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/13.jpg",
      heading: `Quace 12 Meter Decorative 42 Warm White LED String Light Plug for Indoor & Outdoor Decorations,String Lights for DIY, Party, Home Decor, Christmas, Diwali`,
      rating: 4,
      finalPrice: "79",
      mrp: "499",
      offerPercent: "84",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/14.jpg",
      heading: `Desidiya 12 Stars 138 Led Curtain String Lights Window Curtain Lights with 8 Flashing Modes Decoration for Christmas, Wedding, Party, Home, Patio Lawn Warm White (138 Led-Star, Copper, Pack of 1)`,
      rating: 4,
      finalPrice: "449",
      mrp: "1,999",
      offerPercent: "78",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/15.jpg",
      heading: `Panasonic 9W Motion Sensor Bulb | 9 Watt Radar LED Bulb for Home | B22 Motion LED Bulb 9W (PBUM28097-PK1)`,
      rating: 4,
      finalPrice: "199",
      mrp: "700",
      offerPercent: "72",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/16.jpg",
      heading: `Quace Copper String Led Light 10M 100 LED Battery Powered Wire Decorative Fairy Lights - Warm White`,
      rating: 4,
      finalPrice: "237",
      mrp: "499",
      offerPercent: "54",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/17.webp",
      heading: `Fire TV Stick 4K Max streaming device, Wi-Fi 6, Alexa Voice Remote (includes TV controls)`,
      rating: 4,
      finalPrice: "5,199",
      mrp: "6,499",
      offerPercent: "20",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/18.webp",
      heading: `Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)`,
      rating: 4,
      finalPrice: "4,999",
      mrp: "5,599",
      offerPercent: "9",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/19.webp",
      heading: ` Home 4K Support 720P Native HD Portable Projector Android 11 YouTube Builtin Apps 5G WiFi Auto Keystone 3500 lumens  3 Watt Speaker 176" Screen Compatible 4K TV Stick`,
      rating: 4,
      finalPrice: "7,599",
      mrp: "19,999",
      offerPercent: "62",
    },
    {
      imgSrc: "./assets/productGrid/HomeProducts/20.webp",
      heading: `Marshall Stanmore II Wireless Bluetooth Speaker (Black)`,
      rating: 4,
      finalPrice: "26,999",
      mrp: "39,999",
      offerPercent: "33",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={HomeProductsList} />
      <Footer backToTop={"/HomeProducts"} />
    </>
  );
};

export default HomeProducts;
