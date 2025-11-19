import React from 'react';
import Card_props from './Card_props';

function Carddata() {
  const PhoneData = [
    {
      title: "iPhone 14",
      price: "₹79,999",
      rating: "4.6",
      image: "https://m.media-amazon.com/images/I/61muVCIy-uL._SX679_.jpg",
      buttontext: "Buy Now"
    },
    {
      title: "Samsung M14",
      price: " ₹13,499",
      rating: "4.1",
      image: "https://m.media-amazon.com/images/I/61muVCIy-uL._SX679_.jpg",
      buttontext: "Shop Now"
    },
    {
      title: "OnePlus Nord",
      price: " ₹29,999",
      rating: "4.3",
      image: "https://m.media-amazon.com/images/I/61muVCIy-uL._SX679_.jpg",
      buttontext: "Shop Now"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {PhoneData.map((i, a) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3" key={a}>
            <Card_props
              title={i.title}
              price={i.price}
              rating={i.rating}
              image={i.image}
              buttontext={i.buttontext}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carddata;
