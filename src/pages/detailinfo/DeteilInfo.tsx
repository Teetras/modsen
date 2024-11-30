import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtById } from "../../utils/api";
import "./deteilInfo.css";
import ArtworkDetails from "../../components/artworkDetails/ArtworkDetails";
import { Artwork } from "../../constants/interfaces";

export default function DeteilInfo() {
  const [dataOne, setDataOne] = useState<Artwork>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchArtById(id)
        .then((res) => {
          setDataOne(res.data as unknown as Artwork);
        })
        .catch((error) => {
          console.error("Ошибка загрузки произведения:", error);
        });
    }
  }, []);
  return (
    <div className="art-page">
      {dataOne ? <ArtworkDetails art={dataOne} /> : <p>No artwork found.</p>}
    </div>
  );
}
