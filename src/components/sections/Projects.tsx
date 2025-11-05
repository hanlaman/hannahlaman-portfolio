import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;
  scroll-margin-top: 96px; /* helpful if you have a sticky header */

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ProjectImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: ${theme.breakpoints.md}) {
    height: 220px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, ${theme.colors.glass.card}, transparent);
    pointer-events: none; /* ensure overlay doesn't block clicks */
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 2;

  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

/**
 * Replace demo "projects" with your WORK EXPERIENCE.
 * - title: Role @ Company
 * - description: concise impact summary (from your resume bullets)
 * - image: logo/photo/placeholder
 * - techStack: tools/skills you used
 * - githubUrl/liveUrl: company, case study, LinkedIn, or portfolio link
 */
const projects = [
  {
    id: 1,
    title: "Sports Analytics & SEO Co-op @ FOX Sports",
    description:
      "Optimized digital sports content with editorial, product, and engineering; built dashboards for user behavior and performance; executed keyword research, title optimizations, content gap analysis, and trend tracking to improve rankings.",
    image: "https://via.placeholder.com/800x440?text=FOX+Sports",
    techStack: ["Adobe Analytics", "Tableau", "SEO", "Dashboards", "Cross-functional"],
    githubUrl: "",
    liveUrl: "https://www.foxsports.com",
  },
  {
    id: 2,
    title: "Creative Design Intern @ The Cincy Hat Project (Ted Karras)",
    description:
      "Designed branded merchandise mockups (Illustrator/Canva) for a player-led community initiative. Presented concepts at a client-facing event; supported brand expansion with fast-turn proposals and collaboration.",
    image: "https://via.placeholder.com/800x440?text=Cincy+Hat+Project",
    techStack: ["Adobe Illustrator", "Canva Pro", "Brand Design", "Presentation", "Collaboration"],
    githubUrl: "",
    liveUrl: "https://example.com", // replace with official link if desired
  },
  {
    id: 3,
    title: "Operations & Applied Data Analyst Co-op @ AMEND Consulting",
    description:
      "Implemented automation to improve financial reporting accuracy and efficiency; streamlined A/P processes to reduce manual tasks and increase controls; built certified data models enabling self-serve BI.",
    image: "https://via.placeholder.com/800x440?text=AMEND+Consulting",
    techStack: ["Automation", "Data Modeling", "Finance Ops", "Power BI", "Tableau"],
    githubUrl: "",
    liveUrl: "https://www.amendllc.com",
  },
  {
    id: 4,
    title: "Infrastructure & Cloud Technology Co-op @ 84.51°",
    description:
      "Enhanced software delivery through automation, improving deployment clarity and efficiency and strengthening communication across technical and business teams.",
    image: "https://via.placeholder.com/800x440?text=84.51%C2%B0",
    techStack: ["DevOps", "Automation", "Process Improvement"],
    githubUrl: "",
    liveUrl: "https://www.8451.com",
  },
  {
    id: 5,
    title: "Co-Founder @ Adopt A Book Ohio",
    description:
      "Co-founded nonprofit donating new and gently used children's books; partnered with hundreds of organizations to donate 250,000+ books to 300+ places; recognized by Library of Congress and others.",
    image: "https://via.placeholder.com/800x440?text=Adopt+A+Book+Ohio",
    techStack: ["Nonprofit", "Leadership", "Operations", "Community", "Partnerships"],
    githubUrl: "",
    liveUrl: "https://adoptabookohio.org",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects" role="region" aria-label="Featured Projects">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          Projects
        </SectionTitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectGrid role="list">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                variants={itemVariants}
                role="listitem"
                aria-labelledby={`project-title-${project.id}`}
              >
                <ProjectImage 
                  imageUrl={project.image} 
                  role="img" 
                  aria-label={`Screenshot of ${project.title}`} 
                />
                <ProjectContent>
                  <ProjectTitle id={`project-title-${project.id}`}>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <TechStack role="list" aria-label={`Technologies used in ${project.title}`}>
                    {project.techStack.map((tech) => (
                      <TechTag key={tech} role="listitem">{tech}</TechTag>
                    ))}
                  </TechStack>

                  <ProjectLinks>
                    {Boolean(project.githubUrl?.trim()) && (
                      <a 
                        href={project.githubUrl!} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub aria-hidden="true" />
                        <span className="sr-only">GitHub repository</span>
                      </a>
                    )}
                    {Boolean(project.liveUrl?.trim()) && (
                      <a 
                        href={project.liveUrl!} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <FaExternalLinkAlt aria-hidden="true" />
                        <span className="sr-only">Live site</span>
                      </a>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </motion.div>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
