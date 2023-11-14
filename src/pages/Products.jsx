import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { Axios } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  // params request, lấy ra các query tạo thành mảng các đối tượng
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // Gửi req kèm query tới server
  const response = await Axios.get(url, {
    params,
  });
  const products = response.data.data;
  const meta = response.data.meta;

  // Trả về mảng product, meta, và params
  return { products, meta, params };
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
