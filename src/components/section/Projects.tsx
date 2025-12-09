import { ProjectCard } from '../ui/ProjectCard';
import flowboardImg from '../../assets/images/flowboardImg.png';

// Reusable component for project images
const ProjectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div 
    className="project-image"
    style={{
      width: '100%',
      marginBottom: '-40px',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      transition: 'box-shadow 0.3s ease' // Smooth transition for the glow
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </div>
);

const PROJECTS = [
  {
    title: "FlowBoard",
    description: "Turn sketches and annotations into videos by drawing on a canvas - 1000+ users & 100+ stars",
    href: "#",
    image: flowboardImg, // Add image property
    color: "#FF5F56"
  },
  {
    title: "Project Two",
    description: "Building the future of decentralized finance with secure and scalable protocols.",
    href: "#",
    // No image property, will use fallback
    color: "#27C93F"
  },
  {
    title: "Project Three",
    description: "An immersive 3D experience for web browsers pushing the limits of WebGL.",
    href: "#",
    color: "#FFBD2E"
  }
];

export const Projects = () => {
  return (
    <section 
      id="projects"
      style={{
        padding: '100px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '80px',
        width: '100%'
    }}>
      <style>
        {`
          .project-card:hover .project-image {
            box-shadow: 0 0 6vw 0px rgba(0, 60, 220, 0.6);
          }
        `}
      </style>
      {PROJECTS.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          href={project.href}
        >
          {project.image ? (
            <ProjectImage src={project.image} alt={`${project.title} preview`} />
          ) : (
            /* Placeholder for projects without images */
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
