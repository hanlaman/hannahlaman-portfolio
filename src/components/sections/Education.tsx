import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

const EducationSection = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;
  scroll-margin-top: 96px;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.25);
  color: ${theme.colors.textLight};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.lg};
  }
`;

const EduCard = styled(motion.article)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: ${theme.spacing.md};
  color: ${theme.colors.textLight};
  box-shadow: 0 8px 30px rgba(2,6,23,0.18);
  border: 1px solid ${theme.colors.glass.border};
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-6px);
  }
`;

const EduHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
`;

const Degree = styled.h3`
  margin: 0;
  color: ${theme.colors.light};
  font-size: 1.05rem;
  font-weight: 600;
`;

const Institution = styled.p`
  margin: 0;
  color: ${theme.colors.textLight};
  font-size: 0.95rem;
  opacity: 0.95;
`;

const DateRange = styled.span`
  color: ${theme.colors.textLight};
  font-size: 0.85rem;
  opacity: 0.85;
`;

const Highlights = styled.ul`
  margin-top: ${theme.spacing.sm};
  padding-left: 1.125rem;
  color: ${theme.colors.textLight};
  line-height: 1.5;

  li {
    margin-bottom: ${theme.spacing.xs};
    font-size: 0.95rem;
  }
`;

const education = [
  {
    id: 1,
    degree: 'M.B.A. — ACCEND Program',
    institution: 'University of Cincinnati, Cincinnati, OH',
    dateRange: 'Expected May 2026',
    highlights: [
      'Graduate GPA: 3.8',
      'Relevant Coursework (Graduate): Managerial Economics; Leadership and Organizations; Decision Modeling; Corporate Legal and Social Responsibility',
      'Honors & Recognition: University Honors Program; Cincinnatus University Scholar; CEAS Computer Science Excellence; UC Alumni Association Demakes Legacy; Dean’s List (Summer 2022, Spring 2023, Summer 2023, Spring 2024, Fall 2024)'
    ]
  },
  {
    id: 2,
    degree: 'B.S. — Computer Science',
    institution: 'University of Cincinnati, Cincinnati, OH',
    dateRange: '2019 — 2023',
    highlights: [
      'Undergraduate GPA: 3.5',
      'Relevant Coursework (Undergraduate): Software Testing and QA; Operating Systems; Artificial Intelligence and Cloud Computing; Software Engineering; Technical and Scientific Writing'
    ]
  }
];

const Education = () => {
  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
  };

  const item = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  return (
    <EducationSection id="education" role="region" aria-label="Education">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education
        </SectionTitle>

        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Timeline>
            {education.map((edu) => (
              <EduCard key={edu.id} variants={item} role="article" aria-labelledby={`edu-${edu.id}-title`}>
                <EduHeader>
                  <div>
                    <Degree id={`edu-${edu.id}-title`}>{edu.degree}</Degree>
                    <Institution>{edu.institution}</Institution>
                  </div>
                  <DateRange aria-hidden="true">{edu.dateRange}</DateRange>
                </EduHeader>

                <Highlights>
                  {edu.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </Highlights>
              </EduCard>
            ))}
          </Timeline>
        </motion.div>
      </div>
    </EducationSection>
  );
};

export default Education;
