#  To-Do List - Projeto Angular

Este projeto foi desenvolvido como parte prática do trabalho da disciplina de **Desenvolvimento Front-End**. Trata-se de uma aplicação web de lista de tarefas construída com o framework **Angular**, que permite adicionar, concluir e remover tarefas, além de exibir um histórico de tarefas removidas.

---

##  Objetivo do Projeto

O projeto visa demonstrar, na prática, a aplicação de conceitos fundamentais de desenvolvimento front-end utilizando Angular, incluindo:

- Estruturação baseada em componentes
- Criação de serviços e uso de injeção de dependência
- Roteamento entre páginas
- Armazenamento temporário no estado da aplicação
- Testes automatizados com Karma e Jasmine

---

## ⚙ Instalação e Configuração

###  Pré-requisitos

- [Node.js](https://nodejs.org) versão 18 ou superior (recomendado: v20+)
- [Angular CLI](https://angular.io/cli) instalado globalmente:
  ```bash
  npm install -g @angular/cli
  ```

###  Clonando o Repositório

```bash
git clone https://github.com/KaikeRosa/trabalho-front-end-2.git
cd trabalho-front-end-2
```

###  Instalando as Dependências

```bash
npm install
```

---

##  Executando o Projeto

Para rodar o servidor de desenvolvimento:

```bash
npx ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

---

##  Executando os Testes

O projeto possui testes automatizados com Karma e Jasmine.

Para executá-los:

```bash
npx ng test
```

Os testes abrem um navegador headless e verificam funcionalidades básicas dos componentes e serviços.

---

##  Estrutura do Projeto

```
src/
├── app/
│   ├── tasks/                  # Componente principal de tarefas
│   │   ├── task.component.ts
│   │   ├── task.component.html
│   │   ├── task.service.ts
│   │   └── task.model.ts
│   ├── pages/
│   │   └── history/            # Página de histórico de tarefas removidas
│   │       ├── history.component.ts
│   │       └── history.component.html
│   └── app-routing.module.ts   # Roteamento entre páginas
│   └── app.module.ts
├── assets/
├── environments/
└── index.html
```

---

##  Funcionalidades

-  Adicionar nova tarefa
-  Marcar tarefa como concluída
-  Remover tarefa e armazenar no histórico
-  Página separada para histórico de tarefas
-  Estrutura modularizada com componentes
-  Testes automatizados básicos

---

##  Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **RxJS**
- **HTML / CSS**
- **Karma** + **Jasmine** (testes)

---

##  Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso universitário. Uso livre para fins acadêmicos.

---

Desenvolvido por Kaike Hariel Rosa.
