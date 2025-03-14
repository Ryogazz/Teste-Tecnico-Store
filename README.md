# Avaliação Técnica Store

Este projeto é uma aplicação Angular desenvolvida como parte de uma avaliação técnica. Ele simula uma loja virtual onde é possível gerenciar produtos, incluindo operações de criação, edição, exclusão e busca de produtos.

## Tecnologias Utilizadas

- **Angular**: Framework front-end para construção da interface do usuário.
- **Angular Material**: Biblioteca de componentes UI para Angular.
- **JSON Server**: Simula uma API RESTful para persistência de dados.
- **RxJS**: Biblioteca para programação reativa.
- **TypeScript**: Linguagem principal para desenvolvimento.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **Angular CLI** (instalado globalmente via `npm install -g @angular/cli`)
- **JSON Server** (instalado globalmente via `npm install -g json-server`)

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. Clone o repositório:
   git clone https://github.com/seu-usuario/avaliacao-tecnica-store.git

2. Navegue até o diretório do projeto:
  cd avaliacao-tecnica-store

3. Instale as dependências do projeto:
    Instale as dependências do projeto:


## Executando o Projeto
1. Iniciar o JSON Server
O JSON Server simula uma API RESTful. Para iniciá-lo, execute o seguinte comando na raiz do projeto:

json-server --watch db.json

Isso iniciará o servidor na porta 3000 e usará o arquivo db.json como banco de dados.

2. Iniciar o Servidor de Desenvolvimento Angular
Em outro terminal, execute o seguinte comando para iniciar o servidor de desenvolvimento Angular:

npm start
Isso iniciará o servidor na porta 4200. Abra o navegador e acesse:

http://localhost:4200



## Avaliação Comportamental

>  **Pergunta:**  Você é responsável por entregar uma nova funcionalidade em uma aplicação Angular. A data de entrega está próxima, mas você percebe que ainda existem bugs críticos que precisam ser resolvidos antes da entrega. Seu líder pede uma atualização na daily. O que você faria e qual seria sua resposta?

> **Resposta:**   Eu seria transparente com a situação na daily, explicando de forma clara o problema e já apresentaria as soluções que encontrei para os bugs. Caso eu não soubesse como resolver, buscaria orientação com meus pares no time.

---

>  **Pergunta:** Você está trabalhando em uma implementação importante e complexa em Angular e seu líder solicita que você assuma uma tarefa emergencial que precisa ser finalizada em um curto prazo. Como você priorizaria suas atividades e que abordagem seguiria?

> **Resposta:** Eu perguntaria ao líder qual o prazo exato da tarefa e verificaria o status da tarefa que estou fazendo. Caso estivesse perto de finalizá-la e tivesse um bom prazo para a urgente, eu finalizaria primeiro a que estou fazendo e depois me dedicaria à tarefa urgente. Se o prazo fosse apertado, eu colocaria em pausa a que estou fazendo e me dedicaria a resolver a urgente. Porém, se o prazo para ambas fosse apertado, eu solicitaria ao líder permissão para pedir ajuda a alguém do time para finalizar as duas dentro do prazo. 

---

>  **Pergunta:** Após a liberação de uma nova funcionalidade para produção, os usuários começam a relatar problemas. Você é acionado para resolver a situação. Quais ações tomaria do momento em que os problemas foram reportados até a solução final?

> **Resposta:**  minha primeira ação seria buscar entender o problema em detalhes. Para isso, conversaria com o time de suporte para coletar informações precisas sobre o que está acontecendo e como os usuários estão sendo afetados. Com esses dados em mãos, tentaria reproduzir o problema na minha máquina ou em um ambiente de teste, a fim de compreender melhor o comportamento e identificar a causa raiz. Em seguida, classificaria os problemas por gravidade, priorizando aqueles que têm maior impacto nos usuários ou nas funcionalidades críticas do sistema. Com essa análise, informaria à liderança sobre os problemas encontrados, o grau de gravidade de cada um e qual seria a minha linha de ação para resolvê-los. Com o plano definido, começaria a desenvolver as correções necessárias. Antes de implementá-las em produção, realizaria testes rigorosos para garantir que as soluções funcionam corretamente e não introduzem novos problemas. Após a validação, implantaria as correções em produção, seguindo os processos estabelecidos pela equipe. Assim que as correções estivessem em vigor, comunicaria aos usuários e ao time que os problemas foram resolvidos, agradecendo pelo feedback e pela paciência durante o processo. Por fim, documentaria tanto o problema quanto a solução adotada, criando um registro que possa servir de referência para evitar que situações semelhantes ocorram no futuro.

---
>  **Pergunta:** Durante a implementação de uma funcionalidade crítica, surgem atrasos devido a especificações não claras. Você estima um atraso de um dia na entrega planejada. Como você informaria essa situação à equipe e qual seria seu plano de ação? 

> **Resposta:** Primeiramente, informaria ao líder sobre o atraso que vai acontecer, explicando de forma clara a causa (quais funcionalidades estão bloqueadas ou atrasadas) e o impacto que isso terá na data de entrega. Solicitaria a ele a liberação de horas extras ou ajuda da equipe, caso não seja possível entregar com apenas um dia de atraso. A partir daí, conversaria com a equipe, explicando o problema e reajustando nosso cronograma para acomodar as mudanças necessárias. Focaria na entrega da funcionalidade, garantindo que tudo seja feito com qualidade e dentro do novo prazo estabelecido. Após a entrega, realizaria uma reunião com o time para analisar os problemas enfrentados, discutir as soluções adotadas e documentar tudo de forma detalhada. Esse registro serviria para evitar que situações semelhantes ocorram no futuro, além de ajudar a melhorar nossos processos de desenvolvimento.