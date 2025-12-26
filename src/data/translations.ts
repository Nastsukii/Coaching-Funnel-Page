import { TranslationStructure } from '@/types';

export const translations: Record<'en' | 'pt', TranslationStructure> = {
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
