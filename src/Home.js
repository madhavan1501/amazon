import React, { useEffect, useState } from "react";
import Header from "./Header";
import SingleProduct from "./singleProduct";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Aceproduct from "./Aceproduct";
import ProductSliderOne from "./ProductSlider-1";
import ProductSliderTwo from "./ProductSliderTwo";
import Footer from "./Footer";
const Home = ({ windowWidth }) => {
  const sliderOneObj = [
    {
      imgSrc: "./assets/sliderOne/1.jpg",
      heading: "Exciting Offers on Lexton String Light",
      price: "₹104 and under",
    },
    {
      imgSrc: "./assets/sliderOne/2.jpg",
      heading: "Odonil Gel Pocket Mix - (10gx3) ",
      price: "52% off",
    },
    {
      imgSrc: "./assets/sliderOne/3.jpg",
      heading: "Crazy Deals on Status Door Mat",
      price: "₹99",
    },
    {
      imgSrc: "./assets/sliderOne/4.jpg",
      heading: "Amazing Products from Amazon ",
      price: "₹329 and under",
    },
    {
      imgSrc: "./assets/sliderOne/5.jpg",
      heading: "Amazon Brand - Presto! Oxo-Biodegra…",
      price: "40% off",
    },
    {
      imgSrc: "./assets/sliderOne/6.jpg",
      heading: "Clazkit Plastic Kitchen Dori Handy Veg…",
      price: "68% off",
    },
    {
      imgSrc: "./assets/sliderOne/7.jpg",
      heading: "Quace 12 Meter Decorative 42 Warm…",
      price: "84% off",
    },
    {
      imgSrc: "./assets/sliderOne/8.jpg",
      heading: "Best of BSB Home Bedsheets",
      price: "₹199 and under",
    },
    {
      imgSrc: "./assets/sliderOne/9.jpg",
      heading: "Lowest Prices on Fastrack Smartwatches",
      price: "Up to 65% off",
    },
    {
      imgSrc: "./assets/sliderOne/10.jpg",
      heading: "lights for home decoration",
      price: "87% off",
    },
    {
      imgSrc: "./assets/sliderOne/11.jpg",
      heading: "diwali lights for decoration for home",
      price: "82% off",
    },
    {
      imgSrc: "./assets/sliderOne/12.jpg",
      heading: "PHILIPS Starlit 12 Meter 72 LEDs Strin…",
      price: "42% off",
    },
    {
      imgSrc: "./assets/sliderOne/13.jpg",
      heading: "Cockatoo Shoe Bag for Travel & Storage",
      price: "85% off",
    },
    {
      imgSrc: "./assets/sliderOne/14.jpg",
      heading: "Allen Solly Mens Polo Shirts",
      price: "66% off",
    },
    {
      imgSrc: "./assets/sliderOne/15.jpg",
      heading: "diwali light",
      price: "79% off",
    },
    {
      imgSrc: "./assets/sliderOne/16.jpg",
      heading: "Recron Certified Dream Fibre Pillow ",
      price: "69% off",
    },
    {
      imgSrc: "./assets/sliderOne/17.jpg",
      heading: "Amazon Brand - Presto! Total Wash De…",
      price: "53% off",
    },
  ];
  const sliderTwo = [
    {
      imgSrc: "./assets/slidertwo/1.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/2.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/3.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/4.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/5.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/6.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/7.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/8.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/9.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/10.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/11.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/12.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/13.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/14.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/15.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo/16.jpg",
      linkTo: "/mobiles",
    },
  ];
  const sliderTwo_2 = [
    {
      imgSrc: "./assets/slidertwo-2/1.jpg",
      linkTo: "/mobiles",
    },

    {
      imgSrc: "./assets/slidertwo-2/2.jpg",
      linkTo: "/laptops",
    },

    {
      imgSrc: "./assets/slidertwo-2/3.jpg",
      linkTo: "/HomeProducts",
    },

    {
      imgSrc: "./assets/slidertwo-2/4.jpg",
      linkTo: "/HomeAppliances",
    },

    {
      imgSrc: "./assets/slidertwo-2/5.jpg",
      linkTo: "/Fasion",
    },

    {
      imgSrc: "./assets/slidertwo-2/6.jpg",
      linkTo: "/Grocery",
    },

    {
      imgSrc: "./assets/slidertwo-2/7.jpg",
      linkTo: "/Toys",
    },

    {
      imgSrc: "./assets/slidertwo-2/8.jpg",
      linkTo: "/Fasion",
    },

    {
      imgSrc: "./assets/slidertwo-2/9.jpg",
      linkTo: "/HomeProducts",
    },
  ];
  const [slider, setslider] = useState(-200);
  const prevbtn = () => {
    if (slider !== 0) {
      setslider((e) => e + 100);
    } else return;
  };
  const nextbtn = () => {
    if (slider !== -400) {
      setslider((e) => e - 100);
    } else return;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setslider((e) => (e !== -400 ? e - 100 : e + 400));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Header windowWidth={windowWidth} />
      <div className="overflow-hidden bg-slate-100 w-full flex flex-col items-center min-[1100px]:items-start">
        <div className="relative w-full " id="sliderdiv">
          <ArrowBackIosNewIcon
            onClick={prevbtn}
            style={{ opacity: `${slider === 0 ? 0.5 : 1}` }}
            className="bg-white text-black !font-extrabold !text-3xl absolute rounded-full top-1/3  left-5 !h-6 !w-6 cursor-pointer p-2 z-50 min-[1000px]:left-10 min-[1000px]:!h-8 min-[1000px]:!w-8"
          />
          <div
            className={`flex max-w-full transition-transform ease-linear duration-[350ms]`}
            style={{ transform: `translateX(${slider}%)` }}
          >
            <img
              src="../assets/home-4.jpg"
              alt="amazon great indian festival"
              className="gradient-mask-b-40 w-full"
            />
            <img
              src="../assets/home-5.jpg"
              alt="amazon great indian festival"
              className="gradient-mask-b-50 w-full"
            />
            <img
              src="../assets/home-1.jpg"
              alt="amazon great indian festival"
              className="gradient-mask-b-50 w-full"
            />
            <img
              src="../assets/home-2.jpg"
              alt="amazon great indian festival"
              className="gradient-mask-b-50 w-full"
            />
            <img
              src="../assets/home-3.jpg"
              alt="amazon great indian festival"
              className="gradient-mask-b-50 w-full"
            />
          </div>
          <ArrowForwardIosIcon
            onClick={nextbtn}
            style={{ opacity: `${slider === -400 ? 0.5 : 1}` }}
            className="bg-white text-black !font-extrabold  absolute rounded-full top-1/3  right-5 !h-6 !w-6 cursor-pointer p-2 z-50 min-[1000px]:right-10 min-[1000px]:!h-8 min-[1000px]:!w-8"
          />
          <div className="grid grid-rows-2 grid-cols-4 hover:cursor-pointer w-[98%] rounded overflow-hidden left-[1%]  absolute top-[60%]">
            <img
              src="./assets/icici-banner.jpg"
              alt="icici"
              className="object-contain col-span-4 w-full h-full self-stretch"
            />
            <img
              src="./assets/emi-banner-1.jpg"
              alt="b1"
              className=" w-full object-cover h-full "
            />
            <img
              src="./assets/emi-banner-2.jpg"
              alt="b2"
              className=" w-full "
            />
            <img
              src="./assets/emi-banner-3.jpg"
              alt="b3"
              className=" w-full "
            />
            <img
              src="./assets/emi-banner-4.jpg"
              alt="b4"
              className=" w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-4 pb-4 w-full min-[500px]:grid-cols-2 min-[500px]:gap-x-0 min-[1000px]:grid-cols-3 min-[1500px]:grid-cols-4 min-[1500px]:gap-2 min-[1500px]:gap-y-4 min-[1500px]:px-8">
          {/* grid-cols-4 gap-2 gap-y-4 pb-4 px-8 */}
          <SingleProduct
            heading={"Starting ₹349 | Bestselling headphones"}
            imgSrc={"./assets/air-pods/1.jpg"}
            linkTo="/AirpodsAndWatch"
          />
          <Aceproduct
            title1="curtains"
            title2="floor lamps"
            title3="under bed storage"
            title4="showpieces and idols"
            imgSrc1="./assets/curtains-1.jpg"
            imgSrc2="./assets/lamp-1.jpg"
            imgSrc3="./assets/storage-1.jpg"
            imgSrc4="./assets/showpiece-1.jpg"
            heading="Minimum 50% off | Restyle your home"
            linkTo1="/HomeProducts"
            linkTo2="/HomeProducts"
            linkTo3="/HomeProducts"
            linkTo4="/HomeProducts"
            linkTo5="/HomeProducts"
          />
          <Aceproduct
            title1="Starting ₹169 | Home products"
            title2="Starting ₹139 | Kitchen products"
            title3="Starting ₹99 | Dry fruits, nuts & more"
            title4="Min. 60% off | Festive collections"
            imgSrc1="./assets/home-products-banner.jpg"
            imgSrc2="./assets/kitchen-products-banner.jpg"
            imgSrc3="./assets/dry-fruits-banner.jpg"
            imgSrc4="./assets/dress-banner.jpg"
            heading="Up to 70% off | Deals on Amazon Brands & more"
            linkTo1="/HomeProducts"
            linkTo2="/KitchenProducts"
            linkTo3="/Grocery"
            linkTo4="/Fasion"
            linkTo5="/Fasion"
          />
          <SingleProduct
            heading={"Up to 80% off | Laptops & smartphones"}
            imgSrc={"./assets/laptop-banner-2.jpg"}
            linkTo="/laptops"
          />
          <Aceproduct
            title1="Sport's Shoe"
            title2="Men's Shoe"
            title3="Women's Shoe"
            title4="Handbags"
            imgSrc1="./assets/shoes/shoe-1.jpg"
            imgSrc2="./assets/shoes/shoe-2.jpg"
            imgSrc3="./assets/shoes/shoe-3.jpg"
            imgSrc4="./assets/bags/bag-1.jpg"
            heading="Starting ₹199 | Shoes & handbags"
            linkTo1="/ShoesAndBags"
            linkTo2="/ShoesAndBags"
            linkTo3="/ShoesAndBags"
            linkTo4="/ShoesAndBags"
            linkTo5="/ShoesAndBags"
          />
          <Aceproduct
            title1="Childrens book | Starting ₹99"
            title2="Soft toys | Under ₹399"
            title3="Trimme | Under ₹999 "
            title4="Gaming accessories | Starting ₹199"
            imgSrc1="./assets/toys/toy-1.jpg"
            imgSrc2="./assets/toys/toy-2.jpg"
            imgSrc3="./assets/gadgets/trimmer-1.jpg"
            imgSrc4="./assets/gadgets/mouse-1.jpg"
            heading="Books, Toys, Grooming and gaming | Starting ₹99"
            linkTo1="/Toys"
            linkTo2="/Toys"
            linkTo3="/DailyNeeds"
            linkTo4="/laptopsAccessories"
            linkTo5="/laptopsAccessories"
          />
          <SingleProduct
            heading={"Up to 70% off | Amazon Renewed"}
            imgSrc={"./assets/laptop-banner.jpg"}
            linkTo="/AirpodsAndWatch"
          />
          <Aceproduct
            title1="Budget | Under ₹10,000"
            title2="Mid range | ₹10,000 - ₹25,000"
            title3="Premium | ₹25,000 - ₹40,000"
            title4="Ultra premium | Above ₹40,000"
            imgSrc1="./assets/mobiles/mobile-1.jpg"
            imgSrc2="./assets/mobiles/mobile-2.jpg"
            imgSrc3="./assets/mobiles/mobile-3.jpg"
            imgSrc4="./assets/mobiles/mobile-4.jpg"
            heading="Deals on smartphones that suits your budget"
            linkTo1="/mobiles"
            linkTo2="/mobiles"
            linkTo3="/mobiles"
            linkTo4="/mobiles"
            linkTo5="/mobiles"
          />
        </div>
        {(windowWidth > 800 ? true : false) && (
          <div>
            <ProductSliderOne sliderOne={sliderOneObj} />
          </div>
        )}
        <div className="grid grid-cols-1 justify-items-center gap-4 pb-4 w-full min-[500px]:grid-cols-2 min-[500px]:gap-x-0 min-[1000px]:grid-cols-3 min-[1500px]:grid-cols-4 min-[1500px]:gap-2 min-[1500px]:gap-y-4 min-[1500px]:px-8">
          {" "}
          {/* grid grid-cols-4 gap-2 gap-y-4 pb-4 px-8 w-full */}
          <Aceproduct
            title1="Festive fasion"
            title2="Jewellery"
            title3="Home"
            title4="Kitchen"
            imgSrc1="./assets/dress-banner-2.jpg"
            imgSrc2="./assets/jewellery-banner-1.jpg"
            imgSrc3="./assets/pillow-1.jpg"
            imgSrc4="./assets/kitchen-banner-1.jpg"
            heading="Up to 70% off | Get festive ready with products"
            linkTo1="/Fasion"
            linkTo2="/Fasion"
            linkTo3="/HomeProducts"
            linkTo4="/KitchenProducts"
            linkTo5="/HomeProducts"
          />
          <SingleProduct
            heading={"Up to 40% off | Deals on mobiles & accessories"}
            imgSrc={"./assets/mobile-banner-1.jpg"}
            linkTo="/mobiles"
          />
          <Aceproduct
            title1="Beauty & grooming accessories"
            title2="Toys & baby essentials"
            title3="Grocery & household supplies"
            title4="Pet care essentials"
            imgSrc1="./assets/box-1/1.jpg"
            imgSrc2="./assets/box-1/2.jpg"
            imgSrc3="./assets/box-1/3.jpg"
            imgSrc4="./assets/box-1/4.jpg"
            heading="Price crash | Lowest prices of the year | Amazon brands"
            linkTo1="/DailyNeeds"
            linkTo2="/Toys"
            linkTo3="/DailyNeeds"
            linkTo4="/DailyNeeds"
            linkTo5="/Toys"
          />
          <Aceproduct
            title1="Sports Shoes"
            title2="Jewellery & accessories"
            title3="Watches & smartwatches"
            title4="Bags, wallets & luggage"
            imgSrc1="./assets/box-2/1.jpg"
            imgSrc2="./assets/box-2/2.jpg"
            imgSrc3="./assets/box-2/3.jpg"
            imgSrc4="./assets/box-2/4.jpg"
            heading="Starting ₹199 | Shoes, jewellery & more"
            linkTo1="/ShoesAndBags"
            linkTo2="/Fasion"
            linkTo3="/AirpodsAndWatch"
            linkTo4="/ShoesAndBags"
            linkTo5="/Fasion"
          />
        </div>
        {(windowWidth > 800 ? true : false) && (
          <div>
            <ProductSliderTwo
              sliderTwo={sliderTwo}
              heading1={"Explore top offers in smartphones"}
              heading2={"See all deals"}
            />
            <div className="w-full p-8">
              <div className="bg-white p-6 shadow-2xl">
                <img
                  src="./assets/train-ticket-banner.jpg"
                  alt="img"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 justify-items-center gap-4 pb-4 w-full min-[500px]:grid-cols-2 min-[500px]:gap-x-0 min-[1000px]:grid-cols-3 min-[1500px]:grid-cols-4 min-[1500px]:gap-2 min-[1500px]:gap-y-4 min-[1500px]:px-8">
          {" "}
          {/* grid grid-cols-4 gap-2 gap-y-4 pb-4 px-8 w-full */}
          <Aceproduct
            title1="Laptop bags & backpacks"
            title2="Keyboard and Mouse"
            title3="Gaming accessories"
            title4="Laptop stands & cables"
            imgSrc1="./assets/box-3/1.jpg"
            imgSrc2="./assets/box-3/2.jpg"
            imgSrc3="./assets/box-3/3.jpg"
            imgSrc4="./assets/box-3/4.jpg"
            heading="Up to 80% off | Deals on mice, keyboards & more"
            linkTo1="/laptopsAccessories"
            linkTo2="/laptopsAccessories"
            linkTo3="/laptopsAccessories"
            linkTo4="/laptopsAccessories"
            linkTo5="/laptopsAccessories"
          />
          <Aceproduct
            title1="Chocolates"
            title2="Sweets"
            title3="Dry fruits"
            title4="Explore all top offers"
            imgSrc1="./assets/box-3/5.jpg"
            imgSrc2="./assets/box-3/6.jpg"
            imgSrc3="./assets/box-3/7.jpg"
            imgSrc4="./assets/box-3/8.jpg"
            heading="Up to 60% off | Gifting specials"
            linkTo1="/Grocery"
            linkTo2="/Grocery"
            linkTo3="/Grocery"
            linkTo4="/Grocery"
            linkTo5="/Grocery"
          />
          <Aceproduct
            title1="Learning & educational"
            title2="Soft toys"
            title3="Bikes, trikes & ride ons"
            title4="Party supplies"
            imgSrc1="./assets/box-3/9.jpg"
            imgSrc2="./assets/box-3/10.jpg"
            imgSrc3="./assets/box-3/11.jpg"
            imgSrc4="./assets/box-3/12.jpg"
            heading="Min. 60% off | Toys & games | Made for Amazon"
            linkTo1="/Toys"
            linkTo2="/Toys"
            linkTo3="/Toys"
            linkTo4="/Toys"
            linkTo5="/Toys"
          />
          <Aceproduct
            title1="Up to 40% off | Acer Laptops"
            title2="Up to 50% off | Loreal paris"
            title3="Up to 50% off | TCL TVs"
            title4="Up to 75% off | BoAt"
            imgSrc1="./assets/box-3/13.jpg"
            imgSrc2="./assets/box-3/14.jpg"
            imgSrc3="./assets/box-3/15.jpg"
            imgSrc4="./assets/box-3/16.jpg"
            heading="Great Indian Festival | Brands in focus"
            linkTo1="/laptops"
            linkTo2="/DailyNeeds"
            linkTo3="/HomeAppliances"
            linkTo4="/AirpodsAndWatch"
            linkTo5="/AirpodsAndWatch"
          />
        </div>
        {(windowWidth > 800 ? true : false) && (
          <ProductSliderTwo
            sliderTwo={sliderTwo_2}
            heading1={"Shop deals in top categories"}
            heading2={"Explore all categories"}
          />
        )}
      </div>
      <Footer backToTop={"/"} />
    </>
  );
};

export default Home;
