package be.sandbox.security.employee.dto;

import be.sandbox.security.employee.entity.EmployeeEntity;
import lombok.Builder;
import lombok.NonNull;

@Builder
public record EmployeeDTO(
        String firstName,
        String lastName
) {

    public static EmployeeDTO map(EmployeeEntity entity) {
        return EmployeeDTO.builder()
                .firstName(entity.firstName())
                .lastName(entity.lastName())
                .build();
    }
}
