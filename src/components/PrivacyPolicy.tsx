import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl font-bold mb-4">Privacy Policy – Dr. Nasrin &amp; Eva IVF</h1>
        <p className="text-gray-700 mb-6">Effective Date: [Insert Date]</p>

        <p className="text-gray-700 mb-4">
          At Eva IVF &amp; Women’s Centre, your privacy is our priority. We collect, store, and use personal
          and medical information only to provide you with the highest-quality fertility and gynecological care.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Personal details: name, email, phone number, address</li>
          <li>Medical history and treatment information you provide</li>
          <li>Website usage and analytics to improve our services</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Schedule appointments and manage treatment plans</li>
          <li>Respond to inquiries and provide guidance</li>
          <li>Share educational content, updates, or promotions (only with your consent)</li>
          <li>Improve our website, services, and patient experience</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">Data Protection</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>All information is stored securely using encryption and access controls</li>
          <li>We do not sell or share your personal data without consent, except when legally required</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">Cookies &amp; Analytics</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>We use cookies to enhance your browsing experience and understand website usage</li>
          <li>You may manage cookie preferences via your browser</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">International Patients</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>For patients outside India, we comply with applicable international privacy regulations (e.g., GDPR, HIPAA where relevant)</li>
          <li>Patients are responsible for understanding and complying with local medical and travel regulations</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700">For privacy questions, corrections, or data requests, email: [Insert Email]</p>
      </div>
    </div>
  );
}
