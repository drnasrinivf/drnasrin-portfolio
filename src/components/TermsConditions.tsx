import { useNavigate } from 'react-router-dom';

export default function TermsConditions() {
  const navigate = useNavigate();
  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={goBack}
          className="text-sm text-pink-600 mb-6 inline-flex items-center"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-4">Terms &amp; Conditions – Dr. Nasrin &amp; Eva IVF</h1>

        <p className="text-gray-700 mb-4">Welcome to Eva IVF &amp; Women’s Centre website. By accessing or using this site, you agree to the following:</p>

        <h2 className="text-lg font-semibold mt-4">1. Use of Content</h2>
        <p className="text-gray-700">All content, including text, images, and media, is for informational purposes only. Unauthorized copying, distribution, or commercial use is prohibited.</p>

        <h2 className="text-lg font-semibold mt-4">2. Medical Services</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Treatment and consultations are provided only after formal appointments</li>
          <li>Information on this website does not create a doctor-patient relationship</li>
        </ol>

        <h2 className="text-lg font-semibold mt-4">3. Appointments &amp; Consultations</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Online booking requests are subject to availability</li>
          <li>Confirmations, treatment schedules, and protocols are finalized by the clinic</li>
        </ol>

        <h2 className="text-lg font-semibold mt-4">4. International Patients</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Patients are responsible for travel, visas, and local regulations</li>
          <li>Eva IVF provides support but does not assume liability for international travel or compliance issues</li>
        </ol>

        <h2 className="text-lg font-semibold mt-4">5. Liability</h2>
        <p className="text-gray-700">Dr. Nasrin and Eva IVF are not responsible for indirect, incidental, or consequential losses arising from website use</p>

        <h2 className="text-lg font-semibold mt-4">6. Amendments</h2>
        <p className="text-gray-700">These Terms may be updated periodically; users are encouraged to review regularly</p>

        <h2 className="text-lg font-semibold mt-4">Contact Us</h2>
        <p className="text-gray-700">For questions regarding these Terms, Privacy, or Medical Disclaimer, email: [Insert Email]</p>
      </div>
    </div>
  );
}
