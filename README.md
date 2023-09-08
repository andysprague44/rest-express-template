# rest-express-template

An opinionated simple skeleton app for Express and Typescript, with an MVC project structure.

Includes Prisma as an ORM layer on top of an embedded SQLite database.

## Getting started

```
npm install
npm run dev
```

The server is now running on `http://localhost:3000`. You can now run API requests through the browser, e.g. [`http://localhost:3000/users`](http://localhost:3000/users).

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
