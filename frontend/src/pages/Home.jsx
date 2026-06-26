import React, { useState, useEffect } from 'react';
import HomeDark from './HomeDark';
import HomeLight from './HomeLight';

export default function Home() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const search = window.location.search;
      if (hostname.includes('landingclara') || search.includes('theme=light')) {
        setIsLight(true);
      }
    }
  }, []);

  return isLight ? <HomeLight /> : <HomeDark />;
}
