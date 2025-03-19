package doacoes.SQL.Doacoes.Doacao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Doacoes.doacaointerface;
import doacoes.model.Doacoes.doacao;

@Service
public class doacaodb {
    // listar por user, listar por instituicao e escrever na tabela
    @Autowired
    doacaointerface doacaoInterface;

    public boolean NovaDoacao(doacao Doacao) {
        doacaoInterface.save(Doacao);
        return true;
    }

    public List<doacao> findAllIDoadosporUser(String cpf) {
        return doacaoInterface.findAllByDoadoresCpf(cpf);
    }

    public List<doacao> findAllIDoadosporInst(String cnpj) {
        return doacaoInterface.findAllByInstituicoesCnpj(cnpj);
    }

}
