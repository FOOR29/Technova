import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ editingProduct, onSuccess }: any) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editingProduct) reset(editingProduct);
    else reset({
      sku: "",
      name: "",
      brand: "",
      quantity: 0,
      price: 0,
      category: "",
      imageUrl: "",
    });
  }, [editingProduct]);

  const onSubmit = handleSubmit(async (data) => {
    if (editingProduct) {
      await updateProduct(editingProduct.id, data);
    } else {
      await createProduct(data);
    }
    onSuccess();
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">
        {editingProduct ? "Edit Product" : "Create Product"}
      </h2>

      <div className="grid gap-3">
        <input {...register("sku")} placeholder="SKU" className="border p-2 rounded" />
        <input {...register("name")} placeholder="Name" className="border p-2 rounded" />
        <input {...register("brand")} placeholder="Brand" className="border p-2 rounded" />
        <input type="number" {...register("quantity")} placeholder="Quantity" className="border p-2 rounded" />
        <input type="number" step="0.01" {...register("price")} placeholder="Price" className="border p-2 rounded" />
        <input {...register("category")} placeholder="Category" className="border p-2 rounded" />
        <input {...register("imageUrl")} placeholder="Image URL" className="border p-2 rounded" />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {editingProduct ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
