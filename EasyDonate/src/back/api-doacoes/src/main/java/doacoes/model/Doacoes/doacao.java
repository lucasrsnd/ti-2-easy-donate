package doacoes.model.Doacoes;

import doacoes.model.Doadores.Doadores;
import doacoes.model.Instituicoes.Instituicoes;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "doacao")
public class doacao {
    @Id
    @Column(name = "id_doacao")
    int iddoacao;

    @ManyToOne
    @JoinColumn(name = "users_cpf", referencedColumnName = "cpf")
    private Doadores doadores;

    @ManyToOne
    @JoinColumn(name = "instituicoescnpj", referencedColumnName = "cnpj")
    private Instituicoes instituicoes;

    public doacao() {

    }

    public doacao(Doadores cpf, Instituicoes cnpj) {
        this.doadores = cpf;
        this.instituicoes = cnpj;
    }

    public Doadores getDoadores() {
        return doadores;
    }

    public int getIddoacao() {
        return iddoacao;
    }

    public Instituicoes getInstituicoes() {
        return instituicoes;
    }

    public void setDoadores(Doadores doadores) {
        this.doadores = doadores;
    }

    public void setIddoacao(int iddoacao) {
        this.iddoacao = iddoacao;
    }

    public void setInstituicoes(Instituicoes instituicoes) {
        this.instituicoes = instituicoes;
    }
}
