import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Star, Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Image Section */}
      <div className="relative">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />

        {/* Top Actions */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-2xl glass-strong"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => setLiked(!liked)}
            className="p-2.5 rounded-2xl glass-strong"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${liked ? "fill-red-500 text-red-500" : "text-foreground"}`}
            />
          </button>
        </div>

        {product.originalPrice && (
          <span className="absolute bottom-4 left-4 gradient-primary text-primary-foreground text-sm font-semibold px-3 py-1.5 rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>

      {/* Info Panel */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative -mt-6 rounded-t-3xl bg-background px-5 pt-6 pb-32"
      >
        <div className="w-10 h-1 rounded-full bg-muted mx-auto mb-5" />

        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">{product.name}</h1>
            <p className="text-sm text-muted-foreground mt-0.5">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gradient">${product.price}</p>
            {product.originalPrice && (
              <p className="text-sm text-muted-foreground line-through">${product.originalPrice}</p>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4 glass-card p-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{product.rating}</span>
          <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
        </div>

        {/* Description */}
        <div className="mt-5">
          <h3 className="text-sm font-semibold text-foreground mb-2">Description</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
        </div>

        {/* Colors */}
        {product.colors && (
          <div className="mt-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">Colors</h3>
            <div className="flex gap-2">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${i === 0 ? "border-primary scale-110" : "border-transparent"}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="mt-5 flex items-center gap-4">
          <h3 className="text-sm font-semibold text-foreground">Quantity</h3>
          <div className="flex items-center gap-3 glass-card px-3 py-1.5">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 rounded-lg hover:bg-muted/50">
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-semibold w-6 text-center">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="p-1 rounded-lg hover:bg-muted/50">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 glass-strong p-4 safe-bottom">
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl glass-card text-foreground font-semibold text-sm hover:bg-muted/30 transition-colors active:scale-[0.98]"
          >
            <ShoppingCart className="w-4.5 h-4.5" />
            Add to Cart
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
            <Zap className="w-4.5 h-4.5" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
