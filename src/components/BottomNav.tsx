import { Home, Grid3X3, ShoppingCart, Package, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", to: "/" },
  { icon: Grid3X3, label: "Categories", to: "/categories" },
  { icon: ShoppingCart, label: "Cart", to: "/cart" },
  { icon: Package, label: "Orders", to: "/orders" },
  { icon: User, label: "Profile", to: "/profile" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong safe-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <item.icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.8} />
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full gradient-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
                <span className="text-[10px] font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
