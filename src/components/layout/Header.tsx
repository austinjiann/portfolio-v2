import { HoverLink } from '../ui/HoverLink';

export const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000, 
      padding: 'clamp(16px, 2vh, 24px) clamp(16px, 3vw, 20px)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box',
      pointerEvents: 'none', 
    }}>
      {/* Name on the left */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'auto',
        color: '#999',
        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
        fontWeight: '500',
      }}>
        <HoverLink href="https://austinjian.ca">austin jian</HoverLink>
      </div>

      {/* Links on the right */}
      <nav style={{
        display: 'flex',
        gap: 'clamp(16px, 3vw, 24px)',
        color: '#999',
        fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
        fontWeight: '500',
        pointerEvents: 'auto', 
      }}>
        <HoverLink href="https://github.com/austinjiann">github</HoverLink>
        <HoverLink href="https://x.com/austinjian_">twitter</HoverLink>
        <HoverLink href="https://www.linkedin.com/in/austin-jian">linkedin</HoverLink>
      </nav>
    </header>
  );
};