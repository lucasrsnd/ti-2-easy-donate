package doacoes.model.MaterialNecessitado;

import doacoes.model.Instituicoes.Instituicoes;
import doacoes.model.Materiais.Materiais;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "materialnecessitado")
public class MateriaisNecessitados {
    @Id
    int idmterialnecessitado;
    @ManyToOne
    @JoinColumn(name = "instituicaocnpj", referencedColumnName = "cnpj")
    private Instituicoes cnpjInst;
    @ManyToOne
    @JoinColumn(name = "idmaterial", referencedColumnName = "id")
    private Materiais idMaterial;
    @Column(name = "quantidade")
    int quantidade;

    public MateriaisNecessitados() {

    }

    public MateriaisNecessitados(Instituicoes cnpj, Materiais idMaterial, int quantidade) {
        this.cnpjInst = cnpj;
        this.idMaterial = idMaterial;
        this.quantidade = quantidade;
    }

    public Instituicoes getCnpjInst() {
        return cnpjInst;
    }

    public Materiais getIdMaterial() {
        return idMaterial;
    }

    public int getIdMaterialNecessitado() {
        return idmterialnecessitado;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setCnpjInst(Instituicoes cnpjInst) {
        this.cnpjInst = cnpjInst;
    }

    public void setIdMaterial(Materiais idMaterial) {
        this.idMaterial = idMaterial;
    }

    public void setIdMaterialNecessitado(int idMaterialNecessitado) {
        this.idmterialnecessitado = idMaterialNecessitado;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}
