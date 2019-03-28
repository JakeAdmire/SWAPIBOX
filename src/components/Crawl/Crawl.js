import React from 'react';

export function Crawl({crawl, title, date}) {
  return (
    <div>
      <textarea readOnly value={crawl}></textarea>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  )
}