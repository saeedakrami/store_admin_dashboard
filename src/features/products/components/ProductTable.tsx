import type { Product } from "../types/product";

type ProductTableProps = {
  products: Product[];
};

const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
