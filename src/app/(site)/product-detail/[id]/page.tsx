"use client";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";
import { getProductsById } from "@/helpers";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = () => {
  const [product, setProduct] = useState<any>();
  const pathname = usePathname();
  const id = Number(pathname.split("/").pop());
  useEffect(() => {
    const loadData = async () => {
      const product = await getProductsById(id);
      setProduct(product);
    };

    loadData();
  }, [id]);

  return (
    <>
      {" "}
      {product ? (
        <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
          <ProductDetails product={product} />
        </Container>
      ) : (
        <div className="flex justify-center items-center h-[60vh]">
          <CircleLoader color="#fcb900" size={150} />
        </div>
      )}
    </>
  );
};

export default Page;
