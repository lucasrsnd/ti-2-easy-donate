package doacoes.Interface.MateriaisNecessitados;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import doacoes.model.MaterialNecessitado.MateriaisNecessitados;

@Repository
public interface MaterialNecessitadoInterface extends JpaRepository<MateriaisNecessitados, Integer> {
    List<MateriaisNecessitados> findAllByCnpjInst_Cnpj(String cnpj);
}