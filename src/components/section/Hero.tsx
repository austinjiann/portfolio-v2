import { HoverLink } from '../ui/HoverLink';
import { useState, useEffect, useRef } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { 
        threshold: 0,
        rootMargin: '80% 0px 0px 0px' 
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end', 
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      paddingBottom: 0,
      paddingTop: '4vh', 
    }}>
      {/* Styles for animations */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            10% { transform: translateY(-6px); }
            20% { transform: translateY(0); }
            30% { transform: translateY(-3px); }
            40% { transform: translateY(0); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
      <div 
        ref={heroRef}
        style={{ 
        position: 'relative', 
        width: '90%', 
        maxWidth: '750px',
        display: 'flex', 
        justifyContent: 'center',
        '--card-padding': 'clamp(16px, 3vw, 20px)',
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1.2s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
      } as React.CSSProperties}>

        {/* Back Layer 1 */}
        <div style={{
          position: 'absolute',
          top: '-16px',
          width: 'calc(100% + 32px)',
          left: '-16px',
          height: 'calc(100% + 16px)',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: '32px',
          zIndex: 1,
          backdropFilter: 'blur(5px)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '32px',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 80%)', 
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none'
          }} />
        </div>

        {/* Main Browser Window */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '60vh',
          marginBottom: '16px',
          background: 'linear-gradient(180deg, #2a2a2a 0%, #111 100%)',
          borderRadius: '24px',
          overflow: 'hidden',
        }}>
          
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 90%)', 
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 50
          }} />

          {/* Toolbar */}
          <div style={{
            height: '5vh',
            minHeight: '44px',
            maxHeight: '60px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)', 
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.5)', 
            display: 'flex',
            alignItems: 'center',
            padding: '0 var(--card-padding)',
            gap: '10px',
            position: 'relative',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)' 
          }}>
             
            {/* Glowing Window Controls */}
            <div style={{ 
              width: '12px', height: '12px', borderRadius: '50%', 
              background: '#FF5F56', 
              boxShadow: '0 0 15px rgba(255, 95, 86, 0.9), 0 0 30px rgba(255, 95, 86, 0.4), inset 0 1px 2px rgba(0,0,0,0.2)' 
            }} />
            <div style={{ 
              width: '12px', height: '12px', borderRadius: '50%', 
              background: '#FFBD2E', 
              boxShadow: '0 0 15px rgba(255, 189, 46, 0.9), 0 0 30px rgba(255, 189, 46, 0.4), inset 0 1px 2px rgba(0,0,0,0.2)' 
            }} />
            <div style={{ 
              width: '12px', height: '12px', borderRadius: '50%', 
              background: '#27C93F', 
              boxShadow: '0 0 15px rgba(39, 201, 63, 0.9), 0 0 30px rgba(39, 201, 63, 0.4), inset 0 1px 2px rgba(0,0,0,0.2)' 
            }} />
            
            <div style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.4)', fontSize: '18px', fontWeight: '300' }}>+</div>
          </div>

          {/* Window Content */}
          <div style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)',
            position: 'relative',
            height: '100%',
            boxSizing: 'border-box', 
            zIndex: 60 
          }}>
            <div style={{
              padding: '8vh var(--card-padding) 28vh var(--card-padding)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box'
            }}>
            {/* Top-left heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: '600',
              margin: 0,
              lineHeight: '1',
              letterSpacing: '-0.04em',
              color: 'white',
              background: 'linear-gradient(180deg, #fff 0%, rgba(255,255,255,0.8) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(255,255,255,0.2), 0 0 60px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5)',
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: 'clamp(6px, 1.2vw, 14px)'
            }}>
              building software<br />that's cool
              & <span style={{ 
                fontFamily: 'serif',
                fontStyle: 'italic', 
                fontWeight: '400',
                background: 'linear-gradient(180deg, #fff 20%, #777 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.4))'
              }}>eye catchy</span>
            </h1>

            {/* Bottom-right secondary text - Right aligned again */}
            <div style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
              color: '#999',
              lineHeight: '1.6',
              textAlign: 'left', 
              alignSelf: 'flex-end', 
              marginTop: 'auto'
            }}>
              <p style={{ margin: 0 }}>
                cs @ <HoverLink href="https://uwaterloo.ca/">uwaterloo</HoverLink> <br />
                5x hackathon winner<br />
                seeking 2026 summer internships<br />
              </p>
            </div>
            </div>
          </div>
          
          {/* Scroll Indicator - Moved inside Main Browser Window */}
          <div style={{
            position: 'absolute',
            bottom: 'clamp(80px, 10vh, 130px)',
            left: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            zIndex: 100,
            pointerEvents: 'auto',
            color: 'rgba(255,255,255,0.3)' 
          }}>
            <span style={{
              fontFamily: 'inherit', 
              fontSize: '1rem', 
              letterSpacing: '0.05em'
            }}>scroll to see more</span>
              <div 
                onClick={handleScrollClick}
                style={{ 
                  color: 'inherit', 
                  textDecoration: 'none', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  style={{ animation: 'bounce 3s infinite' }}
                >
                  <path d="M7 10l5 5 5-5"/>
                </svg>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
