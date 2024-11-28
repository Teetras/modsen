import React, { useEffect } from "react";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import OtherWorks from "../../components/otherWorks/OtherWorks";
import "./home.css";
import Gallery from "../../components/gallery/Gallery";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.artic.edu/api/v1/artworks");
        const data = await response.json();
        console.log(data.data); // Выводим данные в консоль
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="layout">
      <ErrorBoundary>
        <Gallery />
        <OtherWorks />
      </ErrorBoundary>
    </div>
  );
}
