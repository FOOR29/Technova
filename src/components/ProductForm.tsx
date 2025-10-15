// No logic changed, only visuals + form validation improvements

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ editingProduct, onSuccess }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (editingProduct) reset(editingProduct);
    else
      reset({
        sku: "",
        name: "",
        brand: "",
        quantity: "",
        price: "",
        category: "",
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
      className="bg-[#043150] text-white rounded-2xl shadow-lg p-8 max-w-md w-full mx-auto mt-8"
    >
      {/* 🧾 Title */}
      <h2 className="text-2xl font-bold text-center mb-6 text-[#25A2D8]">
        {editingProduct ? "Edit Product" : "Create Product"}
      </h2>

      <div className="grid gap-4">
        {/* SKU */}
        <div>
          <label className="block text-sm font-semibold mb-1">SKU</label>
          <input
            {...register("sku", {
              required: "SKU is required",
              maxLength: { value: 20, message: "Max 20 characters" },
            })}
            placeholder="Enter SKU"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.sku && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.sku.message)}
            </p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            placeholder="Enter name"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.name.message)}
            </p>
          )}
        </div>

        {/* Brand */}
        <div>
          <label className="block text-sm font-semibold mb-1">Brand</label>
          <input
            {...register("brand", {
              required: "Brand is required",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            placeholder="Enter brand"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.brand && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.brand.message)}
            </p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold mb-1">Quantity</label>
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 0, message: "Cannot be negative" },
            })}
            placeholder="Enter quantity"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.quantity && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.quantity.message)}
            </p>
          )}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-semibold mb-1">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Cannot be negative" },
            })}
            placeholder="Enter price"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.price && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.price.message)}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-semibold mb-1">Category</label>
          <input
            {...register("category", {
              required: "Category is required",
              maxLength: { value: 30, message: "Max 30 characters" },
            })}
            placeholder="Enter category"
            className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:ring-2 focus:ring-[#25A2D8] outline-none"
          />
          {errors.category && (
            <p className="text-red-400 text-xs mt-1">
              {String(errors.category.message)}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#25A2D8] hover:bg-[#1d8ac1] text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
        >
          {editingProduct ? "Update" : "Create"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
