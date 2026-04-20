"use client";

import { useState } from "react";
import { getMenuByCategory } from "@/lib/data";
import MenuCard from "@/components/MenuCard";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  PageTransition,
  motion,
  AnimatePresence,
} from "@/components/Motion";

const categories = [
  { key: "all", label: "Tất cả", icon: "apps" },
  { key: "combo", label: "Combo", icon: "takeout_dining" },
  { key: "original", label: "Original", icon: "local_fire_department" },
  { key: "fusion", label: "Fusion", icon: "auto_awesome" },
  { key: "side", label: "Món kèm", icon: "fastfood" },
];

const sectionMeta: Record<string, { label: string; border: string }> = {
  combo: { label: "Combo All-in-one", border: "border-primary" },
  original: { label: "Gà Original", border: "border-secondary" },
  fusion: { label: "Gà Fusion", border: "border-tertiary" },
  side: { label: "Món Ăn Kèm", border: "border-outline" },
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredItems = getMenuByCategory(activeCategory);

  const combos = filteredItems.filter((i) => i.category === "combo");
  const originals = filteredItems.filter((i) => i.category === "original");
  const fusions = filteredItems.filter((i) => i.category === "fusion");
  const sides = filteredItems.filter((i) => i.category === "side");

  const sections = [
    { key: "combo", items: combos, variant: "default" as const },
    { key: "original", items: originals, variant: "compact" as const },
    { key: "fusion", items: fusions, variant: "bento" as const },
    { key: "side", items: sides, variant: "compact" as const },
  ];

  return (
    <PageTransition>
      <div className="pb-28 md:pb-24">
        {/* Hero / Category Filter */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-6 sm:pb-8">
          <FadeUp>
            <h1 className="font-[var(--font-headline)] text-[2.5rem] sm:text-[3.5rem] leading-none font-black text-on-surface tracking-tight mb-6 sm:mb-8">
              The Menu
            </h1>
          </FadeUp>

          {/* Category Chips */}
          <FadeUp delay={0.15}>
            <div className="flex overflow-x-auto gap-2 sm:gap-3 pb-4 snap-x hide-scrollbar">
              {categories.map((cat) => (
                <motion.button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`snap-start shrink-0 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-[var(--font-body)] font-bold text-sm tracking-wide transition-colors duration-300 flex items-center gap-2 ${
                    activeCategory === cat.key
                      ? "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-[0_8px_20px_rgba(175,39,0,0.2)]"
                      : "bg-surface-container-lowest text-on-surface shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:bg-surface-container"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]" style={activeCategory === cat.key ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                    {cat.icon}
                  </span>
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </FadeUp>
        </section>

        {/* Menu Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {sections
                .filter((s) => s.items.length > 0)
                .map((section) => (
                  <div key={section.key} className="mb-16 sm:mb-20">
                    <FadeUp>
                      <h2 className={`font-[var(--font-headline)] text-xl sm:text-2xl font-bold text-on-surface mb-6 sm:mb-8 border-l-4 ${sectionMeta[section.key].border} pl-4`}>
                        {sectionMeta[section.key].label}
                      </h2>
                    </FadeUp>

                    <StaggerContainer
                      className={
                        section.variant === "default"
                          ? "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                          : section.variant === "bento"
                          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                          : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                      }
                      staggerDelay={0.08}
                    >
                      {section.items.map((item) => (
                        <StaggerItem key={item.id}>
                          <MenuCard item={item} variant={section.variant} />
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
