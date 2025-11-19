import React from 'react'
import Greeting from './Components/Greetings'
import Carddata from './Carddata'

function Nested_Compo() {
  return (
    <div>
      <Greeting/>
      <Carddata/>
    </div>
  )
}

export default Nested_Compo
