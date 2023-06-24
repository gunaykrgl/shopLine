import React from "react"
import "./Main.css"
import Card from "./Card/Card"

export default function Main(){
    const product = {
        name: 'Product Name',
        description: 'This is an example product description.',
        price: 19.99,
        image: 'https://cdn.pixabay.com/photo/2020/06/29/07/19/macbook-pro-5351689_1280.png'
      };
    return (
        <div id="cards">
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
            <Card product={product}/>
        </div>
    )
}
