import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

export const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: '2rem' }}>
        <p>Project not found.</p>
        <Link to="/" style={{ cursor: 'pointer' }}>Back home</Link>
      </div>
    );
  }

  return (
    <main style={{ padding: 'clamp(24px,4vw,48px)', width: '90%', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#888', textDecoration: 'none', cursor: 'pointer' }}>
        ← Back to projects
      </Link>
      <h1 style={{ margin: '24px 0 12px' }}>{project.title}</h1>
      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} hero`}
          style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }}
        />
      )}
      <div style={{ color: '#aaa', lineHeight: 1.6 }}>
        {/* Render richer case study content here */}
        {project.description}
      </div>
    </main>
  );
};