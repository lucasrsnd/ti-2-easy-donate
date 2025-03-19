package doacoes.SQL.Doacoes.ItemDoado;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import doacoes.Interface.Itemdoado.itemdoadointerface;
import doacoes.model.Itemdoado.itemdoado;

@Service
public class itemdoadodb {

    @Autowired
    itemdoadointerface ItemDoacaointerface;

    public boolean ItemDoadoSave(itemdoado Itemdoado) {
        ItemDoacaointerface.save(Itemdoado);
        return true;
    }

    /*public List<itemdoado> findAllItensdoadosporDoacao(int id) {
        return ItemDoacaointerface.findAllByDoacao_Iddoacao(id);
    }*/

}
