import axios from "axios";

export type GetProductsParams = {
  search: string;
  category: string;
  page: number;
};

export async function getProducts({
  search,
  category,
  page,
}: GetProductsParams) {
  const response = await axios.get("/products", {
    params: {
      search,
      category,
      page,
    },
  });

  return response.data;
}
