import React, { useEffect } from "react";

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
    <>
      <div>home</div>
      <div>home2</div>
    </>
  );
}
