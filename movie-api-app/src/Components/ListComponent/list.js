import React, { useState, useEffect } from "react";

const List = ({ state, changeDetailsView }) => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    (async () => {
      setListData(null);
      const data = await getData(state.url);

      if (data && data.results) {
        setListData(data);
      }
    })();
  }, [state]);
  var index = 0;

  const handleOptionClick = (e) => {
    const movie = listData.results.filter((item) => item.id == e.target.id)[0];
    changeDetailsView({
      movie: movie,
    });
  };

  return (
    <div className="mt-4 ms-2">
      {listData && (
        <ul className="list-group">
          {listData.results.map((item) => {
            return (
              <li
                id={item.id}
                onClick={handleOptionClick}
                key={index++}
                className="list-group-item"
              >
                <img
                  className="pe-4"
                  src={
                    "https://image.tmdb.org/t/p/w185_and_h278_bestv2" +
                    item.poster_path
                  }
                  alt=""
                  height={100}
                />
                {item.title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const getData = async (url) => {
  const resp = await fetch(url).then((response) => response.json());
  return resp;
};

export default List;
