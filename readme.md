# DrivenPass

<p align="center">
  <img height=300 src="https://cdn-icons-png.flaticon.com/512/421/421648.png">
</p>
<h1 align="center">
  DrivenPass
</h1>
<div align="center">

  <h3>Ferramentas</h3>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  
</div>

<br/>

# Descrição

DrivenPass é um sistema de gerenciamento de senhas de cartões pessoais, informações de login de sites ou serviços e anotações livres em formato de texto.

</br>

## Características

-   Cadastro e Login de usuários;
-   Criação, busca e deleção de dados de cartões de crédito e débito;
-   Criação, busca e deleção de dados de login em sites ou serviços;
-   Criação, busca e deleção de anotações livres.


</br>

## Referências da API

### AUTENTICAÇÃO

### Cadastro de usuário

```http
POST /signUp
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email` | `string`| **Required**. Email do usuário |
| `password`  | `string`| **Required**. Senha com no mínimo 10 caracteres |


####

#

</br>


### Login de usuário


```http
POST /signIn
```

#### Request:


| Body         | Type     | Description                              |
| :------------| :------- | :--------------------------------------- |
| `email` | `string`| **Required**. Email do usuário |
| `password`  | `string`| **Required**. Senha do usuário|

####

#### Response:

```json
{
	"token": "jasonwebtoken (JWT)",
}
```

#

### CARTÕES

### Adicionar cartão

```http
POST /card
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `userId`           | `number` | **Required**. Id do usuário |
| `cardName`         | `string` | **Required**. Nome do cartão |
| `number` | `string` | **Required**. Número do cartão (4 conjuntos, com espaço entre eles, de 4 números)|
| `printedName` | `string` | **Required**. Nome impresso no cartão |
|`securityCode` | `string` | **Required**. Código de seguran do cartão, 3 números |
|`expirationDate` | `date` | **Required**. Data de expiração do cartão, formato 'mm/aa' |
|`password` | `string` | **Required**. Senha do cartão |
|`isVirtual` | `boolean` | **Required**. Se o cartão é virtual ou não |
|`type` | `string` | **Required**. Tipo de cartão; válido 'credit', 'debit' ou 'both' |

#

### Buscar cartões

```http
GET /cards/:userId
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  [
  {
    "id": 1,
    "userId": 1,
    "cardName": "Nubank",
    "number": "1111 2222 3333 4444",
    "printedName": "Teste R Silva",
    "securityCode": "123",
    "expirationDate": "05/28",
    "password": "1236",
    "isVirtual": false,
    "type": "credit"
  },
  {
    "id": 2,
    "userId": 1,
    "cardName": "C6",
    "number": "1234 5647 1598 4563",
    "printedName": "Teste R Silva",
    "securityCode": "852",
    "expirationDate": "08/28",
    "password": "1236",
    "isVirtual": true,
    "type": "both"
  }
]
```

#

### Buscar cartão pelo id

```http
GET /card/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  {
  "id": 1,
  "userId": 1,
  "cardName": "Nubank",
  "number": "1111 2222 3333 4444",
  "printedName": "Teste R Silva",
  "securityCode": "123",
  "expirationDate": "05/28",
  "password": "1236",
  "isVirtual": false,
  "type": "credit"
}
```

#

### Deletar cartão pelo id

```http
DELETE /card/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  Card successfully deleted
```
#

### CREDENCIAIS

### Adicionar credencial

```http
POST /credential
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `userId`           | `number` | **Required**. Id do usuário |
| `credentialName`         | `string` | **Required**. Nome da credencial |
| `url` | `string` | **Required**. Url do site |
| `userName` | `string` | **Required**. Nome de usuário da credencial |
| `password` | `string` | **Required**. Senha do credencial |

#

### Buscar crendenciais

```http
GET /credentials/:userId
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
 [
  {
    "id": 1,
    "userId": 1,
    "credentialName": "Facebook",
    "url": "http://facebook.com",
    "userName": "Letícia Gomez",
    "decryptPassword": "senha123456"
  },
  {
    "id": 2,
    "userId": 1,
    "credentialName": "Netflix",
    "url": "http://netflix.com",
    "userName": "Letícia Gomez",
    "decryptPassword": "senha123456"
  }
]
```

#

### Buscar credencial pelo Id

```http
GET /credential/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  {
    "id": 1,
    "userId": 1,
    "credentialName": "Facebook",
    "url": "http://facebook.com",
    "userName": "Letícia Gomez",
    "decryptPassword": "senha123456"
  }
```

#

### Deletar credencial pelo Id

```http
DELETE /credential/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  Credential successfully deleted
```
#





### NOTAS

### Adicionar nota

```http
POST /note
```

#### Request:

####

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

| Body   | Type       | Description             |
| :----- | :--------- | :---------------------- |
| `userId`           | `number` | **Required**. Id do usuário |
| `title`         | `string` | **Required**. Título da nota |
| `note` | `string` | **Required**. Nota |


#

### Buscar notas

```http
GET /notes/:userId
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
 [
  {
    "id": 1,
    "userId": 1,
    "title": "Título da anotação",
    "note": "Anotações parte 1"
  },
  {
    "id": 2,
    "userId": 1,
    "title": "Título da anotação 2",
    "note": "Anotações parte 2"
  }
]
```

#

### Buscar nota pelo id

```http
GET /note/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  {
    "id": 1,
    "userId": 1,
    "title": "Título da anotação",
    "note": "Anotações parte 1"
  }
```

#

### Deletar credencial pelo id

```http
DELETE /note/:userId/:id
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `Authentication` | `string` | **Required**. Token |

`Authorization format: Bearer jsonwebtoken`

#

#### Response:

```json
  Note deleted successfully
```
#


## Variáveis de Ambiente

Para executar este projeto, você precisará adicionar as seguintes variáveis ​​de ambiente ao seu arquivo .env

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`TOKEN_SECRET_KEY = any string`

`TOKEN_EXPIRES_IN=1d`

</br>

## Execute Localmente

Clone o projecto

```bash
  git clone https://github.com/Leticia-Pinheiro/DrivenPass_BackEnd
```

Vá para o diretório do projeto

```bash
  cd DrivenPass_BackEnd/
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

</br>

## Autora

Letícia Gomez Pinheiro 
<p>Linkedin: https://www.linkedin.com/in/leticia-pinheiro-33354a1b6/</p>
<p>GitHub: https://github.com/Leticia-Pinheiro</p>
<br/>

#
