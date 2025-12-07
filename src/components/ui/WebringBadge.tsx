type Props = { siteUrl: string; };

export const WebringBadge = ({ siteUrl }: Props) => {
  const prev = `https://cs.uwatering.com/#${siteUrl}?nav=prev`;
  const hub  = `https://cs.uwatering.com/#${siteUrl}`;
  const next = `https://cs.uwatering.com/#${siteUrl}?nav=next`;

  const linkStyle = {
    color: '#cfcfcf',
    textDecoration: 'none',
    fontSize: '0.95rem',
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        zIndex: 1200,
        color: '#fff',
        textDecoration: 'none',
      }}
    >
       
      <a href={prev} aria-label="Previous site" style={linkStyle}>←</a>
      <a href={hub} target="_blank" rel="noreferrer">
        <img
          src="https://cs.uwatering.com/icon.white.svg"
          alt="CS Webring"
          style={{ width: '24px', height: 'auto', opacity: 0.8 }}
        />
      </a>
      <a href={next} aria-label="Next site" style={linkStyle}>→</a>
    </div>
  );
};