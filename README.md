## Description

This is a demo application to showcase base web development knowledge with containerization and full-stack development with NestJs and NextJs, showcasing a responsive UI and cloud deployment.

## Pre-requisites:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

Accessible at http://localhost:3001/todos

```bash
docker-compose up -d --build
```

OR

```bash
$ npm install
$ npm run typeorm:migration:run
$ npm run start
```

## Running the database migrations

```bash
$ npm run typeorm:migration:run
```

## Generate additional migrations to reflect changes of DB table structures

```bash
$ npm run typeorm -- -d ./db/typeorm.config.ts migration:generate ./db/migrations/<MIGRATION_NAME>
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Vesko Petrunov](mailto:vpetrunov@gmail.com)

## License

Nest is [MIT licensed](LICENSE).
