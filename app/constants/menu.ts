import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";

export const menus = [
  {
    title: "Dashboard",
    icon: Home,
    to: "/",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    to: "/order",
  },
  {
    title: "Products",
    icon: Package,
    to: "/product",
  },
  {
    title: "Customers",
    icon: Users,
    to: "/customer",
  },
  {
    title: "Analytics",
    icon: LineChart,
    to: "/analytic",
  },
];
