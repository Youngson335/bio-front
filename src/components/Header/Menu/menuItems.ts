import MenuItem from "./MenuItem";

const menuItems: MenuItem[] = [
  {
    id: 1,
    value: "recommendations",
    name: "рекомендации",
    route: "/recommendations",
    isActive: false
  },
  {
    id: 2,
    value: "gifts",
    name: "подарки", 
    route: "/gifts",
    isActive: false
  },
  {
    id: 3,
    value: "contacts",
    name: "контакты",
    route: "/contacts",
    isActive: false
  },
  {
    id: 4,
    value: "catalog",
    name: "каталог",
    route: "/catalog",
    isActive: false
  },
  {
    id: 5,
    value: "tracker",
    name: "трекер",
    route: "/tracker", 
    isActive: false
  },
  {
    id: 6,
    value: "reviews",
    name: "отзывы",
    route: "/reviews",
    isActive: false
  }
];

export default menuItems;