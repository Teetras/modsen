import { ReactNode } from "react";

export interface Artwork {
  id: number;
  title: string;
  imageUrl: string;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackUI: ReactNode;
}
export interface ErrorBoundaryState {
  hasError: boolean;
}
