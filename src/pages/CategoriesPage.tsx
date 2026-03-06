import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 glass-strong">
        <div className="flex items-center gap-3 px-4 h-14 max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Categories</h1>
          <button className="ml-auto p-2 rounded-xl hover:bg-muted/50 transition-colors">
            <SlidersHorizontal className="w-5 h-5" strokeWidth={1.8} />
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["All", ...categories.map((c) => c.name)].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                cat === activeCategory
                  ? "gradient-primary text-primary-foreground"
                  : "glass text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default CategoriesPage;
