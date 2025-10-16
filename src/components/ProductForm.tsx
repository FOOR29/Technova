import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createProduct, updateProduct } from "../services/productService"

const ProductForm = ({ editingProduct, onSuccess }: any) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editingProduct) reset(editingProduct)
    else
      reset({
        sku: "",
        name: "",
        brand: "",
        quantity: "",
        price: "",
        category: "",
      })
  }, [editingProduct])

  const onSubmit = handleSubmit(async (data) => {
    if (editingProduct) {
      await updateProduct(editingProduct.id, data)
    } else {
      await createProduct(data)
    }
    onSuccess()
    reset()
  })

  const handleClear = () => {
    reset({
      sku: "",
      name: "",
      brand: "",
      quantity: "",
      price: "",
      category: "",
    })
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 w-full mx-auto">
      <h2 className="text-xl font-bold text-[#043150] mb-6">{editingProduct ? "Edit Product" : "Add New Product"}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">SKU</label>
          <input
            {...register("sku", {
              required: "SKU is required",
              maxLength: { value: 20, message: "Max 20 characters" },
            })}
            placeholder="Enter SKU"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.sku && <p className="text-red-500 text-xs mt-1">{String(errors.sku.message)}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            placeholder="Enter name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{String(errors.name.message)}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">Brand</label>
          <input
            {...register("brand", {
              required: "Brand is required",
              maxLength: { value: 50, message: "Max 50 characters" },
            })}
            placeholder="Enter brand"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.brand && <p className="text-red-500 text-xs mt-1">{String(errors.brand.message)}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">Quantity</label>
          <input
            type="number"
            {...register("quantity", {
              required: "Quantity is required",
              min: { value: 0, message: "Cannot be negative" },
            })}
            placeholder="Enter quantity"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.quantity && <p className="text-red-500 text-xs mt-1">{String(errors.quantity.message)}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">Price</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Cannot be negative" },
            })}
            placeholder="Enter price"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.price && <p className="text-red-500 text-xs mt-1">{String(errors.price.message)}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-[#043150]">Category</label>
          <input
            {...register("category", {
              required: "Category is required",
              maxLength: { value: 30, message: "Max 30 characters" },
            })}
            placeholder="Enter category"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
          />
          {errors.category && <p className="text-red-500 text-xs mt-1">{String(errors.category.message)}</p>}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={handleClear}
          className="bg-[#403738] text-white font-medium px-8 py-2.5 rounded-lg hover:bg-[#4D4244] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Clear
        </button>
        <button
          type="submit"
          className="bg-[#25A2D8] text-white font-medium px-8 py-2.5 rounded-lg hover:bg-[#1d8ac1] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {editingProduct ? "Update Product" : "Create Product"}
        </button>
      </div>
    </form>
  )
}

export default ProductForm