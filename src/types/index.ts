export type Language = 'en' | 'pt';

export interface TranslationStructure {
  nav: {
    apply: string;
    home: string;
    testimonials: string;
    faq: string;
  };
  landing: {
    headline: string;
    subheadline: string;
    vslPlaceholder: string;
    applicationBtn: string;
    shortTestimonialTitle: string;
    meetCoachTitle: string;
    meetCoachBody: string;
    missionTitle: string;
    missionBody: string;
    objectionTitle: string;
    objectionBody: string;
    pillarsTitle: string;
    pillars: Array<{ title: string; desc: string }>;
    inclusionsTitle: string;
    inclusions: string[];
    faqTitle: string;
    faqs: Array<{ q: string; a: string }>;
  };
  scheduling: {
    congrats: string;
    nextStep: string;
    important: string;
    cantFindTime: string;
    calendarPlaceholder: string;
  };
  confirmation: {
    thanks: string;
    sub: string;
    steps: {
        step1: string;
        step2: string;
        step3: string;
        step3Desc: string;
        step4: string;
        step4Desc: string;
        step5: string;
    };
    seeYou: string;
    checklist: string[];
  };
  footer: {
    rights: string;
    terms: string;
    privacy: string;
  };
}
