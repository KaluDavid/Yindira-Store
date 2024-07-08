import React from 'react'
import { Product } from './component/Product-page/Product'
import './main.scss';
import { Header } from './component/Product-page/Header';
import { Footer } from './component/Product-page/Footer';
import { ProductCart } from './component/Product-page/ProductCart';


export default function App() {
  return (
    <>
    <div>
      <Header />
    </div>
    <div>
      <Product />
    </div>

    <div>
      <Footer />
    </div>
    </>
  )
}
