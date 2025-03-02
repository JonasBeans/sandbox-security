package be.sandbox.security.employee.service;

import be.sandbox.security.employee.dto.EmployeeDTO;
import be.sandbox.security.employee.entity.EmployeeEntity;
import be.sandbox.security.employee.repository.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeDTO getEmployee() {
        return employeeRepository.findByFirstName("Jonas").stream()
                .map(EmployeeDTO::map)
                .findFirst().orElse(null);
    }

    public EmployeeDTO createEmployee() {
        return EmployeeDTO.map(
                employeeRepository.save(EmployeeEntity.builder()
                        .firstName("Jonas")
                        .lastName("Doe")
                        .build()
                )
        );
    }
}
