// React import intentionally omitted because JSX runtime handles it (no direct React symbol usage)
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

const servicesContent: Record<string, any> = {
  infertility: {
    metaTitle: 'Infertility Treatment | Fertility Specialist Dr. Nasrin, Chennai',
    metaDescription:
      'Comprehensive infertility evaluation and treatment. Personalized plans for male and female factor infertility, international patient support.',
    slug: '/services/infertility',
    title: 'Infertility evaluation and treatment',
    intro:
      'Infertility is diagnosed when a couple cannot achieve pregnancy after 12 months of regular unprotected intercourse, or after 6 months when the woman is 35 or older. We provide a full diagnostic workup and tailored treatment plans that address female, male, combined, and unexplained infertility.',
    whatWeOffer: [
      'Comprehensive fertility assessment - history, semen analysis, ovarian reserve testing, pelvic imaging',
      'Hormonal evaluation and cycle mapping',
      'Targeted medical treatments - ovulation induction, hormonal therapy',
      'Referral and coordination for assisted reproductive techniques when needed',
      'Counseling and support for emotional and lifestyle factors'
    ],
    pathway: [
      'Initial assessment and tests (blood work, ultrasound, semen analysis)',
      'Diagnosis and personalized treatment plan',
      'Medical interventions or referral to IVF/IUI as indicated',
      'Follow-up, monitoring, and supportive care'
    ],
    whoShould: [
      'Couples trying for 12 months without success, or 6 months if age 35+',
      'Known male factor, ovulatory disorders, tubal disease, recurrent pregnancy loss, or unexplained infertility'
    ],
    notes:
      'Early evaluation improves options and outcomes. Treatment decisions follow evidence-based guidelines and individual goals.'
  },
  ivf: {
    metaTitle: 'IVF Treatment | IVF Doctor Dr. Nasrin – Eva IVF Chennai',
    metaDescription:
      'IVF, ICSI and embryo care with global patient services. Age-specific success guidance and personalized IVF protocols.',
    slug: '/services/ivf',
    title: 'IVF and assisted reproductive techniques',
    intro:
      'In vitro fertilization (IVF) is a core Assisted Reproductive Technology (ART) for many couples. Our IVF services include tailored stimulation protocols, ICSI when indicated, embryo culture, genetic testing on request, and personalized transfer strategies for best outcomes. Summary success rates vary by age and diagnosis; younger patients generally have higher live birth rates. See clinic counseling for individual estimates. (hfea.gov.uk)',
    whatWeOffer: [
      'Controlled ovarian stimulation and monitoring',
      'Oocyte retrieval, conventional IVF, and ICSI',
      'Embryology lab with modern culture systems and embryo vitrification',
      'Preimplantation genetic testing on request',
      'Frozen embryo transfer and fertility preservation (egg freezing)'
    ],
    pathway: [
      'Consultation and fertility assessment',
      'Customized stimulation protocol',
      'Egg retrieval and fertilization (IVF/ICSI)',
      'Embryo culture, testing if indicated, transfer or freeze',
      'Luteal support and pregnancy testing, followed by antenatal handover'
    ],
    outcome:
      'IVF live birth and pregnancy rates depend strongly on age, ovarian reserve, and underlying diagnosis. We use validated tools and data to counsel patients on realistic chances and options.'
  },
  iui: {
    metaTitle: 'IUI Treatment | Intrauterine Insemination – Eva IVF Chennai',
    metaDescription:
      'IUI services for selected couples. Ovulation induction, monitored cycles, and step-up care toward ART when needed.',
    slug: '/services/iui',
    title: 'Intrauterine insemination (IUI)',
    intro:
      'IUI is a low-to-moderate complexity fertility treatment where processed sperm is placed directly into the uterus around ovulation. For selected patients with mild male factor, unexplained infertility, or cervical issues, IUI is an accessible first-line option before moving to IVF. Typical per-cycle success varies by age and diagnosis. (PMC)',
    whatWeOffer: [
      'Ovulation induction with oral or injectable agents',
      'Timed IUI with ultrasound monitoring and semen preparation',
      'Counseling on expected per-cycle and cumulative success rates',
      'Clear escalation plan to IVF when indicated'
    ],
    whoBenefits: [
      'Women under 35 with normal tubes and mild sperm abnormalities',
      'Couples with unexplained infertility after basic evaluation'
    ],
    outcome:
      'Per-cycle pregnancy rates vary widely by age and indication; cumulative success increases with repeated cycles but plateaus for some couples. We provide data-driven counseling so you know when to continue IUI or move to IVF.'
  },
  gynecology: {
    metaTitle: 'Gynecology Services | Women’s Health – Dr. Nasrin',
    metaDescription:
      'Comprehensive gynecology care, routine to complex. Endometriosis, PCOS management, high-risk pregnancy referral and reproductive health.',
    slug: '/services/gynecology',
    title: 'Comprehensive gynecology and women’s health',
    intro:
      'We offer a full range of gynecology services that support reproductive and general women’s health. Services include diagnosis and management of menstrual disorders, PCOS, endometriosis, recurrent pregnancy loss, high-risk pregnancy coordination, and preconception counseling. Care is evidence-based and patient-centered.',
    whatWeOffer: [
      'Menstrual and hormonal disorder management including PCOS',
      'Endometriosis diagnosis and care coordination',
      'Preconception health checks and optimization',
      'Prenatal risk assessment and linkage with obstetrics teams',
      'Contraception counseling and menopause care'
    ],
    pathway:
      'Assessment, investigations, conservative management, and timely referral for procedures or surgery if required. Our focus is on minimizing interventions while optimizing reproductive outcomes.'
  },
  laparoscopy: {
    metaTitle: 'Laparoscopic Gynecology | Minimally Invasive Surgery – Eva IVF',
    metaDescription:
      'Laparoscopic diagnosis and surgery for endometriosis, adhesions, fibroids and ovarian cysts. Fast recovery and precision care.',
    slug: '/services/laparoscopy',
    title: 'Laparoscopic gynecologic surgery and diagnostics',
    intro:
      'Laparoscopy is a minimally invasive surgical approach used for diagnosis and treatment of many gynecologic conditions that affect fertility and quality of life. Our laparoscopic services include diagnostic laparoscopy, adhesiolysis, endometriosis surgery, ovarian cystectomy, and fertility-preserving procedures. Laparoscopy reduces recovery time and allows precise treatment when indicated.',
    whatWeOffer: [
      'Diagnostic laparoscopy for tubal disease, endometriosis, and pelvic pain',
      'Therapeutic laparoscopy for endometriosis, ovarian cysts, and adhesions',
      'Fertility-sparing procedures and minimally invasive hysterectomy where required',
      'Advanced imaging and intraoperative evaluation'
    ],
    outcome:
      'Most patients have shorter hospital stays and faster recovery compared with open surgery. Indications and risks are discussed in detail to ensure informed decisions. Per-patient benefit depends on the diagnosis and surgical findings.'
  }
};

