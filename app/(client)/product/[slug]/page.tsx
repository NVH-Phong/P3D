import Container from "@/components/Container";
import { getProductBySlug } from "@/sanity/helpers/queries";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  return (
    <div>
      <Container>SingleProductPage</Container>
    </div>
  );
};

export default SingleProductPage;
