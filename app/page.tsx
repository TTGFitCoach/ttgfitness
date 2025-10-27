"use client";

import { motion } from "framer-motion";
import { Dumbbell, Bolt, CheckCircle2, PlayCircle, Calendar, CreditCard, Shield, Instagram, Youtube, Mail } from "lucide-react";
import "./globals.css";

export default function Page() {
  const features = [
    { icon: <Dumbbell className="w-6 h-6"/>, title: "Strength • Athleticism", desc: "Programs designed to get you strong, lean, and explosive—without fluff." },
    { icon: <Bolt className="w-6 h-6"/>, title: "Simple Nutrition", desc: "Flexible, realistic guidance that fits your life and keeps results." },
    { icon: <PlayCircle className="w-6 h-6"/>, title: "Video Coaching", desc: "Form checks and how‑to clips so you lift with confidence." },
  ];

  const tiers = [
    {
      name: "Kickstart (4 Weeks)",
      price: "$29",
      tagline: "Perfect entry point",
      bullets: [
        "4‑week home or gym plan",
        "Minimal equipment options",
        "Video exercise glossary",
        "Email support",
      ],
      cta: { label: "Get the Plan", href: "#pay-stripe" },
    },
    {
      name: "1:1 Online Coaching",
      price: "$199/mo",
      tagline: "Accountability & custom",
      bullets: [
        "Custom training split",
        "Nutrition targets & check‑ins",
        "Weekly video form review",
        "Chat support (48h)",
      ],
      featured: true,
      cta: { label: "Apply to Coach", href: "#book-calendly" },
    },
    {
      name: "In‑Person Training",
      price: "$60+/session",
      tagline: "Dickson / Nashville area",
      bullets: [
        "60‑min focused sessions",
        "Athletic & bodybuilding blends",
        "Mobility & prehab add‑ons",
        "Small‑group options",
      ],
      cta: { label: "Book a Session", href: "#book-calendly" },
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-teal-400 via-emerald-400 to-cyan-400 grid place-items-center shadow-lg shadow-teal-500/20">
              <span className="font-black text-neutral-950">T</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-wide">Trained to Go</div>
              <div className="text-xs text-neutral-400">Strength • Performance</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#book-calendly" className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 font-semibold shadow hover:bg-neutral-100"><Calendar className="w-4 h-4"/> Book</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-cyan-500/10 to-transparent"/>
        <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="text-4xl md:text-6xl font-black tracking-tight">
              Get Strong. Move Like an Athlete. <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">Stay Ready.</span>
            </motion.h1>
            <p className="mt-5 text-neutral-300 max-w-prose">Programs and coaching for people who want a clean, modern approach to bodybuilding and sports performance. Minimal fluff. Maximum results.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#book-calendly" className="rounded-2xl bg-white text-neutral-950 px-5 py-3 font-semibold shadow-lg hover:bg-neutral-100 inline-flex items-center gap-2"><Calendar className="w-5 h-5"/> Book Consult</a>
              <a href="#pay-stripe" className="rounded-2xl border border-neutral-700 px-5 py-3 font-semibold hover:border-neutral-500 inline-flex items-center gap-2"><CreditCard className="w-5 h-5"/> Buy Kickstart</a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
              <Shield className="w-4 h-4"/>
              <span>No-nonsense training • Form-first • Built for real life</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden">
              <div className="h-full grid place-items-center">
                <div className="text-center p-8">
                  <Dumbbell className="w-12 h-12 mx-auto mb-4"/>
                  <p className="text-neutral-300">Drop your highlight clip or a short welcome video here. Keep it 10–20 seconds and high‑energy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 grid place-items-center mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-neutral-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Start where you are</h2>
        <p className="text-neutral-300 mt-2">Three clear ways to train. Upgrade anytime.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-3xl border p-6 shadow ${t.featured ? "border-teal-500/50 bg-neutral-900" : "border-neutral-800 bg-neutral-950"}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                {t.featured && <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-300">Most Popular</span>}
              </div>
              <div className="mt-3 text-3xl font-black">{t.price}</div>
              <div className="text-sm text-neutral-400">{t.tagline}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-teal-300"/><span>{b}</span></li>
                ))}
              </ul>
              <a href={t.cta.href} className={`mt-6 inline-flex w-full justify-center items-center gap-2 rounded-xl px-4 py-3 font-semibold ${t.featured ? "bg-white text-neutral-950 hover:bg-neutral-100" : "border border-neutral-700 hover:border-neutral-500"}`}>
                {t.featured ? <Calendar className="w-4 h-4"/> : <CreditCard className="w-4 h-4"/>}
                {t.cta.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8 grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-bold">How we work</h3>
            <p className="text-neutral-300 mt-2 max-w-prose">Clarity. Consistency. Coaching. We keep it simple so you can stay consistent—and see results faster.</p>
          </div>
          <ol className="md:col-span-2 space-y-4">
            {["Consult: discuss goals, schedule, equipment.", "Plan: receive a clear training & nutrition framework.", "Coach: weekly adjustments + form feedback."]
              .map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 grid place-items-center font-bold">{i+1}</div>
                  <p className="text-neutral-200">{step}</p>
                </li>
              ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="flex flex-wrap gap-3 text-sm text-neutral-300">
            <a href="mailto:hello@ttgfitness.com" className="inline-flex items-center gap-2 underline decoration-neutral-700 hover:decoration-white"><Mail className="w-4 h-4"/> hello@ttgfitness.com</a>
            <a href="https://instagram.com/" className="inline-flex items-center gap-2 underline decoration-neutral-700 hover:decoration-white" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4"/> Instagram</a>
            <a href="https://youtube.com/" className="inline-flex items-center gap-2 underline decoration-neutral-700 hover:decoration-white" target="_blank" rel="noreferrer"><Youtube className="w-4 h-4"/> YouTube</a>
          </div>
        </div>
      </section>
    </div>
  );
}
