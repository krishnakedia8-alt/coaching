import { Router } from './components/Router';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      {(path) => {
        if (path === '/') return <HomePage />;
        if (path === '/apply') return <ApplyPage />;
        return <NotFoundPage />;
      }}
    </Router>
  );
}
