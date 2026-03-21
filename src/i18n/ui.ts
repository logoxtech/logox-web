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
    'stack.title': 'Powered by Enterprise-Grade Tech',
    'stack.subtitle': 'We build upon the most robust open-source and cloud architectures.',
    'cta.title': 'Ready to structure your operations?',
    'cta.desc': 'Book a technical discovery call. No sales pitch, just logic.',
    'cta.button': 'Schedule Consultation',
    'contact.title': 'Start Project',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'What are you looking to structure?',
    'contact.submit': 'Send Request',
    'contact.success': 'Request received. Our logic engine is processing your data.',
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
    'stack.title': 'Potenciado por Tecnología de Nivel Empresarial',
    'stack.subtitle': 'Construimos sobre las arquitecturas de código abierto y en la nube más robustas.',
    'cta.title': '¿Listo para estructurar tus operaciones?',
    'cta.desc': 'Agenda una llamada técnica de descubrimiento. Sin discursos de ventas, pura lógica.',
    'cta.button': 'Agendar Consultoría',
    'contact.title': 'Iniciar Proyecto',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': '¿Qué buscas estructurar?',
    'contact.submit': 'Enviar Solicitud',
    'contact.success': 'Solicitud recibida. Nuestro motor lógico está procesando tus datos.',
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
