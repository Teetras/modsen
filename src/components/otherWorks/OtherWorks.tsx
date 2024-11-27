import React, { useEffect, useState } from "react";
import Title from "../title/Title";
import { Artwork } from "../../constants/interfaces";
import { fetchArtworks } from "../../utils/api";
import MiniCard from "../miniCard/MiniCard";
import LoadingIndicator from "../loadingIndicator/LoadingIndicator";
import "./otherWorks.css";

const OtherWorks = () => {
  const [data, setData] = useState<Artwork[]>([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchArtworks(Math.floor(Math.random() * 100), 9)
      .then((data: { data: Artwork[] }) => {
        setData(data.data);
        setLoader(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="other-works">
      <Title text="Here some more" title="Other works for you" />
      <div className="mini-cards-box">
        {loader ? (
          data.map((el: Artwork) => <MiniCard key={el.id} art={el} />)
        ) : (
          <LoadingIndicator />
        )}
      </div>
    </div>
  );
};

export default OtherWorks;
