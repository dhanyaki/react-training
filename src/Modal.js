import React, { useState } from 'react'

const Modal = ({setShowModal,showModal}) => {
  const [uname, setUname] = useState();
  const [year, setYear] = useState();
  const [price, setPrice] = useState();
  const [model, setModel] = useState();
  const [size, setSize] = useState();


  const submitForm = (e) => {

    e.preventDefault();
    const data =
    {
      "name": uname,
      "data": {
        "year": year,
        "price": price,
        "CPU model": model,
        "Hard disk size": size
      }
    }
    fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)


    })
      .then((res) => res.json())
      .then((result) => {

        console.log("new object added", result);

      })
      .catch((error) => console.log(error));


  }
  return (
    <>
    
      <div className={`modal ${showModal ? 'd-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-content">
          <div className="modal-body">
            <form onSubmit={submitForm}>
              <label>uname</label>
              <input type="text" className='form-control' placeholder='uname' value={uname} onChange={(e) => setUname(e.target.value)} />
              <label>year</label>
              <input type="text" className='form-control' placeholder='year' value={year} onChange={(e) => setYear(e.target.value)}
              />
              <label>price</label>
              <input type="text" className='form-control' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}
              />
              <label>cpu model</label>
              <input type="text" className='form-control' placeholder='cpu modal' value={model} onChange={(e) => setModel(e.target.value)}
              />
              <label>hard disk size</label>
              <input type="text" className='form-control' placeholder='hard disk size' value={size} onChange={(e) => setSize(e.target.value)}

              />
              <button type="submit" className='btn btn-submit bg-primary '>Submit</button>
              <button type="button" className="btn btn-cancel bg-danger"onClick={()=>setShowModal(false)} >Close</button>
            </form>
          </div>
        </div>
      </div>


    
    </>
  )
}

export default Modal;