import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";
import ProductTable from "../components/ProductTable";
import SearchBox from "../components/SearchBox";

const ProductPage = () => {
  return (
    <>
      <h1>Products</h1>
      <SearchBox />
      <CategoryFilter />
      <ProductTable />
      <Pagination />
    </>
  );
};

export default ProductPage;
