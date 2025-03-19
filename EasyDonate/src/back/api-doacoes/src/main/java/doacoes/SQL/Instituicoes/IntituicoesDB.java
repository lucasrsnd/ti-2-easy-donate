package doacoes.SQL.Instituicoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Intituicoes.InstituicaoInterface;
import doacoes.model.Instituicoes.Instituicoes;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class IntituicoesDB {

    @Autowired
    private InstituicaoInterface instituicaoInterface;

    public boolean CadastroDeInstituicao(Instituicoes instituicoes) {
        try {
            LocalDateTime dataAtual = LocalDateTime.now();
            instituicoes.setCriacao(dataAtual);
            instituicoes.setAprovacao(false);
            instituicaoInterface.save(instituicoes);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean LoginInst(Instituicoes instituicoes) {
        System.out.println("Procurando cnpj para login: " + instituicoes.getCnpj());
        Instituicoes instituicao = instituicaoInterface.findByCnpj(instituicoes.getCnpj());
        if (instituicao == null) {
            System.out.println("Instituicao não encontrada");
            return false;
        }
        if (instituicao.getSenha().equals(instituicao.getSenha()) && instituicao.getAprovacao()) {
            return true;
        }
        System.out.println("aprovado: " + instituicao.getAprovacao());
        return false;

    }

    public boolean aprovacao(String cnpj) {
        Instituicoes instituicoes = instituicaoInterface.findByCnpj(cnpj);
        if (instituicaoInterface.existsByCnpj(cnpj)) {
            instituicoes.setAprovacao(true);
            instituicaoInterface.save(instituicoes);
            System.out.println("Instituicao achada com cnpj: " + cnpj + ", foi aprovada");
            return true;
        }
        return false;
    }

    public List<Instituicoes> findAllInstituicoes() {
        return instituicaoInterface.findAll();
    }

}
