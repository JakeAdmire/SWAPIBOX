import React from 'react';

export function Crawl({opening_crawl, title, release_date}) {
  return (
    <div>
      <textarea readOnly value={opening_crawl}></textarea>
      <p>{title}</p>
      <p>{release_date}</p>
    </div>
  )
}