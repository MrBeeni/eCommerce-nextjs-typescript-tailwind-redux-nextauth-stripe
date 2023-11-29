"use client";
import Image from "next/image";
import React from "react";
import { ProductType } from "../../type";
import FormattedPrice from "./FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/storeSlice";
import toast from "react-hot-toast";

interface iProps {
  product: ProductType;
}

const ProductDetails = ({ product }: iProps) => {
  const dispatch = useDispatch();
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            src={product?.image}
            alt="product image"
            width={400}
            height={400}
            className="transform transition-transform hover:scale-110 duration-500"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            {product?.isNew && (
              <div className="font-semibold mb-2 flex">
                <span className="text-white bg-designColor px-2 py-1 flex items-center justify-center rounded-md">
                  {" "}
                  New
                </span>
              </div>
            )}
            <h2 className="text-sm title-font text-gray-500 tracking-widest  flex items-center gap-4">
              <p>
                Brand: <span className="font-semibold">{product?.brand}</span>
              </p>
              <div className="h-4 w-[1px] bg-designColor inline-flex" />
              <p>
                Category:{" "}
                <span className="font-semibold">{product?.category}</span>
              </p>
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <p className="leading-relaxed">{product?.description}</p>

            <div className="flex">
              <span className=" font-medium text-2xl mt-5 text-gray-900 flex items-center gap-10">
                <FormattedPrice
                  amount={product?.price}
                  className="text-lg font-semibold"
                />
                <FormattedPrice
                  amount={product?.previousPrice}
                  className="text-zinc-500 line-through"
                />
              </span>
            </div>

            <button
              onClick={() => {
                dispatch(addToCart(product)),
                  toast.success(`${product?.title} is added to Cart!`);
              }}
              className="flex w-full justify-center mt-10 text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-designColor rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
