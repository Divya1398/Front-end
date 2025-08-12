import React from 'react'
import Usercard from '../Props_state/Usercard'

function Carddata() {
    return (
        <div>
            <div className='container mr-5'>
                <Usercard 
                img="https://images.pexels.com/photos/7580821/pexels-photo-7580821.jpeg" 
                title="Person Data" 
                name="Divya" 
                age="27" 
                location="Nikol" 
                />
            </div>
        </div>
    )
}

export default Carddata
