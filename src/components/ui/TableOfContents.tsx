import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  items: Array<{ label: string; id: string }>;
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        left: 'calc(50% + 420px)', // Positions it to the right of the 750px content (375px + gap)
        top: '150px',
        width: '200px',
        display: 'none', // Default hidden on mobile
      }}
      className="toc-sidebar"
    >
      <style>
        {`
          @media (min-width: 1200px) {
            .toc-sidebar {
              display: block !important;
            }
          }
        `}
      </style>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        <li style={{ 
          color: '#666', 
          fontSize: '0.75rem', 
          textTransform: 'uppercase', 
          letterSpacing: '1px', 
          marginBottom: '16px',
          fontWeight: 600
        }}>
          Contents
        </li>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: '12px' }}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              style={{
                textDecoration: 'none',
                color: activeId === item.id ? '#fff' : '#888',
                fontSize: '0.9rem',
                transition: 'color 0.2s ease',
                display: 'block',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = activeId === item.id ? '#fff' : '#888'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
