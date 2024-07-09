import React from "react";
import "./Product-Styles/cart.scss";
import { useState } from "react";
import { Footer } from "./Footer";
import { myCart } from "./MyCart";

export function Cart() {
  const [cartButton, setCartButton] = useState("ADD TO CART");

  const handleClick = () => {
    setCartButton("....");

    setTimeout(() => {
      setCartButton("ADDED");
    }, 2000);
  };

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

          <select name="Sort" id="sort">
            <option value="sort By">Sort by</option>
          </select>
        </div>

        <section className="cart-section">
          {myCart.map((item) => {
            return (
              <div key={item.id} className="product">
                <img src={item.image} alt={item.productName} />

                <div className="productDetails">
                  <div>
                    <p><b>{item.productName}</b></p>
                    <small>{item.productType}</small>
                    <p><b> ₦{item.price}</b></p>
                  </div>
                  <img src={item.rating} alt="" className="ratings" />
                </div>

                <div className="buttons">
                  <div>
                    <button>-</button>
                    <button>+</button>
                  </div>
                  <button onClick={handleClick}>{cartButton} </button>
                </div>
              </div>
            );
          })}
        </section>
        <button id="addToCart" className="load">
          LOAD MORE
        </button>
      </main>
      <Footer />
    </>
  );
}
