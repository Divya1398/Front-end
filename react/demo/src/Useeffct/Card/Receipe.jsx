import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Receipe() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/recipes")
        setuser(res.data.recipes)
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
                                             <h5 className="card-title">{user.name}</h5>
                                             <h6 className="card-title">Ingredients:{user.ingredients.join(', ')}</h6>
                                             <h5 className="card-title">cookTimeMinutes:{user.cookTimeMinutes}</h5>
                                            <p className="card-text"> <b>instructions:</b>{user.instructions.slice(0, 2).join(' → ')}....</p>
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

export default Receipe

