import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  fetchStudents = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://63c76e5bdcdc478e15d4d125.mockapi.io/students",
      });
      this.props.dispatch({
        type: "student/UPDATE_STUDENT_LIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h2>Student Manage</h2>
        <StudentForm />
        <StudentList />
      </div>
    );
  }

  componentDidMount() {
    this.fetchStudents();
  }
}

export default connect()(Home);
