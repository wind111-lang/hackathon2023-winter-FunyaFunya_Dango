import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PrefectureInfo.css";

const PrefectureInfo = () => {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/gourmet/prefecture/${id}`).then((result) => {
      result.json().then((result) => {
        console.log(result);
        setPosts(result);
      });
    });
  }, [id]);
  if (posts == null) return null;
  return (
    <div className="contentsPage">
      <div className="contents">
        {posts.datas.map((data) => {
          return (
            <div className="cardContainer" key={data.title}>
              <div className="postHeader">
                <h3><a href={data.url}>{data.title}</a></h3>
              </div>
              <div className="postFooter">
                <p className="companyName">{data.company_name}</p>
                <p className="date">{data.created_at}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PrefectureInfo;
