package com.getarrays.employeemanager.repo;

import com.getarrays.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import javax.transaction.Transactional;
import java.util.Optional;

//Data access layer, specifying the class and the type of PK
public interface EmployeeRepo extends JpaRepository<Employee, Long> {
    //QUERY METHODS: because of the naming convention Spring will understand what to do
    @Transactional
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);
}
