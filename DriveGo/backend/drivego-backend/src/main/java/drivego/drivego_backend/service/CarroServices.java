package drivego.drivego_backend.service;

import drivego.drivego_backend.model.Carros;
import drivego.drivego_backend.repository.CarroRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarroServices { // ✔ mesmo nome abaixo

    private final CarroRepository repo;

    public CarroServices(CarroRepository repo) { // ✔ nome correto
        this.repo = repo;
    }

    public List<Carros> listarTodos() {
        return repo.findAll();
    }

    public Carros salvar(Carros carro) {
        return repo.save(carro);
    }
}
