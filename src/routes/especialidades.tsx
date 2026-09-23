import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";
import { whatsappLink } from "@/lib/site";

const groups=[
 {id:"g1",items:["i1","i2","i3"]},{id:"g2",items:["i1","i2","i3"]},{id:"g3",items:["i1","i2","i3"]}
];
export const Route=createFileRoute("/especialidades")({head:()=>({meta:[{title:"Procedimentos | Dr. Samuel Montalvão | Harmonização Orofacial"},{name:"description",content:"Conheça os procedimentos e possibilidades de Harmonização Orofacial do Instituto Montalvão."},{property:"og:title",content:"Procedimentos | Dr. Samuel Montalvão"},{property:"og:description",content:"Harmonização Orofacial com planejamento, precisão e naturalidade."}]}),component:Especialidades});
function Especialidades(){const {t}=useI18n();return <PageShell eyebrow={t("spec_page.eyebrow")} title={<><span>{t("spec_page.title")}</span></>} intro={t("spec_page.intro")}><section className="px-6 py-20"><div className="mx-auto max-w-6xl space-y-16">{groups.map(g=><div key={g.id} data-reveal><h2 className="title-display text-2xl md:text-3xl">{t(`spec_page.${g.id}.name`)}</h2><span className="gold-rule mt-4 block w-20"/><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{g.items.map(item=>{const title=t(`spec_page.${g.id}.${item}.t`);return <a key={item} href={whatsappLink(`Olá! Gostaria de saber mais sobre: ${title}`)} target="_blank" rel="noopener noreferrer" className="vellum vellum-hover block rounded-3xl p-6"><h3 className="font-display text-lg text-foreground">{title}</h3><p className="section-lede-sm mt-2">{t(`spec_page.${g.id}.${item}.d`)}</p></a>})}</div></div>)}</div></section></PageShell>}
