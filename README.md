# JSExpertMax Gesture Controller - Semana JS Expert 7.0

Seja bem vindo(a) à sétima Semana Javascript Expert. Este é o código inicial para iniciar nossa jornada.

Marque esse projeto com uma estrela 🌟

## Preview

<img width=100% src="./src/assets/demo-template-lg.gif">

## Pre-reqs

- Este projeto foi criado usando Node.js v19.6
- O ideal é que você use o projeto em ambiente Unix (Linux). Se você estiver no Windows, é recomendado que use o [Windows Subsystem Linux](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) pois nas aulas são mostrados comandos Linux que possam não existir no Windows.

## Running

- Execute `npm ci` na pasta que contém o arquivo `package.json` para restaurar os pacotes
- Execute `npm start` e em seguida vá para o seu navegador em [http://localhost:3000](http://localhost:3000) para visualizar a página acima

## Checklist Features

- Titles List

  - [x] - Campo para pesquisa não deve travar ao digitar termo de pesquisa
  - [x] - Deve desenhar mãos na tela e fazer com que elementos em segundo plano continuem sendo clicáveis 🙌
  - [x] - Deve disparar scroll up quando usar a palma das mãos abertas 🖐
  - [x] - Deve disparar scroll down quando usar a palma das mãos fechadas ✊
  - [x] - Deve disparar click no elemento mais próximo quando usar gesto de pinça 🤏🏻
  - [x] - Ao mover elementos na tela, deve disparar evento **:hover** em elementos em contexto

- Video Player
  - [x] - Deve ser possivel de reproduzir ou pausar videos com o piscar de olhos 😁
  - [x] - Todo processamento de Machine Learning deve ser feito via Web worker

### Desafios

- [x] - Aula 01 - Diferenciar piscada de olhos entre olho direito e esquerdo e atualizar log para mostrar qual olho que piscou.
- [x] - Aula 02 - Reconhecer gestos de mãos individuais e printar no log
- [x] - Aula 03 - Corrigir Banner de titulo de video, para ficar atrás do desenho das mãos e se tornar clicável
- [ ] - Aula 04 - Usar as mãos virtuais também no Video Player

Desafio plus: implementar testes unitários e alcançar 100% de coverage (avançado)

### Links mostrados nos aulas

- Reuni todos os links em [referências](./referencias.md)

### Créditos ao Layout

- Interface baseada no projeto [Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)
