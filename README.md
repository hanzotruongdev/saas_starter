## Feature:

- Nextjs 14
- Shadcn
- Prisma
- Clerk


## Getting Started

### Create a `.env` file in `root` folder. 

See `.env.sample` for your reference. Detail below

### Setup auth for SaaS

Signup a Clerk account, create a clerk project.

Go to Clerk Dashboard -> API Keys -> Copy key then paste to  `.env` file

### Setup db

This project use `Prisma` to work with Relational Database such as Postgresql, mysql...

- register any free DB such as `aiven.io`, `plannetscale`... then put the db string to `.env` file.
- Define DB model in `/prisma/schema.prisma`
- Run generate prisma module in local: `npx prisma generate`
- Push db schema to server: `npx prisma db push`
- Check db using prisma studio: `npx prisma studio`

### run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
