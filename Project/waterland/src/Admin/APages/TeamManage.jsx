import React, { useEffect, useState } from "react";
import AHeader from "../AComan/AHeader";
import ANavs from "../AComan/ANavs";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";


function TeamMange() {

  const [team, setteam] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:5000/team")
    setteam(res.data)
  }

  const [singleteam, setsingleteam] = useState({
    id: "",
    name: "",
    work: "",
    image: "",
    desc: ""
  })

  const getteam = async (id) => {
    const res = await axios.get(`http://localhost:5000/team/${id}`)
    console.log(res.data)
    setsingleteam(res.data)
  }

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:5000/team/${id}`)
    console.log(res.data)
    fetchdata()
  }

   const [edit, setedit] = useState(null)
  const [teamedit, setteamedit] = useState({
   id: "",
    name: "",
    work: "",
    image: "",
    desc: ""
  })

  const getproduct=(data)=>{
    setedit(data)
    setteamedit(data)
    console.log(data)
  }
  const getchange=(e)=>{
    setteamedit({
      ...teamedit,
      [e.target.name] : e.target.value
    })
    console.log(teamedit)
  }

  const updatedata= async(e)=>{
     e.preventDefault();
     try {
      const res = await axios.put(`http://localhost:5000/team/${teamedit.id}`,teamedit)
       console.log(res.data)
      toast.success("teams update")
       setedit(null)
      fetchdata()

       setteamedit({
       id: "",
    name: "",
    work: "",
    image: "",
    desc: ""
       })
      
     } catch (error) {
      console.log(error)
      
     }
    }


  return (
    <>
    <div>
      <AHeader />
      <ANavs title="Team Manage" desc="Team manger" />
      <h1 className="text-center">Team Manage data</h1>
      <div className="container mt-5">
        <MDBTable>
          <MDBTableHead>
            <tr className="text-center">
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">work</th>
              <th scope="col">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {team &&
              team.map((data, index) => {
                return (
                  <tr className="text-center" key={index}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.work}</td>
                    <td>
                      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getteam(data.id)}>View</button>
                      <button className="btn btn-success mx-2"  onClick={() => getproduct(data)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deletedata(data.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </MDBTableBody>
        </MDBTable>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div
                className="col-12 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="team-item p-4">
                  <div className="team-content">
                    <div className="d-flex justify-content-between border-bottom pb-4">
                      <div className="text-start">
                        <h4 className="mb-0">{singleteam.name}</h4>
                        <p className="mb-0">{singleteam.work}</p>
                      </div>
                      <div>
                        <img
                          src={singleteam.image}
                          className="img-fluid rounded"
                          style={{ width: 100, height: 100 }}
                          alt
                        />
                      </div>
                    </div>
                    <div className="team-icon d-flex justify-content-center rounded-pill my-4 p-3">
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-3"
                        href
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a
                        className="btn btn-primary btn-sm-square rounded-circle me-0"
                        href
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                    <p className="text-center mb-0">
                      {singleteam.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {
        edit && (
          <div className="container">
            <div className="row">
              <div className="col-xl-12 " >
                <div className="bg-light p-5 rounded h-100">
                  <h4 className="text-primary mb-4 text-center">Updates Teams</h4>
                  <form onSubmit={updatedata}>
                    <div className="row g-4">
                      <div className="col-lg-12 col-xl-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="name"
                            placeholder="Your Name"
                            onChange={getchange}
                            name="name"
                            value={teamedit.name}

                          />
                          <label htmlFor="name">Person Name</label>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            aria-label="Default select example"

                            name="work"
                            value={teamedit.work}
                            onChange={getchange}

                          >
                            <option selected>Your select Work</option>
                            <option value="Doctor">Doctor</option>
                            <option value="Engineer">Engineer</option>
                          </select>
                          <label htmlFor="work">Your work</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="url"
                            className="form-control border-0"
                            id="image"
                            placeholder="image"
                            value={teamedit.image}
                            onChange={getchange}
                            name="image"

                          />
                          <label htmlFor="image">Your Images</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: 160 }}
                            onChange={getchange}
                            defaultValue={""}
                            name="desc"
                            value={teamedit.desc}
                          />
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-6"> <button onClick={updatedata} className="btn btn-primary w-100 py-3">
                            update teams
                          </button></div>
                          <div className="col-6">
                            <button onClick={() => setedit(null)} className="btn btn-primary w-100 py-3">
                              cancle teams
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      }

  </>
//  </div>
 
);
}

export default TeamMange;