import React, { useContext } from "react";
import productData from "./Context";
const Productgrid = ({ productArray }) => {
  const [data, dispatch] = useContext(productData);
  const addToCart = (e) => {
    const alreadyInCart = data.filter((element) => element.imgSrc === e.imgSrc);
    if (alreadyInCart.length) {
      alert("Already Added In Cart");
    } else {
      dispatch({ type: "addToCart", value: e });
      window.location.reload();
    }
  };
  return (
    <>
      <div className=" grid w-full grid-cols-1 min-[500px]:grid-cols-2 min-[800px]:grid-cols-3 min-[1200px]:grid-cols-4">
        {/* <div className=" grid w-full grid-cols-4 "> */}
        {productArray.map((e, i) => (
          <div
            key={i}
            className="px-5 pt-5 pb-3 border-[1px] border-gray-400 grid bg-white content-between min-h-[400px] min-[500px]:"
          >
            <div>
              <div className="grid place-items-center  py-3">
                <img
                  src={e.imgSrc}
                  alt="image"
                  className="object-contain h-56 min-[500px]:h-32"
                />
              </div>
              <div>
                <h1 className="font-semibold text-base min-[500px]:text-sm py-1  min-[800px]:text-lg">
                  {e.heading}
                </h1>
              </div>
            </div>
            <div>
              <div className="flex ">
                {Array(e.rating)
                  .fill("./assets/star.png")
                  .map((e, i) => (
                    <img key={i} src={e} className="h-3 w-3" />
                  ))}
              </div>
              <div className="min-h-11 flex items-end gap-2 ">
                <span className="flex ">
                  <span className="self-start text-lg">₹</span>
                  <span className="text-xl font-semibold">{e.finalPrice}</span>
                </span>
                <span className="text-slate-500 font-semibold text-sm">
                  M.R.P:
                </span>{" "}
                <span className="line-through text-sm text-slate-500 font-semibold">
                  ₹{e.mrp}
                </span>{" "}
                <span>{`(${e.offerPercent}% off)`}</span>
              </div>
              <div className="text-base ">Free Delivery By Amazon</div>
              <div className="flex justify-center py-2  ">
                <button
                  onClick={() => addToCart(e)}
                  className="bg-yellow-400 hover:bg-yellow-300 w-[80%] py-1 h-8 rounded-full text-lg active:!shadow-none outline-yellow-600"
                  style={{ boxShadow: "2px 4px 8px 1px grey" }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productgrid;
