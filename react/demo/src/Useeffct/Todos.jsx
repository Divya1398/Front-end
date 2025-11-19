import axios from "axios";
import React, { useEffect, useState } from "react";
function Todos() {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetchdata()
    }, [])
    const fetchdata = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setuser(res.data)
    }
    return (
        <div>
            <h1>This is useEffect with table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user) => {
                            console.log(user)
                            return(
                                <tr key={user.id}> 
                                    <td>{user.userId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.completed.toString()}</td>
                                </tr>
                            )
                        })


                    }
                </tbody>

            </table>
        </div>
    )
}






export default Todos;
