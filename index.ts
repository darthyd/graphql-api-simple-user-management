import * as dotenv from "dotenv";
dotenv.config()

import "reflect-metadata";

import { ApolloServer } from "apollo-server";

import "./src/database";
import "./src/database/schemas/User";

import schemaFn from "./src/schemas";

const app = async () => {
    const schema = await schemaFn();
    const server = new ApolloServer({ schema });

    server.listen( { port: 4000 }, () => console.log("Server is running on http://localhost:4000"));
};

app();