import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter'; // Helper to get params in class components

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.params.id,   // from withRouter
      employee: {}
    };
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then(res => {
      this.setState({ employee: res.data.data });
    }).catch(err => {
      console.error("Error fetching employee details:", err);
    });
  }

render() {
  const { employee } = this.state;

  return (
    <div className="container">
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row mb-3">
            <label className="col-sm-4 font-weight-bold">Employee First Name:</label>
            <div className="col-sm-8">{employee.first_name}</div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-4 font-weight-bold">Employee Last Name:</label>
            <div className="col-sm-8">{employee.last_name}</div>
          </div>
          <div className="row mb-3">
            <label className="col-sm-4 font-weight-bold">Employee Email ID:</label>
            <div className="col-sm-8">{employee.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

}

export default withRouter(ViewEmployeeComponent);
