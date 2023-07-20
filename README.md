# Crud clubs backend

This proyect was made as an extra homework for class 17 of [r/Argentina Programa](https://argentinaprograma.com/).

The idea behind it was to make a full web app, with a [frontend](https://github.com/FrancoGomez/crud-clubs-frontend) that just uses request to interact with the backend (which holds all the info, because there is no database yet). This proyect allows you to:

    C - Create
    R - Retrive
    U - Update
    D - Delete

With every football club avaible, using the [Football Data](https://www.football-data.org/) format in the database.

## Run Locally

Clone the project

```bash
  git clone https://github.com/FrancoGomez/crud-clubs-backend.git
```

Go to the project directory

```bash
  cd crud-clubs-backend
```

Install dependencies

```bash
  npm install
```

Create and fill you .env file, which must be at root level

```bash
  PORT =
```

And start a server with:

```bash
  npm run server
```

## API Reference

#### Get all clubs

```http
  GET /clubs/
```

#### Get club

```http
  GET /clubs/${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

#### Create club

```http
  POST /clubs/
```

Then pass, as the body, a `FormData` object that contains:

| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `name`       | `string` | **Required**. Club name                 |
| `area`       | `string` | **Required**. Club country              |
| `shortName`  | `string` | **Required**. How is usually called     |
| `tla`        | `string` | **Required**. Three letter abbreviation |
| `address`    | `string` | **Required**. Where it resides          |
| `venue`      | `string` | Venue of the club                       |
| `clubColors` | `string` | **Required**. Club colors               |
| `founded`    | `string` | **Required**. When was it founded       |
| `website`    | `string` | Club website                            |
| `phone`      | `string` | Club phone number                       |
| `email`      | `string` | **Required**. Club email                |
| `crest`      | `image`  | Club crest                              |

#### Update club

```http
  PUT /clubs/${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

Then pass, as the body, a `FormData` object that contains:

| Parameter    | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `name`       | `string` | **Required**. Club name                 |
| `area`       | `string` | **Required**. Club country              |
| `shortName`  | `string` | **Required**. How is usually called     |
| `tla`        | `string` | **Required**. Three letter abbreviation |
| `address`    | `string` | **Required**. Where it resides          |
| `venue`      | `string` | Venue of the club                       |
| `clubColors` | `string` | **Required**. Club colors               |
| `founded`    | `string` | **Required**. When was it founded       |
| `website`    | `string` | Club website                            |
| `phone`      | `string` | Club phone number                       |
| `email`      | `string` | **Required**. Club email                |
| `crest`      | `image`  | Club crest                              |

#### Delete club

```http
  DELETE /clubs/${id}
```

| Parameter | Type     | Description            |
| :-------- | :------- | :--------------------- |
| `id`      | `string` | **Required**. Club TLA |

## Running Tests

To run e2e test, run:

```bash
npm run test
```

## Directory Structure

```bash
  ├── index.js  (base server structure)
  |
  ├── uploads  (uploaded files to the server)
  |
  └── src   (what goes to the back)
      ├── __test__      (e2e tests)
      ├── controllers   (functions that define responses for each route)
      ├── database      (db club files)
      ├── entities      (classes)
      ├── mappers       (functions to map data for classes)
      ├── routes        (redirect queries for clubs)
      ├── server        (server configuration)
      ├── services      (interact with the db)
      └── storage       (upload configuration)
```

## Tech Stack

**Client:** HTML, CSS, JS

**Server:** Node, Express

**Testing:** Cypress (Frontend), Jest (Backend)
