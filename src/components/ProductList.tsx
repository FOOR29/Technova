import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "../services/productService"
import ProductCard from "./ProductCard"

const ProductList = ({ onEdit }: { onEdit: (p: any) => void }) => {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    const res = await getProducts()
    setProducts(res.data)
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id)
      loadProducts()
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {products.map((p: any) => (
        <ProductCard key={p.id} product={p} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default ProductList