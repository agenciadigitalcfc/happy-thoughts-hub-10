import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/lib/use-reveal";
import { useMagneticButtons } from "@/lib/use-magnetic-buttons";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center"><div className="text-center"><h1 className="text-7xl font-bold">404</h1><Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Voltar ao início</Link></div></div>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="flex min-h-screen items-center justify-center"><div className="text-center"><h1 className="text-xl font-semibold">Não foi possível carregar esta página.</h1><button onClick={()=>{router.invalidate();reset()}} className="mt-6 rounded-md bg-primary px-4 py-2">Tentar novamente</button></div></div>}
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:"Dr. Samuel Montalvão | Harmonização Orofacial"},{name:"description",content:"Dr. Samuel Montalvão, Cirurgião-Dentista e especialista em Harmonização Orofacial. Tratamentos faciais personalizados com foco em naturalidade, equilíbrio e preservação da identidade."},{name:"author",content:"Instituto Montalvão"},{property:"og:type",content:"website"},{property:"og:title",content:"Dr. Samuel Montalvão | Harmonização Orofacial"},{property:"og:description",content:"Harmonização Orofacial com planejamento, precisão e naturalidade para valorizar a identidade de cada rosto."},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,600&family=Space+Grotesk:wght@400;500&family=Inter:wght@300;400;500&display=swap"},{rel:"icon",href:"/favicon.png",type:"image/png"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-BR"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function SiteLayout(){useReveal();useMagneticButtons();return <><Header/><Outlet/><Footer/><WhatsAppFloat/></>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><I18nProvider><SiteLayout/></I18nProvider></QueryClientProvider>}
