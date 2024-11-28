import React, { useEffect, useState } from "react";
import Title from "../title/Title";
import { Artwork, Pagination } from "../../constants/interfaces";
import { fetchArtworks } from "../../utils/api";
import GalleryArtCard from "../galleryCard/GalleryCard";
import { calculatePaginationList } from "../../utils/paginationUtils";
import "./gallery.css";

const Gallery: React.FC = () => {
  const [data, setData] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState<Pagination>({
    total: 0,
    limit: 3,
    offset: 0,
    total_pages: 1,
    current_page: 1,
    next_url: null,
  });

  useEffect(() => {
    // Запрос данных при изменении страницы
    fetchArtworks(page, 3)
      .then((res) => {
        setData(res.data);
        setPagination(res.pagination); // Убедитесь, что в ответе есть pagination
      })
      .catch((e) => {
        console.error(e);
      });
  }, [page]);

  const nextPage = () => {
    if (pagination.current_page < pagination.total_pages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (pagination.current_page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const paginationList = calculatePaginationList(pagination.total_pages, page);

  return (
    <div className="gallery-content">
      <Title text="Topics for you" title="Our special gallery" />

      <div className="gallery-container">
        <div className="cards-container">
          {data.length > 0 ? (
            data.map((art) => <GalleryArtCard key={art.id} art={art} />)
          ) : (
            <p>No artworks found.</p>
          )}
        </div>

        <div className="button-pagination">
          {pagination.current_page === 1 ? null : (
            <button
              onClick={prevPage}
              className="arrow-btn"
              disabled={pagination.current_page === 1}
            >
              &lt;
            </button>
          )}
          {paginationList.map((pag) => (
            <button
              key={pag}
              onClick={() => setPage(pag)}
              className={pag === page ? "active-btn" : "page-btn"}
            >
              {pag}
            </button>
          ))}
          <button
            onClick={nextPage}
            className="arrow-btn"
            disabled={pagination.current_page === pagination.total_pages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
