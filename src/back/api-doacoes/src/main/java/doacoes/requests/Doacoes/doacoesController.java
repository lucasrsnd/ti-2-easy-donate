package doacoes.requests.Doacoes;

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

import doacoes.SQL.Doacoes.Doacao.doacaodb;
import doacoes.model.Doacoes.doacao;

@RestController
@RequestMapping("/doacoes")
@CrossOrigin(origins = "*")
public class doacoesController {
    @Autowired
    private doacaodb doacoessql;

    /*
     * @PostMapping("/doacao")
     * public ResponseEntity<String> InsertDoador(@RequestBody doacao Doacao) {
     * if (doacoessql.NovaDoacao(Doacao)) {
     * return ResponseEntity.status(HttpStatus.CREATED).body("Doado com sucesso!");
     * } else {
     * return
     * ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel doar.");
     * }
     * }
     */

    @PostMapping("/doacao")
    public ResponseEntity<Integer> InsertDoacao(@RequestBody doacao Doacao) {
        if (doacoessql.NovaDoacao(Doacao)) {
            return ResponseEntity.status(HttpStatus.CREATED).body(Doacao.getIddoacao());
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(0);
        }
    }

    @PostMapping("/lista/user")
    public ResponseEntity<List<doacao>> ListaDoacaoPorUser(@RequestBody Map<String, String> cpf) {
        List<doacao> doacoes = doacoessql.findAllIDoadosporUser(cpf.get("cpf"));
        if (doacoes != null) {
            return ResponseEntity.ok(doacoes);
        }
        System.out.println("Body Nulo nas doacoes com cpf " + cpf);
        return ResponseEntity.ofNullable(null);
    }

    @PostMapping("/lista/inst")
    public ResponseEntity<List<doacao>> ListaDoacaoPorInst(@RequestBody Map<String, String> cnpj) {
        List<doacao> doacoes = doacoessql.findAllIDoadosporInst(cnpj.get("cnpj"));
        if (doacoes != null) {
            return ResponseEntity.ok(doacoes);
        }
        System.out.println("Body Nulo nas doacoes para o cnpj " + cnpj);
        return ResponseEntity.ofNullable(null);
    }
}
