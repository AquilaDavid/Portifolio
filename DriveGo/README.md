# 🚗 DriveGo - Sistema de Aluguel de Veículos

DriveGo é uma aplicação fullstack desenvolvida com o objetivo de praticar e demonstrar conhecimentos em desenvolvimento web, arquitetura de software e integração entre frontend, backend e banco de dados. Inspirado em plataformas como [Localiza](https://www.localiza.com/brasil/pt-br), o projeto oferece uma experiência fluida para usuários e administradores gerenciarem aluguéis de veículos.

## 🧰 Tecnologias Utilizadas

### 🔹 Frontend
- React.js
- React Router DOM
- Bootstrap

### 🔹 Backend
- Java 17
- Spring Boot
- Spring Security + JWT
- JPA / Hibernate

### 🔹 Banco de Dados
- PostgreSQL

### 🔹 Outras Ferramentas
- Git e GitHub para versionamento
- Vite para bundling
- Postman para testes de API

---

## 📁 Estrutura do Projeto
```
drivego-project/
├── backend/
│   ├── src/main/java/com/drivego/...
│   └── src/main/resources/...
├── frontend/
│   └── src/...
├── docs/
│   ├── requisitos.md
│   ├── modelo-dados.md
│   ├── api.md
│   └── wireframes/
└── README.md
```

---

## 📌 Funcionalidades Principais

- Cadastro e login de usuários com autenticação JWT
- Visualização de veículos disponíveis para aluguel
- Aluguel com seleção de datas de início e fim
- Dashboard de usuário com histórico de aluguéis
- Painel administrativo para controle de veículos e reservas

---

## 🔐 Segurança

- Hash de senha com BCrypt
- Autenticação JWT protegendo rotas sensíveis
- Diferenciação entre perfis de acesso: Cliente e Administrador

---

## 📷 Telas (Wireframes)
- Home
- Login / Cadastro
- Detalhes do Veículo
- Dashboard do Usuário
- Painel do Administrador

(Imagens disponíveis em `docs/wireframes`)

---

## 📄 Documentação
A documentação completa está localizada na pasta `docs/`, contendo:

- Requisitos funcionais e não funcionais
- Modelo de dados relacional
- Rotas da API REST
- Wireframes de interface

> A cada nova funcionalidade implementada, essa documentação será atualizada.

---

## 🎯 Objetivos do Projeto

- Consolidar conhecimentos em React, Java e PostgreSQL
- Produzir uma aplicação escalável, com boas práticas de arquitetura
- Desenvolver documentação técnica robusta para GitHub
- Criar um projeto prático para compor o portfólio e destacar no LinkedIn

---

## 📚 Referências
- [Localiza Rent a Car](https://www.localiza.com/brasil/pt-br)
- [Spring Boot Docs](https://spring.io/projects/spring-boot)
- [React Docs](https://react.dev/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

## 👨‍💻 Autor
Áquila David D. Ramos  
Curso: Tecnologia em Sistemas para Internet (IFPB - Campus Guarabira)
