import { ProjectCard } from '../ui/ProjectCard';
import { HoverLink } from '../ui/HoverLink';
import flowboardImg from '../../assets/images/flowboardImg.png';
import planthopperImg from '../../assets/images/planthopper.png';
import playcreateImg from '../../assets/images/playcreateImg.png';

// Reusable component for project images
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
      transition: 'box-shadow 0.3s ease', // Smooth transition for the glow
      '--glow-color': glowColor || 'rgba(0, 60, 220, 0.6)'
    } as React.CSSProperties}
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
    description: (
      <>
        Turn sketches and annotations into videos by drawing on a canvas <br /> 1000+ users, 100+ stars, & 100k+ views
      </>
    ),
    href: "#",
    image: flowboardImg, 
    color: "#FF5F56",
    glowColor: "rgba(0, 60, 220, 0.6)" // Blue glow
  },
  {
    title: "PlayCreate",
    description: (
      <>
        Traditional coaching boards reinvented with AI & animations.<br /> Over 10 million views on socials, winners @ <HoverLink href="https://unfounders.com">Unfounders</HoverLink>, flown out to pitch at SF tech week 2025
      </>
    ),
    href: "#",
    image: playcreateImg,
    color: "#27C93F",
    glowColor: "rgba(0, 100, 50, 0.6)" // Dark green glow
  },
  {
    title: "Plant Hopper",
    description: (
      <>
        Automatic plant-watering turret that auto aims and waters plants based on soil moisture <br /> 1st place @ <HoverLink href="https://hackthevalley.io">Hack the Valley</HoverLink>
      </>
    ),
    href: "#",
    image: planthopperImg,
    color: "#FFBD2E",
    glowColor: "rgba(255, 255, 255, 0.6)" // White glow
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
      {PROJECTS.map((project, index) => (
        <ProjectCard 
          key={index}
          title={project.title}
          description={project.description}
          href={project.href}
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
