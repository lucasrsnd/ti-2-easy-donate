package doacoes.SQL.MaterialNecessitado;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Intituicoes.InstituicaoInterface;
import doacoes.Interface.Materiais.MateriaisInterface;
import doacoes.Interface.MateriaisNecessitados.MaterialNecessitadoInterface;
import doacoes.model.MaterialNecessitado.MateriaisNecessitados;

@Service
public class MaterialNecessitadoDB {
    @Autowired
    MaterialNecessitadoInterface necessitadoInterface;

    @Autowired
    MateriaisInterface materiaisInterface;

    @Autowired
    private InstituicaoInterface instituicaoInterface;

    public boolean cadastroDeMaterial(MateriaisNecessitados materiaisNecessitados) {
        try {
            boolean materiais = materiaisInterface.existsById(materiaisNecessitados.getIdMaterial().getId());
            boolean instituicoes = instituicaoInterface.existsByCnpj(materiaisNecessitados.getCnpjInst().getCnpj());
            if (materiais && instituicoes) {
                necessitadoInterface.save(materiaisNecessitados);
                return true;
            }
            System.out.println("Material ou instituicao não encontrada");
            return false;

        } catch (Exception e) {
            return false;
        }

    }

    public List<MateriaisNecessitados> materiaisPorInst(String cnpj) {
        try {
            List<MateriaisNecessitados> ListMateriais = necessitadoInterface.findAllByCnpjInst_Cnpj(cnpj);
            return ListMateriais;
        } catch (Exception e) {
            return null;
        }
    }

    public List<MateriaisNecessitados> getAllPorInts() {
        return necessitadoInterface.findAll();
    }
}