export default function ServiceDetail(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  // Navigate to home then scroll to consultation section. Uses retries because the element
  // may mount after navigation in the SPA.
  const goToConsultation = () => {
    const maxAttempts = 20;
    let attempts = 0;

    // Navigate to root first
    navigate('/');

    const tryScroll = () => {
      attempts += 1;
      const el = document.getElementById('consultation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 150);
      }
    };

    // Start attempting after a short delay to allow the page to render
    setTimeout(tryScroll, 150);
  };
  const goToSection = (id: string) => {
    const maxAttempts = 20;
    let attempts = 0;
    navigate('/');

    const tryScroll = () => {
      attempts += 1;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 150);
      }
    };

    setTimeout(tryScroll, 150);
  };
  const content = slug ? servicesContent[slug] : null;

  if (!content) {
    return (
      <div className="min-h-screen py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Service not found</h1>
          <p className="text-gray-600 mb-6">The requested service does not exist. Please choose from our services page.</p>
          <Link to="/#services" className="inline-flex items-center gap-2 text-pink-600 font-medium">
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.metaDescription} />
      </Helmet>

      {/* Top strip / back link */}
      <div className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <button onClick={() => goToSection('services')} className="inline-flex items-center gap-2 hover:text-pink-600 text-sm text-gray-600">
              <ArrowLeft size={16} />
              <span className="font-medium">Back to Services</span>
            </button>
            <span className="text-xs text-gray-300">/</span>
            <span className="text-sm font-medium text-gray-800">{content.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">{content.title}</h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg text-justify">{content.intro}</p>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="lg:flex lg:items-start lg:gap-12">
          {/* Primary column */}
          <article className="lg:flex-1 max-w-6xl">
            <section className="prose prose-lg max-w-none text-justify">
              {/* What we offer - plain list, no boxed cards */}
              {content.whatWeOffer && (
                <>
                  <h2 className="text-2xl font-semibold">What we offer</h2>
                  <ol className="list-decimal ml-6 space-y-2">
                    {content.whatWeOffer.map((item: string, idx: number) => (
                      <li key={idx} className="text-gray-700">{item}</li>
                    ))}
                  </ol>
                </>
              )}

              {/* Who should consider / Who benefits (prefer whoBenefits key) */}
              {(content.whoShould || content.whoBenefits) && (
                <>
                  <h2 className="mt-8 text-2xl font-semibold">{content.whoBenefits ? 'Who benefits most' : 'Who should consider evaluation'}</h2>
                  {content.whoBenefits ? (
                    <ol className="list-decimal ml-6 space-y-2">
                      {content.whoBenefits.map((item: string, idx: number) => (
                        <li key={`benefit-${idx}`} className="text-gray-700">{item}</li>
                      ))}
                    </ol>
                  ) : (
                    <ul>
                      {(content.whoShould || []).map((item: string, idx: number) => (
                        <li key={`who-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}

              {/* Treatment pathway - ordered list with clear spacing */}
              {content.pathway && (
                <>
                  <h2 className="mt-8 text-2xl font-semibold">Treatment pathway</h2>
                  {Array.isArray(content.pathway) ? (
                    <ol className="list-decimal ml-6 space-y-3">
                      {content.pathway.map((step: string, idx: number) => (
                        <li key={idx} className="text-gray-700">{step}</li>
                      ))}
                    </ol>
                  ) : (
                    <p className="text-gray-700">{content.pathway}</p>
                  )}
                </>
              )}

              {/* Outcome guidance / expectations */}
              {content.outcome && (
                <>
                  <h2 className="mt-8 text-2xl font-semibold">{slug === 'iui' ? 'Outcome expectations' : 'Outcome guidance'}</h2>
                  <p className="text-gray-700">{content.outcome}</p>
                </>
              )}

              {/* Key notes */}
              {content.notes && (
                <>
                  <h2 className="mt-8 text-2xl font-semibold">Key outcome notes</h2>
                  <p className="text-gray-700">{content.notes}</p>
                </>
              )}
            </section>

            {/* Inline CTA for large screens */}
            <div className="mt-10 hidden sm:flex items-center gap-4">
              <button onClick={goToConsultation} className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white py-3 px-5 rounded-md font-medium">Book a consultation</button>
              <button onClick={() => goToSection('services')} className="text-sm text-gray-600 inline-flex items-center gap-2">
                <ArrowLeft size={14} />
                <span>Back to services</span>
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* Mobile fixed CTA */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
          <div className="bg-white/95 backdrop-blur rounded-full p-2 shadow-md flex gap-3 items-center justify-center">
          <button onClick={goToConsultation} className="flex-1 inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-full font-medium">Book a consultation</button>
          <Link to="/#services" className="inline-flex items-center justify-center text-sm text-gray-700 px-3">Services</Link>
        </div>
      </div>
    </div>
  );
}
