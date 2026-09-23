import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, HeartPulse, Quote, Ruler, Scissors, Sparkles, Stethoscope, Target } from "lucide-react";
import { useState } from "react";
import { Spotlight } from "@/components/site/Spotlight";
import { Fleur } from "@/components/site/Fleur";
import { Marquee } from "@/components/site/Marquee";
import { Differentials } from "@/components/site/Differentials";
import { StatsCounters } from "@/components/site/StatsCounters";
import { SuccessCases } from "@/components/site/SuccessCases";
import { OurTeam } from "@/components/site/OurTeam";
import { PremiumForm } from "@/components/site/PremiumForm";
import { SmileConsultant } from "@/components/site/SmileConsultant";
import { FacialConsultant } from "@/components/site/FacialConsultant";
import { GoalQuiz, Faq } from "@/components/site/HomeExtraSections";
import { DENTAL_GOALS } from "@/lib/smile-consultant";
import { useI18n } from "@/lib/i18n";
import { CLINIC, whatsappLink } from "@/lib/site";

export const Route=createFileRoute("/")({head:()=>({meta:[{title:"Dr. Samuel Montalvão | Harmonização Orofacial"},{name:"description",content:"Dr. Samuel Montalvão, Cirurgião-Dentista e especialista em Harmonização Orofacial. Tratamentos faciais personalizados com foco em naturalidade, equilíbrio e preservação da identidade."},{property:"og:title",content:"Dr. Samuel Montalvão | Harmonização Orofacial"},{property:"og:description",content:"Harmonização Orofacial com planejamento, precisão e naturalidade para valorizar a identidade de cada rosto."}]}),component:Home});

