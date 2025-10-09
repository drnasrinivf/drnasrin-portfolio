// JSX runtime is enabled so explicit React import is not required
import { Link } from 'react-router-dom';
import { Heart, Baby, Microscope, Stethoscope, Activity } from 'lucide-react';
export default function Services() {
  const services = [
    {
      id: 'infertility',
      title: 'Infertility Treatment',
      icon: Heart,
      description: 'Comprehensive evaluation and treatment for couples struggling with infertility',
      details: 'Our infertility program offers personalized treatment plans using the latest diagnostic tools and evidence-based approaches. We provide comprehensive fertility assessments, hormonal evaluations, and advanced reproductive technologies.',
      treatments: ['Fertility Assessment', 'Ovulation Induction', 'Hormonal Therapy', 'Male Factor Treatment'],
      successRate: '85%',
      duration: '3-12 months'
    },
    {
      id: 'ivf',
      title: 'IVF Treatment',
      icon: Baby,
      description: 'Advanced In Vitro Fertilization with cutting-edge technology and personalized protocols',
      details: 'Our IVF program combines state-of-the-art laboratory facilities with personalized treatment protocols. We offer fresh and frozen embryo transfers, preimplantation genetic testing, and comprehensive support throughout the process.',
      treatments: ['Fresh IVF Cycles', 'Frozen Embryo Transfer', 'PGT Testing', 'Blastocyst Culture'],
      successRate: '75%',
      duration: '2-4 months'
    },
    {
      id: 'iui',
      title: 'IUI Treatment',
      icon: Activity,
      description: 'Intrauterine Insemination for unexplained infertility and mild male factor issues',
      details: 'IUI is a minimally invasive fertility treatment that increases the chances of conception by placing specially prepared sperm directly into the uterus. This treatment is often recommended for couples with unexplained infertility.',
      treatments: ['Natural Cycle IUI', 'Stimulated IUI', 'Donor Sperm IUI', 'Timing Optimization'],
      successRate: '65%',
      duration: '1-6 cycles'
    },
    {
      id: 'gynecology',
      title: 'Gynecological Care',
      icon: Stethoscope,
      description: 'Comprehensive women\'s health services and routine gynecological care',
      details: 'Complete gynecological services including routine check-ups, preventive care, treatment of gynecological conditions, and management of reproductive health issues throughout all stages of life.',
      treatments: ['Annual Exams', 'PCOS Management', 'Endometriosis Care', 'Menstrual Disorders'],
      successRate: '95%',
      duration: 'Ongoing'
    },
    {
      id: 'laparoscopy',
      title: 'Laparoscopic Surgery',
      icon: Microscope,
      description: 'Minimally invasive surgical procedures for fertility enhancement and gynecological conditions',
      details: 'Advanced laparoscopic techniques for treating endometriosis, fibroids, ovarian cysts, and tubal blockages. Minimally invasive approach ensures faster recovery and better outcomes.',
      treatments: ['Endometriosis Surgery', 'Fibroid Removal', 'Tubal Surgery', 'Ovarian Cysts'],
      successRate: '90%',
      duration: '1-3 hours'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Comprehensive Fertility &
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Gynecological Care
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Advanced treatments and personalized care plans designed to help you achieve your
            family planning goals with the highest success rates and patient satisfaction.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.id}
                className="bg-white rounded-2xl shadow-lg border border-purple-50 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200"
                aria-labelledby={`service-${service.id}`}
              >
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-pink-50 text-pink-600 mb-4">
                    <IconComponent size={20} />
                  </div>
                  <h3 id={`service-${service.id}`} className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {service.duration}</span>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-pink-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors"
                    aria-label={`View ${service.title}`}
                  >
                    View service
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}