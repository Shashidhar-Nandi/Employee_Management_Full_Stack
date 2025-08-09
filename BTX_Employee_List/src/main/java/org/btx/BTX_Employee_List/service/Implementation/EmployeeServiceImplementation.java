package org.btx.BTX_Employee_List.service.Implementation;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.btx.BTX_Employee_List.model.Employee;
import org.btx.BTX_Employee_List.repository.EmployeeRepository;
import org.btx.BTX_Employee_List.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImplementation implements EmployeeService {

	@Autowired
	EmployeeRepository employeeRepository;
	
	
	@Override
	public Employee save(Employee e) {
		
		return employeeRepository.save(e);
		
	}
	


	@Override
	public Employee getById(Long id) {
		Optional<Employee> response = employeeRepository.findById(id);
		
		if(response.isPresent()) {
			return response.get();
		}
		else {
			throw new NoSuchElementException("Finding Employee: "+id+ " not found!");
		}
	}



	@Override
	public void deleteEmployee(Long id) {
		Employee getEmployee = getById(id);
		System.out.println("enter the id employee details will be deleted!");
		employeeRepository.delete(getEmployee);
			}



	@Override
	public List<Employee> getAllEmployees() {
		
		return employeeRepository.findAll();
	}



	@Override
	public Employee updateEmployee(Long id, Employee updatedEmployee) {
		
		Employee exisiting = getById(id);
		
		exisiting.setFirst_name(updatedEmployee.getFirst_name());
		exisiting.setLast_name(updatedEmployee.getLast_name());
		exisiting.setEmail(updatedEmployee.getEmail());
		
		return employeeRepository.save(exisiting);
	}
	
}
