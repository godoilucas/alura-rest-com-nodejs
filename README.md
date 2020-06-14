# **Rest com NodeJS: API com Express e MySQL**

## **Inicialização do arquivo**

Após o download do projeto, será necessário ter criado um database utilizando MySQL server e criar um arquivo no diretório `./infraestrutura` com o nome *conexao.js*

```
//conexao.js

const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SUA SENHA",
    database: "DATABASE CRIADO"
});

module.exports = conexao;
```

Após banco e suas respectivas configurações criadas, executar os seguintes comandos:

```
npm install
npm start
```