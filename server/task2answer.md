## Prerequisites ##

- NodeJS
- Docker

## How to start ###

Bootstrap
```
npm install
```

Deploy DB

```
docker compose up dev-db -d
```

Setup Env
```
Clone .env.template to .env
```

Migrate & Generate DB Model
```
npx prisma migrate dev
npx prisma generate
```

Run App Dev

```
npm run start:dev
```

## How you will write a backend server from scratch #

### Requirements ###

- Server connects to or can work with postgres or any relational database
- It has a POST API that accepts json with two fields: wallet_address and blockchain_network
- Use the app you created in Task 1 to send the POST request to save the data into DB via written API

### What I use ###

- NestJS - https://nestjs.com/
- Prisma - https://www.prisma.io/

### End Result ###

```
POST /tracking/connect-wallet-events
------------------------------------
Data Body { 
    wallet_address: string,
    blockchain_network: string,
}
```

### What I did ###

1. Init NestJS app
2. Create `docker-compose.yaml` and deploy `postgress database` and run
3. Install and init Prisma
4. Create and generate Prisma model `tracking-event`
5. Migrate schema to db
6. Create modules `app`, `tracking`, `prisma`, `config`
7. Create prisma service to intergrate with db by `PrismaClient`
8. Create DTO for action add connect wallet event
9. Setup validation for dto
10. Create tracking controller for routing
11. Create tracking service to handle dto 
12. Combine things to handle request