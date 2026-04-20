export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "combo" | "original" | "fusion" | "side";
  tag?: string;
  tagType?: "popular" | "spicy" | "fusion" | "signature" | "new" | "side";
  sauces?: string[];
  chickenTypes?: string[];
  addons?: { name: string; price: number }[];
}

// Local images: /images/ga1.png, ga2.png, ga3.png, ga4.png
// Stitch CDN images for food items

export const menuItems: MenuItem[] = [
  // ═══════════════════ COMBO ALL-IN-ONE ═══════════════════
  {
    id: "combo-dinh-cao",
    name: "Combo Đỉnh Cao",
    description:
      "Gà Original giòn rụm, khoai tây chiên cắt múi cau vàng ươm, salad bắp cải tươi mát — tất cả trong hộp All-in-one tiện lợi.",
    price: 125000,
    image: "/images/ga1.png",
    category: "combo",
    tag: "Popular",
    tagType: "popular",
    sauces: ["Sốt Kem", "Sốt Cay"],
    addons: [
      { name: "Thêm 1 miếng gà", price: 25000 },
      { name: "Nước ngọt size L", price: 10000 },
    ],
  },
  {
    id: "combo-nang-luong",
    name: "Combo Năng Lượng",
    description:
      "Gà Fusion phủ sốt đặc trưng theo lựa chọn, khoai tây chiên sợi, salad bắp cải — bữa trưa năng lượng trọn vẹn.",
    price: 145000,
    image: "/images/ga2.png",
    category: "combo",
    sauces: ["Pesto", "Trứng Muối", "Parsley"],
    addons: [
      { name: "Thêm 1 miếng gà", price: 25000 },
      { name: "Khoai tây mặt cười", price: 15000 },
    ],
  },
  {
    id: "combo-gia-dinh",
    name: "Combo Gia Đình",
    description:
      "6 miếng gà Original, 2 phần khoai tây chiên, 2 phần salad bắp cải, 4 sốt tự chọn — chia sẻ cùng người thân yêu.",
    price: 329000,
    image: "/images/ga3.png",
    category: "combo",
    tag: "Best Value",
    tagType: "popular",
    sauces: ["Sốt Kem", "Sốt Cay", "Pesto", "Trứng Muối"],
  },
  {
    id: "combo-doi",
    name: "Combo Đôi",
    description:
      "2 phần gà Original hoặc Fusion, 2 phần khoai tây, 2 salad, 2 nước — date thêm ngon.",
    price: 235000,
    image: "/images/ga4.png",
    category: "combo",
    tag: "New",
    tagType: "new",
    sauces: ["Sốt Kem", "Sốt Cay", "Pesto", "Trứng Muối"],
  },

  // ═══════════════════ GÀ ORIGINAL ═══════════════════
  {
    id: "canh-ga-gion",
    name: "Cánh Gà Giòn Rụm",
    description:
      "3 cánh gà chiên giòn truyền thống, da vàng ruộm giòn tan, thịt mọng nước đậm đà.",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
    category: "original",
    tag: "Classic",
    tagType: "popular",
    sauces: ["Sốt Kem", "Sốt Cay"],
  },
  {
    id: "dui-ga-gion",
    name: "Đùi Gà Giòn Rụm",
    description:
      "2 đùi gà to chiên giòn, vỏ ngoài cực giòn, thịt bên trong thấm vị tới xương.",
    price: 79000,
    image:
      "https://images.unsplash.com/photo-1615328713353-0ed2b1a91cd2?w=500&h=500&fit=crop",
    category: "original",
    sauces: ["Sốt Kem", "Sốt Cay"],
  },
  {
    id: "ga-khong-xuong",
    name: "Gà Không Xương",
    description:
      "Miếng gà phi lê tẩm bột chiên giòn, gia vị bí truyền cay nồng — ăn là ghiền.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
    category: "original",
    tag: "Spicy",
    tagType: "spicy",
    sauces: ["Sốt Kem", "Sốt Cay"],
  },
  {
    id: "ga-nguyen-con",
    name: "Gà Nguyên Con",
    description:
      "1 con gà chiên nguyên con giòn rụm, phần ăn dành cho 3-4 người. Da giòn, thịt mềm, thấm đều gia vị.",
    price: 259000,
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop",
    category: "original",
    tag: "Cho nhóm",
    tagType: "popular",
    sauces: ["Sốt Kem", "Sốt Cay"],
  },

  // ═══════════════════ GÀ FUSION ═══════════════════
  {
    id: "ga-fusion-pesto",
    name: "Gà Fusion sốt Pesto",
    description:
      "Gà Original giòn rụm phủ sốt Pesto húng quế Ý thơm lừng, béo ngậy. Vị Á-Âu bùng nổ trong từng miếng cắn.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1606758227628-247fcee13370?w=500&h=500&fit=crop",
    category: "fusion",
    tag: "Best Seller",
    tagType: "fusion",
    chickenTypes: ["Cánh", "Đùi", "Không xương"],
    addons: [
      { name: "Khoai tây mặt cười", price: 15000 },
      { name: "Salad bắp cải", price: 10000 },
    ],
  },
  {
    id: "ga-sot-trung-muoi",
    name: "Gà Sốt Trứng Muối",
    description:
      "Lớp sốt trứng muối mặn ngọt béo ngậy áo đều từng miếng gà giòn. Hương vị Signature không thể bỏ lỡ.",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
    category: "fusion",
    tag: "Signature",
    tagType: "signature",
    chickenTypes: ["Cánh", "Đùi", "Không xương"],
    addons: [
      { name: "Khoai tây mặt cười", price: 15000 },
      { name: "Salad bắp cải", price: 10000 },
    ],
  },
  {
    id: "ga-sot-parsley",
    name: "Gà Sốt Parsley Bơ Tỏi",
    description:
      "Gà giòn tưới sốt bơ tỏi thơm nức kết hợp rau mùi tây Parsley tươi xanh. Vị thanh nhẹ mà đậm đà.",
    price: 85000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
    category: "fusion",
    tag: "New",
    tagType: "new",
    chickenTypes: ["Cánh", "Đùi", "Không xương"],
    addons: [
      { name: "Khoai tây mặt cười", price: 15000 },
      { name: "Salad bắp cải", price: 10000 },
    ],
  },
  {
    id: "ga-sot-mat-ong-cay",
    name: "Gà Sốt Mật Ong Cay",
    description:
      "Gà giòn phủ sốt mật ong cay ngọt — cay nồng trước, ngọt dịu sau. Gây nghiện từ miếng đầu tiên.",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&h=500&fit=crop",
    category: "fusion",
    tag: "Spicy",
    tagType: "spicy",
    chickenTypes: ["Cánh", "Đùi", "Không xương"],
    addons: [
      { name: "Khoai tây mặt cười", price: 15000 },
      { name: "Salad bắp cải", price: 10000 },
    ],
  },

  // ═══════════════════ MÓN ĂN KÈM ═══════════════════
  {
    id: "khoai-tay-mui-cau",
    name: "Khoai Tây Chiên Múi Cau",
    description:
      "Khoai tây cắt múi cau chiên giòn vàng, bên ngoài giòn tan bên trong mềm dẻo, rắc muối biển.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1599599650435-75ea97119e6c?w=500&h=500&fit=crop",
    category: "side",
    tag: "Side",
    tagType: "side",
  },
  {
    id: "khoai-tay-soi",
    name: "Khoai Tây Chiên Sợi",
    description:
      "Khoai tây sợi mỏng giòn rụm kiểu Hàn, lắc phô mai hoặc xí muội siêu cuốn.",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1585238341710-4abb3c8a95a6?w=500&h=500&fit=crop",
    category: "side",
  },
  {
    id: "khoai-tay-mat-cuoi",
    name: "Khoai Tây Mặt Cười",
    description:
      "Khoai tây hình mặt cười chiên giòn vui mắt — món khoái khẩu của cả trẻ em lẫn người lớn.",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1585238341710-4abb3c8a95a6?w=500&h=500&fit=crop",
    category: "side",
    tag: "Hot",
    tagType: "popular",
  },
  {
    id: "salad-bap-cai",
    name: "Salad Bắp Cải Tươi",
    description:
      "Bắp cải trắng tím thái sợi trộn sốt mayo-chanh, giòn mát chống ngấy hoàn hảo.",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=500&fit=crop",
    category: "side",
    tag: "Healthy",
    tagType: "new",
  },
  {
    id: "nuoc-ngot",
    name: "Nước Ngọt",
    description:
      "Coca-Cola, Pepsi, Sprite, Fanta — size M đá lạnh sảng khoái.",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1554866585-cd4628902d4a?w=500&h=500&fit=crop",
    category: "side",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

export function getMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

export function getMenuByCategory(category: string): MenuItem[] {
  if (category === "all") return menuItems;
  return menuItems.filter((item) => item.category === category);
}
