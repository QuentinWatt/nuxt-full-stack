# Nuxt 3 + Prisma Full Stack App.

This is an example setup of Nuxt 3 with Prisma ORM. I created this example application to demonstrate how Vue 3 can be used as a fullstack application.

- Front End Template.
- JSON API expose data for requests.
- Prisma ORM to connect to the database and manage models.

## Installation instructions

1. Clone the project
2. Install dependencies

```
pnpm install
```

3. Create an env file

```
cp .env.example .env
```

4. Create mysql database and add the database url to the env.

5. Migrate the databases

```
pnpx prisma migrate dev --name init
```
