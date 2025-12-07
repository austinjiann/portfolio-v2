import { HoverLink } from '../ui/HoverLink';

export const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000, 
      padding: '24px 40px', 
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
        fontSize: '0.95rem',
        fontWeight: '500',
      }}>
        <HoverLink href="https://austinjian.ca">Austin Jian</HoverLink>
      </div>

      {/* Links on the right */}
      <nav style={{
        display: 'flex',
        gap: '24px',
        color: '#999',
        fontSize: '0.95rem',
        fontWeight: '500',
        pointerEvents: 'auto', 
      }}>
        <HoverLink href="https://github.com/austinjiann">github</HoverLink>
        <HoverLink href="https://x.com/austinjian_">twitter</HoverLink>
        <HoverLink href="https://www.linkedin.com/in/austin-jian">linkedin</HoverLink>
        <HoverLink href="mailto:a3jian@uwaterloo.ca">email</HoverLink>
      </nav>
    </header>
  );
};