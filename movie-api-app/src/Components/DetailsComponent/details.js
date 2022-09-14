import React, { useState, useEffect } from "react";

const Details = ({ detailsView, changeDetailsView }) => {
  const handleBackClick = (e) => {
    changeDetailsView(null);
  };
  return (
    <div>
      <h1>Details</h1>
      <ul className="list-group">
        <label>Title:</label>
        <li className="list-group-item mt-1">{detailsView.movie.title}</li>
        <label>Synopsis:</label>
        <li className="list-group-item mt-1">{detailsView.movie.overview}</li>
        <label>Famous Quote:</label>
        <li className="list-group-item mt-1">{detailsView.movie.quote}</li>
        <label>Popularity:</label>
        <li className="list-group-item mt-1">{detailsView.movie.popularity}</li>
        <label>Votes:</label>
        <li className="list-group-item mt-1">{detailsView.movie.vote_count}</li>
      </ul>
      <button
        onClick={handleBackClick}
        type="button"
        className="btn btn-primary mt-4 ms-2"
      >
        Back
      </button>
    </div>
  );
};

export default Details;
