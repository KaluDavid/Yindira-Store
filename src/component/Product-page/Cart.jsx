import React from "react";
import "./Product-Styles/cart.scss";
import { useState } from "react";
import img1 from "./cart-images/img1.png";
import img2 from "./cart-images/img2.png";
import img3 from "./cart-images/img3.png";
import img4 from "./cart-images/img4.png";
import img5 from "./cart-images/img5.png";
import img6 from "./cart-images/img6.png";
import img7 from "./cart-images/img7.png";
import img8 from "./cart-images/img8.png";
import img9 from "./cart-images/img9.png";
import img10 from "./cart-images/img10.png";
import img11 from "./cart-images/img11.png";
import img12 from "./cart-images/img12.png";
import img13 from "./cart-images/img13.png";
import img14 from "./cart-images/img14.png";
import img15 from "./cart-images/img15.png";
import img16 from "./cart-images/img16.png";
import rating1 from "./cart-images/rating1.png";
import rating2 from "./cart-images/rating2.png";
import rating3 from "./cart-images/rating3.png";
import rating4 from "./cart-images/rating4.png";

export function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      image: img1,
      productName: "Yindira floral",
      productType: "Maxi Fitted",
      price: String("52, 000"),
      rating: rating1,
    },
    {
      id: 2,
      image: img2,
      productName: "Lilly",
      productType: "Mini gown",
      price: String("50, 000"),
      rating: rating2,
    },
    {
      id: 3,
      image: img3,
      productName: "Benny",
      productType: "Pleated corset",
      price: String("43, 000"),
      rating: rating3,
    },
    {
      id: 4,
      image: img4,
      productName: "Ladily",
      productType: "Floral Maxi",
      price: String("49, 000"),
      rating: rating4,
    },
    {
      id: 5,
      image: img5,
      productName: "Soft blu",
      productType: "Sky corset",
      price: String("40, 000"),
      rating: rating1,
    },
    {
      id: 6,
      image: img6,
      productName: "Special one",
      productType: "Maxi special",
      price: String("55, 000"),
      rating: rating2,
    },
    {
      id: 7,
      image: img7,
      productName: "Lilly ",
      productType: "Mini gown",
      price: String("50, 000"),
      rating: rating3,
    },
    {
      id: 8,
      image: img8,
      productName: "Chommy",
      productType: "Knitted piece",
      price: String("49, 000"),
      rating: rating4,
    },
    {
      id: 9,
      image: img9,
      productName: "Tower",
      productType: "Petty straight",
      price: String("44, 000"),
      rating: rating4,
    },
    {
      id: 10,
      image: img10,
      productName: "Beach",
      productType: "Floral Maxi",
      price: String("30, 000"),
      rating: rating4,
    },
    {
      id: 11,
      image: img11,
      productName: "Bloomy",
      productType: "Dinner you",
      price: String("60, 000"),
      rating: rating4,
    },
    {
      id: 12,
      image: img12,
      productName: "Princess",
      productType: "Palace Maxi",
      price: String("30, 000"),
      rating: rating4,
    },
    {
      id: 13,
      image: img13,
      productName: "Whitey",
      productType: "Yindira Wit",
      price: String("49, 000"),
      rating: rating4,
    },
    {
      id: 14,
      image: img14,
      productName: "Signature",
      productType: "Flowery Shiff",
      price: String("60, 000"),
      rating: rating4,
    },
    {
      id: 15,
      image: img15,
      productName: "Reddy",
      productType: "Peppery Flo",
      price: String("40, 000"),
      rating: rating4,
    },
    {
      id: 16,
      image: img16,
      productName: "Fushion",
      productType: "Knitted Mini",
      price: String("35, 000"),
      rating: rating4,
    },
  ]);

  return (
    <>
      <main className="mainCart">
        <div className="collectionNav">
          <nav className="cartNav">
            <a href="#">Dresses</a>
            <a href="#">Tops</a>
            <a href="#">Buttons</a>
            <a href="#">Outwear</a>
            <a href="#">Activewear</a>
          </nav>

          <div className="search">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />
            <select name="Sort" id="sort">
              <option value="sort By">Sort by</option>
            </select>
          </div>
        </div>

        <section className="cart-section">
          {cart.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.image} alt={item.productName} />

                <div className="productDetails">
                  <div>
                    <p>{item.productName}</p>
                    <small>{item.productType}</small>
                    <p>₦{item.price}</p>
                  </div>
                  <img src={item.rating} alt="" className="ratings" />
                </div>

                <div className="buttons">
                  <div>
                    <button>-</button>
                    <button>+</button>
                  </div>
                  <button>ADD TO CART</button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
