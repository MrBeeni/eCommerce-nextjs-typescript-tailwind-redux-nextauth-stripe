"use client";
import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";
import { getProductsById } from "@/helpers";
import { useEffect, useState } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = ({ searchParams }: Props) => {
  const [product, setProduct] = useState<any>();
  const idString = searchParams?.id;
  console.log(searchParams);
  const id = Number(idString);

  useEffect(() => {
    const loadData = async () => {
      const product = await getProductsById(id);
      setProduct(product);
    };

    loadData();
  }, [id]);

  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <div>loading {id} </div>
      {/* <ProductDetails product={product} /> */}
    </Container>
  );
};

export default Page;
