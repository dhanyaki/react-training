import React, { useState } from 'react'
import "./index.css";
function BmiCal()
 {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");
    
    let calculate = (event) => {
        event.preventDefault()

        if (weight === 0 || height === 0) {
            alert("please enter weight and height value");
        }
        else {

            let bmi = (weight / (height * height) * 703);
            setBmi(bmi.toFixed(1));
            
            if (bmi < 25) {
              setMessage(<div className='text-danger'>you are underweight</div>); 
            }
            

            else if (bmi >= 25 && bmi < 35) {
                setMessage(<div className='text-success'>you are healthly weight</div>);
            }
            else {
                setMessage(<div className='text-danger'>you are overweight</div>);
            }
        }
    }
    return (
        <div className='border p-5 m-5 w-50 mx-auto shadow rounded-5'>
  
        <div className='app'>
    
            <div className='container'>
                
                 <h1 className='center bg-info text-white rounded-2' >BMI CALCULATOR</h1>
                    <form onSubmit={calculate}>
                        <div className=''>
                            <label className='pt-5 m-3 text-warning'><h3>weight:</h3> </label>
                            <input  className="p-2 w-50 rounded-pill"value={weight} onChange={(e => setWeight(e.target.value))} />
                        </div>
                        <div>
                            <label className='pt-3 m-3 text-warning'> <h3>height:</h3> </label>
                            <input  className="p-2 w-50 rounded-pill" value={height} onChange={(event) => setHeight(event.target.value)} />
                        </div>
                        <div>
                            <button className="btn btn-success mt-3" type="submit">Submit</button>
                        </div>
                    </form>

                    <div className='align-center pt-3'>
                        <h4>you will be:{bmi}</h4>
                        <p>{message}</p>

                    </div>
                </div>

            </div>
            </div>
        
    )
}

export default BmiCal;