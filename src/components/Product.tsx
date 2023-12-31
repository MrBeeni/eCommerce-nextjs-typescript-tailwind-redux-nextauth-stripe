"use client";

import Link from "next/link";
import { ProductType, StateProps } from "../../type";
import Image from "next/image";
import { Heart } from "lucide-react";
import FormattedPrice from "./FormattedPrice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorite } from "@/redux/storeSlice";

interface Item {
  products: ProductType[];
}

const Product = ({ products }: Item) => {
  const { favoriteData } = useSelector((state: StateProps) => state.storeState);

  const isFavorite = (productId: any) => {
    return favoriteData.some((favoriteItem) => favoriteItem._id === productId);
  };

  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
      {products.map((item) => (
        <div
          key={item._id}
          className="relative bg-white group  rounded-lg duration-500 hover:shadow-2xl  hover:scale-105   overflow-hidden"
        >
          <Link
            href={{
              pathname: `/product-detail/${item?._id}`,
            }}
          >
            <Image
              src={item?.image}
              alt="Product image"
              width={500}
              height={500}
              className="w-full h-80 object-contain lg:object-cover "
            />
          </Link>
          <Heart
            stroke="none"
            fill={isFavorite(item._id) ? "red" : "black"}
            onClick={() => {
              dispatch(addToFavorite(item));
              if (isFavorite(item?._id)) {
                toast.error(`${item.title} removed from favorites!`);
              } else {
                toast.success(`${item.title} added to favorites!`);
              }
            }}
            className="absolute top-4 right-4 text-zinc-500 w-5 h-5 hover:text-black cursor-pointer duration-200"
          />
          <div className="p-4 bg-zinc-100 group-hover:bg-zinc-50 group-hover:shadow-xl duration-300">
            <p className="group-hover:text-designColor duration-300">
              {item?.title}
            </p>
            <p className="font-semibold">
              <FormattedPrice amount={item?.price} />
            </p>
            <div className="flex items-center justify-between text-sm mt-2">
              <button
                onClick={() => {
                  dispatch(addToCart(item)),
                    toast.success(`${item?.title} is added to Cart!`);
                }}
                className="uppercase font-semibold hover:text-designColor duration-300"
              >
                Add to cart
              </button>
              <Link
                className="uppercase font-semibold hover:text-designColor duration-300"
                href={{
                  pathname: `/product-detail/${item?._id}`,
                }}
              >
                More Info
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
