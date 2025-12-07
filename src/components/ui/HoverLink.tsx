import React from 'react';

export const HoverLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'inherit',
        fontWeight: 'inherit',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(to right, #fff, #fff), linear-gradient(to right, #555, #555)',
        backgroundSize: '0% 2px, 100% 1px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom, left bottom',
        transition: 'background-size 0.8s ease-in-out, color 0.8s ease-in-out',
        paddingBottom: '3px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundSize = '100% 2px, 100% 1px';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundSize = '0% 2px, 100% 1px';
        e.currentTarget.style.color = 'inherit';
      }}
    >
      {children}
    </a>
  );
};