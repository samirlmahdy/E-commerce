"use client";

import { photos } from "@/public/photos";
import Card from "../components/card";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <main>
      <div className="cards-main-container">
        {photos.map((photo) => {
          return <Card key={photo.id} photo={photo} />;
        })}
        <Nav />
      </div>
    </main>
  );
}
