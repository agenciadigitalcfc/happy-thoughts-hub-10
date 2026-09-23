import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { CLINIC } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
 const {t}=useI18n();
 return <footer className="relative overflow-hidden bg-graphite text-off-white"><div className="mx-auto max-w-6xl px-6 py-16"><div className="grid gap-10 md:grid-cols-3">
  <div><div className="flex items-center gap-3"><span className="grid size-14 place-items-center rounded-full border border-gold/40 bg-background text-xs font-semibold tracking-[0.12em] text-gold">IM</span><div><p className="font-display text-xl">Instituto Montalvão</p><p className="mt-1 font-grotesk text-[0.55rem] uppercase tracking-[0.2em] text-gold">Harmonização Orofacial</p></div></div><p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">Dr. Samuel Montalvão · {CLINIC.specialty} · {CLINIC.crm}</p><a href={CLINIC.instagram} target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center gap-2 text-sm text-gold"><Instagram size={17}/> @drsamuelmontalvao</a><a href={CLINIC.instagramInstitutional} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 text-sm text-gold"><Instagram size={17}/> @institutomontalvao</a></div>
  <div className="space-y-3"><p className="eyebrow">{t("nav.contact")}</p><p className="text-sm opacity-80">{CLINIC.phone}</p><p className="text-sm leading-relaxed opacity-70">Avaliação presencial ou online.</p></div>
  <nav className="flex flex-col gap-2"><p className="eyebrow">Menu</p>{links.map(l=><Link key={l.to} to={l.to} className="font-grotesk text-[0.62rem] uppercase tracking-[0.2em] opacity-80 hover:text-gold">{t(l.key)}</Link>)}</nav>
 </div><div className="whisper-divider my-10"/><div className="flex flex-col gap-3 text-xs opacity-60 md:flex-row md:justify-between"><p>© {new Date().getFullYear()} Instituto Montalvão. {t("footer.rights")}</p><p className="max-w-lg">{t("footer.disclaimer")}</p></div></div></footer>;
}
const links=[{to:"/sobre",key:"nav.about"},{to:"/especialidades",key:"nav.specialties"},{to:"/tecnologias",key:"nav.tech"},{to:"/equipe",key:"nav.team"},{to:"/estrutura",key:"nav.structure"},{to:"/contato",key:"nav.contact"}];
