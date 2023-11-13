import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { Axios } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await Axios(url);
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
