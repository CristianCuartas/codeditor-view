import React from 'react';

const ShowTemplate = props => {
  const { template } = props;
  setTimeout(() => {
    document.getElementById('divView').innerHTML = template;
  }, 1000);

  return <div id="divView"></div>;
};

export default ShowTemplate;
