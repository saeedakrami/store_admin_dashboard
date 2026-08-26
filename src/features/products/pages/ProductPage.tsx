import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import SearchBox from "../components/SearchBox";
import type { Product } from "../types/product";

const ProductPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 5;
  const products: Product[] = [
    { id: 1, name: "iPhone 16", category: "Mobile", price: 999 },
    { id: 2, name: "MacBook Pro", category: "Laptop", price: 1999 },
    { id: 3, name: "AirPods Pro", category: "Audio", price: 249 },
  ];

  return (
    <>
      <h1>Products</h1>
      <SearchBox value={search} onChange={setSearch} />
      <CategoryFilter value={category} onChange={setCategory} />
      <ProductTable products={products} />
      <Pagination page={page} onPageChange={setPage} totalPages={totalPages} />
    </>
  );
};

export default ProductPage;
