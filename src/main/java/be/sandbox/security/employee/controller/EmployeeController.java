package be.sandbox.security.employee.controller;

import be.sandbox.security.employee.dto.EmployeeDTO;
import be.sandbox.security.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api/employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public EmployeeDTO getEmployee() {
        return employeeService.getEmployee();
    }

    @PostMapping
    public EmployeeDTO createEmployee() {
        return employeeService.createEmployee();
    }
}
