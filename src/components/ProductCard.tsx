// ✅ ProductCard Component (Redesigned - Minimalist & Professional Look)
// Only visual changes, no logic modifications.

interface ProductCardProps {
  product: any;
  onEdit: (p: any) => void;
  onDelete: (id: number) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => (
  <div
    className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center 
               hover:shadow-lg transition-all duration-300 border border-gray-100"
  >
    {/* 🧾 Product Info Section */}
    <div className="text-[#043150] mb-4 sm:mb-0">
      <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-500 text-sm mb-1">{product.brand}</p>
      <p className="text-gray-400 text-sm mb-2">{product.category}</p>
      <p className="text-[#25A2D8] font-bold text-base">${product.price}</p>
    </div>

    {/* ⚙️ Action Buttons */}
    <div className="flex gap-3 w-full sm:w-auto">
      <button
        onClick={() => onEdit(product)}
        className="flex-1 sm:flex-none bg-[#25A2D8] text-white font-medium px-4 py-2 rounded-xl 
                   hover:bg-[#1d8ac1] transition-all duration-300 shadow-sm"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(product.id)}
        className="flex-1 sm:flex-none bg-red-500 text-white font-medium px-4 py-2 rounded-xl 
                   hover:bg-red-600 transition-all duration-300 shadow-sm"
      >
        Delete
      </button>
    </div>
  </div>
);

export default ProductCard;
