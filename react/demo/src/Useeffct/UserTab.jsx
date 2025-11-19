import React, { useEffect, useState } from "react";
import axios from "axios";
function UserTab() {
    const [user, setuser] = useState([])
    useEffect(()=>{
        fatchdata()
    },[])

    const fatchdata = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        //    console.log(res.data)
        setuser(res.data.users)
    }
    return (
        <div>
            <h1>this is user data in table with axios</h1>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">firstName</th>
                        <th scope="col">email</th>
                        <th scope="col">address</th>
                        <th scope="col">company name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user) => {
                            console.log(user)
                            return(
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}



export default UserTab;