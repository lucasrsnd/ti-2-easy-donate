package doacoes.Interface.CadastrarMaterialUser;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import doacoes.model.CadastrarMaterialUser.Cadastrarmaterialuser;
import doacoes.model.Materiais.Materiais;

@Repository
public interface CadastrarMaterialUserInterface extends JpaRepository<Cadastrarmaterialuser, Integer> {
    Cadastrarmaterialuser findByIdMaterialUser(int idMaterialUser);
    Cadastrarmaterialuser findByIdMaterial(Materiais id);
    boolean existsByIdMaterial(Materiais id);
    List<Cadastrarmaterialuser> findAllByUserCpf_Cpf(String cpf);
}
