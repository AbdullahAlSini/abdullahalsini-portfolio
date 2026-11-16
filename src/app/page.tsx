"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Check, Globe2, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

type Language = "en" | "ar";

const copy = {
  en: {
    nav: ["About", "Skills", "Work", "Experience"],
    eyebrow: "Developer & creative thinker",
    title: "I turn complex ideas into simple, useful products.",
    intro: "I’m Abdullah Al Sini, a software developer based in Saudi Arabia. I care about the details that make digital experiences feel clear, human, and a little delightful.",
    work: "See my work",
    contact: "Let’s talk",
    scroll: "Scroll to explore",
    aboutLabel: "A little about me",
    aboutTitle: "Building at the intersection of logic and empathy.",
    aboutText: "From first sketch to final pixel, I enjoy making products that solve real problems. My approach combines a solid technical foundation with an eye for visual polish and a habit of asking “why?”",
    skillsLabel: "My toolkit",
    skillsTitle: "Tools I use to bring ideas to life.",
    skills: ["TypeScript", "React & Next.js", "Node.js", "UI / UX", "Tailwind CSS", "Git & GitHub"],
    workLabel: "Selected work",
    workTitle: "A few things I’m proud of.",
    projects: [
      { title: "Sahab dashboard", type: "Product design · Development", text: "A calmer way for operations teams to understand their data and make decisions.", color: "#dceeff" },
      { title: "Namaa community", type: "Brand · Web platform", text: "A warm, accessible platform connecting local makers with new opportunities.", color: "#ffe6df" },
      { title: "Mizaan finance", type: "Mobile experience", text: "Personal finance tools designed to make progress feel achievable.", color: "#e5f3e7" }
    ],
    experienceLabel: "Experience",
    experienceTitle: "Always learning, always shipping.",
    timeline: [
      ["2023 — Now", "Independent developer", "Partnering with ambitious people to design and build digital products."],
      ["2021 — 2023", "Frontend developer · Riyadh", "Created accessible interfaces and scalable systems for growing teams."],
      ["2019 — 2021", "Started coding", "Turned a curiosity about the web into a career I’m grateful for."]
    ],
    contactLabel: "Have a project in mind?",
    contactTitle: "Let’s make something meaningful.",
    contactText: "I’m currently open to select freelance projects and thoughtful collaborations.",
    footer: "Designed & built with care by Abdullah Al Sini."
  },
  ar: {
    nav: ["نبذة", "المهارات", "الأعمال", "الخبرة"],
    eyebrow: "مطور ومفكر مبدع",
    title: "أحوّل الأفكار المعقدة إلى منتجات بسيطة ومفيدة.",
    intro: "أنا عبدالله السني، مطور برمجيات من المملكة العربية السعودية. أهتم بالتفاصيل التي تجعل التجارب الرقمية واضحة وإنسانية وممتعة.",
    work: "استكشف أعمالي",
    contact: "لنتحدث",
    scroll: "مرر للاستكشاف",
    aboutLabel: "نبذة عني",
    aboutTitle: "أبني عند تقاطع المنطق والتعاطف.",
    aboutText: "من أول رسم وحتى آخر بكسل، أستمتع ببناء منتجات تحل مشاكل حقيقية. أجمع بين أساس تقني متين واهتمام بصري بالتفاصيل وشغف دائم بسؤال «لماذا؟».",
    skillsLabel: "أدواتي",
    skillsTitle: "أدوات أستخدمها لتحويل الأفكار إلى واقع.",
    skills: ["TypeScript", "React و Next.js", "Node.js", "تصميم UI / UX", "Tailwind CSS", "Git و GitHub"],
    workLabel: "أعمال مختارة",
    workTitle: "بعض المشاريع التي أفخر بها.",
    projects: [
      { title: "لوحة سحاب", type: "تصميم منتج · تطوير", text: "طريقة أبسط لفرق العمليات لفهم البيانات واتخاذ القرارات.", color: "#dceeff" },
      { title: "مجتمع نماء", type: "هوية · منصة ويب", text: "منصة دافئة وسهلة تربط صناع المنتجات بالفرص الجديدة.", color: "#ffe6df" },
      { title: "ميزان المالي", type: "تجربة جوال", text: "أدوات مالية شخصية تجعل تحقيق التقدم أمراً ممكناً.", color: "#e5f3e7" }
    ],
    experienceLabel: "الخبرة",
    experienceTitle: "أتعلم دائماً، وأنجز دائماً.",
    timeline: [
      ["2023 — الآن", "مطور مستقل", "أشارك أشخاصاً طموحين في تصميم وبناء المنتجات الرقمية."],
      ["2021 — 2023", "مطور واجهات · الرياض", "بنيت واجهات سهلة وأنظمة قابلة للتوسع لفرق نامية."],
      ["2019 — 2021", "بداية البرمجة", "حوّلت فضولي تجاه الويب إلى مسيرة مهنية أعتز بها."]
    ],
    contactLabel: "لديك مشروع في ذهنك؟",
    contactTitle: "لنبنِ شيئاً له معنى.",
    contactText: "أنا متاح حالياً لمشاريع مختارة وتعاونات مميزة.",
    footer: "صُمم وبُني بعناية بواسطة عبدالله السني."
  }
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const isArabic = language === "ar";

  return (
    <main dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <header className="container flex items-center justify-between py-6">
        <a href="#" className="text-xl font-black tracking-tight">a<span className="text-[var(--coral)]">.</span></a>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[var(--muted)] md:flex">
          {t.nav.map((item, index) => <a key={item} href={`#${["about", "skills", "work", "experience"][index]}`} className="transition-colors hover:text-[var(--coral)]">{item}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => setLanguage(isArabic ? "en" : "ar")} className="flex items-center gap-1 rounded-full border border-[var(--line)] px-3 py-2 text-xs font-bold" aria-label="Change language"><Globe2 size={15} /> {isArabic ? "EN" : "العربية"}</button>
          <button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>
      <AnimatePresence>{menuOpen && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="container overflow-hidden md:hidden"><div className="flex flex-col gap-5 border-t border-[var(--line)] py-5 text-sm font-bold">{t.nav.map((item, index) => <a onClick={() => setMenuOpen(false)} key={item} href={`#${["about", "skills", "work", "experience"][index]}`}>{item}</a>)}</div></motion.nav>}</AnimatePresence>

      <section className="grid-pattern relative overflow-hidden border-y border-[var(--line)]">
        <div className="container grid min-h-[620px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_.85fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
            <p className="section-label mb-6">{t.eyebrow}</p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-.05em] md:text-7xl">{t.title}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--muted)]">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3"><a className="button-primary" href="#work">{t.work}<ArrowDown size={16} /></a><a className="button-ghost" href="#contact">{t.contact}<ArrowUpRight size={16} /></a></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-4 rotate-6 rounded-[2.5rem] bg-[var(--coral)]"></div><div className="absolute inset-0 flex rotate-[-6deg] items-center justify-center rounded-[2.5rem] bg-[var(--ink)] text-white shadow-2xl"><span className="text-[9rem] font-black tracking-[-.15em]">ع<span className="text-[var(--coral)]">.</span></span></div>
            <span className="absolute -bottom-5 -left-7 rounded-full bg-white px-5 py-3 text-xs font-bold shadow-lg">{t.scroll} ↓</span>
          </motion.div>
        </div>
      </section>

      <section id="about" className="container grid gap-8 py-28 md:grid-cols-[.65fr_1.35fr]">
        <p className="section-label">{t.aboutLabel}</p><div><h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-5xl">{t.aboutTitle}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{t.aboutText}</p></div>
      </section>
      <section id="skills" className="bg-[var(--mist)] py-24"><div className="container grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="section-label">{t.skillsLabel}</p><h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">{t.skillsTitle}</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{t.skills.map((skill) => <div key={skill} className="card flex items-center gap-3 p-5 text-sm font-bold"><Check size={17} className="text-[var(--coral)]" />{skill}</div>)}</div></div></section>
      <section id="work" className="container py-28"><p className="section-label">{t.workLabel}</p><h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">{t.workTitle}</h2><div className="mt-12 grid gap-5 md:grid-cols-3">{t.projects.map((project, index) => <motion.article whileHover={{ y: -8 }} transition={{ duration: .2 }} key={project.title} className="card overflow-hidden"><div style={{ backgroundColor: project.color }} className="flex h-48 items-end p-6"><span className="text-6xl font-black text-[var(--ink)] opacity-80">0{index + 1}</span></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-wider text-[var(--coral)]">{project.type}</p><h3 className="mt-3 text-xl font-black">{project.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{project.text}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold">{isArabic ? "اعرف المزيد" : "View case study"} <ArrowUpRight size={15} /></a></div></motion.article>)}</div></section>
      <section id="experience" className="bg-[var(--ink)] py-24 text-white"><div className="container grid gap-12 md:grid-cols-[.8fr_1.2fr]"><div><p className="section-label">{t.experienceLabel}</p><h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">{t.experienceTitle}</h2></div><div className="space-y-8">{t.timeline.map(([date, title, text]) => <div key={date} className="grid gap-3 border-b border-white/15 pb-8 sm:grid-cols-[130px_1fr]"><p className="text-sm font-bold text-[var(--coral)]">{date}</p><div><h3 className="text-xl font-bold">{title}</h3><p className="mt-2 leading-7 text-white/60">{text}</p></div></div>)}</div></div></section>
      <section id="contact" className="container py-28 text-center"><p className="section-label">{t.contactLabel}</p><h2 className="mx-auto mt-5 max-w-2xl text-4xl font-black tracking-tight md:text-6xl">{t.contactTitle}</h2><p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">{t.contactText}</p><a href="mailto:hello@abdullahalsini.dev" className="button-primary mt-8">{t.contact} <Mail size={16} /></a></section>
      <footer className="border-t border-[var(--line)] py-8"><div className="container flex flex-col items-center justify-between gap-5 text-sm text-[var(--muted)] sm:flex-row"><p>{t.footer}</p><div className="flex gap-4"><a aria-label="LinkedIn" href="https://www.linkedin.com" className="transition-colors hover:text-[var(--coral)]"><Linkedin size={18} /></a><a aria-label="Email" href="mailto:hello@abdullahalsini.dev" className="transition-colors hover:text-[var(--coral)]"><Mail size={18} /></a></div></div></footer>
    </main>
  );
}
