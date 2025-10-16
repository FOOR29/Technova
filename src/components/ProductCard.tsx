// ✅ ProductCard Component (Redesigned - Minimalist & Professional Look)
// Only visual changes, no logic modifications.

interface ProductCardProps {
  product: any;
  onEdit: (p: any) => void;
  onDelete: (id: number) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => (
  <div
    className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between 
               hover:shadow-xl transition-all duration-300 border border-gray-200 h-full"
  >
    {/* 🧾 Product Info Section */}
    <div className="mb-4">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-[#043150] leading-tight">{product.name}</h3>
        <span className="bg-[#25A2D8] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      
      <p className="text-[#403738] font-medium text-sm mb-1">{product.brand}</p>
      <p className="text-gray-500 text-xs mb-3">SKU: {product.sku}</p>
      
      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
        <div>
          <p className="text-[#25A2D8] font-bold text-2xl">${product.price}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500">Stock</p>
          <p className="text-sm font-semibold text-[#043150]">{product.quantity} units</p>
        </div>
      </div>
    </div>

    {/* ⚙️ Action Buttons */}
    <div className="flex gap-2">
      <button
        onClick={() => onEdit(product)}
        className="flex-1 bg-[#25A2D8] text-white font-medium px-4 py-2.5 rounded-lg 
                   hover:bg-[#1d8ac1] transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(product.id)}
        className="flex-1 bg-red-500 text-white font-medium px-4 py-2.5 rounded-lg 
                   hover:bg-red-600 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Delete
      </button>
    </div>
  </div>
);

export default ProductCard;