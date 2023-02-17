import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data }) => {
  return (
    <div className="cardContainer" key={data.title}>
      <div className="postHeader">
        <h3>
          <a href={data.url}>{data.title}</a>
        </h3>
        <div className="like">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>{data.like}</span>
        </div>
      </div>
      <div className="postFooter">
        <p className="companyName">{data.company_name}</p>
        <p className="date">{data.created_at}</p>
      </div>
    </div>
  );
};

export default Card;
