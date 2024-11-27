import { Artwork } from "../constants/interfaces";
import { LOCAL_STORAGE_KEY } from "../constants/nameKeys";

const saveFavorites = (favorites: Artwork[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites) || "[]");
};

export const getFavorites = (): Artwork[] => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]");
};

export const addToFavorites = (artwork: Artwork) => {
  const favorites = getFavorites();
  favorites.push(artwork);
  saveFavorites(favorites);
};
export const isArtFavorite = (artwork: Artwork): boolean => {
  const favorites = getFavorites();
  return favorites.some((favArt: Artwork) => favArt.id === artwork.id);
};

export const toggleFavorite = (artwork: Artwork): boolean => {
  const isFavorite = isArtFavorite(artwork);

  if (isFavorite) {
    const favorites = getFavorites();
    const updatedFavorites = favorites.filter(
      (art: Artwork) => art.id !== artwork.id,
    );
    saveFavorites(updatedFavorites);
    return false;
  } else {
    addToFavorites(artwork);
    return true;
  }
};
