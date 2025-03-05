import React from 'react';

interface GridPatternProps {
  className?: string;
}

const GridPattern: React.FC<GridPatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.7))]"></div>
      </div>
    </div>
  );
};

export default GridPattern;