import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import productData from "./Context";

const Cart = () => {
  const [data, dispatch] = useContext(productData);
  const [productsInCart, setProductsInCart] = useState(data);
  const [productsInSaved, setProductsInSaved] = useState(
    JSON.parse(localStorage.getItem("productsInSaved")) || []
  );
  const [cartState, setCartState] = useState({
    isCartHasProducts: productsInCart.length ? true : false,
    isProductsSaved: productsInSaved.length ? true : false,
  });

  useEffect(() => {
    setCartState({
      isCartHasProducts: productsInCart.length ? true : false,
      isProductsSaved: productsInSaved.length ? true : false,
    });
  }, [productsInCart, productsInSaved]);
  const [cartValue, setCartValue] = useState(0);

  useEffect(() => {
    let total = 0;
    productsInCart.map(
      (e) => (total += parseInt(e.finalPrice.replace(",", "")))
    );

    setCartValue(total);
  }, [productsInCart]);

  const qtyChanged = (thisElement, index) => {
    const modifidedCart = productsInCart.map((e, i) => {
      if (index === i) {
        if (e.cartFinalPrice) {
          return {
            ...e,
            // cartFinalPrice:e.finalPrice,
            finalPrice: (
              parseInt(e.cartFinalPrice.replace(",", "")) *
              parseInt(thisElement.target.value.replace("Qty: ", ""))
            ).toString(),
          };
        } else {
          return {
            ...e,
            cartFinalPrice: e.finalPrice,
            finalPrice: (
              parseInt(e.finalPrice.replace(",", "")) *
              parseInt(thisElement.target.value.replace("Qty: ", ""))
            ).toString(),
          };
        }
      } else return e;
    });
    setProductsInCart(modifidedCart);
  };
  const savedBtnDelete = (index) => {
    const modifidedCart = productsInSaved.filter((e, i) => i !== index);
    setProductsInSaved(modifidedCart);
    localStorage.setItem("productsInSaved", JSON.stringify(modifidedCart));
  };
  const btnDelete = (index) => {
    const modifidedCart = productsInCart.filter((e, i) => i !== index);
    setProductsInCart(modifidedCart);
    localStorage.setItem("productsInCart", JSON.stringify(modifidedCart));
  };
  const addToSaveLater = (index) => {
    const obj = productsInCart.filter((e, i) => i === index);
    const modifided = [...productsInSaved, obj[0]];
    setProductsInSaved(modifided);
    localStorage.setItem("productsInSaved", JSON.stringify(modifided));
    btnDelete(index);
  };
  const addToCart = (index) => {
    const obj = productsInSaved.filter((e, i) => i === index);
    const modifided = [...productsInCart, obj[0]];
    setProductsInCart(modifided);
    localStorage.setItem("productsInCart", JSON.stringify(modifided));
    savedBtnDelete(index);
  };
  return (
    <>
      <Header />
      <div className="bg-slate-200 min-h-[90vh] p-4 space-y-4">
        {!cartState.isCartHasProducts && (
          <section className="space-y-8 min-w-[70vw] flex-grow ">
            <div className=" w-full min-h-[18rem] bg-white px-4 flex">
              <div>
                <img
                  src="./assets/Cart/cartEmptylogo.svg"
                  alt="image"
                  className="h-[18rem]"
                />
              </div>
              <div className=" w-full p-8 space-y-6 pl-10">
                <div className="text-2xl font-semibold">
                  Your Amazon Cart is Empty
                </div>
                <a
                  className="text-blue-500 hover:text-orange-500 hover:underline"
                  href="/"
                >
                  shop todays's deals
                </a>
                <div className="flex space-x-4 ">
                  <button className="bg-yellow-400 hover:bg-yellow-300 py-[5px] rounded-md text-lg px-4">
                    Sign in to your account
                  </button>
                  <button className="border-[1px] border-slate-400 rounded-md px-4 hover:bg-slate-100 font-semibold">
                    Sign up now
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
        {cartState.isCartHasProducts && (
          <div className=" w-full flex space-x-8 justify-between ">
            <section className="space-y-8 min-w-[70vw] flex-grow ">
              <div className=" w-full min-h-[18rem] bg-white px-6">
                <div>
                  <div className="flex justify-between px-2  h-20 items-center border-b-[1px] border-slate-400">
                    <div>
                      <p className="text-3xl font-sans">Shopping Cart</p>
                    </div>
                    <div className="flex self-end">
                      <span className="self-end text-lg text-slate-600">
                        price
                      </span>
                    </div>
                  </div>
                </div>

                <div className="max-h-[30vw] overflow-y-scroll">
                  {productsInCart.map((e, index) => (
                    <div
                      key={index}
                      className="border-b-[1px] border-slate-400 flex  gap-x-5 p-4"
                    >
                      <div className="h-48 w-48 grid place-items-center ">
                        <img
                          src={e.imgSrc}
                          alt="image"
                          className="h-44 w-40 object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex flex-col gap-y-1 py-2">
                          <div>
                            <p className="w-[800px] font-semibold text-lg  flex-grow">
                              {e.heading}
                            </p>
                            <p className="text-xs font-bold text-green-700">
                              In stock
                            </p>
                            <p className="text-slate-700">
                              eligible for free shipping
                            </p>
                          </div>
                          <div className="flex space-x-1 ">
                            <input
                              type="checkbox"
                              id="displayCartCheckbox"
                              className="hover:cursor-pointer"
                            ></input>
                            <label
                              className="font-normal  hover:cursor-pointer select-none"
                              htmlFor="displayCartCheckbox"
                            >
                              This will be a gift
                            </label>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex gap-4 py-4">
                              <select
                                className="border-[1px] border-slate-500 rounded-md hover:cursor-pointer bg-slate-100 text-sm p-1 outline-none"
                                style={{ boxShadow: `0 0 6px 0 gray` }}
                                onChange={(thisElement) =>
                                  qtyChanged(thisElement, index)
                                }
                              >
                                <option>Qty: 1</option>
                                <option>Qty: 2</option>
                                <option>Qty: 3</option>
                                <option>Qty: 4</option>
                                <option>Qty: 5</option>
                              </select>
                              <button
                                onClick={() => btnDelete(index)}
                                className="text-blue-500 hover:underline text-sm"
                              >
                                Delete
                              </button>
                              <button
                                onClick={() => addToSaveLater(index)}
                                className="text-blue-500 hover:underline text-sm"
                              >
                                Save for later
                              </button>
                              <button>
                                <a
                                  className="text-blue-500 hover:underline text-sm "
                                  href={e.productsPath}
                                >
                                  See more like this
                                </a>
                              </button>
                            </div>
                            <div className="self-center">
                              {" "}
                              <span className="flex ">
                                <span className="self-start text-lg">₹</span>
                                <span className="text-lg font-semibold">
                                  {e.finalPrice}.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end h-16 py-1 items-center">
                  <div>
                    <p className="text-xl font-semibold">
                      {`Subtotal (${productsInCart.length} item):`}
                      <span className="inline-flex align-top">
                        <span className="text-sm font-bold  self-start ">
                          ₹
                        </span>
                        <span className="font-bold">{cartValue}.00</span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="w-[20vw] h-[18rem] bg-white grid px-4 py-10 justify-center">
                <div className="flex space-x-1">
                  <div className="bg-green-700 self-start rounded-full inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 text-white "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-700">
                      Your order is eligible for FREE Delivery.
                    </p>
                    <p className="text-xs  text-slate-600">
                      Select this option at checkout.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-xl font-semibold">
                      {`Subtotal (${productsInCart.length} item):`}
                      <span className="inline-flex align-top">
                        <span className="text-sm font-bold  self-start ">
                          ₹
                        </span>
                        <span className="font-bold">{cartValue}.00</span>
                      </span>
                    </p>
                  </div>
                  <div className="flex space-x-2 ">
                    <input
                      type="checkbox"
                      id="cartCheckbox"
                      className="hover:cursor-pointer"
                    ></input>
                    <label
                      className="font-normal text-slate-700 hover:cursor-pointer select-none"
                      htmlFor="cartCheckbox"
                    >
                      This order contains a gift
                    </label>
                  </div>
                </div>
                <div className="place-self-center w-full">
                  <button className="bg-yellow-400 hover:bg-yellow-300 py-[2px] w-full rounded-md text-lg px-4 ">
                    Proceed to Buy
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}
        {cartState.isProductsSaved && (
          <div className="w-full  min-h-[5rem] bg-white px-4">
            <div className="space-y-2 py-4">
              <div className="  p-2 flex items-center  border-b-[2px] border-slate-400">
                <div>
                  <p className="text-2xl font-semibold">{`Saved for later (${productsInSaved.length} items)`}</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-y-4">
                {productsInSaved.map((e, index) => (
                  <div className="px-4 " key={index}>
                    <div className=" inline-flex flex-col border-[1px] gap-y-2 border-gray-400 p-4 ">
                      <div>
                        <div className="grid place-items-center ">
                          <img
                            src={e.imgSrc}
                            alt="image"
                            className="object-contain h-40 "
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm h-[100px] overflow-hidden">
                          {e.heading}
                        </p>
                        <p className="text-xs font-bold text-green-700">
                          In stock
                        </p>
                        <div className="min-h-11 flex items-end gap-2 ">
                          <span className="flex ">
                            <span className="self-start text-lg">₹</span>
                            <span className="text-lg font-semibold">
                              {e.finalPrice}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center py-2  ">
                        <button
                          onClick={() => addToCart(index)}
                          className="bg-slate-50 hover:bg-slate-100 w-[80%] border-[1px] border-slate-500 rounded text-base "
                        >
                          Move to cart
                        </button>
                      </div>
                      <div>
                        <div className="flex flex-col items-start">
                          <button
                            onClick={() => savedBtnDelete(index)}
                            className="text-blue-500 hover:underline text-sm"
                          >
                            Delete
                          </button>
                          <button>
                            <a
                              className="text-blue-500 hover:underline text-sm "
                              href={e.productsPath}
                            >
                              See more like this
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {!cartState.isProductsSaved && (
          <div className="w-full  min-h-[5rem] bg-white "></div>
        )}
        <div className="text-sm">
          <p>
            The price and availability of items at Amazon.in are subject to
            change. The shopping cart is a temporary place to store a list of
            your items and reflects each item's most recent price.
          </p>
          <p>
            Do you have a promotional code? We'll ask you to enter your claim
            code when it's time to pay.
          </p>
        </div>
      </div>
      <Footer backToTop={"/Cart"} />
    </>
  );
};

export default Cart;
