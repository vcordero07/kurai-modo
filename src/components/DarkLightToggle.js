import React, { useEffect } from 'react';
import useDarkMode from '@fisch0920/use-dark-mode';
import UnstyledButton from './UnstyledButton';
// import FadeIn from './FadeIn';

const DarkLightToggle = () => {
  const { value: isDark, enable, disable } = useDarkMode();

  useEffect(() => {
    const storedValue = localStorage.getItem('darkMode');
    if (storedValue === null) {
      localStorage.setItem('darkMode', 'false');
    }
  }, []);

  const isBeingPrebuilt = typeof window === 'undefined';

  if (isBeingPrebuilt) {
    return null;
  }

  const handleToggle = () => {
    const userConfirmed = window.confirm('Do you want to toggle dark mode?');
    if (!userConfirmed) {
      return;
    }

    if (isDark) {
      disable();
      localStorage.setItem('darkMode', 'false');
    } else {
      enable();
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    // <FadeIn>
    <UnstyledButton aria-hidden="true" onClick={handleToggle}>
      {isDark ? <Moon /> : <Sun />}
    </UnstyledButton>
    // </FadeIn>
  );
};

const Sun = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--text)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const Moon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--text)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export default DarkLightToggle;
