import React, { createContext, useState, useContext, type ReactNode } from 'react';

type Language = 'id' | 'en';

interface Dictionary {
  [key: string]: any;
}

const translations: Record<Language, Dictionary> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Halo, saya',
      role: 'Web Developer / Programmer',
      cta: 'Hubungi Saya',
      viewWork: 'Lihat Karya',
    },
    about: {
      title: 'Tentang Saya',
      description1: 'Saya adalah seorang Web Developer yang memiliki passion dalam menciptakan antarmuka yang indah dan fungsional. Saya suka memadukan desain yang clean dengan kode yang efisien.',
      description2: 'Berbekal ketelitian, saya membangun website yang responsif dan user-friendly, fokus pada pengalaman pengguna yang luar biasa.',
    },
    skills: {
      title: 'Keahlian',
    },
    projects: {
      title: 'Proyek',
      viewLink: 'Kunjungi Web',
    },
    certificates: {
      title: 'Sertifikat',
    },
    contact: {
      title: 'Hubungi Saya',
      formName: 'Nama Lengkap',
      formEmail: 'Email',
      formMessage: 'Pesan Anda',
      send: 'Kirim Pesan',
      manualText: 'Atau hubungi saya melalui jalur berikut:',
    },
    footer: {
      copyright: 'Hak Cipta Dilindungi',
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Web Developer / Programmer',
      cta: 'Contact Me',
      viewWork: 'View Work',
    },
    about: {
      title: 'About Me',
      description1: 'I am a Web Developer with a passion for creating beautiful and functional interfaces. I love combining clean design with efficient code.',
      description2: 'Armed with attention to detail, I build responsive and user-friendly websites, focusing on an outstanding user experience.',
    },
    skills: {
      title: 'Skills',
    },
    projects: {
      title: 'Projects',
      viewLink: 'Visit Site',
    },
    certificates: {
      title: 'Certificates',
    },
    contact: {
      title: 'Contact Me',
      formName: 'Full Name',
      formEmail: 'Email',
      formMessage: 'Your Message',
      send: 'Send Message',
      manualText: 'Or reach out to me via:',
    },
    footer: {
      copyright: 'All Rights Reserved',
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'id' ? 'en' : 'id'));
  };

  const t = (section: string, key: string): string => {
    return translations[language][section]?.[key] || `${section}.${key}`;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
