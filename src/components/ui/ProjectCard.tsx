import { useState, useEffect, useRef, type ReactNode } from 'react';
import {Link} from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: ReactNode;
  href?: string;
  children?: ReactNode;
}

export const ProjectCard = ({ title, description, href, children }: ProjectCardProps) => {
  const offset = 'clamp(10px, 2.5vw, 16px)';
  const isInternalLink = href?.startsWith('/');
  
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className="project-card-container"
      style={{
        position: 'relative',
        width: '90%', 
        maxWidth: '900px', 
        margin: '0 auto',
        '--card-padding': 'clamp(24px, 5vw, 32px)',
        opacity: 0,
        animation: isVisible ? 'fadeInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' : 'none', 
      } as React.CSSProperties}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .project-card:hover + .outer-card-layer {
             box-shadow: none;
             background: rgba(255,255,255,0.08);
             border: 1px solid rgba(255,255,255,0.2);
          }
        `}
      </style>
      
      {/* Front Layer (Main Card) */}
      <div 
        className="project-card"
        style={{
          display: 'block',
          position: 'relative',
          zIndex: 10,
          width: '100%',
          minHeight: '20vh', 
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
          borderRadius: '16px', 
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
          overflow: 'hidden',
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
          padding: 'var(--card-padding) var(--card-padding) calc(var(--card-padding) / 2) var(--card-padding)',
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
              {isInternalLink ? (
                <Link to={href!} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  {title}
                </Link>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  {title}
                </a>
              )}
            </h3>
            <div style={{
              margin: 0,
              fontSize: '0.95rem',
              color: '#888',
              lineHeight: '1.5'
            }}>
              {description}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{
          width: '100%',
          padding: '0 var(--card-padding) var(--card-padding) var(--card-padding)',
          boxSizing: 'border-box'
        }}>
            {isInternalLink ? (
              <Link to={href!} style={{ display: 'block', cursor: 'pointer' }}>
                {children}
              </Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', cursor: 'pointer' }}>
                {children}
              </a>
            )}
        </div>
      </div>

      {/* Back Layer (Glassy Sheet Behind) */}
      <div 
        className="outer-card-layer"
        style={{
        position: 'absolute',
        top: `calc(-1 * ${offset})`,
        left: `calc(-1 * ${offset})`,
        width: `calc(100% + (2 * ${offset}))`,
        height: `calc(100% + (2 * ${offset}))`,
        background: 'rgba(255,255,255,0.06)', 
        borderRadius: '32px',
        zIndex: 1,
        backdropFilter: 'blur(5px)',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px',
        transition: 'box-shadow 0.3s ease, background 0.3s ease',
      }}>
         {/* Inner border for the back layer */}
         <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '32px',
            padding: '1px',
            background: 'rgba(255, 255, 255, 0.1)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }} />
      </div>
    </div>
  );
};
