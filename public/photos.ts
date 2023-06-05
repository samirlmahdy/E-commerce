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
      "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    author: "jeffeni",
    hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1638567527061-dc756fb6bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "A young woman in a zebra ...",
    authorImage:
      "https://images.unsplash.com/photo-1685516067971-e585cc7cebf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    author: "claudenai",
    hashtags: ["Crosswalk", "Backpack", "StreetPhotograpy"],
  },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1684703125510-673d3042873f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
      title: "Lissabon Purtugal",
      authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "rickthenberg",
      hashtags: ["Crosswalk", "Backpack", "Bags", "StreetPhotograpy"],
    },
    {
      id: 4,
      url: "./image/image1.jpeg",
      title: "Drone",
      authorImage: "https://images.unsplash.com/profile-fb-1535118962-ed63b6a4cd21.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "ricvasques",
      hashtags: ["Crosswalk", "Backpack", "Bags", "StreetPhotograpy"],
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      title: "Mobile Cover",
      authorImage: "https://images.unsplash.com/profile-fb-1535118962-ed63b6a4cd21.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "grysellalvarez",
      hashtags: ["Crosswalk", "Backpack", "Bags", "StreetPhotograpy"],
    },
    {
      id: 6,
      url: "https://plus.unsplash.com/premium_photo-1673264933122-40a42e8f7fb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Desert",
      authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "marekpiwnicki",
      hashtags: ["outside", "sand", "landscape", "Desert"],
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1682687219573-3fd75f982217?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80",
      title: "Desert Mountain",
      authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "marekpiwnicki",
      hashtags: ["outside", "sand", "landscape", "Desert"],
   },
   {
    id: 8,
    url: "https://images.unsplash.com/photo-1685556636541-b141d0a09746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    title: "Ice Mountain",
    authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    author: "marekpiwnicki",
    hashtags: ["outside", "sand", "landscape", "Desert"],
 },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1675438321631-05f302bb716a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Illusion",
      authorImage: "https://images.unsplash.com/profile-1670289972031-a04c23d1a97fimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "susan_wilkinson",
      hashtags: [ "sand", "landscape", "Desert"],
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1685297965194-5eb9b8d51a05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      title: "Lake",
      authorImage: "https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "joshhild",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1641569268590-8b005220354e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Ice Mountains",
      authorImage: "https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "joshhild",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1685814954432-bd50750aa918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      title: "Building",
      authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "marekpiwnicki",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
    {
      id: 13,
      url: "https://images.unsplash.com/photo-1685814953957-8781ba554e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      title: "Windows",
      authorImage: "https://images.unsplash.com/profile-1604758536753-68fd6f23aaf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "marekpiwnicki",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
    {
      id: 14,
      url: "https://images.unsplash.com/photo-1685810062916-f14fdc0bfa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      title: "Forest",
      authorImage: "https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "joshhild",
      hashtags: ["plant", "outside", "Trees"],
    },
    {
      id: 15,
      url: "https://images.unsplash.com/photo-1684346818928-ac9730fead4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Photo 1",
      authorImage: "https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
      author: "joshhild",
      hashtags: ["Crosswalk", "Backpack", "Bags", "Street Photograpy"],
    },
];
