import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer" key={data.title}>
      <div className="postHeader">
        <h3>
          <a href={data.url}>{data.title}</a>
        </h3>
      </div>
      <div className="postFooter">
        <p className="companyName">{data.company_name}</p>
        <p className="date">{data.created_at}</p>
      </div>
    </div>
  );
};

export default Card;
