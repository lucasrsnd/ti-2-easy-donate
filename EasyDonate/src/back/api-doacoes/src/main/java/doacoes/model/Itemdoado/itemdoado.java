package doacoes.model.Itemdoado;

import doacoes.model.CadastrarMaterialUser.Cadastrarmaterialuser;
import doacoes.model.Doacoes.doacao;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "itemdoado")
public class itemdoado {
    @Id
    @Column(name = "id_item_doado")
    int iditemdoado;

    @ManyToOne
    @JoinColumn(name = "iddoacao", referencedColumnName = "id_doacao")
    private doacao Doacao;

    @ManyToOne
    @JoinColumn(name = "cadastrarmaterialuser", referencedColumnName = "id_material_user")
    private Cadastrarmaterialuser cadastrarmaterialusers;

    public itemdoado() {

    }

    public itemdoado( Cadastrarmaterialuser idmaterialuser) {
        this.cadastrarmaterialusers = idmaterialuser;
    }

    public Cadastrarmaterialuser getCadastrarmaterialusers() {
        return cadastrarmaterialusers;
    }

    public int getIditemdoado() {
        return iditemdoado;
    }

    public doacao getDoacao() {
        return Doacao;
    }

    public void setCadastrarmaterialusers(Cadastrarmaterialuser cadastrarmaterialuser) {
        this.cadastrarmaterialusers = cadastrarmaterialuser;
    }

    public void setIditemdoado(int id_item_doado) {
        this.iditemdoado = id_item_doado;
    }

    public void setDoacao(doacao Doacao) {
        this.Doacao = Doacao;
    }
}
