import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
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
            <Card data={data} key={data.title}/>
          );
        })}
      </div>
    </div>
  );
};

export default PrefectureInfo;
