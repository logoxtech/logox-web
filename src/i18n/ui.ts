export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const showDefaultLang = false;

export const ui = {
  en: {
    'nav.logo': 'LOGOX',
    'nav.contact': 'Start Project',
    'nav.langToggle': 'ES',
    'nav.langToggleUrl': '/es',
    'hero.title': 'Logic. Structure. Peace of Mind.',
    'hero.subtitle': "We streamline your company's digital chaos through advanced AI and automation. Scale globally with zero technical friction.",
    'card1.title': 'Workflow Automation',
    'card1.desc': 'Connect your CRM, ERP, and daily tools to eliminate manual data entry. Save hundreds of hours a month with flawless logic.',
    'card2.title': 'Intelligent AI Agents',
    'card2.desc': 'Deploy 24/7 smart assistants that qualify leads, answer complex queries, and drive sales without sounding like traditional bots.',
    'card3.title': 'Global Web Architecture',
    'card3.desc': 'Lightning-fast, secure, and fully internationalized platforms engineered to expand your market reach from day one.',
  },
  es: {
    'nav.logo': 'LOGOX',
    'nav.contact': 'Iniciar Proyecto',
    'nav.langToggle': 'EN',
    'nav.langToggleUrl': '/en',
    'hero.title': 'Lógica. Estructura. Paz Mental.',
    'hero.subtitle': 'Optimizamos el caos digital de tu empresa mediante IA avanzada y automatización. Escala globalmente sin fricción técnica.',
    'card1.title': 'Automatización de Flujos',
    'card1.desc': 'Conectamos tu CRM, ERP y herramientas diarias para eliminar el trabajo manual. Ahorra cientos de horas al mes con lógica impecable.',
    'card2.title': 'Agentes Inteligentes de IA',
    'card2.desc': 'Implementa asistentes 24/7 que cualifican prospectos, responden consultas complejas y cierran ventas sin sonar como robots tradicionales.',
    'card3.title': 'Arquitectura Web Global',
    'card3.desc': 'Plataformas ultrarrápidas, seguras y 100% internacionalizadas, diseñadas para expandir tu alcance de mercado desde el primer día.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
