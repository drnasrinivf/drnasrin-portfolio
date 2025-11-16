import { MapPin, Phone, Mail, Clock, Globe, Calendar } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  // contact form has been commented out — state and handlers removed

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 98420 70099"],
      color: "text-purple-500"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: [" dr.nasrinhasan.mmc@gmail.com"],
      color: "text-pink-500"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: [
        "Monday – Saturday: 09am - 09pm",
        "Sunday: 09am - 01pm"
      ],
      color: "text-purple-500"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "Eva IVF and Women’s Care, Plot No 10 ;",
        "23, Bazar Main Road,",
        "Ram Nagar South, Madipakkam,",
        "Chennai – 600091"
      ],
      color: "text-pink-600"
    }
  ];

  const socialLinks = [
  { name: "Facebook", url: " https://www.facebook.com/share/1ForaKpUM5/", icon: FaFacebookF, color: "text-blue-600" },
  { name: "Instagram", url: "https://www.instagram.com/dr.nasrinhasan.mmc?igsh=MWl2YXZ0MTR0M2d2eA==", icon: FaInstagram, color: "text-pink-600" },
  //{ name: "Twitter", url: "#", icon: FaTwitter, color: "text-blue-400" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dr-nasrin-hasan", icon: FaLinkedinIn, color: "text-blue-700" },
  { name: "YouTube", url: "https://youtube.com/@drnasrinhasan?si=viBLfVG8BxzADBjI", icon: FaYoutube, color: "text-red-600" }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Start
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Your Journey?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contact our international team today. We're here to answer your questions, 
            provide guidance, and support you every step of the way to parenthood.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => {
                const el = document.getElementById('consultation');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column: Quick Actions + Contact Details */}
          {/**
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-100">
            <div className="flex items-center space-x-3 mb-8">
              <MessageCircle className="text-pink-500" size={24} />
              <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                ...form fields...
              </form>
            )}
          </div>
          */}

          <div className="space-y-8">
            {/* ...existing code... */}

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <info.icon className={`${info.color}`} size={20} />
                    <h4 className="font-bold text-gray-900">{info.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Branch Addresses */}
            <div className="mt-4 bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <h4 className="font-bold text-gray-900 mb-3">Addresses for all branches</h4>
              <div className="text-gray-600 text-sm space-y-3">
                
                <div>
                  <p className="font-semibold">Adyar</p>
                  <p>65, 3rd Ave, Indira Nagar, Adyar, Chennai, Tamil Nadu 600020</p>
                </div>

                <div>
                  <p className="font-semibold">Thoraipakkam</p>
                  <p>Central Excise &amp; CC, Plot No.2, Sakthi Nagar Main St, Customs Colony, Jothi Nagar, Thoraipakkam, Tamil Nadu 600097</p>
                </div>

                <div>
                  <p className="font-semibold">Mannadi</p>
                  <p>43/01, P V Iyer St, Mannadi, George Town, Chennai, Tamil Nadu 600001</p>
                </div>
              </div>
            </div>
          </div>
          

          {/* Right column: International Support + Social + Map */}
          <div className="space-y-8">
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="text-purple-600" size={20} />
                <h4 className="text-lg font-bold text-gray-900">International Patient Support</h4>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Our dedicated international team provides comprehensive support including:
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>• Visa documentation assistance</li>
                <li>• Travel and accommodation coordination</li>
                <li>• Airport pickup services</li>
                <li>• Multi-language interpretation</li>
                <li>• Insurance coordination</li>
                <li>• Cultural liaison services</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4 mb-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`w-10 h-10 ${social.color} bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors`}
                      title={social.name}
                    >
                      <span className="sr-only">{social.name}</span>
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
              <p className="text-gray-600 text-sm">
                Stay updated with success stories, health tips, and treatment insights.
              </p>
            </div>

            {/* ...existing code... */}
          </div>
        </div>

        
      </div>
    </div>
  );
}