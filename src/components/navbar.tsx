import React, { useEffect } from 'react';
import feather from 'feather-icons';

const FeatherIconComponent: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div>
      <i data-feather="search"></i>
    </div>
  );
};

export default FeatherIconComponent;
