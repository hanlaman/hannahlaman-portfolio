export const theme = {
  colors: {
    primary: '#0A0A0A',        // deep black background
    secondary: '#1A1A1A',      // dark charcoal gray for subtle separation
    accent: '#E50914',         // striking editorial red
    light: '#FFFFFF',          // pure white for contrast
    text: '#F5F5F5',           // near-white body text
    textLight: '#BFBFBF',      // muted captions / meta text
    textDark: '#0A0A0A',       // black text for light backgrounds
    backgroundAlt: '#111111',  // alternate section tone
    gradient: {
      main: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      accent: 'linear-gradient(90deg, #E50914 0%, #FF3B3B 100%)',
      glass: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
    },
    glass: {
      /* translucent backgrounds suited for backdrop-filter glassmorphism */
      background: 'rgba(255, 255, 255, 0.04)',
      card: 'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.12)'
    },
    overlay: {
      light: 'rgba(255, 255, 255, 0.05)',
      dark: 'rgba(0, 0, 0, 0.5)',
    },
  },

  fonts: {
    body: "'Futura', 'Inter', sans-serif",          // clean, geometric body
    heading: "'Garamond', 'Playfair Display', serif", // refined serif for editorial flair
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
  },

  transitions: {
    default: '0.3s ease',
  },
};

export type Theme = typeof theme;

