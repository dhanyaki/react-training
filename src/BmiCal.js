import React, { useState } from 'react'

function BmiCal() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message,setMessage]=useState("");
    let calculate = (event) => {
        event.preventDefault()

        if (weight === 0 || height === 0) {
            alert("please enter weight and height value");
        }
        else {

            let bmi = (weight / (height * height) * 703);
            setBmi(bmi.toFixed(1));

            if(bmi<25)
                {
                    setMessage("you are underweight");
                }
                else if(bmi>=25 && bmi<35)
                    {
                        setMessage("you are healthly weight");
                    }
                    else
                    {
                      setMessage("you are overweight");
                    }
        }
    }
    return (
        <div className='app'>
            <div className='container'>
                <h1 className='center' >BMI CALCULATOR</h1>
                <form onSubmit={calculate}>
                    <div>
                        <label>weight: </label>
                        <input value={weight} onChange={(e => setWeight(e.target.value))} />
                    </div>
                    <div>
                        <label>height:</label>
                        <input value={height} onChange={(event) => setHeight(event.target.value)} />
                    </div>
                    <div>
                        <button className="btn" type="submit">Submit</button>
                    </div>
                    </form>

                    <div className='align-center'>
                        <h4>you will be:{bmi}</h4>
                        <p>{message}</p>


                    </div>
                
            </div>
        </div>
    )
}

export default BmiCal;