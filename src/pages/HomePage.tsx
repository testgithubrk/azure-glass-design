import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Menu, Bell, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products, categories, banners } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import GlassSidebar from "@/components/GlassSidebar";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  return (
    <div className="min-h-screen bg-background pb-20">
      <GlassSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-40 glass-strong">
        <div className="flex items-center justify-between px-4 h-14 max-w-lg mx-auto">
          <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors">
            <Menu className="w-5 h-5 text-foreground" strokeWidth={1.8} />
          </button>
          <h1 className="text-lg font-bold text-gradient">ShopAzure</h1>
          <div className="flex items-center gap-1">
            <Link to="/search" className="p-2 rounded-xl hover:bg-muted/50 transition-colors">
              <Search className="w-5 h-5 text-foreground" strokeWidth={1.8} />
            </Link>
            <Link to="/notifications" className="p-2 rounded-xl hover:bg-muted/50 transition-colors relative">
              <Bell className="w-5 h-5 text-foreground" strokeWidth={1.8} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full gradient-primary" />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-6">
        {/* Banner Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={activeBanner}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-gradient-to-r ${banners[activeBanner].gradient} p-6 rounded-2xl min-h-[140px] flex flex-col justify-center`}
            >
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Featured</span>
              <h2 className="text-2xl font-bold text-white mt-1">{banners[activeBanner].title}</h2>
              <p className="text-sm text-white/80 mt-1">{banners[activeBanner].subtitle}</p>
              <button className="mt-3 self-start px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold hover:bg-white/30 transition-colors">
                Shop Now
              </button>
            </motion.div>
          </div>
          <div className="flex justify-center gap-1.5 mt-3">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveBanner(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeBanner ? "w-6 gradient-primary" : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">Categories</h3>
            <Link to="/categories" className="text-xs text-primary font-medium flex items-center gap-0.5">
              See All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Link key={cat.id} to={`/categories?cat=${cat.name}`} className="flex flex-col items-center gap-1.5 min-w-[64px]">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-2xl hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <span className="text-[11px] font-medium text-muted-foreground">{cat.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-foreground">Popular</h3>
            <Link to="/categories" className="text-xs text-primary font-medium flex items-center gap-0.5">
              See All <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default HomePage;
