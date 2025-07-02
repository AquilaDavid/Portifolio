package drivego.drivego_backend.controller;

import drivego.drivego_backend.model.Carros;
import drivego.drivego_backend.service.CarroServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carros")
@CrossOrigin(origins = "http://localhost:3000") // Libera CORS p/ frontend

public class CarroController {
    private final CarroServices service;

    public CarroController(CarroServices service) {
        this.service = service;
    }

    @GetMapping
    public List<Carros> listar() {
        return service.listarTodos();
    }

    @PostMapping
    public Carros criar(@RequestBody Carros carro) {
        return service.salvar(carro);
    }
}
