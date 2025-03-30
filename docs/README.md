# Easy Donate

**Carlos Magno Ferreira Silva, cmagno0861@gmail.com**

**Davi Érico dos Santos, davi.erico@sga.pucminas.br**

**Lucas Alves Resende, lucasalves2180@gmail.com**

**Lucas Porto de Andrade, lucas.andrade.1466245@sga.pucminas.br**

**Nathan Flores Brescia, fb.nathan15@gmail.com**

---

Professores:

**Aline Norberta de Brito**

**Eveline Alonso Veloso**

---

_Curso de Engenharia de Software_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final,
mostrar algum resultado relevante do trabalho (até 10 linhas)._

---

## 1. Introdução

Será apresentada uma plataforma onde os usuários poderão se unir para fazer
doações e ajudar quem tem necessidade, e também instituições.

### 1.1 Contextualização

_A contextualização do trabalho em questão, envolve a criação de um site que visa
facilitar doações e compras de itens essenciais para instituições carentes. A
proposta do site é oferecer uma plataforma centralizada onde pessoas possam
encontrar instituições carentes que necessitam de doações, bem como listar os
itens específicos que essas instituições precisam. Isso tornaria o processo de
doação mais transparente e eficiente, ao mesmo tempo em que permite que as
instituições carentes recebam exatamente o que necessitam. O desenvolvimento
deste site se insere em um contexto mais amplo de solidariedade e
responsabilidade social, e busca oferecer uma solução prática e eficiente para
apoiar instituições carentes em suas necessidades básicas [[1]](https://www1.folha.uol.com.br/folha-social-mais/2024/02/doacoes-para-organizacoes-sociais-sofrem-queda-de-quase-70-em-2023.shtml) [[2]](https://www.redebrasilatual.com.br/cidadania/fome-pandemia-como-ajudar-doacoes/)._

### 1.2 Problema

_Existem várias pessoas passando necessidades de alimentação e itens básicos de
higiene e saúde, mas também existem pessoas que desejam ajudar e não acham
meios de doações suficientes e confiáveis online [[3]](https://g1.globo.com/jornal-nacional/noticia/2022/06/08/mais-de-33-milhoes-de-brasileiros-passam-fome-todo-dia-revela-pesquisa.ghtml). A pandemia de COVID-19, por
exemplo, evidenciou a importância de apoiar essas organizações, que muitas vezes
enfrentam dificuldades para obter recursos financeiros e materiais. Não é
reconhecido por nenhum dos integrantes do grupo um sistema de doação no estilo
proposto ou semelhante que possa ajudar os doadores e instituições desta maneira [[4]](https://oglobo.globo.com/saude/coronavirus/doacoes-de-comida-despencam-na-pandemia-saiba-como-contribuir-24958801)._

### 1.3 Objetivo geral

_Diante desse cenário, nosso propósito é facilitar a comunicação entre pessoas e
instituições necessitadas, facilitando a doação de materiais necessários pelas
instituições._

#### 1.3.1 Objetivos específicos

_Nossos objetivos específicos buscam encontrar os doadores e os mesmos
realizarem as doações da forma mais simples e eficaz possível, minimizando
qualquer trabalho de encontrar uma instituição, comprar certos materiais que a
instituição deseja já no próprio site ou realizando apenas uma contribuição
monetária para a instituição.
Além disso, vamos desenvolver uma interface totalmente voltada para o cliente,
com cores agradáveis para melhor usabilidade, uma plataforma de fácil
entendimento e simples de localizar o que deseja.
Em resumo, nosso objetivo é simplificar o processo de doação para os doadores,
conectando-os facilmente às instituições que precisam de apoio e permitindo que
façam suas doações de forma rápida e conveniente, tudo isso sem sair de casa._

### 1.4 Justificativas

_A crescente diminuição dos índices de doação , e a grande necessidade de cada
vez mais apoio a essa causa, impacta diretamente na nossa sociedade, visando
esse cenário, a necessidade de agilizar e facilitar as doações é crucial. Nosso
projeto busca preencher essa necessidade, ligando diretamente doadores a
instituições carentes, com agilidade e facilidade na hora da doação, levando assim a
um crescente aumento de doadores e doações, para ajudar assim a melhorar o atual
cenário desse problema._

## 2. Participantes do processo

_Os participantes ativos do processo são: os doadores, que precisam ter no mínimo 18 anos; as instituições carentes que necessitam de algum auxílio monetário, ou de doações especificando exatamente o item que desejam; e as lojas que tenham os itens comuns que serão doados para as instituições._

## 3. Modelagem do processo de negócio

### 3.1. Análise da situação atual

_Muitos sistemas atuais (ifood, uber, zé delivery), propõem de forma simples e prática, a compra de comidas, aparelhos eletrônicos, bebidas, remédios e até mesmo a localização de um motorista para transportá-lo ao local desejado, sem sequer precisar sair de casa ou realizar qualquer esforço, utilizando apenas seus telefones ou computadores. Com uma interface simples e sugestiva, até mesmo os clientes pouco familiarizados com a tecnologia conseguem utilizar esses aplicativos tranquilamente._

_Antes da existência desses aplicativos, todos esses processos eram realizados manualmente, do início ao fim. Utilizando o iFood como exemplo, era necessário ligar para o estabelecimento para fazer o pedido e, caso não houvesse um serviço de entrega, era necessário ir até o estabelecimento buscar o pedido. Já com o aplicativo, não é necessário entrar em contato com ninguém para fazer o pedido, pois o cardápio já está disponível, juntamente com o sistema de pagamento. Após o pedido ser preparado, o próprio sistema localiza um motorista para transportar o pedido até sua residência._

_O próprio Ifood como exemplo, eles não fornecem qualquer tipo de opção para doação em seu sistema, porém explicam para os restaurantes, em seu site, que é permitido sim a doação de alimentos que sobraram [[5]](https://institucional.ifood.com.br/restaurantes/como-os-restaurantes-podem-doar-comida-de-forma-segura/)._

_Atualmente, no cenário das doações, temos alguns sistemas que propõem a doação por meio dos próprios sites [[6]](https://osceia.org.br/canais-de-doacao-da-osceia/?gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW_bTqR37-8ZyiHr0qXfD5Y6fSbXcbU7lR7wyDYH1Tc66h5fADmvF48aAoWqEALw_wcB), [[7]](https://doar.doutoresdaalegria.org.br/ajude), [[8]](https://doare.org/plataforma-de-doacoes), porém nestes sistemas a doação é feita diretamente para o site, e possuem apenas a opção de doação monetária. Sabendo disso, decidimos aplicar nossos conhecimentos em tecnologia nessa área para desenvolver um sistema que automatize o processo das doações, possibilitando contribuições de forma flexível e fácil, para que os usuários possam fazer as doações diretamente para as instituições quando desejarem e sem precisarem sair do conforto de suas casas._

### 3.2. Descrição geral da proposta

_Nossa proposta é criar um sistema que facilite e promova o processo de doação, conectando doadores e organizações necessitadas de forma transparente e eficaz. Em comparação com outras aplicações disponíveis no mercado. Nosso sistema é projetado para ser acessível e conveniente, permitindo que os usuários façam doações de qualquer lugar e a qualquer momento, adaptando-se às suas agendas e estilos de vida. Além disso, nos diferenciamos ao proporcionar uma variedade de opções de doação, permitindo que os usuários escolham entre vários tipos de doações, como por exemplo dinheiro, objetos, alimentos. Outro aspecto inovador é nossa abordagem centrada na transparência, fornecendo aos doadores informações detalhadas sobre como suas contribuições são utilizadas pelas organizações beneficiadas._

### 3.3. Modelagem dos processos

[PROCESSO 1 - Cadastrar Doadores](processo-1-nome-do-processo.md "Detalhamento do Processo 1.")

[PROCESSO 2 - Cadastrar Instituições](processo-2-nome-do-processo.md "Detalhamento do Processo 2.")

[PROCESSO 3 - Cadastrar Material](processo-3-nome-do-processo.md "Detalhamento do Processo 3.")

[PROCESSO 4 - Realizar Doações](processo-4-nome-do-processo.md "Detalhamento do Processo 4.")

## 4. Projeto da solução

O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas duas seções que descrevem, respectivamente: modelo relacional e tecnologias.

[Projeto da solução](solution-design.md "Detalhamento do projeto da solução: modelo relacional e tecnologias.")

## 5. Indicadores de desempenho

O documento a seguir apresenta os indicadores de desempenho dos processos.

[Indicadores de desempenho dos processos](performance-indicators.md)

## 6. Interface do sistema

A sessão a seguir apresenta a descrição do produto de software desenvolvido.

[Documentação da interface do sistema](interface.md)

## 7. Conclusão

Neste trabalho, desenvolvemos uma plataforma inovadora para facilitar doações para instituições carentes. Ao longo do processo, enfrentamos diversos desafios.Mas mesmo assim, conseguimos criar uma ferramenta eficaz para promover impacto social positivo.

_No entanto, embora nossa plataforma seja uma ferramenta eficaz para promover o impacto social positivo, ela também tem seus limites. Por exemplo, a dificuldade do acesso à internet, a garantia de que todas as organizações cadastradas sejam legítimas e utilizem os fundos de forma ética e eficiente._

_Então, existem diversas oportunidades de melhoria em nossa proposta, como por exemplo, implementar medidas adicionais de verificação de organizações cadastradas para garantir sua legitimidade e transparência. Além disso, investir em estratégias de marketing e divulgação, parcerias com empresas e instituições, para atrair ainda mais os doadores, seria uma boa estratégia para o sistema. E por fim, poderíamos realizar pesquisas de satisfação dos usuários para identificar áreas de melhoria contínua e garantir que atendemos às necessidades dos doadores._

Além disso um aspecto crucial identificado durante o trabalho foi a importância da a implementação dos indicadores. Através deles pudemos identificar tendências e preferências, ajustando a plataforma para melhor atender à demanda e otimizar os recursos. Esses insights também abriram oportunidades para o desenvolvimento de novas funcionalidades e inovações, aprimorando continuamente nosso sistema.

# REFERÊNCIAS

http://portal.pucminas.br/imagedb/documento/DOC_DSC_NOME_ARQUI20160217102425.pdf

**[1.1]** - https://www1.folha.uol.com.br/folha-social-mais/2024/02/doacoes-para-organizacoes-sociais-sofrem-queda-de-quase-70-em-2023.shtml

https://www.redebrasilatual.com.br/cidadania/fome-pandemia-como-ajudar-doacoes/

**[1.2]** - https://g1.globo.com/jornal-nacional/noticia/2022/06/08/mais-de-33-milhoes-de-brasileiros-passam-fome-todo-dia-revela-pesquisa.ghtml

https://oglobo.globo.com/saude/coronavirus/doacoes-de-comida-despencam-na-pandemia-saiba-como-contribuir-24958801

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._

**[3.1]** - https://institucional.ifood.com.br/restaurantes/como-os-restaurantes-podem-doar-comida-de-forma-segura/

https://osceia.org.br/canais-de-doacao-da-osceia/?gad_source=1&gclid=Cj0KCQjwncWvBhD_ARIsAEb2HW_bTqR37-8ZyiHr0qXfD5Y6fSbXcbU7lR7wyDYH1Tc66h5fADmvF48aAoWqEALw_wcB

https://doar.doutoresdaalegria.org.br/ajude

https://doare.org/plataforma-de-doacoes

# APÊNDICES

_Atualizar os links e adicionar novos links para que a estrutura do código esteja corretamente documentada._

## Apêndice A - Código fonte

[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back) -- repositório do código do back-end

## Apêndice B - Apresentação final

[Slides da apresentação final](presentations/)

[Vídeo da apresentação final](video/)
