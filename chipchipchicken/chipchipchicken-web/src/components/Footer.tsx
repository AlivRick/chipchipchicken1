import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-surface-container-low mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="text-xl font-black italic tracking-tighter text-on-surface font-[var(--font-headline)]">
          ChipChipChicken
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-on-surface-variant font-[var(--font-body)]">
          <Link href="/menu" className="hover:text-primary transition-colors">
            Menu
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </div>

        <div className="text-sm uppercase tracking-widest text-on-surface-variant font-[var(--font-body)]">
          © 2024 ChipChipChicken Kinetic Kitchen.
        </div>
      </div>
    </footer>
  );
}
