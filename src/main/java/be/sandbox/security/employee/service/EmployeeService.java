package be.sandbox.security.employee.service;

import be.sandbox.security.employee.dto.EmployeeDTO;
import be.sandbox.security.employee.entity.EmployeeEntity;
import be.sandbox.security.employee.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public List<EmployeeDTO> findAllEmployees() {
        return employeeRepository.findAll().stream()
                .map(EmployeeDTO::map)
                .toList();
    }

    public List<EmployeeDTO> findEmployeesByName(String name) {
        return employeeRepository.findByFirstName(name).stream().map(EmployeeDTO::map).toList();
    }

    public EmployeeDTO createEmployee(EmployeeDTO newEmployee) {
        return EmployeeDTO.map(
                employeeRepository.save(EmployeeEntity.builder()
                        .firstName(newEmployee.firstName())
                        .lastName(newEmployee.lastName())
                        .build()
                )
        );
    }

}
