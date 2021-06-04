import React from "react";
export default function RepoInfo({ repo }) {
  return (
    <li key={repo.id.toString()} className='list-group-item'>
      <a href={repo.url} className='h5 mb-0 text-decoration-none'>
        {repo.name}
      </a>
      <p className='small'>{repo.description}</p>
    </li>
  );
}
