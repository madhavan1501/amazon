import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const DailyNeeds = () => {
  const DailyNeeds = [
    {
      imgSrc: "./assets/productGrid/DailyNeeds/1.webp",
      heading: `The Moms Co Ultimate Head to Toe Set - A Box of Nourishment for Skin & Hair with goodness of Cocoa, Shea Butter & 8 Powerful Oils`,
      rating: 4,
      finalPrice: "1,048",
      productsPath: "DailyNeeds",
      mrp: "1,398",
      offerPercent: "25",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/2.webp",
      heading: `Fogg Fresh Fougere Premium No Gas Deodorant for Men, Long-Lasting Perfume Body Spray, 120 ml`,
      rating: 4,
      finalPrice: "192",
      productsPath: "DailyNeeds",
      mrp: "275",
      offerPercent: "30",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/3.webp",
      heading: `Beauté Secrets Manicure Set Nail Clippers, Stainless Steel Nail Scissors Grooming Kit with Peeling Knife, Nail Cleaning Knife`,
      rating: 4,
      finalPrice: "426",
      productsPath: "DailyNeeds",
      mrp: "609",
      offerPercent: "30",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/4.webp",
      heading: `RUBAB MEN Beard Grooming 4-in-1 Kit for Men | Beard Brush, Hair & Beard Softener Balm, Wooden Beard Shaper Tool & Wooden Beard Comb for Men | Pack of 4`,
      rating: 4,
      finalPrice: "599",
      productsPath: "DailyNeeds",
      mrp: "799",
      offerPercent: "25",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/7.webp",
      heading: `SILENCIO Automatic Toilet Bowl Cleaner Tablets (10 Pack), Bathroom Toilet Tank Cleaner, Toilet Blue Clean Bubbles, Long-Lasting, Mild Lemon Scent, Fresh Air and No Pungent Odor`,
      rating: 4,
      finalPrice: "179",
      productsPath: "DailyNeeds",
      mrp: "599",
      offerPercent: "64",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/6.webp",
      heading: `Harpic 1 Litre - Original, Disinfectant Toilet Cleaner Liquid | Suitable for Toilet Bowls`,
      rating: 4,
      finalPrice: "99",
      productsPath: "DailyNeeds",
      mrp: "199",
      offerPercent: "51",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/5.webp",
      heading: `JOFF Tap and Shower Cleaner- 500ml, Descaler and Limescale Remover`,
      rating: 4,
      finalPrice: "199",
      productsPath: "DailyNeeds",
      mrp: "225",
      offerPercent: "12",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/8.webp",
      heading: `Harpic Hygienic Toilet Cleaner Rim Block, Lavender - 26 g (Pack of 3) | India's # 1 Toilet Cleaner`,
      rating: 4,
      finalPrice: "240",
      productsPath: "DailyNeeds",
      mrp: "261",
      offerPercent: "8",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/9.webp",
      heading: `Morphy Richards Kingsman Pro 12-in-1 Body Groomer|3Months of Trimming*| Fast USB Charging| Multi-Grooming Kit|5Face Nose Ear Hair blades|7Beard Combs| PrivatePart Shaving|2-Yr Warranty by Brand|Black`,
      rating: 4,
      finalPrice: "1,647",
      productsPath: "DailyNeeds",
      mrp: "2,995",
      offerPercent: "45",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/10.webp",
      heading: `Hair Trimmer For Men Buddha Style Trimmer, Professional Hair Clipper, Adjustable Blade Clipper, Hair Trimmer and Shaver For Men, Retro Oil Head Close Cut Precise hair,Multicolor (BUDDHA)`,
      rating: 4,
      finalPrice: "495",
      productsPath: "DailyNeeds",
      mrp: "1,095",
      offerPercent: "55",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/11.webp",
      heading: `ITALIYA Hair Trimmer For Men Buddha Style Trimmer, Professional Hair Clipper, Adjustable Blade Clipper, Hair Trimmer and Shaver For Men, Retro Oil Head Close Cut Precise hair (gold)`,
      rating: 4,
      finalPrice: "299",
      productsPath: "DailyNeeds",
      mrp: "1,299",
      offerPercent: "77",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/12.webp",
      heading: `AGARO Rechargeable Multi Trimmer for Women, Eyebrow, Underarms and Bikini Trimmer, 1 Hour Usage, White (33622/2107)`,
      rating: 4,
      finalPrice: "929",
      productsPath: "DailyNeeds",
      mrp: "1,195",
      offerPercent: "22",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/13.webp",
      heading: `Drools Adult Wet Dog Food, Real Chicken and Chicken Liver Chunks in Gravy, 24 Pouches (24 x 150g)`,
      rating: 4,
      finalPrice: "710",
      productsPath: "DailyNeeds",
      mrp: "840",
      offerPercent: "15",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/14.webp",
      heading: `Drools Chicken and Egg Adult Dog Food, 3kg with Free 1.2kg , Total 4.2 kg`,
      rating: 4,
      finalPrice: "690",
      productsPath: "DailyNeeds",
      mrp: "699",
      offerPercent: "1",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/15.webp",
      heading: `Drools Optimum Performance Adult Dry Dog Food, Chicken Flavor, 10kg`,
      rating: 4,
      finalPrice: "1,503",
      productsPath: "DailyNeeds",
      mrp: "1,599",
      offerPercent: "6",
    },
    {
      imgSrc: "./assets/productGrid/DailyNeeds/16.webp",
      heading: `Purepet Adult Smoked Chicken 1kg`,
      rating: 4,
      finalPrice: "427",
      productsPath: "DailyNeeds",
      mrp: "600",
      offerPercent: "27",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={DailyNeeds} />
      <Footer backToTop={"/DailyNeeds"} />
    </>
  );
};

export default DailyNeeds;
