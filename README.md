# Validador de cartão de crédito v.1.0.5

**Esta biblioteca se destina à validação de números de cartão de crédito, para uso em aplicações web.**
Na versão atual é capaz de validar o número de cartão de crédito retornando true ou false.

## Como instalar:

```shell

$  npm install cardvalidator-la

```

## Como utilizar:

```node

> const cardValidator = require("cardvalidator-la");
> console.log(cardValidator("5427803680272037"))
> // returns "true"

```

## Roadmap oficial do projeto

#### Versão 1.0.0 (released)
- Verifica se o cartão de crédito tem 16 dígitos
- Verifica se o cartão de crédito possui todos os números iguais
- Retorna se o número de cartão de crédito é válido ou não

#### Versão 1.0.1 (released)
- Inclui README