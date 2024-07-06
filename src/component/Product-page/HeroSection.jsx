import React from "react";
import heroImage from "./Product-images/Model wearing beautiful shade clothing@2x.png";
import './Product-Styles/heroStyle.scss';

export default function HeroSection() {
  return (
    <>
      <main className="heroMain">
        <div  className="text">
          <h1>The perfect blend of dress are available at our stores.</h1>
          <article>
            "Elegance in every stitch: Transform your wardrobe with our
            handpicked selection of chic and timeless pieces"
          </article>
          <button>Shop now</button>
        </div>
        <img src={heroImage} alt="Hero-image" className="heroImage" />
      </main>
    </>
  );
}
