import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function CounterData() {
    // in store.js key is count so state.count in counterslice key is value
    const count = useSelector((state)=>state.count.value) 
    console.log(count)
     const dipatch = useDispatch()
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
     <h2 style={{ color: "#444", marginBottom: "10px" }}>Redux Counter</h2>
      <h1  style={{
          color: "#2c3e50",
          fontSize: "48px",
          marginBottom: "25px",
        }}>Count:{count}</h1>
      <button onClick={()=>dipatch(increment())} 
         style={{
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
            transition: "0.3s",
          }}>Increment</button>
      <button onClick={()=>dipatch(decrement())} 
          style={{
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
            transition: "0.3s",
          }}>Decrement</button>
      <button onClick={()=>dipatch(zero())} 
          style={{
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 15px",
            cursor: "pointer",
            transition: "0.3s",
          }}>Zero</button>
    </div>
  )
}

export default CounterData
