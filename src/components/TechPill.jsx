import React from 'react';
import { descriptions } from '../techDescriptions';
import TechTooltip from './TechTooltip';

const TechPill = ({ tech, onClick, isActive }) => {
  const description = descriptions[tech.toLowerCase()]?.desc.split('\n')[0] || '';

  return (
    <div className="tech-pill">
      <TechTooltip 
        name={tech}
        description={description}
        onClick={onClick}
      />
    </div>
  );
};

export default TechPill;
