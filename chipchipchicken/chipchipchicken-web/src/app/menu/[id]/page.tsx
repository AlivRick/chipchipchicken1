import { menuItems } from "@/lib/data";
import ProductDetailClient from "./product-detail-client";

export async function generateStaticParams() {
  return menuItems.map((item) => ({
    id: item.id,
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <ProductDetailClient params={params} />;
}
