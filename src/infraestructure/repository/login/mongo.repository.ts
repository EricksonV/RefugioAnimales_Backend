import { LoginEntity } from "../../../domain/login/login.entity";
import { LoginRepository } from "../../../domain/login/login.repository";
import loginSchema from "../../models/login/login.schema";

export class MongoRepository implements LoginRepository{
    async createUser(user: LoginEntity): Promise<any>{
        const createdUser = await loginSchema.create(user);
        return createdUser;
    }
    
    async findUserByUserPS({ user, email, password }: { user: string; email: string; password: string; }): Promise<any> {
        const userFind = await loginSchema.findOne({
            user: { $eq: user },
            email: { $eq: email },
            password: { $eq: password }
        });
        return userFind;
    }
    async deleteUser(_id: string): Promise<any> {
        const deletedUser = await loginSchema.findByIdAndUpdate(_id, {state:false});
        return deletedUser;
    }
    
}