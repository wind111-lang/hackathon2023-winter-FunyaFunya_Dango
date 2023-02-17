import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
// import { fa-solid fa-heart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
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
      </div>
    </div>
  );
};

export default Card;
