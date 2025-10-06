import React, { useEffect, useState } from "react";
import Header from "../coman/Header";
import Navs from "../coman/Navs";
import Footer from "../coman/Footer";
import axios from "axios";

function Gallery() {
  const [img, setimg] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/gallary");
    setimg(res.data);
  };

  return (
    <div>
      {/* Gallery Start */}
      <Header />
      <Navs title="Our Gallery" desc="Gallery" />
      <div className="container-fluid gallery py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">Our Gallery</h4>
            <h1 className="display-5 mb-4">Captured Moments In Waterland</h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              adipisci facilis cupiditate recusandae aperiam temporibus corporis
              itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
              obcaecati, ipsam mollitia hic.
            </p>
          </div>

          <div className="row g-4">
            {img &&
              img.map((data, index) => {
                console.log(data); 
                return (
                  <div
                    key={index}
                    className="col-md-4 col-lg-4 col-xl-4 wow fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    <div className="gallery-item">
                      <img
                        src={data.image} 
                        className="img-fluid rounded w-100 h-100"
                        style={{ height: "300px", objectFit: "cover" }}
                        alt={data.Title}
                      />
                      <div className="search-icon">
                        <a
                          href={data.image}
                          className="btn btn-light btn-lg-square rounded-circle"
                          data-lightbox="Gallery"
                        >
                          <i className="fas fa-search-plus" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {/* Gallery End */}
      <Footer />
    </div>
  );
}

export default Gallery;
