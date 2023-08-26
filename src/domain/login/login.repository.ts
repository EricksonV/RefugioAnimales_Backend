import { LoginEntity } from './login.entity';

export interface LoginRepository{
    createUser(user:LoginEntity): Promise <LoginEntity>
    findUserByUserPS({user, email, password}:{user:string, email:string,password:string}): Promise<LoginEntity>
    deleteUser(id:string): Promise<any>
}