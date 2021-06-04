import React from "react";
export default function RepoInfo({ repo }) {
  return (
    <li key={repo.id.toString()} className='list-group-item'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex flex-column'>
          <a href={repo.url} className='h5 mb-0 text-decoration-none'>
            {repo.name}
          </a>
          <p className='small'>{repo.description}</p>
        </div>
        <span
          className={
            "px-1 py-0 ms-1 d-inline-block btn btn-sm " +
            (repo.viewerSubscription === "SUBSCRIBED"
              ? "btn-success"
              : "btn-outline-secondary")
          }
          style={{ fontSize: ".6em" }}
        >
          {repo.viewerSubscription}
        </span>
      </div>
    </li>
  );
}
