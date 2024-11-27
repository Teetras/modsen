import { ResponseApi } from "../constants/interfaces";

export const fetchArtworks = async (
  page: number = 1,
  limit: number = 3,
): Promise<ResponseApi> => {
  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`,
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
