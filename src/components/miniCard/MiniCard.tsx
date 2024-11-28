import React from "react";
import { Artwork } from "../../constants/interfaces";
import "./miniCard.css";
import ButtonFavotrite from "../buttonFavorite/ButtonFavorite";
import defaultImageUrl from "../../assets/Group 95.svg";
import ArtCardInfo from "../ArtCardInfo/ArtCardInfo";

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

        <ArtCardInfo art={art} />
        <ButtonFavotrite art={art} />
      </div>
    </div>
  );
};

export default MiniCard;
