import { useNavigate } from 'react-router-dom';

export default function MedicalDisclaimer() {
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

        <h1 className="text-3xl font-bold mb-4">Medical Disclaimer – Dr. Nasrin &amp; Eva IVF</h1>
        <p className="text-gray-700 mb-6">The content on this website is for general informational purposes only. It is not a substitute for personalized medical advice, diagnosis, or treatment. Always consult a qualified fertility specialist or healthcare provider for advice specific to your situation.</p>

        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Treatment results vary depending on diagnosis, health status, and individual circumstances</li>
          <li>Testimonials, case studies, or patient stories represent individual experiences and are not guaranteed outcomes</li>
          <li>International patients should seek guidance from local medical authorities before traveling for treatment</li>
          <li>By using this website, you acknowledge that Dr. Nasrin and Eva IVF are not liable for decisions made based on website content</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p className="text-gray-700">For privacy or medical questions, email: [Insert Email]</p>
      </div>
    </div>
  );
}
