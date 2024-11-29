import { ResponseApi } from "../constants/interfaces";

export const fetchArtworks = async (
  page: number = 1,
  limit: number = 1,
): Promise<ResponseApi> => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
export const fechArtByText = async (query: string): Promise<ResponseApi> => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(query)}&limit=10&fields=id,title,image_id,artist_title,is_on_view`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
