"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuItem, formatPrice } from "@/lib/data";
import { motion } from "motion/react";

function getTagClasses(tagType?: string) {
  switch (tagType) {
    case "popular":
    case "fusion":
      return "bg-tertiary-container text-on-tertiary-container";
    case "spicy":
      return "bg-primary-container text-on-primary-container";
    case "signature":
      return "bg-secondary-container text-on-secondary-container";
    case "new":
      return "bg-tertiary-container text-on-tertiary-container";
    case "side":
      return "bg-surface-variant text-on-surface-variant";
    default:
      return "bg-surface-variant text-on-surface-variant";
  }
}

export default function MenuCard({
  item,
  variant = "default",
}: {
  item: MenuItem;
  variant?: "default" | "compact" | "bento";
}) {
  if (variant === "bento") {
    return (
      <Link href={`/menu/${item.id}`} className="group relative bg-surface-container-low rounded-[2rem] p-6 hover:bg-surface-container transition-colors duration-300 flex flex-col items-start mt-12">
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden absolute -top-12 right-6 shadow-[0_20px_40px_rgba(175,39,0,0.15)] border-4 border-surface-container-lowest"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="mt-32 w-full">
          {item.tag && (
            <span
              className={`${getTagClasses(item.tagType)} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block font-[var(--font-label)]`}
            >
              {item.tag}
            </span>
          )}
          <h3 className="font-[var(--font-headline)] text-2xl font-bold mb-2 text-on-surface">
            {item.name}
          </h3>
          <p className="font-[var(--font-body)] text-on-surface-variant text-sm mb-6 line-clamp-2">
            {item.description}
          </p>
          <div className="flex items-center justify-between w-full mt-auto">
            <span className="font-[var(--font-headline)] font-extrabold text-xl text-primary">
              {formatPrice(item.price)}
            </span>
            <motion.span
              className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors shadow-sm"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="material-symbols-outlined">add</span>
            </motion.span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link href={`/menu/${item.id}`} className="bg-surface-container-low rounded-xl overflow-hidden flex flex-col group">
        <div className="h-48 bg-surface-container relative overflow-hidden">
          <motion.div
            className="h-full w-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </motion.div>
          {item.tag && (
            <div
              className={`absolute top-3 right-3 ${getTagClasses(item.tagType)} px-2 py-1 rounded-sm text-[10px] uppercase font-bold font-[var(--font-label)] z-10`}
            >
              {item.tag}
            </div>
          )}
        </div>
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          <h3 className="font-[var(--font-headline)] text-base sm:text-lg font-bold text-on-surface mb-1">
            {item.name}
          </h3>
          <p className="font-[var(--font-body)] text-xs text-on-surface-variant mb-4 flex-grow line-clamp-2">
            {item.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-[var(--font-headline)] text-base sm:text-lg font-black text-on-surface">
              {formatPrice(item.price)}
            </span>
            <motion.span
              className="bg-secondary-container text-on-secondary-container px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold font-[var(--font-body)]"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Add
            </motion.span>
          </div>
        </div>
      </Link>
    );
  }

  // Default: full card
  return (
    <Link href={`/menu/${item.id}`} className="bg-surface-container-low rounded-xl overflow-visible relative group">
      <div className="h-52 sm:h-64 rounded-t-xl bg-surface-container overflow-hidden relative">
        <motion.div
          className="h-full w-full relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </motion.div>
        {item.tag && (
          <div
            className={`absolute top-4 right-4 ${getTagClasses(item.tagType)} px-3 py-1 rounded-sm text-xs uppercase font-bold font-[var(--font-label)] z-10`}
          >
            {item.tag}
          </div>
        )}
      </div>
      <div className="p-4 sm:p-6 relative">
        <h3 className="font-[var(--font-headline)] text-lg sm:text-xl font-bold text-on-surface mb-2">
          {item.name}
        </h3>
        <p className="font-[var(--font-body)] text-sm text-on-surface-variant mb-4">
          {item.description}
        </p>
        {item.sauces && (
          <div className="mb-6">
            <label className="font-[var(--font-label)] text-xs uppercase font-bold text-on-surface-variant block mb-2">
              Choose Sauce
            </label>
            <div className="flex flex-wrap gap-2">
              {item.sauces.map((sauce) => (
                <motion.span
                  key={sauce}
                  className="px-3 py-1 rounded-sm border border-outline-variant/30 text-xs text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors font-[var(--font-body)]"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sauce}
                </motion.span>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between items-end mt-auto">
          <span className="font-[var(--font-headline)] text-xl sm:text-2xl font-black text-primary">
            {formatPrice(item.price)}
          </span>
          <motion.span
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(175,39,0,0.08)]"
            whileHover={{ scale: 1.15, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              add
            </span>
          </motion.span>
        </div>
      </div>
    </Link>
  );
}
