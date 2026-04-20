"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FadeUp,
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  HoverCard,
  MagneticButton,
  SlideReveal,
  PageTransition,
  motion,
} from "@/components/Motion";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="overflow-x-hidden pb-24 md:pb-16">
        {/* ══════════════ HERO ══════════════ */}
        <header className="relative pt-16 sm:pt-24 pb-20 sm:pb-32 overflow-hidden bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">
            <div className="order-2 md:order-1 flex flex-col items-start space-y-4 sm:space-y-6">
              <FadeUp delay={0.1}>
                <span className="inline-block px-4 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-[var(--font-label)] text-xs uppercase tracking-widest font-bold">
                  The Concept
                </span>
              </FadeUp>

              <h1 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.02em] text-on-surface leading-tight">
                <TextReveal text="Kinetic" delay={0.2} />
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
                  <TextReveal text="Street Gourmet" delay={0.35} />
                </span>
              </h1>

              <FadeUp delay={0.6}>
                <p className="font-[var(--font-body)] text-base sm:text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                  Chúng tôi là cửa hàng gà rán &ldquo;All-in-one&rdquo; di động.
                  Một bữa ăn hoàn chỉnh — Protein, Carbs, và Fiber — phục vụ
                  với tốc độ đường phố, trong một chiếc hộp cách mạng.
                </p>
              </FadeUp>
            </div>

            <FadeIn direction="right" delay={0.3} className="order-1 md:order-2">
              <motion.div
                className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-[0_40px_80px_rgba(175,39,0,0.1)]"
                whileHover={{ rotate: 0 }}
                initial={{ rotate: 2 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMbsz1MCaAP8-uYzwxPAXSNpsV569ZOx2smSDvJp5Ia7ReQtb91dUoSKpTeGqAu3b9tedWg_7RG8HG-sZBvuNZ3OEFb7J7xcgKUN42sQGHDFOTcQYCDBGAZVyKw4HKhsaKAwylxjhEQrFeDUiUpdyr8SIN2GnOqswe8MkD4Nw8c-5rdqXxltqUT-EsSpmbghMEjfpPc_R2nu3gNSrrx17WXCNUSJybLjnUh0WRdqk33uYKP-E2UxPX4luNBUmQdYLJAkBUKL7PzYSW"
                  alt="Vibrant street food scene"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </FadeIn>
          </div>

          {/* Blobs */}
          <div className="absolute top-0 right-0 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-primary-container rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-secondary-container rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/3" />
        </header>

        {/* ══════════════ QUALITY ══════════════ */}
        <section className="py-16 sm:py-24 bg-surface relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <FadeUp className="mb-12 sm:mb-16 max-w-2xl">
              <h2 className="font-[var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4">
                Heat. Crunch. Fresh.
              </h2>
              <p className="font-[var(--font-body)] text-base sm:text-lg text-on-surface-variant">
                Bộ ba thánh của các hộp đặc trưng. Mỗi nguyên liệu được
                chọn lọc để tạo tác động giác quan tối đa.
              </p>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.12}>
              {[
                {
                  icon: "local_fire_department",
                  title: "The Core Protein",
                  desc: 'Chọn giữa gà "Original" giòn rụm hoặc khám phá các vị "Fusion" như Pesto, Trứng Muối.',
                  color: "primary",
                  bgColor: "bg-primary-container/20",
                  tags: ["Original", "Trứng Muối", "Pesto"],
                  tagColors: ["bg-primary-container text-on-primary-container", "bg-secondary-container text-on-secondary-container", "bg-tertiary-container text-on-tertiary-container"],
                },
                {
                  icon: "chips",
                  title: "The Carbs",
                  desc: "Khoai tây chiên đa dạng: múi cau, sợi, mặt cười. Vàng giòn, muối biển hoàn hảo.",
                  color: "secondary",
                  bgColor: "bg-secondary-container/30",
                  tags: [],
                  tagColors: [],
                },
                {
                  icon: "eco",
                  title: "The Fresh Finish",
                  desc: "Salad bắp cải tươi mát giòn tan, cân bằng vị béo ngậy, cung cấp chất xơ thiết yếu.",
                  color: "tertiary",
                  bgColor: "bg-tertiary-container/30",
                  tags: [],
                  tagColors: [],
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <HoverCard>
                    <div className="bg-surface-container-lowest rounded-[1.5rem] p-6 sm:p-8 shadow-[0_20px_40px_rgba(175,39,0,0.05)] relative overflow-hidden group h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-current/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
                      <div className={`w-14 sm:w-16 h-14 sm:h-16 rounded-full ${card.bgColor} flex items-center justify-center mb-5 sm:mb-6 text-${card.color}`}>
                        <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="font-[var(--font-headline)] text-xl sm:text-2xl font-bold mb-3">
                        {card.title}
                      </h3>
                      <p className="font-[var(--font-body)] text-on-surface-variant text-sm sm:text-base mb-4">
                        {card.desc}
                      </p>
                      {card.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {card.tags.map((tag, i) => (
                            <span key={tag} className={`px-3 py-1 ${card.tagColors[i]} text-xs font-[var(--font-label)] uppercase tracking-wider rounded-full font-bold`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ══════════════ PACKAGING ══════════════ */}
        <section className="py-20 sm:py-32 bg-surface-container-low relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-container-low to-surface-container" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
            <FadeUp className="text-center mb-12 sm:mb-20">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-[var(--font-label)] text-xs uppercase tracking-widest font-bold mb-4">
                Engineering the Meal
              </span>
              <h2 className="font-[var(--font-headline)] text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-4 sm:mb-6">
                Ngôi sao của bữa ăn:
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Bao bì</span>
              </h2>
              <p className="font-[var(--font-body)] text-base sm:text-xl text-on-surface-variant max-w-2xl mx-auto">
                Chúng tôi không chỉ thiết kế một chiếc hộp; chúng tôi kỹ thuật
                hóa trải nghiệm ăn uống. Hộp giấy 2 và 3 ngăn là bí mật
                của Kinetic Kitchen.
              </p>
            </FadeUp>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 auto-rows-[minmax(250px,auto)] sm:auto-rows-[minmax(300px,auto)]">
              {/* Main Visual */}
              <SlideReveal direction="left" className="md:col-span-8">
                <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(175,39,0,0.05)] group h-full">
                  <div className="relative h-full w-full min-h-[300px] sm:min-h-[400px]">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrza-clObOJ5ErVpo30HlSjzxdiGmQdeWE6y_oip_xit5zsk4G7zXUsYX8lD2lsbwhkppQizx1RYSkBPhEZYXfeci2Ih4NzbfSLbYQO5s8outsUMc33FjbJJSIv6UhgFyHkxoRdxdZyiewyKoLhgEzyZbUTWJ0sJ15GGjiJl7JyrrZHMcAPOrSZUS2punXq8QjMPAR6E5kecINYG__l1aiRWcOV41olx37swTxRNh7NYC2hQG9Y3cVK1d-_jVrDY_BPQElNkpL2XYv"
                      alt="3-Compartment Box"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                      <h3 className="font-[var(--font-headline)] text-2xl sm:text-3xl font-bold text-white mb-2">
                        Hộp 3 Ngăn
                      </h3>
                      <p className="font-[var(--font-body)] text-white/80 text-sm sm:text-base">
                        Protein, Carbs, và Fiber cách ly hoàn hảo.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideReveal>

              {/* Feature 1 */}
              <FadeUp delay={0.2} className="md:col-span-4">
                <HoverCard className="h-full">
                  <div className="bg-surface-container-lowest rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_rgba(175,39,0,0.05)] flex flex-col justify-center h-full">
                    <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center mb-5 sm:mb-6 text-secondary-dim">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                    </div>
                    <h4 className="font-[var(--font-headline)] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                      Không Khoai Ỉu
                    </h4>
                    <p className="font-[var(--font-body)] text-on-surface-variant leading-relaxed text-sm sm:text-base">
                      Các ngăn chuyên dụng giữ gà và khoai giòn, ngăn sốt salad
                      di chuyển sang phần khác.
                    </p>
                  </div>
                </HoverCard>
              </FadeUp>

              {/* Feature 2 */}
              <ScaleIn delay={0.1} className="md:col-span-4">
                <div className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_rgba(175,39,0,0.15)] flex flex-col justify-center h-full">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-5 sm:mb-6">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>recycling</span>
                  </div>
                  <h4 className="font-[var(--font-headline)] text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    100% Bền Vững
                  </h4>
                  <p className="font-[var(--font-body)] text-on-primary/90 leading-relaxed text-sm sm:text-base">
                    Làm từ giấy thân thiện môi trường, phân hủy sinh học.
                    Ăn nhanh mà không để lại dấu chân trên đường phố.
                  </p>
                </div>
              </ScaleIn>

              {/* Secondary Visual */}
              <SlideReveal direction="right" delay={0.15} className="md:col-span-8">
                <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(175,39,0,0.05)] group h-full">
                  <div className="relative h-full w-full min-h-[250px] sm:min-h-[300px]">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbT8ti318PY6fRvUuywsAuCO_nz1FRT6NuG5GUfUFKCBEFrtcRRmmNn1SGivivPOQixyZBrPDnxbhFPKUQXeu2fA3I_5dRCTZSxtNg9zB9pH3fQfb9voiforCVLR15JqdSqw5LhGFGEpzc-e7yjHMbFaqz-fEH0_eiivBIjAdIxLcWMuV4BNreMmI3EINLs4QbKu0XFRBRFftsFYs_Xq8VakzTL_3C3TcxMMJpsJHy81s48kKLQO9Be1vH0MS1bBH25kOSfcLAL_b1"
                      alt="2-Compartment Box"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 bg-surface-container-lowest/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg max-w-xs">
                      <h4 className="font-[var(--font-headline)] text-base sm:text-lg font-bold mb-1">
                        Hộp 2 Ngăn
                      </h4>
                      <p className="font-[var(--font-body)] text-xs sm:text-sm text-on-surface-variant">
                        Cho những ai thích đơn giản. Gà giòn, khoai nóng.
                      </p>
                    </div>
                  </div>
                </div>
              </SlideReveal>
            </div>
          </div>
        </section>

        {/* ══════════════ CTA ══════════════ */}
        <section className="py-20 sm:py-32 bg-surface relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] border border-outline-variant/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw] border border-outline-variant/15 rounded-full" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <ScaleIn>
              <h2 className="font-[var(--font-headline)] text-4xl sm:text-5xl md:text-7xl font-black tracking-[-0.02em] text-on-surface mb-6 sm:mb-8">
                Sẵn sàng thưởng thức
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-container">
                  Kinetic Kitchen?
                </span>
              </h2>
            </ScaleIn>
            <FadeUp delay={0.3}>
              <p className="font-[var(--font-body)] text-lg sm:text-xl text-on-surface-variant mb-8 sm:mb-12 max-w-2xl mx-auto">
                Cầm một hộp. Ra đường. Trải nghiệm gà rán gourmet
                được thiết kế cho cuộc sống hiện đại.
              </p>
            </FadeUp>
            <FadeUp delay={0.5}>
              <MagneticButton className="inline-block">
                <Link
                  href="/menu"
                  className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-[var(--font-headline)] text-lg sm:text-xl font-bold tracking-tight px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-[0_20px_40px_rgba(175,39,0,0.2)] inline-flex items-center gap-3"
                >
                  <span>Đặt hàng ngay</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'wght' 700" }}>
                    arrow_forward
                  </span>
                </Link>
              </MagneticButton>
            </FadeUp>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
