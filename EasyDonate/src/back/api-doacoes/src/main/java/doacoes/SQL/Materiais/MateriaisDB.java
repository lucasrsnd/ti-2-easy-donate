package doacoes.SQL.Materiais;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Materiais.MateriaisInterface;
import doacoes.model.Materiais.Materiais;

@Service
public class MateriaisDB {
    @Autowired
    MateriaisInterface materiaisInterface;

    public boolean cadastroDeMaterial(Materiais materiais) {
        if (materiaisInterface.existsBynomeMaterial(materiais.getNomeMaterial())) {
            return false;
        }
        materiaisInterface.save(materiais);
        return true;
    }

    public List<Materiais> findAllMateriais() {
        return materiaisInterface.findAll();
    }
}
