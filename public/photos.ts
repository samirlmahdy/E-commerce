"use client";
export type Photo = {
  id: number;
  url: string;
  title: string;
  authorImage: string;
  author: string;
  hashtags: string[];
};

export const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1683731333542-b52cfe230b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    title: "Lady crossing the street",
    authorImage:
      "https://images.unsplash.com/photo-1685516067971-e585cc7cebf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    author: "claudenai",
    hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1638567527061-dc756fb6bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "A young woman in a zebra ...",
    authorImage:
      "https://images.unsplash.com/photo-1685516067971-e585cc7cebf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    author: "Claude Nai",
    hashtags: ["Crosswalk", "Backpack", "StreetPhotograpy"],
  },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1684703125510-673d3042873f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      title: "Lissabon Purtugal",
      authorImage: "./author image/image1_author.jpeg",
      author: "Rick Rothenberg",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
    {
      id: 4,
      url: "./image/image1.jpeg",
      title: "Photo 1",
      authorImage: "./author image/image1_author.jpeg",
      author: "Rick Rothenberg",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
  //   {
  //     id: 5,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 6,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 7,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 8,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 9,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 10,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 11,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 12,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 13,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 14,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
  //   {
  //     id: 15,
  //     url: "./image/image1.jpeg",
  //     title: "Photo 1",
  //     authorImage: "./author image/image1_author.jpeg",
  //     author: "Rick Rothenberg",
  //     hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  //   },
];
