"use client";

import { PhotoContext } from "@/context/photo-context";
import { photos } from "@/public/photos";
import React, { useContext } from "react";
import Card from "../../components/card";

const Favorites = () => {
  const { likedPhotos } = useContext(PhotoContext);

  return (
    <div className="cards-main-container">
      {likedPhotos.map((likedPhoto) => {
        const photo = photos.find((photo) => photo.id === likedPhoto);
        if (photo) {
          return <Card key={photo.id} photo={photo} />;
        }
      })}
      {likedPhotos.length === 0 && <p className="no-favorites">No favorites</p>}
    </div>
  );
};

export default Favorites;
