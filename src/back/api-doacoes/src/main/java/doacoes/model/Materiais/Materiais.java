package doacoes.model.Materiais;

import jakarta.persistence.*;


@Entity
@Table(name = "materiais")
public class Materiais{
    @Id
    @Column(name = "id")
    int id;
    @Column(name = "nome_material")
    String nomeMaterial;

    public Materiais(){

    }
    
    public Materiais(String nomeMaterial){
       this.nomeMaterial = nomeMaterial; 
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomeMaterial() {
        return nomeMaterial;
    }

    public void setNomeMaterial(String nomeMaterial) {
        this.nomeMaterial = nomeMaterial;
    }

}

