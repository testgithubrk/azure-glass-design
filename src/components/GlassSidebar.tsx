import { motion, AnimatePresence } from "framer-motion";
import { X, LayoutDashboard, Package, Heart, MapPin, CreditCard, Settings, HelpCircle, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/dashboard" },
  { icon: Package, label: "My Orders", to: "/orders" },
  { icon: Heart, label: "Wishlist", to: "/wishlist" },
  { icon: MapPin, label: "Addresses", to: "/addresses" },
  { icon: CreditCard, label: "Payments", to: "/payments" },
  { icon: Settings, label: "Settings", to: "/settings" },
  { icon: HelpCircle, label: "Help & Support", to: "/help" },
];

interface GlassSidebarProps {
  open: boolean;
  onClose: () => void;
}

const GlassSidebar = ({ open, onClose }: GlassSidebarProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 bottom-0 z-50 w-72 glass-strong flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-border/30">
              <h2 className="text-lg font-semibold text-gradient">Menu</h2>
              <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-muted/50 transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 py-3 overflow-y-auto">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={onClose}
                    className="flex items-center gap-3 px-5 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5" strokeWidth={1.8} />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border/30 p-3">
              <button className="flex items-center gap-3 px-5 py-3 w-full text-sm font-medium text-destructive/80 hover:text-destructive hover:bg-destructive/5 rounded-xl transition-all">
                <LogOut className="w-5 h-5" strokeWidth={1.8} />
                Logout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlassSidebar;
