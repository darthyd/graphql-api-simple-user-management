import { buildSchema } from "type-graphql";
import User from "./User";
import UserController from "../controllers/UserController";

const schema = async () => buildSchema({
    resolvers: [User, UserController]
});

export default schema;