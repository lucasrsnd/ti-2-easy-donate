## 5. Indicadores de desempenho

_Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no modelo relacional. Defina no mínimo 3 indicadores._

_Usar o seguinte modelo:_

Processo 1:

| **Indicador**                            | **Objetivos**                                                                     | **Descrição**                                        | **Fonte de dados**              | **Fórmula de cálculo**                            |
| ---------------------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------- | ------------------------------------------------- |
| Média do tempo de aprovação do cadastro | Aprovar no menor tempo possível                                                   | Tempo de aprovação em relação ao término do cadastro | Tabela de cadastro dos doadores | Hora que foi aprovado - Hora de finalização do cadastro      |
| Idade média dos doadores                 | Verificar a idade média de todos os doadores cadastrados e revelar o público-alvo | Média da idade em relação aos doadores cadastrados   | Tabela de cadastro de doadores  | idade total dos doadores / quantidade de doadores |
| Taxa de criação por trimestre            | Medir a quantidade de doadores que se cadastraram em cada trimestre               | Avaliar qual trimestre teve mais cadastros           | Tabela de cadastro de doadores  | Número de novos doadores cadastrados no trimestre / Número total de doadores cadastrados        |

Processo 2:

| **Indicador**                                 | **Objetivos**                                      | **Descrição**                                                           | **Fonte de dados**                  | **Fórmula de cálculo**                                                 |
| --------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| Tempo de aprovação do cadastro de instituição | Aprovar no menor tempo possível                    | Tempo de aprovação em relação ao momento do envio dos dados             | Tabela de cadastro das instituições | Momento do envio da solicitação de cadastro - Hora da criação da conta |
| Taxa de erro de dados de cadastro             | Medir a taxa de erros de dados na hora do cadastro | Media das atividades de cadastro que os dados estão incorretos          | Tabela de cadastro de instituição   | Quantidade total de cadastro/ Quantidade de cadastro que são recusados |
| Material mais necessitado  | Avaliar qual é o material mais necessitado    | Medir qual é o material mais necessitado | Tabela de cadastro de instituições  | Mostrar material mais necessitado  |

Processo 3:

| **Indicador**                               | **Objetivos**                                                 | **Descrição**                                                                                                           | **Fonte de dados**               | **Fórmula de cálculo**                                                                                |
| ------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Tempo de aprovação do cadastro de material  | Aprovar no menor tempo possível                               | Tempo de aprovação em relação ao momento do envio dos dados do material até o momento de seu cadastro                   | Tabela de cadastro de materiais | Momento do envio das informações do material - Momento de adição desse material ao estoque do usuario |
| Média materiais cadastrados  | Informar a média de materiais cadastrados em relação a quantidade de doadores  | Média de materiais cadastrados em relação a quantidade de doadores | Tabela de cadastro de materiais + Tabela de doadores | Quantidade de materiais cadastrados / Quantidade de doadores cadastrados |
| Materias mais cadastrados                   | Avaliar quais são os materias mais cadastrados pelos usuarios | Medir quais são os materias mais cadastrados por nossos usuarios | Tabela de cadastro de materiais  |                                                                                                       |

Processo 4:

| **Indicador**                           | **Objetivos**                             | **Descrição**                                                                        | **Fonte de dados**            | **Fórmula de cálculo**                                            |
| --------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------- | ----------------------------------------------------------------- |
| Modo de doação mais utilizado           | Ver qual modo de doaçao e mais utilizado  | Analisar qual modo de doação e mais utilizado pelos nossos usuarios                  | Tabela de doação de materiais | Compra de material - Cadastro de material                         |
| Média de doação por mês                  | Verificar a média de doações por mes | Analisar a média de doações por mes | Tabela de doação de material  |      Total doações / Ultimos 30 dias    |
| Quantidade media de doadoes por usuario | Medir a media de doação por usuario       | Avaliar qual a media de doações dos usuarios                                         | Tabela de doação              | Doações totais / Quantidade de usuarios que realizaram uma doação |

_Obs.: todas as informações para gerar os indicadores devem estar no modelo relacional._
