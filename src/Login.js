import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({});

  const onChaneHandle = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //{email:xy@xy.com, password:'xxxxx'}
    setFormData((prevData) => ({ ...prevData, [name]: value })); //{ password:'xxxxx', email:newValue}
  };
  const submitHanler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container">
      <form onSubmit={submitHanler}>
        <div className="row">
          <div className="form-group col-md-6">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={onChaneHandle}
              value={formData.email || ""}
            />
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
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-lable">Check me out</label>
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
