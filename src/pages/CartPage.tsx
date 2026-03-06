import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, Trash2, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const CartPage = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, totalPrice } = useCartStore();
  const [promoCode, setPromoCode] = useState("");

  const shipping = totalPrice() > 100 ? 0 : 9.99;
  const total = totalPrice() + shipping;

  return (
    <div className="min-h-screen bg-background pb-44">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-strong">
        <div className="flex items-center gap-3 px-4 h-14 max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Cart</h1>
          <span className="ml-auto text-sm text-muted-foreground">{items.length} items</span>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-5xl mb-4">🛒</p>
            <p className="text-lg font-semibold text-foreground">Your cart is empty</p>
            <p className="text-sm text-muted-foreground mt-1">Start adding some items!</p>
            <button
              onClick={() => navigate("/home")}
              className="mt-6 px-6 py-2.5 rounded-2xl gradient-primary text-primary-foreground text-sm font-semibold"
            >
              Browse Products
            </button>
          </motion.div>
        ) : (
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.product.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100, height: 0 }}
                className="glass-card p-3 flex gap-3"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-foreground truncate">{item.product.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.product.category}</p>
                  <p className="text-sm font-bold text-gradient mt-1">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-destructive/70" />
                  </button>
                  <div className="flex items-center gap-2 glass rounded-xl px-2 py-1">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                      <Minus className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                    <span className="text-xs font-semibold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                      <Plus className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        {items.length > 0 && (
          <>
            {/* Promo Code */}
            <div className="glass-card p-3 flex gap-2">
              <div className="flex items-center gap-2 flex-1 bg-muted/30 rounded-xl px-3">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code"
                  className="flex-1 bg-transparent text-sm py-2.5 outline-none placeholder:text-muted-foreground/60"
                />
              </div>
              <button className="px-4 py-2.5 rounded-xl gradient-primary text-primary-foreground text-sm font-semibold">
                Apply
              </button>
            </div>

            {/* Price Breakdown */}
            <div className="glass-card p-4 space-y-2.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium text-foreground">${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium text-foreground">
                  {shipping === 0 ? <span className="text-green-500">Free</span> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-border/50 pt-2.5 flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-lg font-bold text-gradient">${total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Checkout Button */}
      {items.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 glass-strong p-4 safe-bottom">
          <button className="w-full max-w-lg mx-auto block py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity active:scale-[0.98]">
            Checkout · ${total.toFixed(2)}
          </button>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default CartPage;
