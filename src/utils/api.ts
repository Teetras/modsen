import { Artwork } from "../constants/interfaces";


  export const fetchArtworks = async (): Promise<Artwork[]> => {
    const response = await fetch('https://api.artic.edu/api/v1/artworks');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };