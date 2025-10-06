import React, { useState } from "react";
import AHeader from "../AComan/AHeader";
import ANavs from "../AComan/ANavs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddGallery() {
    const redirect = useNavigate();

    const [form, setForm] = useState({
        id: "",
        Title: "",
        image: "",
        desc: ""
    });

    // Handle input changes
    const handleChange = (e) => {
        setForm({
            ...form,
            id: new Date().getTime().toString(), // unique ID
            [e.target.name]: e.target.value
        });
    };

    // Submit new gallery item
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/gallary", form)
        console.log(res.data)

        toast.success("image add successfuly..!")
        redirect("/managegallary")
        setForm({
            id: "",
            Title: "",
            image: "",
            desc: ""
        })

    }

    return (
        <div>
            <AHeader />
            <ANavs title="Add Gallery" desc="Add new images to gallery" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bg-light p-5 rounded h-100">
                            <h4 className="text-primary mb-4 text-center">Add New Image</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                name="Title"
                                                placeholder="Image Title"
                                                value={form.Title}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="Title">Image Title</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="form-floating">
                                            <input
                                                type="url"
                                                className="form-control border-0"
                                                name="image"
                                                placeholder="Image URL"
                                                value={form.image}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="image">Image URL</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control border-0"
                                                placeholder="Description"
                                                style={{ height: 160 }}
                                                name="desc"
                                                value={form.desc}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="desc">Description</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3">
                                            Add Image
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddGallery;
