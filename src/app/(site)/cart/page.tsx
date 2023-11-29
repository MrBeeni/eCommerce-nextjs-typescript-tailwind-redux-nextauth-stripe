import Cart from "@/components/Cart";
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const Page = () => {
  return (
    <Container className="min-h-fit">
      <Title title="Your Cart" />
      <Cart />
    </Container>
  );
};

export default Page;
