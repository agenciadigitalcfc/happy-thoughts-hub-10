import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Ruler, HeartPulse, Activity, Layers, Target } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { TECH_ITEMS } from "@/lib/site";
const ICON_MAP={pilare:Sparkles,planning:Ruler,natural:HeartPulse,health:Activity,biomodulation:Layers,precision:Target};
export const Route=createFileRoute("/tecnologias")({head:()=>({meta:[{title:"Método Pilare® | Dr. Samuel Montalvão"},{name:"description",content:"Conheça o Método Pilare®, apresentado como criação do Dr. Samuel Montalvão."}]}),component:Tecnologias});
function Tecnologias(){const {t}=useI18n();return <PageShell eyebrow={t("tech_page.eyebrow")} title={<span className="gold-text">{t("tech_page.title")}</span>} intro={t("tech_page.intro")}><section className="px-6 py-20"><div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">{TECH_ITEMS.map(i=>{const I=ICON_MAP[i.id as keyof typeof ICON_MAP];return <div key={i.id} data-reveal className="vellum vellum-hover rounded-3xl p-7"><span className="grid size-12 place-items-center rounded-full border border-gold/40"><I className="size-5 text-gold"/></span><h2 className="title-display mt-6 text-xl">{t(`tech_page.item.${i.id}.title`)}</h2><p className="section-lede-sm mt-2">{t(`tech_page.item.${i.id}.desc`)}</p></div>})}</div></section></PageShell>}
