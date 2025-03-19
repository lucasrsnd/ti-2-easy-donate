package doacoes.requests.Instituicoes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import doacoes.SQL.Instituicoes.IntituicoesDB;
import doacoes.model.Instituicoes.Instituicoes;

@RestController
@RequestMapping("/inst")
@CrossOrigin(origins = "*")
public class ControllerInst {

    @Autowired
    private IntituicoesDB InsertIns;

    @PostMapping("/insert")
    public ResponseEntity<String> InsertInstituicao(@RequestBody Instituicoes instituicoes) {
        if (InsertIns.CadastroDeInstituicao(instituicoes)) {
            System.out.println("Intituicao cadastrada");
            return ResponseEntity.status(HttpStatus.CREATED).body("Cadastrado com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel cadastrar.");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Instituicoes instituicoes) {
        if (InsertIns.LoginInst(instituicoes)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Login feito");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Não foi possivel fazer login.");
        }
    }

    @PutMapping("/update/aprovacao/")
    public ResponseEntity<String> aprovacao(@RequestBody Instituicoes instituicoes) {
        if (InsertIns.aprovacao(instituicoes.getCnpj())) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Aprovado");
        }

        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Não foi possivel aprovar.");
    }

    @GetMapping("/instituicoes")
    public ResponseEntity<List<Instituicoes>> getAllInstituicoes() {
        List<Instituicoes> instituicoes = InsertIns.findAllInstituicoes();
        return ResponseEntity.ok(instituicoes);
    }


}
