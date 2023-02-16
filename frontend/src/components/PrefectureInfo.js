import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PrefectureInfo = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/gourmet/prefecture/${id}`).then((result) => {
      result.json().then((result) => {
        console.log(result);
        setPosts(result);
      });
    });
  }, [id]);
  return (<div>{posts}</div>);
};

export default PrefectureInfo;
