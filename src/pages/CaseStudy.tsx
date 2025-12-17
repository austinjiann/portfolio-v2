import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projects } from '../data/projectsData';
import { caseStudyComponentBySlug, caseStudyTitleBySlug, caseStudyMetadataBySlug } from '../data/caseStudies';
import { HoverLink } from '../components/ui/HoverLink';
import { TableOfContents } from '../components/ui/TableOfContents';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const caseStudyTitle = slug ? caseStudyTitleBySlug[slug] : undefined;
  const CaseStudyComponent = slug ? caseStudyComponentBySlug[slug] : null;
  const metadata = slug ? caseStudyMetadataBySlug[slug] : undefined;
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isErrorBackHovered, setIsErrorBackHovered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Generate project-specific SEO
  const getProjectDescription = () => {
    if (!project) return "";
    
    const descriptions: Record<string, string> = {
      'flowboard': "FlowBoard by Austin Jian - Turn sketches and annotations into videos. Canvas-based drawing tool with 1000+ users, 100+ stars, and 100k+ views. Case study of design and development process.",
      'playcreate': "PlayCreate by Austin Jian - Traditional coaching boards reinvented with AI & animations. Over 10 million views, winners at Unfounders, pitched at SF Tech Week 2025.",
      'plant-hopper': "Plant Hopper by Austin Jian - Automatic plant-watering turret with auto-aim. 1st place winner at Hack the Valley. Hardware project combining robotics and automation."
    };
    
    return descriptions[slug || ''] || `${project.title} - A project by Austin Jian`;
  };

  const getProjectKeywords = () => {
    const baseKeywords = "Austin Jian, portfolio, case study, software project";
    const projectKeywords: Record<string, string> = {
      'flowboard': "FlowBoard, canvas drawing, video creation, sketch to video, animation tool, web app",
      'playcreate': "PlayCreate, coaching board, AI sports, sports tech, animation, tactical analysis",
      'plant-hopper': "Plant Hopper, IoT, robotics, hardware project, automation, plant watering, hackathon"
    };
    
    return `${baseKeywords}, ${projectKeywords[slug || ''] || ''}`;
  };

  const projectImageUrl = project?.image 
    ? `https://austinjian.com${project.image}` 
    : "https://austinjian.com/AustinFavicon.png";

  const structuredData = project ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": caseStudyTitle || project.title,
    "description": getProjectDescription(),
    "author": {
      "@type": "Person",
      "name": "Austin Jian",
      "url": "https://austinjian.com"
    },
    "image": projectImageUrl,
    "url": `https://austinjian.com/projects/${slug}`,
    ...(metadata?.githubLink && { "codeRepository": metadata.githubLink }),
    ...(metadata?.projectLink && { "url": metadata.projectLink })
  } : null;

  if (!project) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Project not found.</p>
        <Link 
          to="/" 
          style={{ 
            color: isErrorBackHovered ? '#fff' : '#888', 
            textDecoration: 'none', 
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={() => setIsErrorBackHovered(true)}
          onMouseLeave={() => setIsErrorBackHovered(false)}
        >
          Back home
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${caseStudyTitle || project?.title} - Austin Jian`}
        description={getProjectDescription()}
        image={projectImageUrl}
        url={`https://austinjian.com/projects/${slug}`}
        keywords={getProjectKeywords()}
        type="article"
      />
      {structuredData && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
      )}
      {metadata?.tableOfContents && (
        <TableOfContents items={metadata.tableOfContents} />
      )}
      <main style={{ padding: 'clamp(24px,4vw,48px)', width: '90%', maxWidth: '750px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Link 
          to="/" 
          style={{ 
            color: isBackHovered ? '#fff' : '#888', 
            textDecoration: 'none', 
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseEnter={() => setIsBackHovered(true)}
          onMouseLeave={() => setIsBackHovered(false)}
        >
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
                timeline: {metadata.timeline}
                {slug !== 'plant-hopper' && (
                  <>
                    {' • team: '}
                    {metadata.team.map((member, index) => (
                      <span key={member.name}>
                        <HoverLink href={member.link}>{member.name}</HoverLink>
                        {index < metadata.team.length - 1 && ', '}
                      </span>
                    ))}
                  </>
                )}
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