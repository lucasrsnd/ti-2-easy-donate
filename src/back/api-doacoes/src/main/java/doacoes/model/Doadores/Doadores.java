package doacoes.model.Doadores;

import java.time.LocalDateTime;

import java.util.Date;

import jakarta.persistence.*;

@Entity
@Table(name = "doadores")
public class Doadores {

    @Id
    @Column(name = "cpf")
    private String cpf;
    
    @Column(name = "nome")
    private String nome;
    
    @Column(name = "senha")
    private String senha;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "telefone")
    private String telefone;
    
    @Column(name = "nascimento")
    private Date nascimento;
    
    @Column(name = "criacao_conta")
    private LocalDateTime criacao_conta;

    @Column(name = "aprovacao")
    private boolean aprovacao;

    public Doadores() {
    }

    public Doadores(String CPF, String Nome, String Senha, String Email, String Telefone, Date Nascimento) {
        this.cpf = CPF;
        this.nome = Nome;
        this.senha = Senha;
        this.email = Email;
        this.telefone = Telefone;
        this.nascimento = Nascimento;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public void setCriacaoDaConta(LocalDateTime criacaoConta) {
        this.criacao_conta = criacaoConta;
    }

    public LocalDateTime getCriacaoDaConta() {
        return criacao_conta;
    }

    public boolean getAprovacao(){
        return aprovacao;
    }

    public void setAprovacao(boolean aprovacao) {
        this.aprovacao = aprovacao;
    }

}
