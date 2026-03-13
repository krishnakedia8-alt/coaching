import React, { useState } from 'react';

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  React.useEffect(() => {
    const handleHashChange = () => setCurrentPath(window.location.hash.slice(1) || '/');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return children(currentPath);
}

export function Link({ to, children, className = '' }) {
  return (
    <a href={`#${to}`} className={className}>
      {children}
    </a>
  );
}
