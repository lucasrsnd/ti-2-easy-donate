package doacoes.model.CadastrarMaterialUser;

import java.sql.Date;
import java.time.LocalDateTime;

import doacoes.model.Doadores.Doadores;
import doacoes.model.Materiais.Materiais;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "cadastrarmaterialuser")
public class Cadastrarmaterialuser {
    @Id
    @Column(name = "id_material_user")
    private int idMaterialUser;

    @ManyToOne
    @JoinColumn(name = "user_cpf", referencedColumnName = "cpf")
    private Doadores userCpf;

    @ManyToOne
    @JoinColumn(name = "id_material", referencedColumnName = "id")
    private Materiais idMaterial;

    @Column(name = "validade")
    private Date validade;

    @Column(name = "data_cadastro")
    private LocalDateTime dataCadastro;

    @Column(name = "aprovacao")
    private boolean aprovacao;

    public Cadastrarmaterialuser(){

    }

    public Cadastrarmaterialuser(Materiais IdMaterial, Doadores UserCpf, Date Validade ){
        this.idMaterial = IdMaterial; 
        this.userCpf = UserCpf;
        this.validade = Validade;
    }   
    
    public int getIdMaterialUser() {
        return idMaterialUser;
    }

    public void setIdMaterialUser(int idMaterialUser) {
        this.idMaterialUser = idMaterialUser;
    }

    public Materiais getIdMaterial() {
        return idMaterial;
    }

    public void setIdMaterial(Materiais idMaterial) {
        this.idMaterial = idMaterial;
    }

    public Doadores getUserCpf() {
        return userCpf;
    }

    public void setUserCpf(Doadores userCpf) {
        this.userCpf = userCpf;
    }

    public Date getValidade() {
        return validade;
    }

    public void setValidade(Date validade) {
        this.validade = validade;
    }

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }

    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public boolean getAprovacao() {
        return aprovacao;
    }

    public void setAprovacao(boolean aprovacao) {
        this.aprovacao = aprovacao;
    }

}
