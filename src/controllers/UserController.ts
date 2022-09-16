import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import User from '../schemas/User';
import UserDocument from '../database/schemas/User';

@Resolver(User)
class UserController {
    @Query(returns => [User], { name: "users" })
    async find() {
        const users = UserDocument.find();
        return users;
    }

    @Mutation(returns => User, { name: "createUser" })
    async create(
        @Arg("name") name: string,
        @Arg("email") email: string,
        @Arg("password") password: string
    ) {
        const newUser = UserDocument.create({ 
            name,
            email,
            password,
            isActive: true
        });
        return newUser;
    }
}

export default UserController;