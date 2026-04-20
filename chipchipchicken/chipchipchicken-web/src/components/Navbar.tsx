"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto w-full min-h-[70px] sm:min-h-[80px]">
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

          {/* Hamburger Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-on-surface rounded"
              animate={isMenuOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-on-surface rounded"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-on-surface rounded"
              animate={isMenuOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Side Menu */}
      <motion.div
        className="md:hidden fixed top-0 right-0 h-screen w-64 bg-surface z-40 shadow-[-10px_0_30px_rgba(0,0,0,0.1)]"
        initial={{ x: 280 }}
        animate={{ x: isMenuOpen ? 0 : 280 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="pt-24 px-6 space-y-2">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 8 }}
              whileTap={{ x: 4 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-4 px-4 rounded-xl font-[var(--font-headline)] font-bold text-lg transition-all ${
                  pathname === link.href
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface hover:bg-surface-container-lowest"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/30 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </motion.nav>
  );
}
