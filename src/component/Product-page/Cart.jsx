import React from "react";
import "./Product-Styles/cart.scss";
import { useState } from "react";
import { Footer } from "./Footer";
import { cart } from "./Cart";
import { Link } from "react-router-dom";


export function Cart() {
  
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
                  <Link to="/productCart">
                  <button>ADD TO CART</button>

        </Link>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
