import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const KitchenProducts = () => {
  const KitchenProductsList = [
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/1.webp",
      heading: `Wipro Vesta 1.2 l Outer Lid Multicooker Kettle | Concurrent Cooking |Cool Touch body | Dual Temperature Control |Triple Protection |SS 304 Rust free (White, 600 Watt, Plastic)`,
      rating: 4,
      finalPrice: "2,199",
      mrp: "3,599",
      offerPercent: "37",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/2.webp",
      heading: `Wipro Vesta 360 Watt 4 in 1 Multicooker Egg Boiler|Concurrent Cooking|Boils up to 14 Eggs at a time |Steam Rice, Poach Eggs, Cook Vegetable & Boil Egg|3 Boiling Modes|2 Year Product Warranty`,
      rating: 4,
      finalPrice: "1,700",
      mrp: "2,500",
      offerPercent: "34",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/3.webp",
      heading: `Amazon Brand - Solimo 2 Ply Kitchen Tissue Paper Roll - 4 Rolls (60 Pulls Per Roll)`,
      rating: 4,
      finalPrice: "229",
      mrp: "280",
      offerPercent: "18",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/4.webp",
      heading: `Pigeon by Stovekraft Ultra Premium Handy Chopper with 3 Blades for Effortlessly Chopping Vegetables and Fruits for Your Kitchen (Green, 400 ml, 12420)`,
      rating: 4,
      finalPrice: "199",
      mrp: "545",
      offerPercent: "63",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/5.webp",
      heading: `Ikea Flatware Silverware Cutlery Trays (2-Pack) 10 X 12 Drawer Insert Smacker`,
      rating: 4,
      finalPrice: "299",
      mrp: "699",
      offerPercent: "57",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/6.webp",
      heading: `Pigeon by Stovekraft Angular Holder Shears Kitchen Knifes 6 Piece Set with Wooden Block (Stainless Steel)`,
      rating: 4,
      finalPrice: "385",
      mrp: "695",
      offerPercent: "44",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/7.webp",
      heading: `Kitchenwell Soap Holder for Bathroom Kitchen Sink Wall Single Layer with Magic Vacumme (Leaf SOAP Dish, Pack of 1)`,
      rating: 4,
      finalPrice: "19",
      mrp: "39",
      offerPercent: "51",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/8.webp",
      heading: `CBK Fridge Storage Box Fridge organizer Food Storage Container, Stackable Plastic Fish, Meat, Vegetables & Fruits Freezer Storage Container for Kitchen(Pack of 1)`,
      rating: 4,
      finalPrice: "99",
      mrp: "299",
      offerPercent: "67",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/9.webp",
      heading: `KENT Smart Multi Purpose Kettle Cum Steamer 1.2 Liter 800W|Electric Cooker With Steamer&Boiler For Idlis,Instant Noodles|Inner Stainless Steel&Cool Touch Outer Body`,
      rating: 4,
      finalPrice: "1,450",
      mrp: "2,900",
      offerPercent: "50",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/10.webp",
      heading: `Global Local Tissue/Toilet Paper Roll Holder for Bathroom Kitchen Tissue Roll Holder Tissue Paper Stand Self Adhesive Paper Towel Holder No Drill Napkin Holder Bathroom Accessories/Organiser`,
      rating: 4,
      finalPrice: "249",
      mrp: "999",
      offerPercent: "75",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/11.webp",
      heading: `BATH GURU ABS Heavy Duty Wall Mounted Soap Shampoo Conditioner Handwash Gel Liquid Soap Sanitizer Dispenser for Bathroom Basin Kitchen Sinks and Industrial Use (500 Ml, White)`,
      rating: 4,
      finalPrice: "480",
      mrp: "799",
      offerPercent: "40",
    },
    {
      productsPath: "KitchenProducts",
      imgSrc: "./assets/productGrid/KitchenProducts/12.webp",
      heading: `JIALTO Adhesive Hooks/10 Pack Transparent Adhesive Wall Hangings for Home Decoration/15kg Weight Capacity/Wall Decor Hanging Products/Kitchen Towel Strong/Heavy Duty Adhesive/Strong Adhesive Hooks`,
      rating: 4,
      finalPrice: "149",
      mrp: "599",
      offerPercent: "70",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={KitchenProductsList} />
      <Footer backToTop={"/KitchenProducts"} />
    </>
  );
};

export default KitchenProducts;
