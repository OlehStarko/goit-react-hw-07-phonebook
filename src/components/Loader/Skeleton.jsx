import React from 'react';
import ContentLoader from 'react-content-loader';

const TaskList = props => {
  return (
    <ContentLoader
      speed={1.3}
      width={460}
      height={360}
      backgroundColor="#578838"
      foregroundColor="var(--background-card-box)"
      {...props}
    >
      <rect x="0" y="5" rx="10" ry="10" width="460" height="64" />
      <rect x="0" y="94" rx="10" ry="10" width="460" height="64" />
      <rect x="0" y="183" rx="10" ry="10" width="460" height="64" />
    </ContentLoader>
  );
};

export default TaskList;
