import { Artwork } from "../../constants/interfaces";
import React from "react";
import defaultImageUrl from "../../assets/Group 2.svg";
import ButtonFavotrite from "../buttonFavorite/ButtonFavorite";
import ArtCardInfo from "../ArtCardInfo/ArtCardInfo";
import "./galleryCard.css";

const GalleryArtCard: React.FC<{ art: Artwork }> = ({ art }) => {
  const imgUrl = art.image_id
    ? `https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg`
    : defaultImageUrl;
  const url = `/art?id=${art.id}`;

  return (
    <div className="gallery-card">
      <div className="image-container">
        <a href={url}>
          <img
            className="image-gallery"
            src={imgUrl}
            alt={art.title || "Gallery Image"}
          />
        </a>

        <div className="info-overlay">
          <ArtCardInfo art={art} />

          <ButtonFavotrite art={art} />
        </div>
      </div>
    </div>
  );
};
export default GalleryArtCard;
