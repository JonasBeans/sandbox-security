package be.sandbox.security.employee.repository;

import be.sandbox.security.employee.entity.EmployeeEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmployeeRepository extends MongoRepository<EmployeeEntity, String> {
    List<EmployeeEntity> findByFirstName(String firstName);
}
