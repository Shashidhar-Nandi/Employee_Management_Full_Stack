import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter'; // helper wrapper

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.params.id,
            first_name: '',
            last_name: '',
            email: ''
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        const employeeId = this.props.params.id; // using params from withRouter
        EmployeeService.getEmployeeById(employeeId).then(res => {
            let employee = res.data;    
            this.setState({
                first_name: employee.first_name,
                last_name: employee.last_name,
                email: employee.email
            });
        });
    }

    updateEmployee(e) {
        e.preventDefault();
        let employee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateEmployee(employee, this.state.id).then(res => {
            this.props.navigate('/employees'); // ✅ no .push
        });
    }

    changeFirstNameHandler(event) {
        this.setState({ first_name: event.target.value });
    }

    changeLastNameHandler(event) {
        this.setState({ last_name: event.target.value });
    }

    changeEmailHandler(event) {
        this.setState({ email: event.target.value });
    }

    cancel() {
        this.props.navigate('/employees'); // ✅ no .push
    }

    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
                                        <input
                                            placeholder="First Name"
                                            name="first_name"
                                            className="form-control"
                                            value={this.state.first_name}
                                            onChange={this.changeFirstNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input
                                            placeholder="Last Name"
                                            name="last_name"
                                            className="form-control"
                                            value={this.state.last_name}
                                            onChange={this.changeLastNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input
                                            placeholder="Email Address"
                                            name="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeEmailHandler}
                                        />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={() => this.cancel()} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(UpdateEmployeeComponent);