function Home(){
 const {t}=useI18n(); const [area,setArea]=useState<string|null>(null);
 const techniques=[{icon:Target,title:"Individualidade",desc:"Cada rosto possui características próprias."},{icon:Ruler,title:"Planejamento",desc:"Cada procedimento faz parte de uma estratégia individualizada."},{icon:HeartPulse,title:"Saúde",desc:"A estética não deve ser dissociada da saúde."}];
 return <main>
  <Spotlight className="relative overflow-hidden">
   <div className="absolute inset-0 bg-[var(--gradient-onyx)]"/>
   <div className="absolute inset-0 opacity-30 grain"/>
   <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-36 md:pt-44 lg:grid-cols-2">
    <div className="animate-fade-up text-off-white"><div className="flex items-center gap-4"><span className="gold-rule w-12"/><span className="eyebrow">{t("hero.eyebrow")}</span></div><h1 className="title-display mt-6 text-5xl md:text-7xl">{t("hero.title.a")} <span className="gold-text">{t("hero.title.gold")}</span><br/>{t("hero.title.b")}</h1><p className="mt-6 max-w-md text-base leading-relaxed opacity-80">{t("hero.text")}</p><div className="mt-9 flex flex-wrap gap-4"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-gold-lux" data-magnetic>{t("cta.book")}</a><Link to="/sobre" className="btn-slide-gold text-off-white">{t("cta.trajectory")}</Link></div><div className="mt-12 font-grotesk text-[0.62rem] uppercase tracking-[0.22em] text-gold">{CLINIC.doctor} · {CLINIC.crm}</div></div>
    <div className="relative mx-auto w-full max-w-sm"><div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-[2rem] border border-gold/30 bg-background/10 backdrop-blur-sm"><div className="text-center px-8"><Fleur className="mx-auto size-12 text-gold"/><p className="mt-7 font-display text-4xl text-off-white">Instituto<br/>Montalvão</p><p className="mt-4 font-grotesk text-[0.6rem] uppercase tracking-[0.28em] text-gold">Harmonização Orofacial</p></div></div></div>
   </div>
  </Spotlight>

  <Marquee tone="light"/>

  <section className="px-6 py-24" id="sobre"><div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center"><div data-reveal className="vellum rounded-[2rem] p-10 md:p-14"><span className="eyebrow">{t("about.eyebrow")}</span><h2 className="title-display mt-4 text-3xl md:text-5xl">{t("about.title")}</h2><p className="section-lede mt-6">{t("about.text")}</p></div><div data-reveal><span className="eyebrow">Filosofia</span><h3 className="title-display mt-4 text-3xl md:text-5xl">Estética não se sustenta sem saúde.</h3><p className="mt-6 max-w-xl text-text-soft leading-relaxed">O objetivo não é criar um padrão. É preservar a identidade, respeitar a anatomia e utilizar técnicas de forma estratégica para alcançar resultados harmônicos e naturais.</p><Link to="/sobre" className="btn-slide-gold mt-8 text-foreground">{t("cta.trajectory")}</Link></div></div></section>

  <section className="relative overflow-hidden px-6 py-24 text-off-white" style={{background:"var(--gradient-onyx)"}} id="metodo"><div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2"><div data-reveal><span className="eyebrow">{t("barbies.eyebrow")}</span><h2 className="title-display mt-4 text-3xl md:text-5xl">{t("barbies.title")}</h2><p className="mt-6 max-w-md leading-relaxed opacity-80">{t("barbies.text")}</p><div className="mt-8 grid gap-3">{["barbies.p1","barbies.p2","barbies.p3"].map(k=><div key={k} className="rounded-2xl border border-gold/25 bg-off-white/5 px-5 py-3 uppercase tracking-[0.08em]">{t(k)}</div>)}</div></div><div data-reveal className="grid gap-4">{techniques.map(x=><div key={x.title} className="rounded-3xl border border-gold/25 bg-off-white/5 p-7"><x.icon className="size-6 text-gold"/><h3 className="title-display mt-5 text-xl">{x.title}</h3><p className="mt-2 text-sm opacity-75">{x.desc}</p></div>)}</div></div></section>

  <Differentials/><StatsCounters/>

  <section className="px-6 py-24"><div className="mx-auto max-w-6xl"><div data-reveal><span className="eyebrow">{t("spec.eyebrow")}</span><h2 className="title-display mt-4 text-3xl md:text-5xl">{t("spec.title")}</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[{i:Sparkles,k:"spec.breast",d:"spec.breast.d"},{i:Activity,k:"spec.body",d:"spec.body.d"},{i:Scissors,k:"spec.face",d:"spec.face.d"},{i:HeartPulse,k:"spec.intimate",d:"spec.intimate.d"}].map(({i:I,k,d})=><a key={k} href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${t(k)}`)} target="_blank" rel="noopener noreferrer" className="vellum vellum-hover rounded-3xl p-7"><I className="size-6 text-gold"/><h3 className="title-display mt-6 text-xl">{t(k)}</h3><p className="mt-2 text-sm text-text-soft">{t(d)}</p></a>)}</div></div></section>

  <section className="px-6 py-24 text-off-white" style={{background:"var(--gradient-onyx)"}}><div className="mx-auto max-w-6xl"><span className="eyebrow">{t("exp.eyebrow")}</span><h2 className="title-display mt-4 max-w-2xl text-3xl md:text-5xl">{t("exp.title")}</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{["exp.i1","exp.i2","exp.i3","exp.i4"].map(k=><div key={k} className="rounded-3xl border border-gold/20 bg-off-white/5 p-6">{t(k)}</div>)}</div></div></section>

  <SuccessCases/><SmileConsultant goals={DENTAL_GOALS}/><FacialConsultant/><OurTeam/>

  <section className="px-6 py-24" id="depoimentos"><div className="mx-auto max-w-6xl"><div className="text-center"><span className="eyebrow">{t("test.eyebrow")}</span><h2 className="title-display mt-4 text-3xl md:text-5xl">{t("test.title")}</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{["test.q1","test.q2","test.q3"].map(q=><figure key={q} className="vellum rounded-3xl p-7"><Quote className="size-5 text-gold"/><blockquote className="mt-5 font-display text-lg leading-snug">{t(q)}</blockquote></figure>)}</div></div></section>

  <GoalQuiz/><Faq/>

  <section className="px-6 py-24" id="filosofia"><div className="mx-auto max-w-6xl"><div className="text-center"><span className="eyebrow">{t("intl.eyebrow")}</span><h2 className="title-display mt-4 text-3xl md:text-5xl">{t("intl.title")}</h2><p className="mx-auto mt-5 max-w-2xl text-text-soft">{t("intl.text")}</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{["intl.b1","intl.b2","intl.b3","intl.b4"].map(k=><div key={k} className="vellum rounded-3xl p-7 text-center">{t(k)}</div>)}</div></div></section>

  <section className="px-6 py-24"><PremiumForm/></section>
  <section className="relative overflow-hidden px-6 py-24 text-center text-off-white" style={{background:"var(--gradient-onyx)"}}><div className="mx-auto max-w-2xl"><Fleur className="mx-auto size-9 text-gold"/><h2 className="title-display mt-6 text-3xl md:text-5xl">{t("final.title")}</h2><p className="mt-4 opacity-80">{t("final.text")}</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-gold-lux mt-8" data-magnetic>{t("cta.book")}</a></div></section>
 </main>
}
