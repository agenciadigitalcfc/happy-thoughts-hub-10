export const WHATSAPP_NUMBER = "5511971015320";

export const CLINIC = {
  doctor: "Dr. Samuel Montalvão",
  director: "Dr. Samuel Montalvão",
  crm: "CRO-SP 133516",
  specialty: "Cirurgião-Dentista | Harmonização Orofacial",
  institution: "Instituto Montalvão",
  phone: "(11) 97101-5320",
  instagram: "https://www.instagram.com/drsamuelmontalvao/",
  instagramInstitutional: "https://www.instagram.com/institutomontalvao",
};

export const FIRST_VISIT = {
  price: "R$ 580,00",
  payments: "Pix ou link de pagamento",
  note: "O valor da consulta é abatido do procedimento realizado, conforme condição informada pelo Instituto.",
};

export const TEAM = [
  { id: "samuel", name: "Dr. Samuel Montalvão", role: "Cirurgião-Dentista | Harmonização Orofacial", instagram: "https://www.instagram.com/drsamuelmontalvao/" },
  { id: "cassio", name: "Dr. Cássio Montalvão", role: "Equipe Instituto Montalvão" },
  { id: "isadora", name: "Dra. Isadora Montalvão", role: "Equipe Instituto Montalvão" },
  { id: "nathaly", name: "Dra. Nathaly", role: "Equipe Instituto Montalvão" },
  { id: "victor", name: "Dr. Victor Montalvão", role: "Equipe Instituto Montalvão" },
];

export const TECH_ITEMS = [
  { id: "pilare" },
  { id: "planning" },
  { id: "natural" },
  { id: "health" },
  { id: "biomodulation" },
  { id: "precision" },
];

export const PROCEDURES = [
  ["Harmonização Orofacial", "Planejamento individualizado para equilíbrio, proporção e naturalidade facial."],
  ["Preenchimento Facial", "Ácido hialurônico para estruturação, contorno, definição e refinamento de proporções."],
  ["Preenchimento Labial", "Contorno, proporção, definição e equilíbrio respeitando a identidade dos lábios."],
  ["Rinomodelação", "Refinamento estético e equilíbrio das proporções nasais conforme avaliação profissional."],
  ["Toxina Botulínica", "Possibilidades para regiões faciais e musculares conforme indicação e planejamento individual."],
  ["Bioestimuladores de Colágeno", "Radiesse, Sculptra e estratégias de biomodulação voltadas à qualidade e firmeza da pele."],
  ["Fios de PDO", "Fios de sustentação e fios lisos para estímulo de colágeno e suporte conforme indicação."],
  ["Bichectomia", "Procedimento cirúrgico para remoção da bola de Bichat e possível refinamento do contorno facial."],
  ["Regeneração e Biomodulação", "PRP, I-PRF, mesclas de biomodulação, exossomos e ExoCube quando indicados."],
  ["Terapias Capilares", "Estratégias voltadas à regeneração folicular, queda, volume e qualidade dos fios."],
] as const;

export function whatsappLink(message = "Olá! Gostaria de agendar uma avaliação com o Dr. Samuel Montalvão.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
