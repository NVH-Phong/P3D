import Container from "@/components/Container";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div>
      <Container>SingleProductPage</Container>
    </div>
  );
};

export default SingleProductPage;
