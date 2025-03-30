package doacoes.SQL.CadastrarMaterialUser;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.CadastrarMaterialUser.CadastrarMaterialUserInterface;

import doacoes.model.CadastrarMaterialUser.Cadastrarmaterialuser;

@Service
public class CadastrarMaterialUserDB {
    @Autowired
    private CadastrarMaterialUserInterface cadastrarMaterialUserInterface;

    public boolean CadastroMaterial(Cadastrarmaterialuser cadastromaterialuser) {
        try {
            cadastromaterialuser.setAprovacao(false);
            cadastromaterialuser.setDataCadastro(LocalDateTime.now());
            cadastrarMaterialUserInterface.save(cadastromaterialuser);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean aprovarMaterial(int idMaterial) {
        try {
            Cadastrarmaterialuser cadastrarmaterialuser = cadastrarMaterialUserInterface.findByIdMaterialUser(idMaterial);
            if (cadastrarmaterialuser != null) {
                cadastrarmaterialuser.setAprovacao(true);
                cadastrarMaterialUserInterface.save(cadastrarmaterialuser);
                System.out.println("Material " + idMaterial + " foi aprovado.");
                return true;
            } else {
                System.out.println("Material não encontrado para aprovação.");
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    public List<Cadastrarmaterialuser> ListaPorUser(String cpf) {
        List<Cadastrarmaterialuser> cadastrados = cadastrarMaterialUserInterface
                .findAllByUserCpf_Cpf(cpf);
        return cadastrados;
    }

    public List<Cadastrarmaterialuser> Listadetodos() {
        List<Cadastrarmaterialuser> total = cadastrarMaterialUserInterface.findAll();
        List<Cadastrarmaterialuser> filtrada = new ArrayList<>();
        for (Cadastrarmaterialuser material : total) {
            if (material.getAprovacao() == false) {
                filtrada.add(material);
            }
        }
        return filtrada;
    }

}
