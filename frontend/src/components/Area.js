import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Area.css"

const Area = () => {
  const [data, setData] = useState([]);
  const dict = { 
    "1": [0, 1],
    "2": [1, 7],
    "3": [7, 14],
    "4": [14, 24],
    "5": [24, 30],
    "6": [30, 35],
    "7": [35, 39],
    "8": [39, 47]
}
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://hackathon.stg-prtimes.net/api/prefectures`, {
      headers: {
        Authorization:
          "Bearer b655dffbe1b2c82ca882874670cb110995c6604151e1b781cf5c362563eb4e12",
      },
    }).then((result) => {
      result.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);
  const prefs = data.slice(dict[id][0], dict[id][1])

  return (
  <div className="prefectures">
    {prefs.map((prefecture) => (
        <Link to={`/prefectures/${prefecture.id}`} key={prefecture.id}>
          <div className="preName">{prefecture.name}</div></Link>
    ))}
  </div>
)};

export default Area;
