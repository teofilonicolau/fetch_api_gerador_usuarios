# Gerador de Usuários com Fetch API

Este é um simples aplicativo da web que utiliza a Fetch API para recuperar informações de usuários aleatórios de uma API pública e exibi-los na página. O aplicativo também inclui estilos CSS para estilização.

## Funcionalidades

### Gerador de Usuários:
- Ao clicar no botão "Novo usuário", o aplicativo faz uma solicitação para uma API pública que retorna dados de usuário aleatórios.
- Os dados do usuário são exibidos na seção "Gerador de usuários", incluindo uma imagem de avatar e o nome de usuário.
- Durante o carregamento dos dados, é exibido um texto de "Carregando..." para fornecer feedback ao usuário.
- Se ocorrer um erro durante a solicitação à API, é exibido um alerta indicando que não foi possível gerar um usuário.
- ![image](https://github.com/teofilonicolau/fetch_api_gerador_usuarios/assets/97030160/8da1a94b-a8b2-49d3-8c6b-75fe5d929b7f)


### Gerador de Postagens:
- Os usuários podem criar postagens inserindo um título e uma mensagem no formulário.
- Após preencher o formulário e clicar no botão "Enviar", a postagem é enviada para uma API de teste.
- As postagens criadas com sucesso são exibidas na seção "Gerador de postagens" abaixo do formulário.
- Se ocorrer um erro durante o envio da postagem, é exibida uma mensagem indicando que não foi possível gerar a postagem.
- 
- ![image](https://github.com/teofilonicolau/fetch_api_gerador_usuarios/assets/97030160/0bdb9126-e7a2-4378-9279-09c4146aa36f)

- ![image](https://github.com/teofilonicolau/fetch_api_gerador_usuarios/assets/97030160/220d2d9a-680f-4b91-a4ff-1de12e16c4a5)



## Estrutura de Arquivos

O projeto é composto pelos seguintes arquivos:
- `index.html`: Este é o arquivo HTML principal que contém a estrutura da página, incluindo os elementos HTML para os botões e contêineres de usuário.
- `script.js`: Este arquivo JavaScript contém o código para manipulação do DOM e interações com a Fetch API. Ele também lida com a exibição dos dados do usuário na página e o envio de postagens.
- `style.css`: Este arquivo CSS fornece estilos de formatação para os elementos HTML na página, como cores de fundo, estilos de botão e layout.

## Tecnologias Utilizadas

- **HTML**: Para estruturação da página.
- **CSS**: Para estilização dos elementos HTML.
- **JavaScript**: Para manipulação do DOM e interações com a Fetch API.

## Contribuindo

Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma "issue" neste repositório ou enviar um "pull request".
