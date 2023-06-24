import React from "react";
import "./Card.css"

export default function Card({product}){
    console.log(product)
    return (
        <div className="card">
            <img src={product.image} alt={product.name} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-description">{product.description}</p>
                <span className="card-price">${product.price}</span>
                <button className="card-button">Add to Cart</button>
            </div>  
        </div>
    )
}