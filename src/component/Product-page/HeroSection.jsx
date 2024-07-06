import React from "react";
import heroImage from "./Product-images/Model_wearing_beautiful_shade_clothing-removebg-preview.png";

export default function HeroSection() {
  return (
    <>
      <main>
        <div>
          <h1>The perfect blend of dress are available at our stores.</h1>
          <article>
            "Elegance in every stitch: Transform your wardrobe with our
            handpicked selection of chic and timeless pieces"
          </article>
          <button>Shop now</button>
        </div>
        <img src={heroImage} alt="Hero-image" />
      </main>
    </>
  );
}
