import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Check, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Globe, 
  Star, 
  Users, 
  Target, 
  Shield, 
  ArrowRight,
  Clock,
  Video,
  FileText,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
type Language = 'en' | 'pt';
type PageState = 'landing' | 'scheduling' | 'confirmation';

// --- Content Dictionary ---
const translations = {
  en: {
    nav: {
      apply: "Apply Now",
      home: "Home",
      testimonials: "Results",
      faq: "FAQ"
    },
    landing: {
      headline: "Master Your Craft & Dominate The Game",
      subheadline: "The elite coaching program for athletes who refuse to remain average. Scale your skills, mindset, and performance in 90 days.",
      vslPlaceholder: "Watch This Video Before Applying",
      applicationBtn: "Apply Now to Join",
      shortTestimonialTitle: "What Athletes Are Saying",
      meetCoachTitle: "Meet Your Coach",
      meetCoachBody: "I'm Coach Alex. I've spent the last decade deconstructing the mechanics of elite performance. My mission is simple: to give you the tools, strategy, and accountability to unlock your highest potential.",
      missionTitle: "Our Mission",
      missionBody: "To build a generation of athletes who are physically dominant and mentally unbreakable.",
      objectionTitle: "Is This For You?",
      objectionBody: "If you are looking for a magic pill, leave now. This is for the dedicated few willing to put in the work.",
      pillarsTitle: "The 3 Pillars of Performance",
      pillars: [
        { title: "Mechanics", desc: "Optimizing movement efficiency for maximum output." },
        { title: "Mindset", desc: "Forging mental resilience to perform under pressure." },
        { title: "Metabolism", desc: "Fueling your engine for peak endurance and recovery." }
      ],
      inclusionsTitle: "What's Included Inside",
      inclusions: [
        "Weekly 1-on-1 Strategy Calls",
        "Customized Training App Access",
        "24/7 Private Community Access",
        "Video Analysis & Feedback Loop"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How long is the program?", a: "The core transformation phase is 90 days." },
        { q: "Is this for beginners?", a: "We work with athletes at all levels who are serious about improvement." },
        { q: "Do I need a gym?", a: "Access to basic equipment is recommended but not strictly required." }
      ]
    },
    scheduling: {
      congrats: "Application Received!",
      nextStep: "Step 2: Schedule Your Strategy Session",
      important: "IMPORTANT: Please select a time where you can be in a quiet place and fully focused.",
      cantFindTime: "If you can't find a time that works, please contact support immediately.",
      calendarPlaceholder: "Select a Date & Time"
    },
    confirmation: {
      thanks: "Thanks for Scheduling!",
      sub: "Your session is locked in. Here is what to do next to prepare.",
      steps: {
        step1: "Step 1: Watch The Welcome Video",
        step2: "Step 2: Breakdown of Our Process",
        step3: "Step 3: Confirm Your Attendance",
        step3Desc: "Please check your email and click 'Confirm' on the calendar invite.",
        step4: "Step 4: Join The Community",
        step4Desc: "Click the button below to join our free Discord server for updates.",
        step5: "Step 5: Client Success Stories"
      },
      seeYou: "See You On The Call",
      checklist: [
        "Bring a pen and paper",
        "Review the case studies sent to your email",
        "Show up 5 minutes early"
      ]
    },
    footer: {
      rights: "All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy Policy"
    }
  },
  pt: {
    nav: {
      apply: "Aplicar Agora",
      home: "Início",
      testimonials: "Resultados",
      faq: "FAQ"
    },
    landing: {
      headline: "Domine Sua Arte & Vença o Jogo",
      subheadline: "O programa de elite para atletas que recusam a mediocridade. Escale suas habilidades, mentalidade e performance em 90 dias.",
      vslPlaceholder: "Assista a Este Vídeo Antes de Aplicar",
      applicationBtn: "Aplicar Para Entrar",
      shortTestimonialTitle: "O Que os Atletas Dizem",
      meetCoachTitle: "Conheça Seu Treinador",
      meetCoachBody: "Eu sou o Treinador Alex. Passei a última década desconstruindo a mecânica da performance de elite. Minha missão é simples: te dar as ferramentas, estratégia e responsabilidade para destravar seu potencial máximo.",
      missionTitle: "Nossa Missão",
      missionBody: "Construir uma geração de atletas fisicamente dominantes e mentalmente inquebráveis.",
      objectionTitle: "Isso é Para Você?",
      objectionBody: "Se você procura uma pílula mágica, saia agora. Isso é para os poucos dedicados dispostos a trabalhar duro.",
      pillarsTitle: "Os 3 Pilares da Performance",
      pillars: [
        { title: "Mecânica", desc: "Otimizando a eficiência do movimento para saída máxima." },
        { title: "Mentalidade", desc: "Forjando resiliência mental para performar sob pressão." },
        { title: "Metabolismo", desc: "Abastecendo seu motor para resistência e recuperação máximas." }
      ],
      inclusionsTitle: "O Que Está Incluído",
      inclusions: [
        "Chamadas de Estratégia 1-a-1 Semanais",
        "Acesso ao App de Treino Personalizado",
        "Acesso à Comunidade Privada 24/7",
        "Análise de Vídeo & Feedback"
      ],
      faqTitle: "Perguntas Frequentes",
      faqs: [
        { q: "Quanto tempo dura o programa?", a: "A fase central de transformação é de 90 dias." },
        { q: "Isso é para iniciantes?", a: "Trabalhamos com atletas de todos os níveis que levam a melhoria a sério." },
        { q: "Preciso de uma academia?", a: "O acesso a equipamentos básicos é recomendado, mas não estritamente necessário." }
      ]
    },
    scheduling: {
      congrats: "Aplicação Recebida!",
      nextStep: "Passo 2: Agende Sua Sessão de Estratégia",
      important: "IMPORTANTE: Por favor, selecione um horário onde você possa estar em um local silencioso e totalmente focado.",
      cantFindTime: "Se não encontrar um horário que funcione, entre em contato com o suporte imediatamente.",
      calendarPlaceholder: "Selecione Data e Hora"
    },
    confirmation: {
      thanks: "Obrigado por Agendar!",
      sub: "Sua sessão está confirmada. Aqui está o que fazer a seguir para se preparar.",
      steps: {
        step1: "Passo 1: Assista ao Vídeo de Boas-vindas",
        step2: "Passo 2: Detalhamento do Nosso Processo",
        step3: "Passo 3: Confirme Sua Presença",
        step3Desc: "Verifique seu e-mail e clique em 'Confirmar' no convite do calendário.",
        step4: "Passo 4: Entre na Comunidade",
        step4Desc: "Clique no botão abaixo para entrar em nosso servidor Discord gratuito.",
        step5: "Passo 5: Histórias de Sucesso"
      },
      seeYou: "Te Vejo na Chamada",
      checklist: [
        "Traga caneta e papel",
        "Revise os estudos de caso enviados para seu e-mail",
        "Chegue 5 minutos antes"
      ]
    },
    footer: {
      rights: "Todos os direitos reservados.",
      terms: "Termos de Serviço",
      privacy: "Política de Privacidade"
    }
  }
};

