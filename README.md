# MotorsShop

Projeto de um site para venda de veiculos automotivos, com suporte a usuários compradores e anunciantes. 

## Features

- Suporte a diferentes usuários os quais tem uma experiencia personalizada.
- Anúncios com informacões claras e essenciais.
- Filtros que garantem uma busca mais assertiva e ágil.
- Back-End robusto que garante uma confiabilidade e rapidez nas operacões.

## Variáveis de ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo .env

`DATABASE_URL: // URL TO DATABASE`
<br/>
Exemplo:
```json
  "postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```
<br/>

`PORT // PORT TO BACKEND`
<br/>
Exemplo:
```json
  4002
```
<br/>

`SECRET_KEY // SECRET KEY TO PROJECT JWT`
<br/>
Exemplo:
```json
  "S3CR3T__K3y"
```
<br/>

`HOST // EMAIL HOST SMTP ` 
<br/>
Exemplo:
```json
  "smtp.mail.com"
```
<br/>

`USER // EMAIL USER`
<br/>
Exemplo:
```json
  "user@mail.com"
```
<br/>

`PASS // EMAIL PASSWORD FOR APP`
<br/>
Exemplo:
```json
  "pass@pass123"
```
<br/>

`BASE_URL // URL TO FRONT-END`
<br/>
Exemplo:
```json
  "http://localhost:3000"
```
<br/>


## Rode Localmente

Realize o clone do projeto:

```bash
  git clone https://github.com/ProjetoFullStackT30-Paulo/FrontEnd-FullStackM6.git
```

Vá para o diretório do projeto:

```bash
  cd my-project
```

Instale as dependencias do projeto:

```bash
  yarn
```

Rode as migrações:

```bash
  yarn prisma migrate dev
```

Inicie o servidor:

```bash
  yarn dev
```

## Tech Stack

<div style="display: inline_block"><br>
  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg" height="72px" width="72px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="72px" width="72px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="72px" width="72px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"  height="72px" width="72px"/>
  
</div><br>


**Server:** Express, TypeScript, PostgreSQL, Bcrypt, JWT

## Autores

<div style="display: flex">
  
  <div style="display: inline_block">
    <img src="https://github.com/mariolucass.png" height="104px" width="104px"/>
  </div>
  <div style="display: inline_block" >
    <a href = "https://github.com/mariolucass" > @mariolucass </a>
  </div>

  <div style="display: inline_block">
    <img src="https://github.com/nicole-cris-russo.png" height="104px" width="104px"/>
  </div>
  <div style="display: inline_block" >
    <a href = "https://github.com/nicole-cris-russo"> @nicole-cris-russo </a>
  </div>

  <div style="display: inline_block">
    <img src="https://github.com/lucassoaresol.png" height="104px" width="104px"/>
  </div>
  <div style="display: inline_block" >
    <a href = "https://github.com/lucassoaresol"> @lucassoaresol </a>
  </div>

  <div style="display: inline_block">
    <img src="https://github.com/FILIPECosta77.png" height="104px" width="104px"/>
  </div>
  <div style="display: inline_block" >
    <a href = "https://github.com/FILIPECosta77"> @FILIPECosta77 </a>
  </div>
  
</div>

## Relacionados

Aqui estão os projetos relacionados:

- [Front-End MotorsShop](https://github.com/ProjetoFullStackT30-Paulo/FrontEnd-FullStackM6)
- [Documentação do Back-End](https://github.com/ProjetoFullStackT30-Paulo/Doc-BackEnd-FullStackM6)


## Feedback

Se você tiver algum feedback, entre em contato conosco em motorsshop5@gmail.com
