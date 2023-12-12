import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const ShoesAndBags = () => {
  const ShoesAndBagsList = [
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/1.webp",
      heading: `MSC SHOES Formal Lace Up Flexible-Stitched Sole Premium Shoes for Men’s/Casual Office Use Wedding Formal Shoes for Boys Alfred Uniform Dress Daily use Shoes (101)-VER`,
      rating: 4,
      finalPrice: "829",
      productsPath: "ShoesAndBags",
      mrp: "1,299",
      offerPercent: "36",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/2.webp",
      heading: `Kosher Black Color Stylish Lace-up Men's Formal Shoes`,
      rating: 4,
      finalPrice: "1,399",
      productsPath: "ShoesAndBags",
      mrp: "4,999",
      offerPercent: "72",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/3.webp",
      heading: `Centrino Mens Formal Shoes`,
      rating: 4,
      finalPrice: "729",
      productsPath: "ShoesAndBags",
      mrp: "2,199",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/4.webp",
      heading: `Kosher Tan Color Lace-up Men's Faux Leather Formal Shoes`,
      rating: 4,
      finalPrice: "1,399",
      productsPath: "ShoesAndBags",
      mrp: "4,999",
      offerPercent: "72",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/5.webp",
      heading: `FATMUG Polyester Foldable Duffle Travel Bag Luggage For Travel, Packing And Storage - Men And Women - (60 L, Black)`,
      rating: 4,
      finalPrice: "1,099",
      productsPath: "ShoesAndBags",
      mrp: "2,999",
      offerPercent: "63",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/6.webp",
      heading: `Nautica Duffle Bag for Travel | Stylish Leatherette Luggage | Compact and Comfortable for Travelling | Suitable for Men's and Women's (Dark Green) 15 cm`,
      rating: 4,
      finalPrice: "1,299",
      productsPath: "ShoesAndBags",
      mrp: "4,999",
      offerPercent: "74",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/7.webp",
      heading: `M MEDLER Epoch Nylon 55 litres Waterproof Strolley Duffle Bag- 2 Wheels - Luggage Bag - (Navy Blue)`,
      rating: 4,
      finalPrice: "399",
      productsPath: "ShoesAndBags",
      mrp: "2,999",
      offerPercent: "87",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/8.webp",
      heading: `Storite Nylon 46 cm Foldable Travel Duffel Bag, Sports Duffels Bag, Shoulder Handbag for Women, Outdoor Weekend Bag with Shoe and Wet Clothes Compartments (Grey,46x23x23 cm)`,
      rating: 4,
      finalPrice: "999",
      productsPath: "ShoesAndBags",
      mrp: "2,999",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/9.webp",
      heading: `Centrino 8620-1 Men's Formal Shoe`,
      rating: 4,
      finalPrice: "619",
      productsPath: "ShoesAndBags",
      mrp: "1,499",
      offerPercent: "59",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/10.webp",
      heading: `Paragon K11236G Men Formal Shoes | Corporate Office Shoes | Smart & Sleek Design | Comfortable Sole with Cushioning | for Daily & Occasion Wear`,
      rating: 4,
      finalPrice: "836",
      productsPath: "ShoesAndBags",
      mrp: "1,349",
      offerPercent: "38",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/11.webp",
      heading: `Centrino Mens 2105 Formal Shoes`,
      rating: 4,
      finalPrice: "509",
      productsPath: "ShoesAndBags",
      mrp: "1,499",
      offerPercent: "66",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/12.webp",
      heading: `Centrino Mens 8604-2 Formal Shoe`,
      rating: 4,
      finalPrice: "469",
      productsPath: "ShoesAndBags",
      mrp: "999",
      offerPercent: "53",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/13.webp",
      heading: `women's pu leather handbag shoulder bag hand held bag with long strap queen collection simple sober and stylish (HB5)`,
      rating: 4,
      finalPrice: "320",
      productsPath: "ShoesAndBags",
      mrp: "999",
      offerPercent: "68",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/14.webp",
      heading: `MOKOBARA The Transit Set of The Cabin and The Medium Polycarbonate Hardsided Luggage | 8 Wheel Trolley Bag Travel Suitcase (Still Loading Brownray (Limited Edition))`,
      rating: 4,
      finalPrice: "9,999",
      productsPath: "ShoesAndBags",
      mrp: "23,999",
      offerPercent: "53",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/15.webp",
      heading: `DANIEL CLARK Handbags For Women Combo`,
      rating: 4,
      finalPrice: "489",
      productsPath: "ShoesAndBags",
      mrp: "3,999",
      offerPercent: "88",
    },
    {
      imgSrc: "./assets/productGrid/ShoesAndBags/16.webp",
      heading: `Safari Oasis 77 cms Large Check-in Hardsided 4 Wheels Printed Luggage/Suitcase/Trolley Bag (Multicolor)`,
      rating: 4,
      finalPrice: "4,299",
      productsPath: "ShoesAndBags",
      mrp: "13,160",
      offerPercent: "67",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={ShoesAndBagsList} />
      <Footer backToTop={"/ShoesAndBags"} />
    </>
  );
};

export default ShoesAndBags;
