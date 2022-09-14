import React, { useState, useEffect } from "react";

const List = ({ state }) => {
  const [listData, setListData] = useState(null);
  useEffect(() => {
    (async () => {
      setListData(null);
      const data = await getData(state.url);
      if (data) {
        setListData(data);
      }
    })();
  }, [state]);
  var index = 0;

  const handleOptionClick = (e) => {
    console.log(e.target);
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
