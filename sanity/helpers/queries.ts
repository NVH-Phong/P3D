import { defineQuery } from "next-sanity";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type =='product' && slug.current == $slug] | order(name asc) [0]`
  );
};
