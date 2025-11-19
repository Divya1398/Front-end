import React from 'react'
import Card from './Card'

const products = [
  { title:"Leather Bag", desc:"Durable,Washable", img:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg" },
  { title:"Canvas Bag", desc:"Lightweight, Stylish", img:"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg" },
  { title:"Backpack", desc:"Spacious, Comfortable", img:"https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg" },
  { title:"Handbag", desc:"Trendy, Compact", img:"https://images.pexels.com/photos/1228624/pexels-photo-1228624.jpeg" }
];


function Carddata() {
    return (
        <>
            <h1 className='text-bg-primary p-3 text-center'>Shopping Time</h1>
            <div className="container">
                <div className="row">
                    {products.map((product,index)=>{
                       return <Card key={index} title={product.title} desc={product.desc} img={product.img}/>

                    })}

                </div>
            </div>
        </>
    )
}

export default Carddata
