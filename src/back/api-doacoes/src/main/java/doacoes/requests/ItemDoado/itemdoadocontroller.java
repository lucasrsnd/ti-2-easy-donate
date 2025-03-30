package doacoes.requests.ItemDoado;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doacoes.SQL.Doacoes.ItemDoado.itemdoadodb;
import doacoes.model.Itemdoado.itemdoado;

@RestController
@RequestMapping("/itemdoado")
@CrossOrigin(origins = "*")
public class itemdoadocontroller {
    @Autowired
    private itemdoadodb itemdoadosql;

    @PostMapping("/item/doacao")
    public ResponseEntity<String> ListaDoacao(@RequestBody List<itemdoado> Itensdoados) {
        for (itemdoado item : Itensdoados) {
            if (itemdoadosql.ItemDoadoSave(item)) {
                ResponseEntity.status(HttpStatus.CREATED).body("Doado com sucesso!");
            } else {
                ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel doar.");
            }
        }

        return ResponseEntity.status(HttpStatus.CREATED).body("Doados com sucesso!");

    }

    /*@PostMapping("/lista/doacao")
    public ResponseEntity<List<itemdoado>> ListaDoacaoPorInst(@RequestBody Map<String, Integer> id) {
        List<itemdoado> itemdoados = itemdoadosql.findAllItensdoadosporDoacao(id.get("id_doacao"));
        if (itemdoados != null) {
            return ResponseEntity.ok(itemdoados);
        }
        System.out.println("Body Nulo nas doacoes para o id " + id);
        return ResponseEntity.ofNullable(null);
    }*/

}
