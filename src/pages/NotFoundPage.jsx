import { Link } from '../components/Router';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-mono flex items-center justify-center p-6">
      <div className="text-center border-4 border-neutral-800 p-10 max-w-xl w-full">
        <h1 className="text-5xl font-black uppercase mb-4">Page Not Found</h1>
        <p className="text-neutral-400 mb-8">The page you requested does not exist. Go back and continue your training journey.</p>
        <Link to="/" className="inline-block border-2 border-neutral-100 px-6 py-3 font-bold uppercase hover:bg-neutral-100 hover:text-neutral-950 transition-all">Back to Home</Link>
      </div>
    </div>
  );
}
