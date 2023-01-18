import React, { Component } from "react";

export default class StudentForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark">
            <h4 className="text-white">Student Infomation</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Student Id"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Fullname"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
