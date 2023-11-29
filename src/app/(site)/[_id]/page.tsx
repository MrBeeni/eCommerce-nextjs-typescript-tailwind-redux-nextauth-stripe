import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";
import { getProductsById } from "@/helpers";
import { useDispatch } from "react-redux";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const product = await getProductsById(_id);

  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <ProductDetails product={product} />
    </Container>
  );
};

export default Page;
