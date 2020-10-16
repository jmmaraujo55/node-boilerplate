# NODE-BOILERPLATE

Aplicação base para novas API's.

# Requisitos
Para executar esta aplicação é necessário ter as seguintes tecnologias instaladas:

    docker

# Instalando
Esta aplicação contém um arquivo chamado shell.sh que executa ações dentro de um container docker.

Para instalar a aplicação, usa-se este arquivo com o seguinte comando:

    bash shell.sh local deploy

# Configurando

Este projeto contém um arquivo com as variaveis de ambientes necessárias para a configuração do mesmo (`.env.sample`). Crie um outro arquivo com o nome `.env` e preencha com a configuração que você tem em seu ambiente seguindo e exemplo abaixo.

    PORT=6377
    TIMEZONE=America/Sao_Paulo
    MYSQL_HOST=localhost
    MYSQL_USER=user
    MYSQL_PASSWORD=pass
    MYSQL_NAME=db

# Rotas ou Endpoints

`GET /v1/ping`

Esta rota é usada para identificar se a aplicação está no ar.

### Retorno

Em caso de sucesso:

    "pong"

Em caso de erro:

    "Mensagem de erro da exceção"

`GET /v1/example`

Esta rota faz a consulta dos exemplos no mongo.

### Parametros

```
    {
        "find"?: { ... }[];
    }
```

### Retorno

Em caso de sucesso:

    [{
        "_id": "ASD24DS154201EDAE",
        .
        .
        .
    }]

Em caso de erro:

    "Mensagem de erro da exceção"

`POST /v1/example`

Esta rota faz a inserção de exemplos no mongo.

### Parametros

```
    {
        "insert": { ... }[]
    }
```

### Retorno

Em caso de sucesso:

    "ok"

Em caso de erro:

    "Mensagem de erro da exceção"

`PUT /v1/example`

Esta rota faz a atualização de um exemplo no mongo.

### Parametros

```
    {
        "find": { ... }[];
        "update": { ... };
    }
```

### Retorno

Em caso de sucesso:

    "ok"

Em caso de erro:

    "Mensagem de erro da exceção"

`DELETE /v1/example`

Esta rota faz a exclusão de um ou mais exemplos do mongo.

### Parametros

```
    {
        "find"?: { ... }[];
    }
```

### Retorno

Em caso de sucesso:

    "ok"

Em caso de erro:

    "Mensagem de erro da exceção"
