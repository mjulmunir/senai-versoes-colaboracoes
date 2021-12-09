export interface NavbarItem {
  name: string;
  ref: string;
}

export const NAVBAR_ITEMS: NavbarItem[] = [
  { name: "Todas as categorias", ref: "#" },
  { name: "Novidades", ref: "#" },
  { name: "Promoções", ref: "promotion" },
  { name: "Kits", ref: "#" },
];
