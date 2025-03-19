package doacoes.Interface.Itemdoado;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import doacoes.model.Itemdoado.itemdoado;


public interface itemdoadointerface extends JpaRepository<itemdoado, Integer>{
    /*List<itemdoado> findAllByDoacao_Iddoacao(int id);*/
}
