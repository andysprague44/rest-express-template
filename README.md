# rest-express-template

An opinionated skeleton app for Express and Typescript REST API.

Uses:
- Typescript
- Express
- MVC project structure
- SQLite database
- Prisma ORM

## Getting started

```
npm install
npm run dev
```

The server is now running on `http://localhost:3000`. You can now run API requests through the browser, e.g. [`http://localhost:3000/players`](http://localhost:3000/players).

To query from postman, import the `RestExpressTemplate.postman_collection.json` file.

## Prisma - Getting started

Run the following command to create your SQLite database file
```
npx prisma migrate dev --name init
```

When `npx prisma migrate dev` is executed against a newly created database, seeding is also triggered. The seed file in [`prisma/seed.ts`](./prisma/seed.ts) will be executed and your database will be populated with the sample data.

To run seeding only: `npx prisma db seed`

# Contact

<mailto:andy.sprague44@gmail.com>
