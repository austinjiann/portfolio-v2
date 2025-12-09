import { HoverLink } from '../ui/HoverLink';

export const Hero = () => {
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
      height: '100vh',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
      padding: 0 
    }}>
      {/* Styles for the bounce animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            10% { transform: translateY(-6px); }
            20% { transform: translateY(0); }
            30% { transform: translateY(-3px); }
            40% { transform: translateY(0); }
          }
        `}
      </style>
      
      <div style={{ 
        position: 'relative', 
        width: '90%', 
        maxWidth: '1000px', 
        display: 'flex', 
        justifyContent: 'center',
      }}>

        {/* Back Layer 1 */}
        <div style={{
          position: 'absolute',
          top: '-16px',
          width: 'calc(100% + 32px)',
          left: '-16px',
          bottom: 0, 
          background: 'rgba(255,255,255,0.06)',
          borderTopLeftRadius: '24px',
          borderTopRightRadius: '24px',
          zIndex: 1,
          backdropFilter: 'blur(5px)',
          // Smooth fade out
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)'
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
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
          background: 'linear-gradient(180deg, #2a2a2a 0%, #111 100%)',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          boxShadow: '0 50px 100px -20px rgba(0,0,0,0.9)',
          overflow: 'hidden',
          minHeight: '60vh', 
          WebkitMaskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 95%, transparent 100%)'
        }}>
          
          <div style={{
            position: 'absolute',
            inset: 0,
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            padding: '1px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
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
            background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 2vw',
            gap: '10px',
            position: 'relative',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
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
            padding: '8vh 5vw 15vh 5vw',
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box', 
            zIndex: 60 
          }}>
            {/* Top-left heading */}
            <h1 style={{
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', 
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
              alignSelf: 'flex-start'
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
              }}>flashy</span>
            </h1>

            {/* Bottom-right secondary text - Left aligned now */}
            <div style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
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
          
          {/* Scroll Indicator - Moved inside Main Browser Window */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
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
              fontSize: '0.8rem',
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