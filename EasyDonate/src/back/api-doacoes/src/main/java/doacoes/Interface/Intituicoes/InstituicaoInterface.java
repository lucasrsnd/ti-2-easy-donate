package doacoes.Interface.Intituicoes;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import doacoes.model.Instituicoes.Instituicoes;

@Repository
public interface InstituicaoInterface extends JpaRepository<Instituicoes, String> {
    boolean existsByCnpj(String cnpj);
    Instituicoes findByCnpj(String cnpj);
    boolean existsByCnpjAndSenha(String cpnj, String senha);
}
