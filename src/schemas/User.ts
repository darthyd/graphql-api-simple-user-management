import { Field, ObjectType, ID } from "type-graphql";
import { IUser } from "../database/schemas/User";

@ObjectType()
class User implements IUser {
    @Field(type => ID, { nullable: true })
    _id: any;

    @Field({ nullable: false })
    name!: string;
    
    @Field({ nullable: false })
    email!: string;
    
    @Field({ nullable: false })
    password!: string;
    
    @Field(type => Date, { nullable: true })
    createdAt: Date | undefined;
    
    @Field(type => Date, { nullable: true })
    updatedAt: Date | undefined;
    
    @Field(type => Boolean, { nullable: true })
    isActive: boolean | undefined;

}

export default User;