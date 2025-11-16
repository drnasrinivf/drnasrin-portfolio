import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CollaborateForm() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const options = [
    'Conference',
    'Community Initiatives',
    'Workshop',
    'TV & Media appearance',
    'Colleges & institution',
    'Corporate wellness'
  ];

  const toggleEvent = (value: string) => {
    setEvents(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  const buildEmailBody = () => {
    return `Name: ${name}\nAddress: ${address}\nPhone: ${phone}\nEmail: ${email}\n\nEvents:\n- ${events.join('\n- ')}\n`;
  };

  // Replace this endpoint with your Formspree endpoint or other form endpoint that forwards to email.
  // Example Formspree endpoint: https://formspree.io/f/yourFormId
  const FORM_ENDPOINT = 'https://formspree.io/f/yourFormId';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      address,
      phone,
      email,
      events: events.join(', '),
      _subject: 'Collaboration request from website'
    };

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSent(true);
        // optional: clear form
        setName(''); setAddress(''); setPhone(''); setEmail(''); setEvents([]);
        setTimeout(() => navigate('/'), 1400);
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Form submit failed', data);
        alert('Failed to send form. Please try the "Copy to clipboard" option and email to drnasrinivf@gmail.com');
      }
    } catch (err) {
      console.error(err);
      alert('Network error when sending form. Use the "Copy to clipboard" option and email to drnasrinivf@gmail.com');
    }
  };

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="text-sm text-pink-600 mb-6 inline-flex items-center">← Back</button>

        <h1 className="text-3xl font-bold mb-4">Collaborate with Dr. Nasrin</h1>
        <p className="text-gray-600 mb-6">Please fill the form below and we'll get back to you. The response will open in your email client; if it doesn't, copy the content and send it to drnasrinivf@gmail.com.</p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl p-6 shadow-lg border border-purple-100">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea required value={address} onChange={e => setAddress(e.target.value)} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input required value={phone} onChange={e => setPhone(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event (select one or more)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {options.map(opt => (
                <label key={opt} className="inline-flex items-center space-x-2">
                  <input type="checkbox" checked={events.includes(opt)} onChange={() => toggleEvent(opt)} className="form-checkbox h-4 w-4 text-pink-600" />
                  <span className="text-gray-700">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button type="submit" className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">Submit</button>
            <button type="button" onClick={() => {
              // copy the email body to clipboard as fallback
              navigator.clipboard.writeText(buildEmailBody());
              alert('Form content copied to clipboard. Paste into your email to send to drnasrinivf@gmail.com');
            }} className="text-sm text-gray-600 underline">Copy to clipboard</button>
          </div>

          {sent && <div className="text-green-600 font-medium">Email composer opened — if it didn't open, please use the copied content and send to drnasrinivf@gmail.com</div>}
        </form>
      </div>
    </div>
  );
}
