package tn.esprit.devops_project;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tn.esprit.devops_project.entities.Operator;
import tn.esprit.devops_project.repositories.OperatorRepository;
import tn.esprit.devops_project.services.OperatorServiceImpl;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class OperatorServiceMockTest {

    @Mock
    private OperatorRepository operatorRepository;

    @InjectMocks
    private OperatorServiceImpl operatorService;

    @Test
    void testAddOperator() {
        Operator operatorToAdd = new Operator();
        operatorToAdd.setIdOperateur(1L);
        operatorToAdd.setFname("John");
        operatorToAdd.setLname("Doe");
        operatorToAdd.setPassword("password");

        when(operatorRepository.save(operatorToAdd)).thenReturn(operatorToAdd);

        Operator savedOperator = operatorService.addOperator(operatorToAdd);

        assertEquals(operatorToAdd, savedOperator);
        verify(operatorRepository, times(1)).save(operatorToAdd);
    }

    @Test
    void testRetrieveOperator() {
        Long operatorId = 1L;
        Operator operator = new Operator();
        operator.setIdOperateur(operatorId);
        operator.setFname("John");
        operator.setLname("Doe");
        operator.setPassword("password");

        when(operatorRepository.findById(operatorId)).thenReturn(Optional.of(operator));

        Operator retrievedOperator = operatorService.retrieveOperator(operatorId);

        assertEquals(operator, retrievedOperator);
        verify(operatorRepository, times(1)).findById(operatorId);
    }

    @Test
    void testUpdateOperator() {
        Operator operatorToUpdate = new Operator();
        operatorToUpdate.setIdOperateur(1L);
        operatorToUpdate.setFname("John");
        operatorToUpdate.setLname("Doe");
        operatorToUpdate.setPassword("password");

        when(operatorRepository.save(operatorToUpdate)).thenReturn(operatorToUpdate);

        Operator updatedOperator = operatorService.updateOperator(operatorToUpdate);

        assertEquals(operatorToUpdate, updatedOperator);
        verify(operatorRepository, times(1)).save(operatorToUpdate);
    }

    @Test
    void testDeleteOperator() {
        Long operatorId = 1L;

        operatorService.deleteOperator(operatorId);

        verify(operatorRepository, times(1)).deleteById(operatorId);
    }
}
