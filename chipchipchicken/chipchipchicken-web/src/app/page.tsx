"use client";

import Image from "next/image";
import Link from "next/link";
import { menuItems, formatPrice } from "@/lib/data";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  HoverCard,
  MagneticButton,
  GlowPulse,
  Float,
  SlideReveal,
  PageTransition,
  motion,
} from "@/components/Motion";

export default function HomePage() {
  const bestSellers = menuItems.filter(
    (item) =>
      item.id === "ga-fusion-pesto" ||
      item.id === "ga-sot-trung-muoi" ||
      item.id === "combo-dinh-cao"
  );

  return (
    <PageTransition>
      <div className="pb-24 md:pb-16">
        {/* ══════════════ HERO ══════════════ */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 pt-4 sm:pt-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-surface-container-low rounded-2xl md:rounded-xl p-6 sm:p-8 lg:p-16 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-secondary-container/20 rounded-full blur-[80px]" />

            <div className="lg:w-1/2 z-10">
              <FadeUp delay={0.1}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 font-[var(--font-label)]">
                  Kinetic Street Gourmet
                </span>
              </FadeUp>

              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-primary-dim mb-6 leading-[1.05]">
                <TextReveal text="Bữa ăn trọn vẹn" delay={0.2} />
                <br />
                <TextReveal text="trong một hộp giấy" delay={0.5} />
              </h1>

              <FadeUp delay={0.7}>
                <p className="font-[var(--font-body)] text-base sm:text-lg lg:text-xl text-on-surface-variant mb-8 max-w-md">
                  Trải nghiệm ẩm thực đường phố hiện đại, đầy đủ dinh dưỡng,
                  nhanh gọn và bùng nổ hương vị.
                </p>
              </FadeUp>

              <FadeUp delay={0.9}>
                <MagneticButton>
                  <Link
                    href="/menu"
                    className="inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full px-8 py-4 font-[var(--font-headline)] font-bold text-lg hover:shadow-[0_20px_40px_rgba(175,39,0,0.35)] transition-shadow duration-500 shadow-[0_20px_40px_rgba(175,39,0,0.2)]"
                  >
                    Đặt hàng ngay
                  </Link>
                </MagneticButton>
              </FadeUp>
            </div>

            <FadeIn
              direction="right"
              delay={0.4}
              className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[600px] w-full"
            >
              <Float amplitude={8} duration={4}>
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/ga1.png"
                    alt="Crispy Fried Chicken"
                    fill
                    className="object-cover rounded-2xl transform rotate-3 scale-110"
                    priority
                  />
                  {/* Shine overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </Float>
            </FadeIn>
          </div>
        </section>

        {/* ══════════════ ALL-IN-ONE CONCEPT ══════════════ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
          <FadeUp>
            <h2 className="font-[var(--font-headline)] text-3xl sm:text-4xl font-extrabold tracking-tight text-on-surface mb-10 sm:mb-12 text-center">
              Mô hình{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
                All-in-one
              </span>
            </h2>
          </FadeUp>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            staggerDelay={0.12}
          >
            {[
              {
                icon: "restaurant_menu",
                title: "Protein",
                desc: "Gà rán giòn rụm hoặc gà nướng mọng nước, tẩm ướp đậm đà.",
                color: "primary-container",
                offset: "",
              },
              {
                icon: "rice_bowl",
                title: "Carb",
                desc: "Khoai tây chiên vàng ươm, cắt múi cau, sợi hoặc mặt cười.",
                color: "secondary",
                offset: "md:translate-y-4",
              },
              {
                icon: "eco",
                title: "Veggies",
                desc: "Salad bắp cải tươi mát cân bằng vị giác hoàn hảo.",
                color: "tertiary",
                offset: "md:translate-y-8",
              },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <HoverCard>
                  <div
                    className={`bg-surface-container-lowest p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-[0_20px_40px_rgba(175,39,0,0.05)] ${card.offset}`}
                  >
                    <div className={`text-${card.color} mb-4`}>
                      <span
                        className="material-symbols-outlined text-5xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-headline)] text-xl sm:text-2xl font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="font-[var(--font-body)] text-on-surface-variant text-sm sm:text-base">
                      {card.desc}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Packaging CTA */}
          <div className="mt-16 sm:mt-20 bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-hidden">
            <FadeIn direction="left" className="lg:w-1/2">
              <h3 className="font-[var(--font-headline)] text-2xl sm:text-3xl font-bold text-primary mb-4">
                Bao Bì Thiết Kế Riêng
              </h3>
              <p className="font-[var(--font-body)] text-base sm:text-lg text-on-surface-variant mb-6">
                Hộp giấy 2/3 ngăn thông minh, giữ nguyên hương vị từng phần
                ăn, chống sốc và thân thiện với môi trường.
              </p>
              <ul className="space-y-3 font-[var(--font-body)] text-on-surface">
                {["Ngăn cách thông minh", "Giữ nhiệt tốt", "Phân hủy sinh học"].map(
                  (item, i) => (
                    <FadeUp key={item} delay={0.1 * i}>
                      <li className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>{" "}
                        {item}
                      </li>
                    </FadeUp>
                  )
                )}
              </ul>
            </FadeIn>

            <SlideReveal
              direction="right"
              className="lg:w-1/2 h-[250px] sm:h-[300px] w-full rounded-2xl overflow-hidden relative"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEVf7eaaYXGKGAwm_dCZVJUtvyQDL0tn0IkItDAFqVd6oQRVyINVB8Qo9oPoDvj0wobV1I8mG7I50u3Xa-OfVp-e-L2TMkJvDgPEZz7P3DoayZundInyvpu0aLbL-J7lXtGTmAsTNyTTbHrwlf3PsWXrf7HprLI7RdU6t7sZnzqOOQuMlAsEXYQwHpxz8CTXrjJRfpk5lMc6ydo2uCMNsPJnEGY0AKsNd0IcDzvK6tY-DY_rhQs3F6OS0mNvO17fBOJyMm8Yjq3O38"
                alt="Packaging Concept"
                fill
                className="object-cover"
              />
            </SlideReveal>
          </div>
        </section>

        {/* ══════════════ BEST SELLERS ══════════════ */}
        <section className="bg-primary/5 py-16 sm:py-24 mb-20 md:mb-32 rounded-3xl mx-2 sm:mx-4 lg:mx-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeUp>
              <h2 className="font-[var(--font-headline)] text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-dim mb-10 sm:mb-16 text-center">
                Best Sellers
              </h2>
            </FadeUp>

            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              staggerDelay={0.15}
            >
              {bestSellers.map((item) => (
                <StaggerItem key={item.id}>
                  <HoverCard>
                    <Link
                      href={`/menu/${item.id}`}
                      className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(175,39,0,0.08)] group block"
                    >
                      <div className="h-52 sm:h-64 overflow-hidden relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {item.tag && (
                          <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider font-[var(--font-label)]">
                            {item.tag}
                          </div>
                        )}
                      </div>
                      <div className="p-5 sm:p-6">
                        <h3 className="font-[var(--font-headline)] text-xl sm:text-2xl font-bold mb-2">
                          {item.name}
                        </h3>
                        <p className="font-[var(--font-body)] text-on-surface-variant text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="font-[var(--font-headline)] text-lg sm:text-xl font-bold text-primary">
                            {formatPrice(item.price)}
                          </span>
                          <span className="bg-secondary-container text-on-secondary-container rounded-full px-5 py-2 font-[var(--font-headline)] font-bold text-sm">
                            Thêm
                          </span>
                        </div>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeUp delay={0.4} className="text-center mt-10 sm:mt-14">
              <MagneticButton className="inline-block">
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-primary font-[var(--font-headline)] font-bold text-lg hover:gap-4 transition-all duration-300"
                >
                  Xem toàn bộ menu
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </section>

        {/* ══════════════ TESTIMONIAL ══════════════ */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 text-center">
          <ScaleIn>
            <div className="bg-surface-container-lowest p-8 sm:p-12 rounded-2xl shadow-[0_20px_40px_rgba(175,39,0,0.05)] relative">
              <span
                className="material-symbols-outlined text-primary/20 text-5xl sm:text-6xl absolute top-4 sm:top-6 left-4 sm:left-6"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-[var(--font-headline)] text-xl sm:text-2xl lg:text-3xl font-bold italic text-on-surface mb-8 relative z-10 leading-relaxed">
                &ldquo;Đây thực sự là một bữa ăn trọn vẹn! Gà giòn, sốt đậm đà
                và đóng gói cực kỳ thông minh. Giải pháp hoàn hảo cho dân văn
                phòng bận rộn.&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvyY8JSPe0z1u5ROAtMtI5I8Ni6j0hTB-MO5ftfyTRt09VlfhtfGPWKuKrfzKy2bp7zTWKOp4J1pQj8SDrTiz7N4BGvIIT_uzHGlI4iKH9THzuFE9dFTjUIAHIhwWLVclWEyxkRTmFnROb2kWrO4mKiysdiEHDAFBQ3hEdQRzb7mOaK7KDKQyQQj-sNmNcFSyfScQRepSvYrqdxduu7yZ3rDFZHBItWVyDSbJe47Gkb0MPSihkZCM6wYUN8qRPYco-p_cQk3cqllOH"
                    alt="Customer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-[var(--font-headline)] font-bold text-on-surface">
                    Minh Anh
                  </h4>
                  <p className="font-[var(--font-body)] text-sm text-on-surface-variant">
                    Khách hàng thân thiết
                  </p>
                </div>
              </div>
            </div>
          </ScaleIn>
        </section>
      </div>
    </PageTransition>
  );
}
