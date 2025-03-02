package be.sandbox.security.employee.entity;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Builder
public record EmployeeEntity(
        @Id
        String id,
        String firstName,
        String lastName
) { }
