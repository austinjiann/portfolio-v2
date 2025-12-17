import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { caseStudyComponentBySlug, caseStudyTitleBySlug, caseStudyMetadataBySlug } from '../data/caseStudies';
import { HoverLink } from '../components/ui/HoverLink';
import { TableOfContents } from '../components/ui/TableOfContents';

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const caseStudyTitle = slug ? caseStudyTitleBySlug[slug] : undefined;
  const CaseStudyComponent = slug ? caseStudyComponentBySlug[slug] : null;
  const metadata = slug ? caseStudyMetadataBySlug[slug] : undefined;

  if (!project) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Project not found.</p>
        <Link to="/" style={{ cursor: 'pointer' }}>Back home</Link>
      </div>
    );
  }

  return (
    <>
      {metadata?.tableOfContents && (
        <TableOfContents items={metadata.tableOfContents} />
      )}
      <main style={{ padding: 'clamp(24px,4vw,48px)', width: '90%', maxWidth: '750px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Link to="/" style={{ color: '#888', textDecoration: 'none', cursor: 'pointer' }}>
          ← back to projects
        </Link>
        {metadata && (metadata.githubLink || metadata.projectLink) && (
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: '#888' }}>
            {metadata.projectLink && (
              <HoverLink href={metadata.projectLink}>
                {metadata.projectLink.replace(/^https?:\/\//, '').replace(/\/$/, '')}
              </HoverLink>
            )}
            {metadata.githubLink && (
              <HoverLink href={metadata.githubLink}>GitHub</HoverLink>
            )}
          </div>
        )}
      </div>
      <h1 style={{ margin: '24px 0 12px' }}>{caseStudyTitle ?? project.title}</h1>
      {project.image && (
        <>
          <img
            src={project.image}
            alt={`${project.title} hero`}
            style={{ width: '100%', borderRadius: '12px', marginBottom: '8px' }}
          />
          {metadata && (
            <div style={{ 
              color: '#777', 
              fontSize: '0.85rem', 
              marginBottom: '24px',
              fontStyle: 'italic'
            }}>
              <div>
                timeline: {metadata.timeline} • team: {metadata.team.map((member, index) => (
                  <span key={member.name}>
                    <HoverLink href={member.link}>{member.name}</HoverLink>
                    {index < metadata.team.length - 1 && ', '}
                  </span>
                ))}
              </div>
              <div>
                tech stack: {metadata.techStack}
              </div>
            </div>
          )}
        </>
      )}
      <div style={{ color: '#aaa', lineHeight: 1.6 }}>
        {CaseStudyComponent ? <CaseStudyComponent /> : <p>Case study coming soon.</p>}
      </div>
    </main>
    </>
  );
};