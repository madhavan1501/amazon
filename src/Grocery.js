import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const Grocery = () => {
  const GroceryList = [
    {
      imgSrc: "./assets/productGrid/Grocery/1.webp",
      heading: `Go Vegan Dry Fruits Combo Pack - 1kg (Almonds 250g, Cashews 250g, Raisins 250g, Pistachios 250g)`,
      rating: 4,
      finalPrice: "699",
      mrp: "1,799",
      offerPercent: "61",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/2.webp",
      heading: `PrettyNutty Healthy Nutmix 500g, Dried Almonds, Black Raisins, Cashewnuts, Cranberries, Green Raisins, Walnut Kernels & Many More`,
      rating: 4,
      finalPrice: "284",
      mrp: "999",
      offerPercent: "72",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/3.webp",
      heading: `GreenFinity Dry Fruits Combo Pack of Almonds, Cashews, Raisin, Roasted Pistachio (Jar Pack) (250g * 4) 1Kg, Hampers for Employees, Dry Fruits Gift Pack and Dry Fruits for Family.`,
      rating: 4,
      finalPrice: "724",
      mrp: "1,599",
      offerPercent: "55",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/4.webp",
      heading: `Happilo Premium California Roasted & Salted Pistachios 200 g | Pista Dry Fruit | Tasty & Healthy | High in Protein & Dietary Fiber | Gluten Free & Low Calorie Nuts`,
      rating: 4,
      finalPrice: "289",
      mrp: "375",
      offerPercent: "27",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/5.webp",
      heading: `Ferrero Rocher, Exquisite Hazelnut and Milk Chocolate Premium Gift Box, 16 pieces (200 g)`,
      rating: 4,
      finalPrice: "480",
      mrp: "895",
      offerPercent: "46",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/6.webp",
      heading: `Amul Chocomini Chocolate, 250 g`,
      rating: 4,
      finalPrice: "130",
      mrp: "190",
      offerPercent: "32",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/7.webp",
      heading: `4700BC Gourmet Popcorn, Nutty Tuxedo Chocolate, Tin, 150g`,
      rating: 4,
      finalPrice: "213",
      mrp: "225",
      offerPercent: "12",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/8.webp",
      heading: `Cookieman Premium Chocolate Gift Box - 25 Pieces Of Center Filled Hazel Nut, Strawberry and English Toffee Chocolates`,
      rating: 4,
      finalPrice: "528",
      mrp: "600",
      offerPercent: "12",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/9.webp",
      heading: `Quaker Oats 1kg, Rolled Oats Natural Wholegrain, Nutritious Breakfast Cereals, Dalia Porridge, Easy to Cook`,
      rating: 4,
      finalPrice: "199",
      mrp: "179",
      offerPercent: "10",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/10.webp",
      heading: `Cultsport Plant-Based Mass Gainer | Triple Chocolate Flavour | Gluten-Free | Cholesterol-Free`,
      rating: 4,
      finalPrice: "839",
      mrp: "1,200",
      offerPercent: "30",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/11.webp",
      heading: `MuscleBlaze Fit High Protein Oats, 400 g, Dark Chocolate | 22 g Protein, Rolled Oats, Gluten Free Oats, Breakfast Cereals for Weight Management`,
      rating: 4,
      finalPrice: "288",
      mrp: "349",
      offerPercent: "17",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/12.webp",
      heading: `Pampers All round Protection Pants Style Baby Diapers, Large (L) Size, 64 Count, Anti Rash Blanket, Lotion with Aloe Vera, 9-14kg Diapers`,
      rating: 4,
      finalPrice: "955",
      mrp: "1,199",
      offerPercent: "20",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/13.webp",
      heading: `Nature's Nectar Select Forest Honey | NMR Tested | 100% Pure Raw and Unprocessed Honey | 400gm Bottle`,
      rating: 4,
      finalPrice: "336",
      mrp: "495",
      offerPercent: "32",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/14.webp",
      heading: `Aashirvaad Nature's Super Foods Organic Arhar/Tur Dal Pouch, 500 g`,
      rating: 4,
      finalPrice: "79",
      mrp: "99",
      offerPercent: "20",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/15.webp",
      heading: `Tata Salt | Vacuum Evaporated Iodised Salt | 1 kg`,
      rating: 4,
      finalPrice: "25",
      mrp: "28",
      offerPercent: "11",
      productsPath: "Grocery",
    },
    {
      imgSrc: "./assets/productGrid/Grocery/16.webp",
      heading: `Tata Sampann Unpolished Toor Dal (Arhar Dal), 1kg`,
      rating: 4,
      finalPrice: "150",
      mrp: "200",
      offerPercent: "25",
      productsPath: "Grocery",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={GroceryList} />
      <Footer backToTop={"/Grocery"} />
    </>
  );
};

export default Grocery;
