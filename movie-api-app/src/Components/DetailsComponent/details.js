import React, { useState, useEffect } from "react";

const Details = ({ state }) => {
  return <div className="mt-4 ms-2"></div>;
};

const getData = async (url) => {
  const resp = await fetch(url).then((response) => response.json());
  return resp;
};

export default Details;
