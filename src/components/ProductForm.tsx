import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { postProduct, updateProduct } from "../services/productService";
import type { ProductFormData, ProductFormProps } from "../types";

const ProductForm = ({ editingProduct, onSuccess }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      sku: "",
      name: "",
      brand: "",
      quantity: 0,
      price: 0,
      isActive: true,
      category: "",
    },
  });

  useEffect(() => {
    if (editingProduct) reset(editingProduct);
  }, [editingProduct, reset]);

  const onSubmit = async (data: ProductFormData) => {
    try {
      if (editingProduct) {
        await updateProduct(editingProduct.id, data);
        alert("✅ Product updated successfully!");
      } else {
        await postProduct(data);
        alert("✅ Product created successfully!");
      }

      onSuccess();
      reset();
    } catch (error: any) {
      alert(error.response?.data?.message || "❌ Error saving product");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg mx-auto border border-[#e5e7eb]"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#043150]">
        {editingProduct ? "Edit Product" : "Create Product"}
      </h2>

      <div className="grid gap-4">
        {/* SKU */}
        <div>
          <label className="text-[#043150] font-medium">SKU</label>
          <input
            type="text"
            {...register("sku", { required: "SKU is required" })}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
          {errors.sku && (
            <p className="text-red-500 text-sm">{errors.sku.message}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="text-[#043150] font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Brand */}
        <div>
          <label className="text-[#043150] font-medium">Brand</label>
          <input
            type="text"
            {...register("brand")}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-[#043150] font-medium">Category</label>
          <input
            type="text"
            {...register("category")}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="text-[#043150] font-medium">Quantity</label>
          <input
            type="number"
            {...register("quantity", {
              valueAsNumber: true,
              min: { value: 0, message: "Quantity must be positive" },
            })}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm">{errors.quantity.message}</p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="text-[#043150] font-medium">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              valueAsNumber: true,
              required: "Price is required",
              min: {
                value: 0.01,
                message: "Price must be a positive number",
              },
            })}
            className="border border-gray-300 rounded-md p-2 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* Active */}
        <label className="flex items-center gap-2 mt-2 text-[#043150]">
          <input
            type="checkbox"
            {...register("isActive")}
            className="accent-[#25A2D8]"
          />
          Active
        </label>

        <button
          type="submit"
          className="bg-[#25A2D8] text-white py-2 rounded-md mt-4 font-semibold hover:bg-[#1d8ac1] transition-all"
        >
          {editingProduct ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
