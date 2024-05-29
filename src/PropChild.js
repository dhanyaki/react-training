import React,{useState} from 'react'

function PropChild(props) {
  const [counter,setCounter]=useState(0);


  return (
     <>

    <PropChild1 counters ={counter} setCounters={setCounter}/>
    
   <div>
   {counter}
   </div> 
    
    <div>propschild</div>
    </>
  )
}
function PropChild1({counters,setCounters}){
  
  return(
    <>
    <input value={counters} onChange={(e)=>{setCounters(e.target.value)}}/>
    </>
      
  )
}

export default PropChild;