package org.btx.BTX_Employee_List.controller;

import java.util.List;

import org.btx.BTX_Employee_List.dto.ResponseStructure;
import org.btx.BTX_Employee_List.model.Employee;
import org.btx.BTX_Employee_List.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins ="http://localhost:3000")
@RestController
@RequestMapping("employee/list")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	

	@PostMapping("/create")
	public ResponseEntity<ResponseStructure<Employee>> createEmployee(@RequestBody Employee e){
		
		Employee save = employeeService.save(e);
		
		ResponseStructure<Employee> apiResponse = new ResponseStructure<>();
		apiResponse.setData(save);
		apiResponse.setMessage("the new Employee added to list!");
		apiResponse.setStatusCode(HttpStatus.CREATED.value());
		
		return new ResponseEntity<>(apiResponse,HttpStatus.OK);

	}
	
	
	@GetMapping("/get/{id}")
	public ResponseEntity<ResponseStructure<Employee>> getById(@PathVariable Long id){
		Employee response = employeeService.getById(id);
		ResponseStructure<Employee> apiResponse = new ResponseStructure<>();
		apiResponse.setData(response);
		apiResponse.setMessage("the finding id "+id+" is existing");
		apiResponse.setStatusCode(HttpStatus.CREATED.value());
		
		return new ResponseEntity<>(apiResponse,HttpStatus.OK);
	}
	
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity deleteRestaurant(@PathVariable Long id) {
		
		employeeService.deleteEmployee(id);
		
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	
	@GetMapping("/getAll")
	public ResponseEntity<List<Employee>> getAll() {
		 List<Employee> employees = employeeService.getAllEmployees();
         return new ResponseEntity<>(employees, HttpStatus.OK);
	}
	
	@PutMapping("/updateEmployee/{id}")
	 public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
	      Employee employee = employeeService.updateEmployee(id, updatedEmployee);
	      return new ResponseEntity<>(employee, HttpStatus.OK);
	 }
}
