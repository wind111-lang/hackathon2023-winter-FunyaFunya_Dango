import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

const Card = ({ data }) => {
  //   useEffect(() => {
  //     localStorage.setItem("favs", JSON.stringify(localStorage.getItem("favs")));
  //   }, [])
  const addFavs = (data) => {
    if (localStorage.getItem("favs") == null) {
      localStorage.setItem("favs", JSON.stringify([]));
    }
    const favs = JSON.parse(localStorage.getItem("favs"));
    console.log(favs);
    favs.push(data);
    localStorage.setItem("favs", JSON.stringify(favs));
  };
  return (
    <div className="cardContainer" key={data.title}>
      <div className="postHeader">
        <h3>
          <a href={data.url}>{data.title}</a>
        </h3>
        <div className="like">

          <FontAwesomeIcon icon={faHeart} />
          <span>{data.like}</span>
        </div>
      </div>
      <div className="postFooter">
        <p className="companyName">{data.company_name}</p>
        <p className="date">{data.created_at}</p>
        {data.youtube_url !== '' ? (
          <a href={data.youtube_url} target="_blank"><FontAwesomeIcon icon={faPlay} /></a>
        ) : null}
        <button onClick={() => addFavs(data)}>★</button>
      </div>
    </div>
  );
};

export default Card;
