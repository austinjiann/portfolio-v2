import type { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  children?: ReactNode;
}

export const ProjectCard = ({ title, description, href, children }: ProjectCardProps) => {
  const offset = 'clamp(10px, 2.5vw, 16px)';
  
  return (
    <div style={{
      position: 'relative',
      width: '90%', 
      maxWidth: '1000px', 
      margin: '0 auto',
    }}>
      
      {/* Back Layer (Glassy Sheet Behind) */}
      <div style={{
        position: 'absolute',
        top: `calc(-1 * ${offset})`,
        left: `calc(-1 * ${offset})`,
        width: `calc(100% + (2 * ${offset}))`,
        height: `calc(100% + (2 * ${offset}))`,
        background: 'rgba(255,255,255,0.06)', 
        borderRadius: '24px',
        zIndex: 1,
        backdropFilter: 'blur(5px)',
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        borderBottomLeftRadius: '24px',
        borderBottomRightRadius: '24px',
      }}>
         {/* Inner border for the back layer */}
         <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }} />
      </div>

      {/* Front Layer (Main Card) */}
      <a 
        className="project-card"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          position: 'relative',
          zIndex: 10,
          width: '100%',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
          borderRadius: '16px', 
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          textDecoration: 'none',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        {/* Inner Border/Glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          padding: '1px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          pointerEvents: 'none'
        }} />

        {/* Card Header */}
        <div style={{
          padding: '40px 40px 20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: 'white'
        }}>
          <div>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.02em'
            }}>
              {title}
            </h3>
            <p style={{
              margin: 0,
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: '1.5'
            }}>
              {description}
            </p>
          </div>

          
        </div>

        {/* Content Area */}
        <div style={{
          width: '100%',
          padding: '0 40px 40px 40px',
          boxSizing: 'border-box'
        }}>
            {children}
        </div>
      </a>
    </div>
  );
};
