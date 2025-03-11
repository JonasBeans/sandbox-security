package be.sandbox.security.employee.controller;

import be.sandbox.security.employee.dto.EmployeeDTO;
import be.sandbox.security.employee.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping
    public List<EmployeeDTO> findAllEmployees() {
        return employeeService.findAllEmployees();
    }

    @GetMapping("/{name}")
    public List<EmployeeDTO> findEmployeesByName(@PathVariable String name) {
        return employeeService.findEmployeesByName(name);
    }

    @PostMapping
    public EmployeeDTO createEmployee(@RequestBody EmployeeDTO employee) {
        return employeeService.createEmployee(employee);
    }

}
