import React from 'react';
import { useState } from 'react';
import cartImg1 from "./"


export function ProductCart() {

    const [produtCart, setProductCart] = useState([
        {

    }
])
    
  return (
    <>
    <main>
        <div>
            <h2>My Cart</h2>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search"
            />
        </div>

        <div>
            <nav>
                <a href="/">Product</a>

                <div>
                    <a href="/">SIZE</a><a href="">QUANTITY</a><a href="">PRICE</a><a href="">SUB-TOTAL</a>
                </div>
            </nav>
            <section> 


            </section>
             </div>
    </main>
    </>
  )
}
