import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Package, Heart, MapPin, CreditCard, Bell, Settings, HelpCircle, LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const menuSections = [
  {
    title: "Orders",
    items: [
      { icon: Package, label: "My Orders", to: "/orders" },
      { icon: Heart, label: "Wishlist", to: "/wishlist" },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: MapPin, label: "Addresses", to: "/addresses" },
      { icon: CreditCard, label: "Payment Methods", to: "/payments" },
      { icon: Bell, label: "Notifications", to: "/notifications" },
    ],
  },
  {
    title: "General",
    items: [
      { icon: Settings, label: "Settings", to: "/settings" },
      { icon: HelpCircle, label: "Help & Support", to: "/help" },
    ],
  },
];

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-strong">
        <div className="flex items-center gap-3 px-4 h-14 max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Profile</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-6 space-y-5">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-5 flex items-center gap-4"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground glow">
              A
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-card" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">Alex Johnson</h2>
            <p className="text-sm text-muted-foreground">alex@example.com</p>
          </div>
          <button className="px-3 py-1.5 rounded-xl glass text-xs font-semibold text-primary">
            Edit
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-3"
        >
          {[
            { label: "Orders", value: "12" },
            { label: "Wishlist", value: "8" },
            { label: "Reviews", value: "5" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-3 text-center">
              <p className="text-xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Menu Sections */}
        {menuSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + si * 0.05 }}
          >
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 ml-1">
              {section.title}
            </h3>
            <div className="glass-card overflow-hidden divide-y divide-border/30">
              {section.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-3 px-4 py-3.5 hover:bg-muted/20 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary/70" strokeWidth={1.8} />
                  <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                </Link>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full glass-card py-3.5 text-sm font-semibold text-destructive hover:bg-destructive/5 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </motion.button>
      </main>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
