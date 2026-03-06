import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const orders = [
  { id: "ORD-2841", date: "Mar 5, 2026", status: "Delivered", items: 3, total: 289.97, color: "bg-green-500" },
  { id: "ORD-2790", date: "Feb 28, 2026", status: "Shipped", items: 1, total: 449.00, color: "bg-blue-500" },
  { id: "ORD-2655", date: "Feb 15, 2026", status: "Processing", items: 2, total: 135.98, color: "bg-amber-500" },
];

const OrdersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-40 glass-strong">
        <div className="flex items-center gap-3 px-4 h-14 max-w-lg mx-auto">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-xl hover:bg-muted/50 transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
          </button>
          <h1 className="text-lg font-semibold text-foreground">My Orders</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pt-4 space-y-3">
        {orders.map((order, i) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-4 flex items-center gap-4 cursor-pointer hover:bg-muted/10 transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${order.color}/10 flex items-center justify-center`}>
              <div className={`w-3 h-3 rounded-full ${order.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-foreground">{order.id}</h3>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${order.color}/10 text-foreground`}>
                  {order.status}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{order.date} · {order.items} items</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-foreground">${order.total.toFixed(2)}</p>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50 ml-auto mt-1" />
            </div>
          </motion.div>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default OrdersPage;
