import React from "react";

export default function Gallery() {
  const images = [
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-1.jpg",
      title: "Perfect strawberry smoothie",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-2.jpg",
      title: "Watermelon Juice",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-3.jpg",
      title: "Fresh Fruits",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-4.jpg",
      title: "This is why we love Mondays!",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-5.jpg",
      title: "Pure Refreshment!",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-6.jpg",
      title: "Perfect Lunch!",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-7.jpg",
      title: "Perfect for days like today!",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-8.jpg",
      title: "Smoothie Art",
    },
    {
      src: "https://kjwxzycofsjiqsepgfxx.supabase.co/storage/v1/object/public/Images/gallery-image-9.jpg",
      title: "Vegan grilled sandwich",
    },
  ];

  return (
    <div className="gallery-bg">
      <div className="gallery-top-wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffe0c6" d="M0,40 C480,120 960,0 1440,60 L1440,0 L0,0Z" />
        </svg>
      </div>
      <div className="gallery-hero">
        <h1 className="gallery-title">
          <span className="gallery-title-main">Smoothie Gallery</span>
          <span className="gallery-title-highlight">Vibrant. Bold. Fresh.</span>
        </h1>
        <p className="gallery-desc">
          <span className="gallery-desc-highlight">See what’s blending at U-Juice!</span><br />
          <span className="gallery-desc-sub">
            From juicy fruits to smoothie art, get inspired!
          </span>
        </p>
      </div>
      <div className="gallery-content">
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-img-card" key={i}>
              <div className="gallery-img-frame">
                <img className="gallery-img" src={img.src} alt={img.title} />
              </div>
              <div className="gallery-img-title">{img.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-bottom-wave">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#b2f7ef" d="M0,30 C400,120 1040,0 1440,70 L1440,100 L0,100Z" />
        </svg>
      </div>
    </div>
  );
}