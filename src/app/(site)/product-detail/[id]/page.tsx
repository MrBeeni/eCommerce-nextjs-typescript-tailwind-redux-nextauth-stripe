import Container from "@/components/Container";
import ProductDetails from "@/components/ProductDetails";
import { getProductsById } from "@/helpers";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page = async ({ searchParams }: Props) => {
  const idString = searchParams?.id;
  console.log(searchParams);
  const id = Number(idString);
  const product = await getProductsById(id);

  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <ProductDetails product={product} />
    </Container>
  );
};

export default Page;
