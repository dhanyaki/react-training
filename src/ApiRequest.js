import React, { useEffect, useState } from "react";
 import Modal from "./Modal";
 import "./index.css";

function ApiRequest() {
  const [data, setData] = useState();
  const [dummy, setDummyData] = useState();
  const [showModal,setShowModal]=useState(false);

  
  useEffect(() => {
    
    fetch("https://api.restful-api.dev/objects")
    
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setDummyData(result);
        console.log("new object added");
    
      })
      .catch((error) => console.log(error));
  }, []);
  const filterData = (event) => {
    const filterValue = event.target.value; //Go
    console.log(filterValue);
    const filteredData = dummy?.filter((val) => {
      return val?.name.includes(filterValue);
    });
    setData(filteredData);
    if (filterValue === "") {
      setData(dummy);
    }
  };
  return (
    <div className="container">
      <input type="text" onChange={filterData} className="form-control" />
      <button  className="btn" onClick={()=>setShowModal(true)}> show modal</button>
      {<Modal showModal={showModal} setShowModal={setShowModal}/>}
     
      {data && (
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <th>id</th>
            <th>name</th>
            <th>color</th>
            <th>capacity</th>
            <th>price</th>
          </thead>
          <tbody>
            {data.map((row) => {
              return (
                <tr>
                  <td>{row?.id}</td>
                  <td>{row?.name}</td>
                  <td>{row?.data?.color}</td>
                  <td>{row?.data?.capacity}</td>
                  <td>{row?.data?.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiRequest;