// --- Components ---

const LanguageSwitcher = ({ current, toggle }: { current: Language, toggle: () => void }) => (
  <button 
    onClick={toggle}
    className="flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700 hover:border-green-500 transition-colors text-sm font-medium"
  >
    <Globe size={16} className="text-green-500" />
    <span className="uppercase">{current}</span>
  </button>
);

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Button = ({ children, onClick, variant = 'primary', className = "" }: { children: React.ReactNode, onClick?: () => void, variant?: 'primary' | 'outline', className?: string }) => {
  const baseStyle = "px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider transition-all transform hover:scale-105 duration-200 flex items-center justify-center gap-2 w-full md:w-auto";
  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_20px_rgba(34,197,94,0.4)]",
    outline: "border-2 border-green-500 text-green-500 hover:bg-green-500/10"
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const VideoPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full aspect-video bg-gray-900 border border-gray-800 rounded-xl flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    <div className="z-20 flex flex-col items-center">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(34,197,94,0.5)]">
        <Play size={32} fill="black" className="text-black ml-1" />
      </div>
      <p className="text-white font-bold text-lg tracking-wide uppercase">{label}</p>
    </div>
    {/* Background Grid Effect */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [page, setPage] = useState<PageState>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const toggleLang = () => setLang(l => l === 'en' ? 'pt' : 'en');
  
  // Navigation Handlers
  const goToScheduling = () => {
    window.scrollTo(0,0);
    setPage('scheduling');
  };
  
  const goToConfirmation = () => {
    window.scrollTo(0,0);
    setPage('confirmation');
  };

  const goToLanding = () => {
    window.scrollTo(0,0);
    setPage('landing');
  };

  // --- Views ---

  const Navbar = () => (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div onClick={goToLanding} className="cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center font-bold text-black text-xl">L</div>
          <span className="text-white font-bold text-xl tracking-tighter">LACB</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {page === 'landing' && (
            <>
              <a href="#vsl" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.home}</a>
              <a href="#testimonials" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.testimonials}</a>
              <a href="#faq" className="text-gray-400 hover:text-green-500 transition-colors">{t.nav.faq}</a>
            </>
          )}
          <LanguageSwitcher current={lang} toggle={toggleLang} />
          {page === 'landing' && (
            <Button onClick={goToScheduling} className="!py-2 !text-sm">
              {t.nav.apply}
            </Button>
          )}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher current={lang} toggle={toggleLang} />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 py-4 px-6 flex flex-col gap-4">
           {page === 'landing' && (
            <>
              <a onClick={() => setMobileMenuOpen(false)} href="#vsl" className="text-gray-300">{t.nav.home}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="text-gray-300">{t.nav.testimonials}</a>
              <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="text-gray-300">{t.nav.faq}</a>
              <Button onClick={() => { goToScheduling(); setMobileMenuOpen(false); }} className="w-full">
                {t.nav.apply}
              </Button>
            </>
           )}
        </div>
      )}
    </nav>
  );

  const Footer = () => (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <div className="mb-2">
          <span className="text-4xl font-bold text-white tracking-tighter">LACB</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">{t.footer.terms}</a>
          <a href="#" className="text-gray-500 hover:text-green-500 text-sm transition-colors">{t.footer.privacy}</a>
        </div>
        <p className="text-gray-600 text-sm mt-4">© 2025 Lacb Inc. {t.footer.rights}</p>
      </div>
    </footer>
  );

  // --- Landing Page View ---
  const LandingView = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
      <div className="animate-in fade-in duration-500">
        {/* Hero / VSL Section */}
        <Section id="vsl" className="text-center pt-12 md:pt-20">
          <div className="inline-block bg-green-500/10 border border-green-500/20 px-4 py-1 rounded-full text-green-500 text-sm font-bold tracking-wider mb-6 uppercase animate-pulse">
             New Cohort 2025
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            {t.landing.headline.split('&').map((part, i) => (
               <span key={i} className={i === 1 ? "text-green-500 block md:inline" : ""}>{i === 1 ? ` & ${part}` : part}</span>
            ))}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            {t.landing.subheadline}
          </p>
          
          <div className="max-w-4xl mx-auto mb-12 shadow-[0_0_50px_rgba(34,197,94,0.15)] rounded-xl">
            <VideoPlaceholder label={t.landing.vslPlaceholder} />
          </div>

          <div className="flex flex-col items-center gap-4">
             <Button onClick={goToScheduling}>{t.landing.applicationBtn}</Button>
             <p className="text-gray-500 text-sm flex items-center gap-2">
               <Users size={14} /> 500+ Athletes Joined
             </p>
          </div>
        </Section>

        {/* Short Testimonials */}
        <Section className="bg-gray-900/50 rounded-3xl my-8">
          <h3 className="text-center text-white font-bold text-2xl mb-12 uppercase tracking-wide">{t.landing.shortTestimonialTitle}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black border border-gray-800 p-6 rounded-xl hover:border-green-500/50 transition-colors">
                <div className="flex gap-1 mb-4 text-green-500"><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/><Star fill="currentColor" size={16}/></div>
                <p className="text-gray-300 text-sm mb-4">"Absolutely changed the trajectory of my career. The systems are undeniable."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div>
                    <p className="text-white font-bold text-sm">John D.</p>
                    <p className="text-gray-500 text-xs">Pro Athlete</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Meet Coach & Mission */}
        <Section className="grid md:grid-cols-2 gap-16 items-center">
           <div className="relative">
             <div className="aspect-[4/5] bg-gray-800 rounded-2xl relative z-10 overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-700 flex items-center justify-center text-gray-500 font-bold text-2xl">
                  Coach Image
                </div>
             </div>
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-500 rounded-2xl -z-0"></div>
           </div>
           <div>
             <h2 className="text-3xl font-bold text-white mb-6 uppercase border-l-4 border-green-500 pl-4">{t.landing.meetCoachTitle}</h2>
             <p className="text-gray-400 mb-8 leading-relaxed">
               {t.landing.meetCoachBody}
             </p>
             <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h4 className="text-green-500 font-bold mb-2 flex items-center gap-2"><Target size={18} /> {t.landing.missionTitle}</h4>
                <p className="text-gray-300 text-sm">{t.landing.missionBody}</p>
             </div>
           </div>
        </Section>

        {/* 3 Pillars */}
        <Section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 uppercase">{t.landing.pillarsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.landing.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-black p-8 rounded-2xl border border-gray-800 relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                   {idx + 1}
                </div>
                <h3 className="text-white font-bold text-xl mt-8 mb-4">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button onClick={goToScheduling}>{t.landing.applicationBtn}</Button>
          </div>
        </Section>

        {/* Program Inclusions (Objection Handling) */}
        <Section className="bg-white text-black rounded-3xl my-12">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase">{t.landing.inclusionsTitle}</h2>
               <ul className="space-y-4 mb-8">
                 {t.landing.inclusions.map((inc, i) => (
                   <li key={i} className="flex items-center gap-3 font-medium text-lg">
                     <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                       <Check size={14} className="text-white" />
                     </div>
                     {inc}
                   </li>
                 ))}
               </ul>
               <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-red-500">
                  <h4 className="font-bold text-red-600 mb-2 uppercase">{t.landing.objectionTitle}</h4>
                  <p className="text-gray-700 text-sm">{t.landing.objectionBody}</p>
               </div>
             </div>
             <div>
               <VideoPlaceholder label="Program Tour" />
             </div>
           </div>
           <div className="mt-12 text-center">
              <Button variant="primary" onClick={goToScheduling} className="!bg-black !text-white hover:!bg-gray-800 !shadow-none">{t.landing.applicationBtn}</Button>
           </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center uppercase">{t.landing.faqTitle}</h2>
          <div className="space-y-4">
            {t.landing.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-800 rounded-lg bg-black overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-900 transition-colors"
                >
                  <span className="font-bold text-white">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="text-green-500" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-gray-400 border-t border-gray-800 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>
      </div>
    );
  };

  // --- Scheduling Page View ---
  const SchedulingView = () => (
    <div className="animate-in slide-in-from-right duration-500">
      <div className="bg-green-500 py-3 text-center">
         <p className="text-black font-bold uppercase tracking-wide text-sm md:text-base flex items-center justify-center gap-2">
           <Check size={18} /> {t.scheduling.congrats}
         </p>
      </div>

      <Section className="text-center pt-8 md:pt-12">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t.scheduling.nextStep}</h1>
        <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg inline-block max-w-2xl mx-auto mb-8">
           <p className="text-yellow-500 font-medium">{t.scheduling.important}</p>
        </div>

        {/* Embedded Calendar Placeholder */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col">
          {/* Header of fake calendar */}
          <div className="bg-gray-100 p-6 border-b flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
               <div className="text-left">
                 <h4 className="font-bold text-gray-900">Coach Strategy Session</h4>
                 <p className="text-gray-500 text-sm flex items-center gap-1"><Clock size={12}/> 30 min</p>
               </div>
            </div>
          </div>
          {/* Body of fake calendar */}
          <div className="flex-1 flex flex-col md:flex-row">
             <div className="md:w-2/3 p-6 border-r border-gray-100">
                <h3 className="text-black font-bold text-xl mb-6 text-left">{t.scheduling.calendarPlaceholder}</h3>
                <div className="grid grid-cols-7 gap-2 mb-4">
                   {['S','M','T','W','T','F','S'].map((d, i) => <div key={i} className="text-center text-gray-400 text-xs font-bold">{d}</div>)}
                   {Array.from({length: 30}).map((_, i) => (
                     <div key={i} className={`h-10 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-green-100 hover:text-green-600 transition-colors ${i === 14 ? 'bg-green-500 text-white shadow-lg' : 'text-gray-700'}`}>
                       {i + 1}
                     </div>
                   ))}
                </div>
             </div>
             <div className="md:w-1/3 p-6 bg-gray-50 h-full">
                <h4 className="text-gray-900 font-bold mb-4 text-left">Available Times</h4>
                <div className="space-y-2">
                   {['10:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'].map((time) => (
                     <button 
                       key={time}
                       onClick={goToConfirmation}
                       className="w-full py-2 border border-green-500 text-green-600 rounded hover:bg-green-500 hover:text-white transition-all font-medium"
                     >
                       {time}
                     </button>
                   ))}
                </div>
             </div>
          </div>
        </div>

        <p className="mt-8 text-gray-500 text-sm max-w-lg mx-auto">{t.scheduling.cantFindTime}</p>
      </Section>
    </div>
  );

  // --- Confirmation Page View ---
  const ConfirmationView = () => (
    <div className="animate-in slide-in-from-right duration-500">
       <Section className="text-center pt-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.5)]">
             <Check size={40} className="text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">{t.confirmation.thanks}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">{t.confirmation.sub}</p>

          <div className="space-y-16 max-w-4xl mx-auto">
             
             {/* Step 1 & 2 Videos */}
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="text-white font-bold text-xl mb-4 text-left border-l-4 border-green-500 pl-3">{t.confirmation.steps.step1}</h3>
                   <VideoPlaceholder label="Welcome Video" />
                </div>
                <div>
                   <h3 className="text-white font-bold text-xl mb-4 text-left border-l-4 border-green-500 pl-3">{t.confirmation.steps.step2}</h3>
                   <VideoPlaceholder label="Process Breakdown" />
                </div>
             </div>

             {/* Step 3: Confirm */}
             <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-left flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 bg-gray-800 rounded-lg">
                   <Calendar size={32} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{t.confirmation.steps.step3}</h3>
                  <p className="text-gray-400">{t.confirmation.steps.step3Desc}</p>
                </div>
             </div>

             {/* Step 4: Community */}
             <div className="bg-green-600/10 border border-green-500/30 p-8 rounded-2xl text-center">
                 <h3 className="text-white font-bold text-xl mb-4">{t.confirmation.steps.step4}</h3>
                 <p className="text-gray-300 mb-6">{t.confirmation.steps.step4Desc}</p>
                 <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto transition-colors">
                    <MessageCircle size={20} /> Join Discord
                 </button>
             </div>

             {/* Footer Checklist */}
             <div className="border-t border-gray-800 pt-12">
                <h2 className="text-3xl font-bold text-white mb-8">{t.confirmation.seeYou}</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                   {t.confirmation.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-gray-800">
                         <div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                         </div>
                         <span className="text-gray-300 font-medium">{item}</span>
                      </div>
                   ))}
                </div>
             </div>

          </div>
       </Section>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      
      <main>
        {page === 'landing' && <LandingView />}
        {page === 'scheduling' && <SchedulingView />}
        {page === 'confirmation' && <ConfirmationView />}
      </main>

      <Footer />
    </div>
  );
}