interface ProductCardProps {
  product: any;
  onEdit: (p: any) => void;
  onDelete: (id: number) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => (
  <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center hover:shadow-lg transition">
    <div>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500">{product.brand}</p>
      <p className="text-sm text-gray-400">{product.category}</p>
      <p className="text-sm font-semibold">${product.price}</p>
    </div>

    <div className="flex gap-2">
      <button
        onClick={() => onEdit(product)}
        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(product.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  </div>
);

export default ProductCard;
