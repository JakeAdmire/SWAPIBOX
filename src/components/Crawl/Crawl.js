import React from 'react';
// import PropTypes from 'prop-types';


export function Crawl({opening_crawl, title, release_date}) {
  return (
    <div>
      <textarea readOnly value={opening_crawl}></textarea>
      <p>{title}</p>
      <p>{release_date}</p>
    </div>
  )
}

// Crawl.propTypes = {
//   opening_crawl: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired
// };
