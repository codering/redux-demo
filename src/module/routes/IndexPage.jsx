import React, { Component, PropTypes } from 'react';

function IndexPage({children, dispatch, location}) {

  function handleCollapse() {
       
  }

  const layoutProps = {
     // collapse:  app.collapse,
      onCollapse: handleCollapse,
      curRoutePath: location.pathname
  }

  return (
      <div {...layoutProps}  >
          {children}
      </div>
  );
}

IndexPage.propTypes = {
};


export default IndexPage;
