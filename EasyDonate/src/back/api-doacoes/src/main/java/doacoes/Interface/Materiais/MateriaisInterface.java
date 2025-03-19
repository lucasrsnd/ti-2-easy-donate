package doacoes.Interface.Materiais;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import doacoes.model.Materiais.Materiais;

@Repository
public interface MateriaisInterface extends JpaRepository<Materiais, Integer> {
    boolean existsBynomeMaterial(String nomeMaterial);
    boolean existsById(int idMaterial);
}
