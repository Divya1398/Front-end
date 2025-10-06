import React, { useEffect, useState } from 'react'
import AHeader from '../AComan/AHeader'
import ANavs from '../AComan/ANavs'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import axios from 'axios'
import { toast } from 'react-toastify'

function ManageGallery() {
    // Fetch data
    const [gallary, setgallary] = useState([])
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await axios.get("http://localhost:5000/gallary")
        setgallary(res.data)
    }

    // View single image
    const [singleImage, setSingleImage] = useState({
        id: "",
        Title: "",
        image: "",
        desc: ""
    })

    const getSingleImage = async (id) => {
        const res = await axios.get(`http://localhost:5000/gallary/${id}`)
        setSingleImage(res.data)
    }

    // Delete
    const deleteImage = async (id) => {
        await axios.delete(`http://localhost:5000/gallary/${id}`)
        toast.error("Image Deleted!")
        fetchData()
    }

    // Edit
    const [edit, setEdit] = useState(null)
    const [galleryEdit, setGalleryEdit] = useState({
        id: "",
        Title: "",
        image: "",
        desc: ""
    })

    const getProduct = (data) => {
        setEdit(data)
        setGalleryEdit(data)
    }

    const getChange = (e) => {
        setGalleryEdit({
            ...galleryEdit,
            [e.target.name]: e.target.value
        })
    }

    const updateData = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:5000/gallary/${galleryEdit.id}`, galleryEdit)
            toast.success("Image updated!")
            setEdit(null)
            fetchData()
            setGalleryEdit({
                id: "",
                Title: "",
                image: "",
                desc: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AHeader />
            <ANavs title="Gallery Manage" desc="Manage your gallery items" />
            <h1 className="text-center">Gallery Manage Data</h1>

            <div className="container mt-5">
                <MDBTable>
                    <MDBTableHead>
                        <tr className='text-center'>
                            <th scope='col'>ID</th>
                            <th scope='col'>Title</th>
                            <th scope='col'>Image</th>
                            <th scope='col'>Description</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {gallary.map((data, index) => (
                            <tr key={index} className="text-center">
                                <th scope='row'>{data.id}</th>
                                <td>{data.Title}</td>
                                <td>
                                    <img src={data.image} alt={data.Title} style={{ width: "100px", height: "auto" }} />
                                </td>
                                <td>{data.desc}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm mx-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#viewModal"
                                        onClick={() => getSingleImage(data.id)}
                                    >View</button>
                                    <button className="btn btn-success btn-sm mx-1" onClick={() => getProduct(data)}>Edit</button>
                                    <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteImage(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </div>

            {/* Modal for view */}
            <div className="modal fade" id="viewModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <img src={singleImage.image} alt={singleImage.Title} className="img-fluid" />
                            <h5 className="mt-3">{singleImage.Title}</h5>
                            <p className="mt-2">{singleImage.desc}</p>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit form */}
            {edit && (
                <div className="container mt-5">
                    <h4 className="text-center text-primary">Update Gallery</h4>
                    <form onSubmit={updateData}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                name="Title"
                                value={galleryEdit.Title}
                                onChange={getChange}
                                placeholder="Enter Title"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="url"
                                className="form-control"
                                name="image"
                                value={galleryEdit.image}
                                onChange={getChange}
                                placeholder="Enter Image URL"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                name="desc"
                                value={galleryEdit.desc}
                                onChange={getChange}
                                placeholder="Enter description"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary me-2">Update</button>
                        <button type="button" className="btn btn-secondary" onClick={() => setEdit(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default ManageGallery
