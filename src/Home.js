import React from 'react'
import "./Home.css"
import Product from "./Product"
import Header from "./Header"
function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <div className="home__container">
            <img src="https://plus.unsplash.com/premium_photo-1661766496405-d69ab4d2a5b4?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="home__image" />

            <div className="home__row">
                <Product
                 id="12321341"
                 title="Viennas top addess for fashio and jewellery - Kohlmarkt. Dolce & Gabbana"
                 price={11.96} 
                 rating ={5}
                 image = "https://images.unsplash.com/photo-1682628890923-e0d08e2e51f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

                <Product
                 id="12321342"
                 title="Viennas top addess for fashio and jewellery - Kohlmarkt. Dolce & Gabbana"
                 price={10.96} 
                 rating ={4}
                 image = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="home__row">
            <Product
            id="12321342"
            title="Viennas top addess for fashio and jewellery - Kohlmarkt. Dolce & Gabbana"
            price={10.96} 
            rating ={4}
            image = "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />

            <Product 
            id="12321342"
            title="Viennas top addess for fashio and jewellery - Kohlmarkt. Dolce & Gabbana"
            price={10.96} 
            rating ={3}
            image = "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <Product 
            id="12321342"
            title="Viennas top addess for fashio and jewellery - Kohlmarkt. Dolce & Gabbana"
            price={10.96} 
            rating ={5}
            image = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="home__row">
            <Product 
            id="12321342"
            title="Nikon Camera"
            price={10.96} 
            rating ={4}
            image = "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
      </div>
    </div>

    
  )
}

export default Home
