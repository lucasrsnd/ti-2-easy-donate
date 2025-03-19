package doacoes.requests.Doadores;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import doacoes.SQL.CadastrarMaterialUser.CadastrarMaterialUserDB;
import doacoes.SQL.Doadores.DoadoresDB;
import doacoes.SQL.Materiais.MateriaisDB;
import doacoes.SQL.MaterialNecessitado.MaterialNecessitadoDB;
import doacoes.model.CadastrarMaterialUser.Cadastrarmaterialuser;
import doacoes.model.Doadores.Doadores;
import doacoes.model.Materiais.Materiais;
import doacoes.model.MaterialNecessitado.MateriaisNecessitados;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Controller {
    @Autowired
    private DoadoresDB insert;

    @GetMapping("/doadores")
    public ResponseEntity<List<Doadores>> getAllDoadores() {
        List<Doadores> doadores = insert.findAllDoadores();
        return ResponseEntity.ok(doadores);
    }

    @PostMapping("/insert/doador")
    public ResponseEntity<String> InsertDoador(@RequestBody Doadores doadores) {
        if (insert.CadastroDeDoador(doadores)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Cadastrado com sucesso!");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel cadastrar.");
        }
    }

    @PostMapping("/login/doador")
    public ResponseEntity<String> login(@RequestBody Doadores doadores) {
        if (insert.login(doadores)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Login feito");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Não foi possivel fazer login.");
        }
    }

    @PutMapping("/update/doador")
    public ResponseEntity<String> aprovacao(@RequestBody Doadores doadores) {
        if (insert.aprovacao(doadores.getCpf())) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Aprovado");
        }

        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Não foi possivel aprovar.");
    }

    @DeleteMapping("/delete/doador")
    public ResponseEntity<String> delete(@RequestBody Doadores doadores) {
        if (insert.delete(doadores)) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deletado");
        }
        return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Não foi possivel deletar.");
    }

    @Autowired
    private MateriaisDB InsertMt;

    @PostMapping("/insert/materiais")
    public ResponseEntity<String> InsertMaterial(@RequestBody Materiais material) {
        if (InsertMt.cadastroDeMaterial(material)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Material cadastrado com sucesso!");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel cadastrar o material.");
    }

    @GetMapping("/materiais")
    public ResponseEntity<List<Materiais>> getAllMateriais() {
        List<Materiais> material = InsertMt.findAllMateriais();
        return ResponseEntity.ok(material);
    }

    @Autowired
    private MaterialNecessitadoDB InsertNecessitadoDB;

    @PostMapping("/insert/materialnecessitado")
    public ResponseEntity<String> InsertMaterialNecessitadp(@RequestBody MateriaisNecessitados materiaisNecessitados) {
        if (InsertNecessitadoDB.cadastroDeMaterial(materiaisNecessitados)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Material cadastrado com sucesso!");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel cadastrar o material.");
    }

    @PostMapping("/necessitado/intituicao")
    public ResponseEntity<List<MateriaisNecessitados>> PegarMaterialPorInst(@RequestBody Map<String, String> cnpj) {
        List<MateriaisNecessitados> materiais = InsertNecessitadoDB.materiaisPorInst(cnpj.get("cnpj"));
        if (materiais != null) {
            return ResponseEntity.ok(materiais);
        }
        System.out.println("Body Nulo nos materiais com cnpj " + cnpj);
        return ResponseEntity.ofNullable(null);
    }

    @Autowired
    private CadastrarMaterialUserDB insertmatuser;

    @PostMapping("/insert/material/doador")
    public ResponseEntity<String> InsertMaterialDoador(@RequestBody Cadastrarmaterialuser cadastrarmaterialuser) {
        if (insertmatuser.CadastroMaterial(cadastrarmaterialuser)) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Material cadastrado com sucesso!");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Não foi possivel cadastrar o material.");
    }

    @PutMapping("/update/materialuser")
    public ResponseEntity<String> aprovarMaterialUser(@RequestBody Cadastrarmaterialuser cadastrarmaterialuser) {
        if (insertmatuser.aprovarMaterial(cadastrarmaterialuser.getIdMaterialUser())) {
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Material aprovado com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Material não encontrado.");
        }
    }

    @PostMapping("/get/materialUser")
    public ResponseEntity<List<Cadastrarmaterialuser>> ListaMateriaisUser(@RequestBody Map<String, String> cpf) {
        return ResponseEntity.ok(insertmatuser.ListaPorUser(cpf.get("cpf")));
    }

    @GetMapping("/get/allmaterialuser")
    public  ResponseEntity<List<Cadastrarmaterialuser>> ListadeTodos(){
        return ResponseEntity.ok(insertmatuser.Listadetodos());
    }

    @PostMapping("/get/cpf")
    public ResponseEntity<String> pegarCpf(@RequestBody Map<String, String> email) {
        System.out.println(email);
        return ResponseEntity.ok(insert.tranformarcpf(email.get("email")));
    }

    @GetMapping("/get/allmaterialinst")
    public  ResponseEntity<List<MateriaisNecessitados>> ListadeTodosNecessitados(){
        return ResponseEntity.ok(InsertNecessitadoDB.getAllPorInts());
    }
}
