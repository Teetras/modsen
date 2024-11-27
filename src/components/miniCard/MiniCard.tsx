import React from "react";
import { Artwork } from "../../constants/interfaces";
import { truncateText } from "../../utils/textUtils";
import "./miniCard.css";
import ButtonFavotrite from "../buttonFavorite/ButtonFavorite";
import defaultImageUrl from "../../assets/Group 95.svg";

const MiniCard: React.FC<{ art: Artwork }> = ({ art }) => {
  const imgUrl = art.image_id
    ? `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`
    : defaultImageUrl;
  const url = `/art?id=${art.id}`;

  return (
    <div className="mini-card-wrapper">
      <div className="mini-card">
        <a href={url}>
          <img className="image" src={imgUrl} alt={art.title || "Artwork"} />
        </a>

        <div className="info">
          <h4>{truncateText(art.title, 20, "Title missing")}</h4>
          <p className="author">
            {truncateText(art.artist_title, 18, "Artist name missing")}
          </p>
          <p>{art.is_on_view ? "Public" : "Private"}</p>
        </div>

        <ButtonFavotrite art={art} />
      </div>
    </div>
  );
};

export default MiniCard;
