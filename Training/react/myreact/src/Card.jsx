import React from 'react'

function Card({ title, desc, img }) {
    return (
        // <div>
             <div className='col-12 col-sm-6 col-md-4 mb-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-success btn-lg">Shop</a>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Card
