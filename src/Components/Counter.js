import { useEffect, useState } from "react"

const Counter=()=>{
    const [count,setCount] = useState(0)
    const [textP,setTextP] = useState('')
    const increment=()=> setCount(count+1)
    const decrement=()=> count > 0 && setCount(count-1)
    // Mount
    // useEffect(()=>{
    //     console.log("Hello Mount")
    // },[])
    //Update
    // useEffect(()=>{
    //     console.log("Update")
    // })
    // useEffect(()=>{
    //     console.log("Update")
    // },[count])
    //Unmount
    useEffect(()=>{
        return ()=>console.log("Unmount")
    })
    return(
        <div>
            <h2>Counter Component</h2>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <br/>
            <br/>
            <input type="text" onChange={(e)=> setTextP(e.target.value)}/>
            <h3>{textP}</h3>
        </div>
    )
}

export default Counter