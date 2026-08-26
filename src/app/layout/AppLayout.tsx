import { ProductPage } from "../../features/products";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <ProductPage />
      </main>
    </>
  );
};

export default AppLayout;
