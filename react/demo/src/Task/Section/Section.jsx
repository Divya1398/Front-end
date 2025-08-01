import React from "react";

import "./Section.css"
import yogaImage from "./Images.png"

function Section() {

    return (
        <>

            <section id="title">
                <div className="container">
                    <div className="card">
                        <div className="row">
                            <div className="col">
                                <div className="col-img">
                                    <img src={yogaImage} alt="img" width="200px" height="200px" />
                                </div>
                            </div>
                            <div className="col1">
                                <h1 className="col-h1">YOGA CLASS</h1>
                                <p className="col-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla
                                    neque euismod volutpat cursus. Vestibulum ac pretium orci,</p>
                                <button className="col-btn">join now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section;