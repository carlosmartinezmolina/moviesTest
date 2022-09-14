import React, { useState } from "react";
import List from "../ListComponent/list";
import Details from "../DetailsComponent/details";

const Menu = () => {
  const [state, setState] = useState({
    call: false,
    url: null,
  });
  const [movieTitle, setMovieTitle] = useState("");
  const [detailsView, setDetailsView] = useState(null);
  const handleBillboardClick = (e) => {
    setState({
      call: !state.call,
      url: "https://api.themoviedb.org/3/trending/movie/week?api_key=45bf6592c14a965b33549f4cc7e6c664",
    });
  };
  const handlePopularsClick = (e) => {
    setState({
      call: !state.call,
      url: "https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_video=false&page=1",
    });
  };
  const handleLittleOnesClick = (e) => {
    setState({
      call: !state.call,
      url: "https://api.themoviedb.org/3/discover/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&sort_by=popularity.asc&include_adult=false&with_genres=28",
    });
  };
  const handleTextChange = (e) => {
    setMovieTitle(e.target.value);
  };
  const handleSearchClick = (e) => {
    setState({
      call: !state.call,
      url:
        "https://api.themoviedb.org/3/search/movie?api_key=45bf6592c14a965b33549f4cc7e6c664&query=" +
        String(movieTitle) +
        "&page=1",
    });
  };
  const changeDetailsView = (item) => {
    setDetailsView(item);
  };
  return (
    <>
      {!detailsView && (
        <div>
          <div className="mt-4 ms-2">
            <button
              onClick={handleBillboardClick}
              type="button"
              className="btn btn-dark ms-2"
            >
              Billboard
            </button>
            <button
              onClick={handlePopularsClick}
              type="button"
              className="btn btn-dark ms-2"
            >
              Populars
            </button>
            <button
              onClick={handleLittleOnesClick}
              type="button"
              className="btn btn-dark ms-2"
            >
              Popular with the little ones
            </button>
            <button
              onClick={handleSearchClick}
              type="button"
              className="btn btn-warning ms-2"
            >
              Search
            </button>
            <input
              onChange={handleTextChange}
              className="ms-2"
              type="text"
              placeholder="type a movie title"
            ></input>
          </div>
          <div>
            {state.url && (
              <List state={state} changeDetailsView={changeDetailsView} />
            )}
          </div>
        </div>
      )}
      {detailsView && (
        <Details
          detailsView={detailsView}
          changeDetailsView={changeDetailsView}
        />
      )}
    </>
  );
};

export default Menu;
