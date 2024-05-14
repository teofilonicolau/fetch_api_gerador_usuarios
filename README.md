# Gerador de Usuários com Fetch API

Este é um simples aplicativo da web que utiliza a Fetch API para recuperar informações de usuários aleatórios de uma API pública e exibi-los na página. O aplicativo também inclui estilos CSS para estilização.

## Funcionalidades

- **Gerador de Usuários:**
  - Ao clicar no botão "Novo usuário", o aplicativo faz uma solicitação para uma API pública que retorna dados de usuário aleatórios.
  - ![image](https://github.com/teofilonicolau/fetch_api_gerador_usuarios/assets/97030160/eb4310e7-aab0-4877-8f5d-730b1ddb2f01)

  - Os dados do usuário são exibidos na seção "Gerador de usuários", incluindo uma imagem de avatar e o nome de usuário.
  - ![image](https://github.com/teofilonicolau/fetch_api_gerador_usuarios/assets/97030160/1bd0e8a3-ad5e-4dc4-89a8-484f02b93d38)

  - Durante o carregamento dos dados, é exibido um texto de "Carregando..." para fornecer feedback ao usuário.
  - Se ocorrer um erro durante a solicitação à API, é exibido um alerta indicando que não foi possível gerar um usuário.

## Estrutura de Arquivos

O projeto é composto pelos seguintes arquivos:

- **index.html:** Este é o arquivo HTML principal que contém a estrutura da página, incluindo os elementos HTML para os botões e contêineres de usuário.
- **script.js:** Este arquivo JavaScript contém o código para manipulação do DOM e interações com a Fetch API. Ele também lida com a exibição dos dados do usuário na página.
- **style.css:** Este arquivo CSS fornece estilos de formatação para os elementos HTML na página, como cores de fundo, estilos de botão e layout.

## Como Executar o Projeto

Para executar o projeto localmente, siga estas etapas:

1. Clone este repositório em sua máquina local usando o seguinte comando:
git clone https://github.com/teofilonicolau/fetch_api_gerador_usuarios.git


2. Abra o arquivo `index.html` em seu navegador da web.

## Tecnologias Utilizadas

- **HTML:** Para estruturação da página.
- **CSS:** Para estilização dos elementos HTML.
- **JavaScript:** Para manipulação do DOM e interações com a Fetch API.

## Contribuindo

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma "issue" neste repositório ou enviar um "pull request".
