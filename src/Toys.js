import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Productgrid from "./Productgrid";
const Toys = () => {
  const ToysList = [
    {
      imgSrc: "./assets/productGrid/Toys/1.webp",
      heading: `Toy Imagine™ Ramp Roll Ball Tower for Toddlers | Ball Drop and Roll Swirling Tower | Educational Brain Development Activity & Learning Monkey Toys | Best Gift for Children(5 Layer). 1-5 Years Kids!`,
      rating: 4,
      finalPrice: "349",
      productsPath: "Toys",
      mrp: "999",
      offerPercent: "65",
    },
    {
      imgSrc: "./assets/productGrid/Toys/2.webp",
      heading: `VGRASSP Mini Toy Guitar for Children - Kids Handheld Musical Electronic - Plays Music & Electric Sounds - Gift for Girls & Boys`,
      rating: 4,
      finalPrice: "285",
      productsPath: "Toys",
      mrp: "599",
      offerPercent: "52",
    },
    {
      imgSrc: "./assets/productGrid/Toys/3.webp",
      heading: `Storio Kids Toys LCD Writing Tablet 8.5Inch E-Note Pad Best Birthday Gift for Girls Boys, Multicolor`,
      rating: 4,
      finalPrice: "149",
      productsPath: "Toys",
      mrp: "252",
      offerPercent: "41",
    },
    {
      imgSrc: "./assets/productGrid/Toys/4.webp",
      heading: `VGRASSP Magnetic Slate Toy is Very Useful, Helps Children in Learning How to Write, Read and Draw Non-Toxic Board, Small (Color as Per Stock)`,
      rating: 4,
      finalPrice: "98",
      productsPath: "Toys",
      mrp: "299",
      offerPercent: "67",
    },
    {
      imgSrc: "./assets/productGrid/Toys/5.webp",
      heading: `Sony PS5 PlayStation Console|Maximize your play sessions with near instant load times for installed PS5 games.`,
      rating: 4,
      finalPrice: "53,990",
      productsPath: "Toys",
      mrp: "54,990",
      offerPercent: "2",
    },
    {
      imgSrc: "./assets/productGrid/Toys/6.webp",
      heading: `PlayStation 4 Jet Black 500GB (CUH-2200AB01)|PS4 consoles support 8K Output, so you can play games on your 4320p resolution display.`,
      rating: 4,
      finalPrice: "29,990",
      productsPath: "Toys",
      mrp: "39,990",
      offerPercent: "25",
    },
    {
      imgSrc: "./assets/productGrid/Toys/7.webp",
      heading: `SMARTCAM Video Game Console 4K HDMI-Compatible Retro TV Game Stick Built-in 40000+ Game Support For MAME/PS1/PSP/GBA`,
      rating: 4,
      finalPrice: "2,949",
      productsPath: "Toys",
      mrp: "4,999",
      offerPercent: "41",
    },
    {
      imgSrc: "./assets/productGrid/Toys/8.webp",
      heading: `GSH ME Sup Classic 400-in-1 Digital Video Port Game Console with Battery Handheld Console Classic Retro Video Gaming Player Colorful LCD Screen USB Rechargeable Game Toy for Kids (Assorted Color)`,
      rating: 4,
      finalPrice: "899",
      productsPath: "Toys",
      mrp: "1,499",
      offerPercent: "40",
    },
    {
      imgSrc: "./assets/productGrid/Toys/9.webp",
      heading: `Storio Toy Octopus Plushie Reversible Soft Toys for Kids | Plush Soft Toys for Baby Boys and Girls | Octopus Soft Toy for Kids -18cm`,
      rating: 4,
      finalPrice: "149",
      productsPath: "Toys",
      mrp: "199",
      offerPercent: "25",
    },
    {
      imgSrc: "./assets/productGrid/Toys/10.webp",
      heading: `Storio Toy Plushie Cartoon Character Soft Stuffed Plush Toy for Kids Birthday Gift Home Decoration | Plush Soft Toys for Baby Boys and Girls - 25cm`,
      rating: 4,
      finalPrice: "179",
      productsPath: "Toys",
      mrp: "364",
      offerPercent: "51",
    },
    {
      imgSrc: "./assets/productGrid/Toys/11.webp",
      heading: `Mirada Cute Peach Bunny Soft Toy for Girls/Kids | Huggable Rabbit with Long Ears | Soft Stuffed Plush Animal | - 35cm`,
      rating: 4,
      finalPrice: "759",
      productsPath: "Toys",
      mrp: "899",
      offerPercent: "16",
    },
    {
      imgSrc: "./assets/productGrid/Toys/12.webp",
      heading: `Webby Plush Husky Dog Stuffed Animal Puppy Soft Toy, Adorable Gifts for Kids and Adult, Glitter Eyes Soft Toy, 35CM (Grey)`,
      rating: 4,
      finalPrice: "499",
      productsPath: "Toys",
      mrp: "599",
      offerPercent: "17",
    },
    {
      imgSrc: "./assets/productGrid/Toys/13.webp",
      heading: `Nexus Product Bike for Kids Toy R3 Bike with Rechargeable Battery Operated Ride on for Boys and Girls | Electric Children Ride on [3 to 8 Years, Large, Red]`,
      rating: 4,
      finalPrice: "13,499",
      productsPath: "Toys",
      mrp: "29,999",
      offerPercent: "51",
    },
    {
      imgSrc: "./assets/productGrid/Toys/14.webp",
      heading: `VESCO Kick Pro 14 Inch Bicycle for Kids Fully Adjustable with Back Seat & Support for Boys and Girls 3 to 5 Years (Green)`,
      rating: 4,
      finalPrice: "3,499",
      productsPath: "Toys",
      mrp: "6,383",
      offerPercent: "45",
    },
    {
      imgSrc: "./assets/productGrid/Toys/15.webp",
      heading: `Baybee ATV Rechargeable Battery Operated Ride on Electric Kids Bike, Kids Ride on Baby Bike with LED Light, USB Port, Music | Electric Bike for Kids to Drive 2 to 5 Years Boys Girls (Monster, Green)`,
      rating: 4,
      finalPrice: "6,999",
      productsPath: "Toys",
      mrp: "14,999",
      offerPercent: "53",
    },
    {
      imgSrc: "./assets/productGrid/Toys/16.webp",
      heading: `Lifelong Kids Tricycle with EVA Wheels, Bell & Storage Basket|Baby Trike with Parental Control|Age Group 2 Years to 5 Years Carrying Capacity Upto 30 kgs`,
      rating: 4,
      finalPrice: "1,899",
      productsPath: "Toys",
      mrp: "7,999",
      offerPercent: "76",
    },
  ];
  return (
    <>
      <Header />
      <Productgrid productArray={ToysList} />
      <Footer backToTop={"/Toys"} />
    </>
  );
};

export default Toys;
