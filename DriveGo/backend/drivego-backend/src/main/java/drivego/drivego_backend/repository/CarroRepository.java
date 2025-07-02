package drivego.drivego_backend.repository;

import drivego.drivego_backend.model.Carros;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarroRepository extends JpaRepository <Carros, Long> {
    
}