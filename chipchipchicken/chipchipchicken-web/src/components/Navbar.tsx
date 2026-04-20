"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_rgba(175,39,0,0.05)]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex justify-between items-center px-4 sm:px-6 py-3  sm:py-4 max-w-7xl mx-auto w-full">
        {/* Brand */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-xl sm:text-2xl font-black italic tracking-tighter text-primary uppercase font-[var(--font-headline)]"
          >
            ChipChipChicken
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-[var(--font-headline)] font-bold tracking-tight">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary font-extrabold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Actions */}
        <motion.div
          className="flex items-center gap-3 sm:gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            className="text-primary"
            whileHover={{ scale: 1.15, rotate: -8 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
          </motion.button>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/menu"
              className="hidden sm:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full px-6 py-2 font-[var(--font-headline)] font-bold text-sm shadow-[0_20px_40px_rgba(175,39,0,0.2)]"
            >
              Order Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Bottom Nav */}
      <motion.div
        className="md:hidden fixed bottom-0 left-0 right-0 w-full rounded-t-3xl z-50 bg-surface-container-lowest/90 backdrop-blur-lg shadow-[0_-10px_30px_rgba(0,0,0,0.05)]"
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-around items-center px-4 pb-6 pt-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const icons: Record<string, string> = {
              "/": "home",
              "/menu": "restaurant_menu",
              "/about": "info",
            };
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center rounded-xl px-4 py-2"
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary-container/30 rounded-2xl"
                    layoutId="mobileNavIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span
                  className={`material-symbols-outlined mb-1 relative z-10 ${isActive ? "text-primary-dim" : "text-on-surface-variant"}`}
                  style={
                    isActive
                      ? { fontVariationSettings: "'FILL' 1" }
                      : undefined
                  }
                >
                  {icons[link.href]}
                </span>
                <span className={`text-[10px] uppercase font-bold tracking-widest font-[var(--font-body)] relative z-10 ${isActive ? "text-primary-dim" : "text-on-surface-variant"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
