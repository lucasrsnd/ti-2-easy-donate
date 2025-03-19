package doacoes.SQL.Doadores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Doadores.DoadoresInterface;
import doacoes.model.Doadores.Doadores;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DoadoresDB {
    @Autowired
    private DoadoresInterface doadoresInterface;

    public boolean CadastroDeDoador(Doadores doadores) {
        try {
            if (doadoresInterface.existsByCpf(doadores.getCpf())) {
                return false;
            }
            if (doadoresInterface.existsByEmail(doadores.getEmail())) {
                return false;
            }
            doadores.setCriacaoDaConta(LocalDateTime.now());
            doadores.setAprovacao(false);
            doadoresInterface.save(doadores);
            System.out.println("Doador cadastrado com cpf: " + doadores.getCpf());
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public boolean login(Doadores doadores) {
        System.out.println("Procurando email para login: " + doadores.getEmail());
        Doadores doador = doadoresInterface.findByEmail(doadores.getEmail());
        if (doador == null) {
            System.out.println("Email não encontrado");
            return false;
        }
        if (doador.getSenha().equals(doadores.getSenha()) && doador.getAprovacao()) {
            return true;
        }
        System.out.println("aprovado: " + doador.getAprovacao());
        return false;

    }

    public List<Doadores> findAllDoadores() {
        return doadoresInterface.findAll();
    }

    public boolean aprovacao(String cpf) {
        Doadores doadores = doadoresInterface.findByCpf(cpf);
        if (doadoresInterface.existsByCpf(cpf)) {
            doadores.setAprovacao(true);
            doadoresInterface.save(doadores);
            System.out.println("Doador achado com cpf: " + cpf + ", e aprovado");
            return true;
        }
        return false;
    }

    public boolean delete(Doadores doadores) {
        if (doadoresInterface.existsByCpf(doadores.getCpf())) {
            doadoresInterface.deleteById(doadores.getCpf());
            System.out.println("Deletando doador de cpf: " + doadores.getCpf());
            return true;
        }
        return false;
    }

    public String tranformarcpf(String email) {
        Doadores doador = doadoresInterface.findByEmail(email);
        return doador.getCpf();
    }

}