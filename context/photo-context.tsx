"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useEffect,
} from "react";

export type Photo = {
  id: number;
  url: string;
  title: string;
};

export interface PhotoContextInterface {
  likedPhotos: number[];
  setLikedPhotos: Dispatch<SetStateAction<number[]>>;
  handleLike: (id: number) => void;
}

export const PhotoContext = createContext<PhotoContextInterface>({
  likedPhotos: [],
  setLikedPhotos: () => {},
  handleLike: (id: number) => void {},
});

type PhotoContextProps = {
  children: ReactNode;
};

export default function PhotoContextProvider({ children }: PhotoContextProps) {
  const [likedPhotos, setLikedPhotos] = useState<number[]>([]);

  const handleLike = (id: number) => {
    console.log("handle like ", id);
    const isLiked = likedPhotos.includes(id);
    if (isLiked) {
      setLikedPhotos((prevLikedPhotos) =>
        prevLikedPhotos.filter((likedPhoto) => likedPhoto !== id)
      );
    } else {
      setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, id]);
      console.log(likedPhotos);
    }
  };
  useEffect(() => {
    const storedLikedPhotos = localStorage.getItem("likedPhotos");
    if (storedLikedPhotos) {
      setLikedPhotos(JSON.parse(storedLikedPhotos));
    }
  }, []);

  useEffect(() => {
    console.log("likedPhotots", likedPhotos);
    localStorage.setItem("likedPhotos", JSON.stringify(likedPhotos));
  }, [likedPhotos]);

  return (
    <PhotoContext.Provider value={{ likedPhotos, setLikedPhotos, handleLike }}>
      {children}
    </PhotoContext.Provider>
  );
}
