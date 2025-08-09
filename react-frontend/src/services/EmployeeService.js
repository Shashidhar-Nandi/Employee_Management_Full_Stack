import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee/list/getAll";
const EMPLOYEE_API_BASE_URL1 = "http://localhost:8080/employee/list/create";
const EMPLOYEE_API_BASE_URL2 = "http://localhost:8080/employee/list/get";
const EMPLOYEE_API_BASE_URL3 = "http://localhost:8080/employee/list/updateEmployee";
const EMPLOYEE_API_BASE_URL4 = "http://localhost:8080/employee/list/delete";

class EmployeeService {

    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL1, employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(`${EMPLOYEE_API_BASE_URL2}/${employeeId}`);
    }

    updateEmployee(employee, employeeId) {
        return axios.put(`${EMPLOYEE_API_BASE_URL3}/${employeeId}`, employee);
    }

    deleteEmployee(employeeId) {
        return axios.delete(`${EMPLOYEE_API_BASE_URL4}/${employeeId}`);
    }
}

export default new EmployeeService();
