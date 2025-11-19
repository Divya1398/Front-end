import axios from "axios";
import React, { useEffect, useState } from "react";
function Users() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fatchdata()
    }, [])
    const fatchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/users")
        setuser(res.data)
    }
    return (
        <div>
            <h1>fackstoreapi practice table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">username</th>
                        <th scope="col">password</th>
                        <th scope="col">city</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user) => {
                            console.log(user)
                            return (
                               
                                    <tr>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>{user.address.city}</td> 
                                        <td>{user.email}</td>
                                        
                                        
                                    </tr>
                               
                            )
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}


export default Users;