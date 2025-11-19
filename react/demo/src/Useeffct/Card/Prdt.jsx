import React,{ useState, useEffect } from 'react'
import axios from 'axios';

function Prdt() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.in/api/products")
        console.log(res.data)
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
                                        <img src={user.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.id}</h5>
                                             <h5 className="card-title">{user.title}</h5>
                                             <h6 className="card-title">price::{user.price}</h6>
                                             <h5 className="card-title">brand:{user.brand}</h5>
                                            <p className="card-text"> <b>description:</b>{user.description.slice(0, 50)}....</p>
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


export default Prdt
