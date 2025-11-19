import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'
import first from '../img/first.jpg'
import second from '../img/second.jpg'
import third from '../img/third.jpg'
 


function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={10000}>
                            <img src={first} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src={second} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={third} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>


            <Footer />
        </div>
    )
}

export default Home

