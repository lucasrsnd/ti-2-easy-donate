package doacoes.model.Instituicoes;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "instituicoes")
public class Instituicoes {
    @Id
    @Column(name = "cnpj")
    private String cnpj;

    @Column(name = "nome")
    private String nome;

    @Column(name = "cep")
    private String cep;

    @Column(name = "bairro")
    private String bairro;

    @Column(name = "nomerua")
    private String rua;

    @Column(name = "numerolugar")
    private int numerolugar;

    @Column(name = "criacao")
    private LocalDateTime criacao;

    @Column(name = "aprovacao")
    private boolean aprovacao;

    @Column(name = "senha")
    private String senha;

    public Instituicoes() {

    }

    public Instituicoes(String cnpj, String nome, String cep, String bairro, String rua, int numerolugar,
            String senha) {
        this.cnpj = cnpj;
        this.nome = nome;
        this.cep = cep;
        this.bairro = bairro;
        this.rua = rua;
        this.numerolugar = numerolugar;
        this.senha = senha;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCpf(String CNPJ) {
        this.cnpj = CNPJ;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public int getNumeroLugar() {
        return numerolugar;
    }

    public void setNumerolugar(int numerolugar) {
        this.numerolugar = numerolugar;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public void setCriacao(LocalDateTime criacao) {
        this.criacao = criacao;
    }

    public LocalDateTime getCriacao() {
        return criacao;
    }

    public boolean getAprovacao() {
        return aprovacao;
    }

    public void setAprovacao(boolean aprovacao) {
        this.aprovacao = aprovacao;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
