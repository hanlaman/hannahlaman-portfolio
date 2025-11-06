import { Global, css } from '@emotion/react';
import { theme } from './theme';

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text};
    line-height: 1.6;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${theme.colors.gradient.main};
    background-attachment: fixed;
    /* Visual style: render site text in uppercase. Exceptions below preserve case where needed. */
    text-transform: uppercase;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    width: 100%;
    position: relative;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    &::before,
    &::after {
      display: none;
    }
  }

  .container {
    width: min(90%, 1200px);
    margin-inline: auto;
    padding-inline: ${theme.spacing.md};
    position: relative;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    html {
      font-size: 14px;
    }
  }

  @media print {
    html {
      font-size: 12pt;
    }

    body {
      background: white !important;
      color: black !important;
      margin: 0;
      padding: 0;
    }

    /* Ensure proper page breaks */
    section {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    h1, h2, h3 {
      page-break-after: avoid;
      break-after: avoid;
    }

    img {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Remove unnecessary elements */
    .no-print,
    button,
    nav,
    .social-links {
      display: none !important;
    }

    /* Ensure links are useful in printed version */
    a {
      text-decoration: none !important;
      color: black !important;
    }

    a[href^="http"]:after {
      content: " (" attr(href) ")";
      font-size: 0.8em;
      font-style: italic;
    }

    /* Improve readability */
    p, li {
      orphans: 3;
      widows: 3;
    }

    /* Reset backgrounds and colors */
    * {
      background: transparent !important;
      color: black !important;
      text-shadow: none !important;
      filter: none !important;
      -ms-filter: none !important;
      box-shadow: none !important;
    }

    /* Add page numbers */
    @page {
      margin: 2cm;
    }

    @page :first {
      margin-top: 3cm;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.glass.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.glass.card};
    border-radius: 5px;
    border: 2px solid ${theme.colors.glass.border};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.accent};
  }

  /* Screen reader only utility class */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Preserve original case for form fields, code, and other technical text */
  input,
  textarea,
  select,
  pre,
  code,
  kbd,
  samp,
  .sr-only,
  a[href^="mailto:"] {
    text-transform: none !important;
  }

  /* Glassmorphism utilities */
  /*
    Use the .glass utility on containers that should have the frosted glass effect.
    It uses theme colors from theme.colors.glass.*. If those tokens are hex values,
    consider updating them to rgba() in theme.ts for better translucency control.
  */
  .glass {
    background: ${theme.colors.glass.background};
    border: 1px solid ${theme.colors.glass.border};
    backdrop-filter: blur(10px) saturate(140%);
    -webkit-backdrop-filter: blur(10px) saturate(140%);
    box-shadow: 0 8px 30px rgba(2, 6, 23, 0.28);
    border-radius: 12px;
    overflow: hidden;
  }

  /* A padding + layout helper when using glass cards */
  .glass-card {
    padding: ${theme.spacing.md};
    background-clip: padding-box; /* keeps the translucent background inside rounded corners */
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;
