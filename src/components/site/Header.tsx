import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const links = [
  { to: "/", key: "nav.home" }, { to: "/sobre", key: "nav.about" },
  { to: "/especialidades", key: "nav.specialties" }, { to: "/tecnologias", key: "nav.tech" },
  { to: "/equipe", key: "nav.team" }, { to: "/estrutura", key: "nav.structure" },
  { to: "/contato", key: "nav.contact" },
] as const;
const langs = ["pt", "en", "es"] as const;

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  const solid = scrolled || pathname !== "/";
  useEffect(() => { const f=()=>setScrolled(window.scrollY>40); f(); window.addEventListener("scroll",f,{passive:true}); return()=>window.removeEventListener("scroll",f); },[]);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <div className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-500 ${solid ? "border border-border bg-background/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur-xl" : "border border-white/10 bg-graphite/20 text-off-white backdrop-blur-md"}`}>
      <Link to="/" className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-full border border-gold/40 bg-graphite text-xs font-semibold tracking-[0.12em] text-gold md:size-14">IM</span><span className="hidden sm:block"><span className="block font-display text-lg leading-none">Instituto Montalvão</span><span className="mt-1 block font-grotesk text-[0.52rem] uppercase tracking-[0.22em] opacity-70">Harmonização Orofacial</span></span></Link>
      <nav className="hidden items-center gap-6 lg:flex">{links.slice(1).map(l=><Link key={l.to} to={l.to} className="font-grotesk text-[0.63rem] uppercase tracking-[0.2em] transition-colors hover:text-gold" activeProps={{className:"text-gold"}}>{t(l.key)}</Link>)}</nav>
      <div className="flex items-center gap-3"><div className="flex items-center gap-2">{langs.map(l=><button key={l} onClick={()=>setLang(l)} className={`font-grotesk text-[0.6rem] uppercase tracking-[0.2em] ${lang===l?"text-gold":"opacity-60"}`}>{l}</button>)}</div><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-gold-lux hidden px-5 py-2.5 text-[0.6rem] md:inline-flex" data-magnetic>{t("cta.book")}</a><button type="button" aria-label="Menu" onClick={()=>setOpen(v=>!v)} className="lg:hidden">{open?<X className="size-5"/>:<Menu className="size-5"/>}</button></div>
    </div>
    {open&&<div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-background/95 p-6 shadow-[var(--shadow-luxe)] backdrop-blur-xl lg:hidden"><nav className="flex flex-col gap-4">{links.map(l=><Link key={l.to} to={l.to} onClick={()=>setOpen(false)} className="font-grotesk text-[0.7rem] uppercase tracking-[0.22em] text-foreground" activeProps={{className:"text-gold"}}>{t(l.key)}</Link>)}</nav></div>}
  </header>;
}
