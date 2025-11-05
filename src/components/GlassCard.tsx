import React from 'react';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', ...rest }) => {
  return (
    <div className={`glass glass-card ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default GlassCard;
