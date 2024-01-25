### Executar

Empacotei tudo em um docker compose, tudo que você precisa para rodar é executar o comando abaixo:

```bash
$ docker compose up
```

Open http://localhost:3001

### Frontend

- Nextjs v14 + React v18 - Atualmente o React vem incentivando fortemente o uso de frameworks junto ao react. Optei pelo Next que é o que tenho mais familiaridade.
- MaterialUI v5 - é a lib de componentes que mais gosto de utilizar, pela qualidade da UX e DX
- React Hook Forms: para controle e validação do formulário de cadastro
- React Query: para gestão das requisições à API

### Backend

- NestJS v10: meu framework favorito atualmente, tenho utilizado ele com frequencia em projetos pessoais
- Postgres v16
- Class Validator v0.14: para validação do input do usuário

### Rota de visitação

Iniciei com um algoritimo de força bruta que calcula todas as variações possiveis, dada uma lista de clientes e escolhe a rota com menor distancia. Mas se torna uma solução inviável conforme a lista de clientes cresce. Então busquei por uma solução mais performática e acabei implementando o algoritimo "Nearest Neighbor"
