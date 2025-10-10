import { InlineWidget } from 'react-calendly';
import { Calendar, Globe } from 'lucide-react';

export default function Consultation() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <span className="text-pink-600 font-medium text-sm tracking-wider uppercase">
              Book Your Consultation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Start Your Journey
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              With a Free Consultation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Take the first step towards achieving your family planning goals. Book a personalized 
            consultation with Dr. Nasrin IVF, available online for international patients.
          </p>
        </div>

        {/* Calendly Booking Widget */}
        <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 px-4 sm:px-8 py-6 sm:py-8 flex flex-col items-center overflow-hidden">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center text-center">
            <Calendar className="text-pink-500 mr-2" size={28} />
            Book Your Appointment Instantly
          </h3>
          {/* Constrain calendar width and ensure it's centered with padding on small screens */}
          <div className="w-full max-w-3xl mx-auto min-h-[560px] sm:min-h-[700px] overflow-hidden">
            <InlineWidget
              url="https://calendly.com/drnasrinivf/30min"
              styles={{ width: '100%', minHeight: '560px', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(236, 72, 153, 0.15)' }}
              pageSettings={{
                backgroundColor: '#fff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '#ec4899',
                textColor: '#1f2937',
              }}
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Powered by <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold underline">Calendly</a> instantly confirmed and double bookings are prevented.
            </p>
          </div>
        </div>

        {/* International Patient Benefits */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="text-white" size={24} />
            <h3 className="text-2xl font-bold">International Patient Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-semibold">✓ Visa assistance support</p>
              <p className="font-semibold">✓ Airport pickup service</p>
              <p className="font-semibold">✓ Hotel recommendations</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">✓ Multi-language support</p>
              <p className="font-semibold">✓ Cultural liaison services</p>
              <p className="font-semibold">✓ Insurance coordination</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}