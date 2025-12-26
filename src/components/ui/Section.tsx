import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export default Section;
