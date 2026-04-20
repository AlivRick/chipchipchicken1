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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0aF8UWDxLFneCxIhhxlHE69EXToO5dNlA958Yc1hbpFha_NXoJA0xWpugU0nlZaJFXFm5Ufr0hGc4q3N1miibzNgsKAlNy8xLJ6MgPsTbVX-accZMENSmL17JYHKpGvJFzmpp1LQPtXd2UjBBMzSnlrf1ywWH51wW6VvafKmRyHc8NJbjaHXeJvk8mChSBm_sg6J2R05vzs6goeoEhE_4zzKhFcSYNX2iXqnc-OpdRL_beDrwWgaLuWnWvXVaoyQxyhSVrPMVbz6v",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDY9T-OuSXCpw6G_T8xQlZPdN0X785JRUN00tOkzHzR-6Xbh58jwqiA9Wq5A1tzO0ikndTjU4xSN5VdoKvDWRFCQ_1RyXPpfeq3ZepWjZqHJ6cVkFkFZD43Vf2c_4GtGKw7Dw2xAa0rGDH0a6won1_as5q2WCgGslE6qZ0Meb65QON_YY4hH6ypWQVWisR6jTrSHclndb3zXLlhYJJFm2bfdSQildnqazUt6qL-p7OvB1yyRbsNLeCqbJKD5_4ut6mplMzXzRzjRI0G",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD3CsRzRZ89TsGB9kty5H4RPDUQguIEhx2FaMBUD9p0Ult0F10ciGID1AYjgMm1UW8gA0dCgZNz6mxFapaWUX30BL2Ks-bgpqZxGF72Fh1aZESGYBzXKKgehq9OO3eo3OdSZsjs_ubIvwSgZosHTGG80qSS6TvHXBwZLRRO-o0H1w9sq6H-mBE8TtiI1LV2hFrA7Nocs7zsrxZxVe31miY3xiC3JIK9QWsPCFjySKNj1NSMXO8HHDtLcKpiOA0Zve_W7_5WyJul9QuZ",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA7nDsoH9_f48ltZGzZu0HKLnMfKPNFjEzFRHJElVzmfPiCTQofjPm5x6h1dnnnu78UbfkI0McC3MDNdXfrVpCAGR0vXe4Ucis3CEKj6XxgdKd8wI9oTlCIUAw5A4tT0anEmWdNo-DSiWnz5OLcbWx5izIqra-4ufmOSD7h1-xlIyTPBn_sdVCvXU2S8uulb4jGJ8HdQxPG6Add_5Iy7XM1rzdmg_3Ayp8msvzYbbNYdKyJgrNH9nLidwjiUxXcJqE64HCMtfqtUUWU",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlfHvQpn63CV8ROJewSgd9EQQJ2RPeMPIg5QFVkbzhxn7VW21U03jdvxBtCPO1Zoq1iOlXVtyYRAiNIF3KHMtlHxAUW9hj8evNT4mcycB4yFi11zngr0sztOMjiOpRSw9PsgH3DnvAuBxjyqvg0AunZkGN8YVIUPUQWEEbo5eQ5EUks8zC45zZ8nBMO_V6IZMS2PgMWAC0W5uwScHk8SCBdf0cjfL-RlCTE564ORTG8qDnKE4CowqYzpbnMQ99SZ0NGOczInAKzboq",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDB5bxs6vNOPa8QAHyaiJ0L9zM9nZ_5UYZ2TA7Q-9dOA5WhEREem0wzDLd9qyGcBvWmL-Ew1Br1Bi2TRjwYz4HcZyWAU1sHatDYU_r81buVje9L5vXLIc0lJZMPPeJBMU3W9VPAZU8RFg_4Cs2Rc18bFoc2vAR3Szn2gOQKlWLKTI7PIYEePnpuT3K86-YnJiwTQBthoIMWvrlPat-ZQRHTh0MJEquXMsu4iO-SzWgPFyDrw4SKtYq56Bdgeuh7ngYjlI7uFPRD-1rL",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqwCZm32WDJUJnYGrXnesgx4vYpmvCv0OS7QTGMSWnO5fvjf7wTJOVeFD2x49OeCTGZHyRu1j2S_Z5JjYZuAiCfV6QBracfDm3Cwy66sMAdkUywrmttgWwfodKVJ1UdJ1KyA-sfLcsPRty3K01LcM-VAvdKATTRtALHgR0I_C_FRra5O6hAQOnjo7Zp0gLOmqX3hN3MuPyudHzKtlJp-b_SwySRkOCqz1t9uCJCjbcwbK92V1UhBnLuf7E18muZAp14WCgWCmlkvxI",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIlqFuHtdjPEZKtF3_SZlTe7Xd5Jh47amc2s6M_QW17lswTeyW4xsYSWJE8H3jtzlpj5Dqu1EooQhUjmYsROm9kql4D1_QA_m9tf4XkYCclYzWYhMV0AV10eCvy5Ib9oVQj2ej5dda5RvfOI2nvXUbG5BqMTcFbQL3wdMbfnS70-IlRUItmwymmbk3DIeA1wFj31_VT-FVW2GUpbKkNuVAuxkSo2PVzM-hc5MMFF0JMvcHUQ_rKT04QfawddOnT2VocoxnLnqZmGNA",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLSditevH1M-zx4tiTylA46TtylNJrj2oSIbsGaNEkwwPb7Q-BdUMMLGSIetqup-BtcfeH8EhxaN-7g7BJFPXmLVlNko2feHCnRlEvzH3NW0lBLZFen5RsrR6tfG1iQtDoYy7BZN2IFdN2gcRbRA5ej4ZEVyK-Mgr8AWAYJjWi2dWDQw8Gt2hKd5UiqZtgfU54Llkku7aqhwkwvKFSxOLgojRbyKhxVSDeLK2Jb_gqGDKi2RfpXg0hjJNft9AXlgOcjI5v53wN34W",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLSditevH1M-zx4tiTylA46TtylNJrj2oSIbsGaNEkwwPb7Q-BdUMMLGSIetqup-BtcfeH8EhxaN-7g7BJFPXmLVlNko2feHCnRlEvzH3NW0lBLZFen5RsrR6tfG1iQtDoYy7BZN2IFdN2gcRbRA5ej4ZEVyK-Mgr8AWAYJjWi2dWDQw8Gt2hKd5UiqZtgfU54Llkku7aqhwkwvKFSxOLgojRbyKhxVSDeLK2Jb_gqGDKi2RfpXg0hjJNft9AXlgOcjI5v53wN34W",
    category: "side",
  },
  {
    id: "khoai-tay-mat-cuoi",
    name: "Khoai Tây Mặt Cười",
    description:
      "Khoai tây hình mặt cười chiên giòn vui mắt — món khoái khẩu của cả trẻ em lẫn người lớn.",
    price: 35000,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhLSditevH1M-zx4tiTylA46TtylNJrj2oSIbsGaNEkwwPb7Q-BdUMMLGSIetqup-BtcfeH8EhxaN-7g7BJFPXmLVlNko2feHCnRlEvzH3NW0lBLZFen5RsrR6tfG1iQtDoYy7BZN2IFdN2gcRbRA5ej4ZEVyK-Mgr8AWAYJjWi2dWDQw8Gt2hKd5UiqZtgfU54Llkku7aqhwkwvKFSxOLgojRbyKhxVSDeLK2Jb_gqGDKi2RfpXg0hjJNft9AXlgOcjI5v53wN34W",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEVf7eaaYXGKGAwm_dCZVJUtvyQDL0tn0IkItDAFqVd6oQRVyINVB8Qo9oPoDvj0wobV1I8mG7I50u3Xa-OfVp-e-L2TMkJvDgPEZz7P3DoayZundInyvpu0aLbL-J7lXtGTmAsTNyTTbHrwlf3PsWXrf7HprLI7RdU6t7sZnzqOOQuMlAsEXYQwHpxz8CTXrjJRfpk5lMc6ydo2uCMNsPJnEGY0AKsNd0IcDzvK6tY-DY_rhQs3F6OS0mNvO17fBOJyMm8Yjq3O38",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEVf7eaaYXGKGAwm_dCZVJUtvyQDL0tn0IkItDAFqVd6oQRVyINVB8Qo9oPoDvj0wobV1I8mG7I50u3Xa-OfVp-e-L2TMkJvDgPEZz7P3DoayZundInyvpu0aLbL-J7lXtGTmAsTNyTTbHrwlf3PsWXrf7HprLI7RdU6t7sZnzqOOQuMlAsEXYQwHpxz8CTXrjJRfpk5lMc6ydo2uCMNsPJnEGY0AKsNd0IcDzvK6tY-DY_rhQs3F6OS0mNvO17fBOJyMm8Yjq3O38",
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
