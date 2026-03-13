import { useState } from 'react';
import { Link } from '../components/Router';

export default function HomePage() {
  const whatsappLink = 'https://wa.me/918117965501';
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqData = [
    {
      q: 'How does online coaching work?',
      a: 'You receive a custom training program delivered through spreadsheets or training apps. We communicate via WhatsApp for daily check-ins, form checks through video analysis, and program adjustments. You train on your schedule, I handle the programming and technical feedback.'
    },
    {
      q: 'Do I need a specific gym for powerlifting?',
      a: "You need access to a barbell, squat rack, bench, and plates. Most commercial gyms work fine. If your gym lacks equipment, I'll adapt the program to what you have available while maintaining the training effect."
    },
    {
      q: "I'm a complete beginner, is this for me?",
      a: 'Yes. Beginners get a specialized onboarding path focused on movement quality and building a foundation. We start with technique mastery before adding intensity. Most of my athletes started from zero lifting experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono">
      <header className="border-b-4 border-neutral-800 bg-neutral-950 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
          <div className="text-3xl font-black uppercase tracking-tighter">METAMORPHOSIS</div>
          <nav className="hidden md:flex gap-8">
            <a href="#coaching" className="text-sm uppercase tracking-wide hover:text-red-500 transition-colors">Coaching</a>
            <a href="#about" className="text-sm uppercase tracking-wide hover:text-red-500 transition-colors">About</a>
            <a href="#faq" className="text-sm uppercase tracking-wide hover:text-red-500 transition-colors">FAQ</a>
          </nav>
          <Link to="/apply" className="border-2 border-neutral-100 px-6 py-3 hover:bg-neutral-100 hover:text-neutral-950 transition-all uppercase text-sm font-bold tracking-wide">
            Work with me
          </Link>
        </div>
      </header>

      <section className="border-b-4 border-neutral-800 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 leading-none">
              FROM<br />SCRATCH<br />TO<br /><span className="text-red-600">STRONG</span>
            </h1>
            <div className="h-1 w-24 bg-red-600 mb-6" />
            <p className="text-xl md:text-2xl mb-8 text-neutral-400 leading-relaxed">
              Elite 1-on-1 online coaching for powerlifters and beginners ready to evolve.
            </p>
            <a href={whatsappLink} className="inline-block bg-red-600 text-neutral-950 px-8 py-4 text-lg font-bold uppercase hover:bg-red-700 transition-colors">
              Start Your Evolution
            </a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=90"
            alt="Powerlifter preparing for lift"
            className="w-full h-[500px] object-cover border-4 border-neutral-800 grayscale contrast-125"
          />
        </div>
      </section>

      <section id="coaching" className="border-b-4 border-neutral-800 py-16 md:py-24 px-4 md:px-8 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 border-b-4 border-red-600 pb-4 inline-block">1-ON-1 ONLINE COACHING</h2>
          <p className="text-lg text-neutral-400 max-w-3xl">Custom training blocks, technique analysis, and direct accountability through WhatsApp.</p>
        </div>
      </section>

      <section id="about" className="border-b-4 border-neutral-800 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">The Philosophy</h2>
          <p className="text-lg text-neutral-400 leading-relaxed">We don't guess. We test, measure, and adjust. Your program evolves as you do.</p>
        </div>
      </section>

      <section id="faq" className="border-b-4 border-neutral-800 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12">FAQ</h2>
          <div className="space-y-4">
            {faqData.map((item, i) => (
              <div key={i} className="border-2 border-neutral-800 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full p-6 text-left hover:bg-neutral-900 transition-colors flex justify-between items-center gap-4"
                >
                  <span className="font-black uppercase text-lg">{item.q}</span>
                  <span className="text-2xl flex-shrink-0">{expandedFaq === i ? '−' : '+'}</span>
                </button>
                {expandedFaq === i && <div className="px-6 pb-6 text-neutral-400 leading-relaxed border-t-2 border-neutral-800 pt-6">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
