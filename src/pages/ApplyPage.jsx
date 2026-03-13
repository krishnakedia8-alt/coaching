import { Link } from '../components/Router';

export default function ApplyPage() {
  const whatsappLink = 'https://wa.me/918117965501';
  const emailAddress = 'coach@metamorphosis.fit';

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono">
      <header className="border-b-4 border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-black uppercase tracking-tighter">METAMORPHOSIS</Link>
          <Link to="/" className="border-2 border-neutral-100 px-6 py-3 hover:bg-neutral-100 hover:text-neutral-950 transition-all uppercase text-sm font-bold">← Back to Home</Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-24">
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-6 leading-none text-center">Work With Me</h1>
        <p className="text-xl text-neutral-400 text-center mb-16">Choose your preferred way to start your metamorphosis.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <a href={whatsappLink} className="border-4 border-neutral-800 p-10 text-center bg-green-700 text-neutral-950 font-black uppercase">WhatsApp →</a>
          <a href={`mailto:${emailAddress}`} className="border-4 border-neutral-100 p-10 text-center font-black uppercase hover:bg-neutral-100 hover:text-neutral-950 transition-colors">Email →</a>
        </div>
      </main>
    </div>
  );
}
