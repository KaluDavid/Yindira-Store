import React from "react";
import "./Product-Styles/cart.scss";
import { useState } from "react";
import img1 from "./cart-images/img1.png";
import rating1 from "./cart-images/rating1.png";
import img2 from "./cart-images/img2.png";
import rating2 from "./cart-images/rating2.png";
import img3 from "./cart-images/img3.png";
import rating3 from "./cart-images/rating3.png";
import img4 from "./cart-images/img4.png";
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
              <div key={item.id} >


                <div className="products" >
                  <img src={item.image} alt={item.productName} />

                  <div>
                    <div>
                      <p>{item.productName}</p>
                      <small>{item.productType}</small>
                      <p>Price: ₦{item.price}</p>
                    </div>
                    <img src={item.rating} alt="" />
                  </div>
                </div>



                <div>
                  <img src={item.image} alt={item.productName} />

                  <div>
                    <div>
                      <p>{item.productName}</p>
                      <small>{item.productType}</small>
                      <p>Price: ₦{item.price}</p>
                    </div>
                    <img src={item.rating} alt="" />
                  </div>
                </div>


                <div>
                  <img src={item.image} alt={item.productName} />

                  <div>
                    <div>
                      <p>{item.productName}</p>
                      <small>{item.productType}</small>
                      <p>Price: ₦{item.price}</p>
                    </div>
                    <img src={item.rating} alt="" />
                  </div>
                </div>


                <div>
                  <img src={item.image} alt={item.productName} />

                  <div>
                    <div>
                      <p>{item.productName}</p>
                      <small>{item.productType}</small>
                      <p>Price: ₦{item.price}</p>
                    </div>
                    <img src={item.rating} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
