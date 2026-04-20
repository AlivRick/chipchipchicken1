"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMenuItem, menuItems, formatPrice } from "@/lib/data";
import MenuCard from "@/components/MenuCard";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  MagneticButton,
  PageTransition,
  RotateIn,
  motion,
} from "@/components/Motion";

export default function ProductDetailClient({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const item = getMenuItem(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedChickenType, setSelectedChickenType] = useState(
    item?.chickenTypes?.[0] || ""
  );
  const [selectedSauce, setSelectedSauce] = useState<string | null>(null);

  if (!item) {
    return (
      <div className="max-w-7xl mx-auto px-6 pt-32 text-center">
        <h1 className="font-[var(--font-headline)] text-4xl font-bold mb-4">
          Không tìm thấy sản phẩm
        </h1>
        <Link href="/menu" className="text-primary hover:underline">
          Quay lại Menu
        </Link>
      </div>
    );
  }

  const relatedItems = menuItems
    .filter((i) => i.id !== item.id && i.category === item.category)
    .slice(0, 3);

  return (
    <PageTransition>
      <div className="pb-28 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-12">
          {/* Back */}
          <FadeUp>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors mb-6 font-[var(--font-body)] text-sm"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Quay lại menu
            </Link>
          </FadeUp>

          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
            {/* Image */}
            <RotateIn>
              <div className="relative group">
                <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-[2rem] transform -rotate-2 z-0" />
                <div className="absolute -inset-3 sm:-inset-4 bg-secondary/5 rounded-[2rem] transform rotate-2 z-0" />
                <motion.div
                  className="relative z-10 bg-surface-container-lowest rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(175,39,0,0.08)] aspect-square"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {item.tag && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-primary-container text-on-primary-container px-4 py-2 rounded-full font-[var(--font-headline)] font-bold text-sm tracking-wide uppercase shadow-lg inline-flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        local_fire_department
                      </span>
                      {item.tag}
                    </motion.span>
                  )}
                </motion.div>
              </div>
            </RotateIn>

            {/* Details */}
            <div className="flex flex-col relative z-10">
              <FadeUp delay={0.2}>
                <div className="mb-6 sm:mb-8">
                  <h1 className="font-[var(--font-headline)] text-3xl sm:text-[3.5rem] leading-[1.1] font-black text-on-surface tracking-[-0.02em] mb-3 sm:mb-4">
                    {item.name}
                  </h1>
                  <p className="font-[var(--font-headline)] text-2xl sm:text-3xl font-extrabold text-primary mb-4 sm:mb-6">
                    {formatPrice(item.price)}
                  </p>
                  <p className="font-[var(--font-body)] text-base sm:text-lg text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeUp>

              {/* Options Card */}
              <FadeUp delay={0.35}>
                <div className="space-y-6 sm:space-y-8 bg-surface-container-low p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] mb-6 sm:mb-8">
                  {/* Chicken Type */}
                  {item.chickenTypes && (
                    <div>
                      <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">restaurant</span>
                        Chọn loại gà
                      </h3>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {item.chickenTypes.map((type) => (
                          <motion.label
                            key={type}
                            className="cursor-pointer relative"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                          >
                            <input
                              type="radio"
                              name="chicken_type"
                              value={type}
                              checked={selectedChickenType === type}
                              onChange={() => setSelectedChickenType(type)}
                              className="peer sr-only"
                            />
                            <div className="p-3 sm:p-4 rounded-xl text-center bg-surface-container-lowest border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                              <span className="font-[var(--font-body)] font-semibold block text-on-surface text-sm sm:text-base">
                                {type}
                              </span>
                            </div>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Add-ons */}
                  {item.addons && (
                    <div>
                      <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">add_circle</span>
                        Thêm món kèm
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {item.addons.map((addon) => (
                          <motion.label
                            key={addon.name}
                            className="flex items-center justify-between p-3 sm:p-4 bg-surface-container-lowest rounded-xl cursor-pointer hover:bg-surface-variant/30 transition-colors"
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center gap-3">
                              <input
                                type="checkbox"
                                className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/50 bg-surface-variant/50"
                              />
                              <span className="font-[var(--font-body)] font-medium text-on-surface text-sm sm:text-base">
                                {addon.name}
                              </span>
                            </div>
                            <span className="font-[var(--font-headline)] font-bold text-secondary text-sm">
                              +{formatPrice(addon.price)}
                            </span>
                          </motion.label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sauces */}
                  {item.sauces && (
                    <div>
                      <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">soup_kitchen</span>
                        Chọn sốt
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {item.sauces.map((sauce) => (
                          <motion.button
                            key={sauce}
                            onClick={() => setSelectedSauce(selectedSauce === sauce ? null : sauce)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-xl text-sm font-[var(--font-body)] font-medium transition-all ${
                              selectedSauce === sauce
                                ? "bg-primary text-on-primary shadow-md"
                                : "bg-surface-container-lowest border-2 border-transparent hover:border-primary hover:bg-primary/5"
                            }`}
                          >
                            {sauce}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>

              {/* Info */}
              <FadeUp delay={0.45}>
                <div className="bg-secondary-container/20 p-4 sm:p-6 rounded-2xl flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <span className="material-symbols-outlined text-secondary-dim text-2xl sm:text-3xl mt-1">info</span>
                  <div>
                    <h4 className="font-[var(--font-headline)] font-bold text-on-secondary-container mb-1 text-sm sm:text-base">
                      Bữa ăn hoàn chỉnh
                    </h4>
                    <p className="font-[var(--font-body)] text-xs sm:text-sm text-on-surface-variant">
                      Phần ăn được phục vụ trong hộp &apos;All-in-one&apos; tiện lợi, bao gồm gà, sốt, đồ chua ăn kèm và một ly nước ngọt cỡ vừa.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Actions — sticky on mobile */}
              <FadeUp delay={0.55}>
                <div className="flex items-center gap-3 sm:gap-4 bg-surface-container-lowest p-3 sm:p-4 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_40px_rgba(175,39,0,0.05)] fixed bottom-20 left-4 right-4 md:static md:bottom-auto z-20">
                  <div className="flex items-center bg-surface-container-low rounded-xl px-1 sm:px-2 h-12 sm:h-14">
                    <motion.button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors text-on-surface"
                      whileTap={{ scale: 0.85 }}
                    >
                      <span className="material-symbols-outlined text-lg">remove</span>
                    </motion.button>
                    <span className="font-[var(--font-headline)] font-bold text-lg w-8 text-center">
                      {quantity}
                    </span>
                    <motion.button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-lg hover:bg-surface-variant transition-colors text-on-surface"
                      whileTap={{ scale: 0.85 }}
                    >
                      <span className="material-symbols-outlined text-lg">add</span>
                    </motion.button>
                  </div>
                  <MagneticButton className="flex-1">
                    <button className="w-full h-12 sm:h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-[var(--font-headline)] font-bold text-base sm:text-lg flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(175,39,0,0.2)]">
                      <span className="material-symbols-outlined text-xl">shopping_cart</span>
                      Thêm · {formatPrice(item.price * quantity)}
                    </button>
                  </MagneticButton>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Related Products */}
          {relatedItems.length > 0 && (
            <section className="mt-16 sm:mt-32">
              <FadeUp>
                <h2 className="font-[var(--font-headline)] text-2xl sm:text-3xl font-black mb-8 sm:mb-10 border-l-8 border-primary pl-4 tracking-tight">
                  Món bạn có thể thích
                </h2>
              </FadeUp>
              <StaggerContainer
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                staggerDelay={0.1}
              >
                {relatedItems.map((relatedItem) => (
                  <StaggerItem key={relatedItem.id}>
                    <HoverCard>
                      <MenuCard item={relatedItem} variant="compact" />
                    </HoverCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </section>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
