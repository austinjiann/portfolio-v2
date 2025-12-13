import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/projectsData';


const ProjectImage = ({ src, alt, glowColor }: { src: string; alt: string; glowColor?: string }) => (
  <div
    className="project-image"
    style={{
      width: '100%',
      marginBottom: 'calc(-1 * var(--card-padding))',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      transition: 'box-shadow 0.3s ease',
      '--glow-color': glowColor || 'rgba(0, 60, 220, 0.6)',
    } as React.CSSProperties}
  >
    <img src={src} alt={alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
  </div>
);

export const Projects = () => {
  return (
    <section 
      id="projects"
      style={{
        padding: '100px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'clamp(40px, 8vh, 60px)',
        width: '100%'
    }}>
      <style>
        {`
          .project-card:hover .project-image {
            box-shadow: 0 0 6vw 0px var(--glow-color);
          }
        `}
      </style>
      {projects.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          href={`/projects/${project.slug}`}
        >
          {project.image ? (
            <ProjectImage 
              src={project.image} 
              alt={`${project.title} preview`} 
              glowColor={project.glowColor}
            />
          ) : (

            <div style={{
              width: '100%',
              aspectRatio: '16/9',
              background: `linear-gradient(45deg, ${project.color}22, ${project.color}66)`,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span style={{ opacity: 0.7 }}>Project Preview Image</span>
            </div>
          )}
        </ProjectCard>
      ))}
    </section>
  );
};
