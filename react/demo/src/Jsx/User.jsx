import React from "react";
function User(){
    let sum = 2+20
    let User = <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ul>
    let name = "divya"
    return(
       <div>
        <h1> {sum}{User}</h1>
        <h1>Hello!{name}</h1>
       </div>
    )
}
export default User;