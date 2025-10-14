import { useState } from "react";
import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Dashboard = () => {
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8 text-[#043150] text-center">
          Product Dashboard
        </h1>

        <ProductForm
          editingProduct={editingProduct}
          onSuccess={() => {
            setEditingProduct(null);
            setRefresh(!refresh);
          }}
        />

        <div className="mt-10">
          <ProductList onEdit={setEditingProduct} key={refresh.toString()} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
