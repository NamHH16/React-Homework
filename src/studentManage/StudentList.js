import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class StudentList extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark">
            <h4 className="text-white">List of Students</h4>
          </div>
          <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Student Id</th>
                  <th>Fullname</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.fullName}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    students: state.student.students,
  };
})(StudentList);
