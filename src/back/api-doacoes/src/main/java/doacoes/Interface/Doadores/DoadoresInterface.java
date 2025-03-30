package doacoes.Interface.Doadores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import doacoes.model.Doadores.Doadores;

@Repository
public interface DoadoresInterface extends JpaRepository<Doadores, String> {
    boolean existsByCpf(String cpf);
    boolean existsByEmail(String Email);
    boolean existsByEmailAndSenha(String email, String senha);
    Doadores findByCpf(String cpf);
    Doadores findByEmail(String Email);
}
