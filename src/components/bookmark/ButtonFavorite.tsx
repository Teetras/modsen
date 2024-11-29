import React, { useEffect, useState } from "react";
import { Artwork } from "../../constants/interfaces";
import { isArtFavorite, toggleFavorite } from "../../utils/favoriteUtils";
import bookmark from "../../assets/bookmark.svg";
import "./bookmark.css";

const Bookmark: React.FC<{ art: Artwork }> = ({ art }) => {
  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    if (isArtFavorite(art)) setFavorite(true);
  }, []);

  const handleFavoriteToggle = () => {
    toggleFavorite(art);
    setFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => handleFavoriteToggle()}
      className={isArtFavorite(art) ? "isFav bookmark" : "unFav bookmark"}
    >
      <img src={bookmark} alt="button bookmark" />
    </div>
  );
};

export default Bookmark;
