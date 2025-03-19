package doacoes.Interface.Doacoes;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import doacoes.model.Doacoes.doacao;

@Repository
public interface doacaointerface extends JpaRepository<doacao, Integer>{
    List<doacao> findAllByDoadoresCpf(String cpf);
    List<doacao> findAllByInstituicoesCnpj(String cnpj);
}
