package org.btx.BTX_Employee_List.service;

import java.util.List;

import org.btx.BTX_Employee_List.model.Employee;

public interface EmployeeService {

	Employee save(Employee e);
	
	Employee getById(Long id);

	void deleteEmployee(Long id);

	List<Employee> getAllEmployees();

	Employee updateEmployee(Long id, Employee updatedEmployee);


}
