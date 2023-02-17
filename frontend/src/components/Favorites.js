import React from "react";
import Card from "./Card";
import "./Favorites.css";

const Favorites = () => {
  const favs = JSON.parse(localStorage.getItem("favs"));
  return (
    <div className="favContainer">
      <h3>お気に入りしたページ</h3>
      <div className="favorites">
        {favs.map((data) => (
          <Card data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
