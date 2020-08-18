![alt text](https://www.senairs.org.br/sites/default/files/styles/scale_sm/public/logos/senai_pb2.png?itok=KYIhBtq6 "Logo Title Text 1")

## 1. INTRODUÇÃO
---

Esta prova visa testar seus conhecimentos em desenvolvimento front-end. O conteúdo desenvolvido e entregue deverá rodar no navegador Google Chrome, sem a necessidade de qualquer instalação, incluindo plug-ins como Flash ou Java.

Não é necessário o uso de compiladores e as bibliotecas necessárias para o desenvolvimento do projeto estão disponíveis nos arquivos correspondentes, conforme descrito no item 2 deste documento.

A Gerência de Desenvolvimento Educacional (GDE) é responsável pelo desenvolvimento e manutenção do Ambiente Virtual de Aprendizagem (AVA) SAPIEN utilizando nos cursos presenciais, semipresenciais e à distância em todo o SENAI no Rio Grande do Sul.

O SAPIEN possui uma grande diversidade de funções, como listagem de alunos, banco de recursos, avaliações, biblioteca virtual, dentre outras. 

## 2. DESCRIÇÃO DA TAREFA
---

A sua tarefa consiste na replicação do front-end de uma das telas do SAPIEN, à tela de listagem de participantes de uma turma (alunos), que, contém informações sobre a turma, o nome de cada participante e seu respectivo avatar.
Você deverá clonar este repositório e realizar as modificações descritas nas regras de negócio abaixo: ***ATENÇÃO: Você não deve submeter PRs ou commits neste repositório. Lembre-se de excluir a pasta .git/ para incluir o seu repo.*** Neste repositório você encontrará:

* Uma pasta chamada layouts contendo layout final esperado em duas capturas de tela, uma referente à listagem dos participantes (ver arquivo <code>layout.png</code>) e outra que contém uma customização exibindo um card de usuário selecionado (ver arquivo layout_selecionado.png);
* O arquivo <code>style.css</code>, que ao final deve conter todos estilos utilizados na criação da tela, você encontrará já presente neste arquivo as configurações de root da página;

* Um arquivo <code> script.js </code>, que ao final deve conter todos os scripts utilizados na manipulação da tela, este script já possui uma requisição em AJAX para uma API externa que recuperará randomicamente as informações referente aos participantes da turma;

* Um arquivo chamado <code>exemplo-retorno-api.json</code> que contém um exemplo de resposta da requisição AJAX;

* Um arquivo <code>index.html</code>, que deverá ser utilizado para exibir as informações, este arquivo já contém os CDNs (Bootstrap e jQuery) que podem ser utilizados a seu critério para o desenvolvimento desta tarefa junto ao esqueleto da página já incluídos;

* Uma pasta chamada imgs que contém a logo do SENAI-RS/FIERGS (<code>logo_topo.png</code>) que deverá ser inserida no topo do documento, conforme as imagens de layout disponíveis;


***Regras de negócio a serem consideradas:***

* O layout final deve ser semelhante ao layout disponibilizado nas capturas de tela presentes na pasta layouts;

* A cada vez que a página for carregada ela deverá apresentar uma lista aleatória de 5 a 15 participantes, que devem ser obtidos através de uma requisição à API;

* Cada card de participante deverá exibir o nome e o avatar que estará presente na resposta da requisição a API;

* Ao clicar sobre um card de usuário, este deve ter a cor do seu card modificada conforme a imagem <code>layout_selecionado.png</code> (ver a pasta layouts);

***Desafio extra***

* Você deve aplicar as classes correspondentes aos critérios de responsividade para desktops, tablets e smartphones utilizando como modelo de referência o framework CSS Bootstrap;

## 3. OBSERVAÇÕES GERAIS
---

Como você irá entregar?

Você irá nos enviar via email um link para um repositório Git (GitHub, GitLab, BitBucket, etc) criado por você com o resultado final de sua implementação, conforme o item 2. 

Caso você não consiga criar um repositório Git, você deverá encaminhar sua resposta via email.

:coffee: Happy Coding!! :coffee: 
