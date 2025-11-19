import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Product() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/products")
        setuser(res.data.products)
    }

    return (
        <div>
            <h1>Hello this Card data print</h1>
            <div className="container">
                <div className="row">
                    {
                        user && user.map((user, index) => {
                            return (
                                <div className="col-md-4" key={index}>
                                    <div className="card" style={{ width: '18rem',margin:"10px" }}>
                                        <span className="border border-secondary">
                                        <img src={user.images[0]} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.title}</h5>
                                             <h5 className="card-title">Price:{user.price}</h5>
                                             <h5 className="card-title">stock:{user.stock}</h5>
                                             <h5 className="card-title">rating:{user.rating}</h5>
                                            <p className="card-text"> {user.description.slice(0,60)}....</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                        </span>
                                    </div>


                                </div>

                            )

                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default Product

