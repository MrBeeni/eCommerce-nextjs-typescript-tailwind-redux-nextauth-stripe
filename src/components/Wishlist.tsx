"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType, StateProps } from "../../type";
import { X } from "lucide-react";
import { addToCart, deleteFavorite, resetFavorite } from "@/redux/storeSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Wishlist = () => {
  const { favoriteData } = useSelector((state: StateProps) => state.storeState);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReset = () => {
    const confirmReset = window.confirm(
      "Are you sure you want to reset your Cart?"
    );
    if (confirmReset) {
      dispatch(resetFavorite());
      toast.success("Cart Reset Successfully");
      router.push("/");
    }
  };

  return (
    <>
      {favoriteData.length > 0 ? (
        <div className="mt-5 flex flex-col">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-white uppercase bg-zinc-950">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Information
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CATEGORY
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BRAND
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              {favoriteData.map((item: ProductType) => (
                <tbody key={item?._id}>
                  <tr className="bg-white border-b-[1px] border-b-zinc-300">
                    <th
                      scope="row"
                      className="px-6 py-4 flex items-center gap-3"
                    >
                      <X
                        onClick={() => {
                          dispatch(deleteFavorite(item?._id)),
                            toast.success(
                              `${item.title} is removed from Wishlist!`
                            );
                        }}
                        className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
                      />
                      <Image
                        src={item?.image}
                        alt="proudct image"
                        width={500}
                        height={500}
                        className="w-24 object-contain"
                      />
                      <p className="text-base font-medium text-black">
                        {item?.title}
                      </p>
                    </th>
                    <td className="px-6 py-4">
                      <FormattedPrice amount={item?.price} />
                    </td>
                    <td className="px-6 py-4 flex items-center gap-4">
                      {item.category}
                    </td>
                    <td className="px-6 py-4">{item.brand}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => {
                          dispatch(addToCart(item)),
                            toast.success(`${item?.title} is added to Cart!`);
                        }}
                        className=" duration-200  font-bold hover:text-designColor"
                      >
                        Add to card
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <button
            onClick={handleReset}
            className="bg-zinc-950 text-zinc-200 w-36 py-3 mt-5 rounded-md uppercase text-xs font-semibold hover:bg-red-700 hover:text-white duration-200"
          >
            Reset Wishlist
          </button>
        </div>
      ) : (
        <div className="py-10 flex flex-col gap-1 items-center justify-center">
          <p className="text-lg font-bold">Your Wishlist is Empty</p>
          <Link
            href={"/"}
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
          >
            Go back to Shopping
          </Link>
        </div>
      )}
    </>
  );
};

export default Wishlist;
