import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Link to={`/product/${product.id}`} className="block group">
        <div className="glass-card overflow-hidden">
          <div className="relative aspect-square overflow-hidden rounded-t-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {product.originalPrice && (
              <span className="absolute top-3 left-3 gradient-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            )}
          </div>
          <div className="p-3.5">
            <h3 className="text-sm font-semibold text-foreground truncate">{product.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium text-foreground">{product.rating}</span>
              <span className="text-xs text-muted-foreground">({product.reviews})</span>
            </div>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-foreground">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addItem(product);
                }}
                className="p-2 rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity active:scale-95"
              >
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
