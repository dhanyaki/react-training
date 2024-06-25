import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({});
  const [error,setError]=useState({})
  const onChaneHandle = (event) => {
    console.log(event.target);
    const name = event.target.name;
    let value = event.target.value;
    if (event.target.type == "checkbox") {
      value = !event.target.value;
    }
    if (event.target.checked) {

      console.log(event.target.checked);
      value = event.target.checked;

    }

    //setFormData(event.target.checked);
    //{email:xy@xy.com, password:'xxxxx'}
    setFormData((prevData) => ({ ...prevData, [name]: value })); //{ password:'xxxxx', email:newValue}
  };
  const submitHanler = (e) => {
    e.preventDefault();
    const validationError = {}
    if (!formData.email) {
      validationError.email = "email is required"
    }
    
   
    if (!formData.password) {
      validationError.password= "password is required"
    }
    else if (formData.password.length<6) {
      validationError.password = "password should be atleast 6 char"
    }
    console.log(formData);
    setError(validationError)
    if(Object.keys(validationError).length===0){

      alert("form submitted successfully")
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHanler}>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={onChaneHandle}
              value={formData.email || ""}
              
            />
            {error.email&&<span>{error.email}</span>}
          </div>
          <div className="form-group col-md-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={onChaneHandle}
              value={formData.password || ""}
            />
            {error.password&&<span>{error.password}</span>}
          </div>
        </div>
        <div className="row mt-2">
          <div className="form-group col">
            <label>Present address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Present address"
              name="pa"
              onChange={onChaneHandle}
              value={formData.pa || ""}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="form-group col">
            <label>current address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Current address"
              name="ca"
              onChange={onChaneHandle}
              value={formData.ca || ""}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-6 form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              onChange={onChaneHandle}
              value={formData.city || ""}
            />
          </div>
          <div className="col-md-4 form-group">
            <label>State</label>
            <select
              className="form-select"
              name="state"
              onChange={onChaneHandle}
              value={formData.state || ""}
            >
              <option>Select State</option>
              <option value={"TS"}>TS</option>
              <option value={"AP"}>AP</option>
              <option value={"TN"}>TN</option>
            </select>
          </div>
          <div className="col-md-2 form-group">
            <label>ZIP</label>
            <input
              type="text"
              className="form-control"
              name="zip"
              onChange={onChaneHandle}
              value={formData.zip || ""}
            />
          </div>
        </div>
        <div className="form-group mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="checked" defaultChecked={false} value={formData.checked || false} onClick={onChaneHandle} />
            <label className="form-check-lable" >Check me out</label>
          </div>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
