// SEO Meta tags configuration for all pages
export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
}

export const seoConfig: Record<string, SEOConfig> = {
  home: {
    title: 'Best Fertility Hospital in Chennai,India for IVF & Infertility Care',
    description:
      'Trusted fertility hospital in Chennai,India offering IVF, ICSI, IUI, fertility preservation, and advanced infertility treatments with expert guidance.',
    canonical: 'https://www.drnasrinhasan.com/',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Best Fertility Hospital in Chennai,India for IVF & Infertility Care',
    ogDescription: 'Trusted fertility hospital in Chennai,India offering IVF, ICSI, IUI, fertility preservation, and advanced infertility treatments with expert guidance.',
    ogType: 'website'
  },
  infertility: {
    title: 'Best Infertility Treatment Hospital in India | Advanced Fertility Care by Dr. Nasrin Hasan',
    description:
      'Looking for the best infertility treatment hospital in India? Dr. Nasrin Hasan offers advanced fertility treatments, IVF, ICSI, IUI, and personalized reproductive care to help couples achieve parenthood.',
    canonical: 'https://www.drnasrinhasan.com/services/infertility',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Best Infertility Treatment Hospital in India | Dr. Nasrin Hasan',
    ogDescription: 'Advanced infertility treatment with IVF, ICSI, IUI, and personalized reproductive care.',
    ogType: 'website'
  },
  ivf: {
    title: 'Best IVF Treatment in India | High Success IVF Care by Dr. Nasrin Hasan',
    description:
      'Get the best IVF treatment in India with Dr. Nasrin Hasan. Advanced fertility solutions, high-quality care, and personalized treatment plans for local and international patients.',
    canonical: 'https://www.drnasrinhasan.com/services/ivf',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Best IVF Treatment in India | Dr. Nasrin Hasan',
    ogDescription: 'Advanced IVF treatment with personalized protocols and high success rates.',
    ogType: 'website'
  },
  iui: {
    title: 'Best IUI Treatment in India | Expert Fertility Specialist – Dr. Nasrin Hasan',
    description:
      'Looking for the best IUI treatment in India? Dr. Nasrin Hasan offers personalized IUI fertility treatments with advanced reproductive care, high success rates, and expert guidance for couples trying to conceive. Book your consultation today.',
    canonical: 'https://www.drnasrinhasan.com/services/iui',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Best IUI Treatment in India | Dr. Nasrin Hasan',
    ogDescription: 'Expert IUI fertility treatments with personalized care and high success rates.',
    ogType: 'website'
  },
  gynecology: {
    title: 'Best Gynecologist in India for Fertility & Women\'s Health | Dr. Nasrin Hasan',
    description:
      'Looking for the best gynecologist in India? Dr. Nasrin Hasan provides expert gynecology and fertility care for women worldwide, including UAE, Singapore, Malaysia, and Australia.',
    canonical: 'https://www.drnasrinhasan.com/services/gynecology',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Best Gynecologist in India for Fertility & Women\'s Health | Dr. Nasrin Hasan',
    ogDescription: 'Expert gynecology and fertility care for women worldwide.',
    ogType: 'website'
  },
  laparoscopy: {
    title: 'Expert Laparoscopic Fertility Surgery in Chennai, India',
    description:
      'Looking for laparoscopic infertility treatment in India? Dr. Nasrin Hasan offers advanced minimally invasive surgery for infertility, endometriosis, fibroids, and blocked fallopian tubes. Book a consultation today.',
    canonical: 'https://www.drnasrinhasan.com/services/laparoscopy',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Expert Laparoscopic Fertility Surgery in Chennai, India',
    ogDescription: 'Advanced laparoscopic surgery for infertility, endometriosis, fibroids, and more.',
    ogType: 'website'
  },
  privacyPolicy: {
    title: 'Privacy Policy | Dr. Nasrin Hasan',
    description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
    canonical: 'https://www.drnasrinhasan.com/privacy-policy',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Privacy Policy | Dr. Nasrin Hasan',
    ogDescription: 'Privacy policy and data protection information.',
    ogType: 'website'
  },
  medicalDisclaimer: {
    title: 'Medical Disclaimer | Dr. Nasrin Hasan',
    description:
      'Important medical disclaimer regarding the information provided on our website and services.',
    canonical: 'https://www.drnasrinhasan.com/medical-disclaimer',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Medical Disclaimer | Dr. Nasrin Hasan',
    ogDescription: 'Important medical disclaimer.',
    ogType: 'website'
  },
  termsConditions: {
    title: 'Terms & Conditions | Dr. Nasrin Hasan',
    description: 'Terms and conditions for using our website and services.',
    canonical: 'https://www.drnasrinhasan.com/terms-conditions',
    robots: 'follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    ogTitle: 'Terms & Conditions | Dr. Nasrin Hasan',
    ogDescription: 'Terms and conditions for website usage.',
    ogType: 'website'
  }
};

/**
 * Helper function to get SEO config for a page
 */
export const getSEOConfig = (pageKey: string): SEOConfig => {
  return seoConfig[pageKey] || seoConfig.home;
};
