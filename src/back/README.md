# BackEnd


### Requisitos:

- Java:\
[Faça o Download aqui](https://www.oracle.com/java/technologies/downloads/)
- Springboot: \
[Guia de como aplicar](https://spring.io/guides/gs/spring-boot)

##

### Inicializando aplicação: 
Certifique-se que está no PATH correto, que é /pmg-es-2024-1-ti2-3687100-sistema-de-doacoes/src/back/api-doacoes/ 

Rodando localmente:

#### Rode o banco com docker compose: 

Rode o arquivo compose usando: \
```docker-compose up -d```

#### Rode a aplicação 
```mvn spring-boot:run```

#### Exemplos de Requests:

* Endpoint: /api/insert/doador
``` 
curl -X POST   http://localhost:8080/api/insert/doador   -H 'Content-Type: application/json'   -d '{
        "cpf": "12345678901",
        "nome": "Nathan Flores",
        "senha": "password123",
        "email": "nathan@example.com",
        "telefone": "123456789",
        "nascimento": "2001-02-18"
}'
```

* Endpoint: /api/login/doador
```
curl -X POST   http://localhost:8080/api/login/doador   -H 'Content-Type: application/json'   -d '{
    "email": "nathan@example.com",
    "senha": "password123"
}'
```

* Endpoint /api/doadores

```curl http://localhost:8080/api/doadores```

* Endpoint /api/insert/materiais

```
curl -X POST http://localhost:8080/api/insert/materiais -H "Content-Type: application/json" -d "{\"nomeMaterial\": \"banana\"}"
```

* Endpoint /api/update/doador
```
curl -X PUT http://localhost:8080/api/update/doador -H "Content-Type: application/json" -d '{
"cpf": "12345678"
}'
```

* Endpoint /inst/insert

```
curl -X POST http://localhost:8080/inst/insert -H "Content-Type: application/json" -d '{
  "cnpj": "12345678901234",
  "nome": "Nome da Instituição",
  "cep": "12345-678",
  "bairro": "Nome do Bairro",
  "rua": "Nome da Rua",
  "numerolugar": 123,
  "senha": "123456"
}'
```

* Endpoint /inst/update/aprovacao/
```
curl -X PUT http://localhost:8080/inst/update/aprovacao/ -H "Content-Type: application/json" -d '{
"cnpj": "12345678"
}'
```

* Endpoint /inst/instituicoes

```curl http://localhost:8080/inst/instituicoes```


* Endpoint /api/insert/materialnecessitado

``` curl -X POST http://localhost:8080/api/insert/materialnecessitado -H 'Content-Type: application/json' -d '{"cnpjInst": {"cnpj": "15745865688457"}, "idMaterial": {"id": 1}, "quantidade": 10}'```

* Endpoint /api/necessitado/intituicao

``` 
curl -X POST http://localhost:8080/api/necessitado/intituicao -H "Content-Type: application/json" -d '{
"cnpj": "12345678"
}'
``` 

* Endpoint: /api/insert/material/doador

```
curl -X POST http://localhost:8080/api/insert/material/doador -H "Content-Type: application/json" -d '{
"userCpf": {"cpf": "14649865689"},
"idMaterial": {"id": 1},
"validade": "2024-12-31"
}'
```

* Endpoint /doacoes/doacao

```
curl -X POST http://localhost:8080/doacoes/doacao \
-H "Content-Type: application/json" \
-d
'{"doadores": {"cpf":"14649865689"},"instituicoes": {"cnpj": "12345678901234"}}'
```

* Endpoint /doacoes/lista/user

```
curl -X POST http://localhost:8080/doacoes/lista/user -H "Content-Type: application/json" -d '{"cpf": "12345678901"}'
```

* Endpoint /doacoes/lista/inst

```
curl -X POST http://localhost:8080/doacoes/lista/inst -H "Content-Type: application/json" -d '{"cnpj": "12345678901"}'
```

* Endpoint /api/get/materialUser 

```
curl -X POST http://localhost:8080/api/get/materialUser -H "Content-Type: application/json" -d '{"cpf": "14649865689"}'
```

* Endpoint /inst/login

```
curl -X POST http://localhost:8080/inst/login -H 'Content-Type: application/json' -d '{"cnpj": "12345678956216", "senha": "123"}'
```

* Endpoint /api/get/cpf

```
curl -X POST  http://localhost:8080/api/get/cpf -H 'Content-Type: application/json' -d '{"email": "lucasalves2180@gmail.com"}'
```

* Endpoint /api/get/allmaterialuser

```
curl  http://localhost:8080/api/get/allmaterialuser
```

* Endpoint /api/update/materialuse

```
curl -X PUT http://localhost:8080/api/update/materialuser \
-H "Content-Type: application/json" \
-d '{
    "idMaterialUser": 1,  
    "aprovacao": true    
}'
```

* Endpoint /api/get/allmaterialinst

```
curl  http://localhost:8080/api/get/allmaterialinst
```

* Endpoint /itemdoado/item/doacao

```
curl -X POST  http://localhost:8080/itemdoado/item/doacao -H 'Content-Type: application/json' -d '[{"cadastrarmaterialuser": {"id_material_user": 1},"doacao": {"iddoacao": 1}}]'
```

* Endpoint /itemdoado/lista/doacao

```
curl -X POST  http://localhost:8080/itemdoado/item/doacao -H 'Content-Type: application/json' -d '{"id": 1}'
```