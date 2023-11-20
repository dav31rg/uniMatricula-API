<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">API de registro y mantenimiento de matrículas de una universidad desarrollada en Nestjs </p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```
## Endpoints
### CRUD Docente
- **Ruta:** `/api/teachers`
- **Método:** `POST`
- **Body:**
  ```bash
  # JSON
   {
	  "name": "test_teacher_name"
   }
  ``` 
- **Descripción:** Crea un Docente.
---
- **Ruta:** `/api/teachers`
- **Método:** `GET`
- **Descripción:** Lista de Docentes.
---
- **Ruta:** `/api/teachers/id`
- **Método:** `GET`
- **Descripción:** Docente por Id.
---
- **Ruta:** `/api/teachers/id`
- **Método:** `PATCH`.
- **Body:**
  ```bash
  # JSON
   {
	  "name": "edited_name_teacher"
   }
  ``` 
- **Descripción:** Edita un Docente.
---
- **Ruta:** `/api/teachers/id`
- **Método:** `DELETE`
- **Descripción:** ELimina un Docente por Id.
---
---
### CRUD Curso
- **Ruta:** `/api/courses`
- **Método:** `POST`
- **Body:**
  ```bash
  # JSON
   {
  	"name": "test course",
  	"teacherId": 9
   }
  ``` 
- **Descripción:** Crea un Curso.
---
- **Ruta:** `/api/courses`
- **Método:** `GET`
- **Descripción:** Lista de Cursos.
---
- **Ruta:** `/api/courses/id`
- **Método:** `GET`
- **Descripción:** Curso por Id.
---
- **Ruta:** `/api/courses/id`
- **Método:** `PATCH`.
- **Body:**
  ```bash
  {
	  "name": "test_course_edited"
  }
  ``` 
- **Descripción:** Edita un Curso.
---
- **Ruta:** `/api/courses/id`
- **Método:** `DELETE`
- **Descripción:** ELimina un Curso por Id.
---
---
### CRUD Estudiante
- **Ruta:** `/api/students`
- **Método:** `POST`
- **Body:**
  ```bash
  # JSON
   {
	   "name": "test_student"
   }
  ``` 
- **Descripción:** Crea un Estudiante.
---
- **Ruta:** `/api/students`
- **Método:** `GET`
- **Descripción:** Lista de Estudiante.
---
- **Ruta:** `/api/students/id`
- **Método:** `GET`
- **Descripción:** Estudiante por Id.
---
- **Ruta:** `/api/students/id`
- **Método:** `PATCH`.
- **Body:**
  ```bash
  {
	  "name": "test_estudent_edited"
  }
  ``` 
- **Descripción:** Edita un Estudiante.
---
- **Ruta:** `/api/students/id`
- **Método:** `DELETE`
- **Descripción:** ELimina un Estudiante por Id.
---
---
### CRUD Matricula
- **Ruta:** `/api/enrollments`
- **Método:** `POST`
- **Body:**
  ```bash
  # JSON
   {
  	"semester": "2023-1",
  	"courseId": 7,
  	"studentId": 3
  }
  ``` 
- **Descripción:** Crea una Matricula.
---
- **Ruta:** `/api/enrollments`
- **Método:** `GET`
- **Descripción:** Lista de Matriculas.
---
- **Ruta:** `/api/enrollments/id`
- **Método:** `GET`
- **Descripción:** Matricula por Id.
---
- **Ruta:** `/api/enrollments/id`
- **Método:** `PATCH`.
- **Body:**
  ```bash
  {
	  "semester": "2023-2"
  }
  ``` 
- **Descripción:** Edita una Matricula.
---
- **Ruta:** `/api/enrollments/id`
- **Método:** `DELETE`
- **Descripción:** ELimina una Matricula por Id.
