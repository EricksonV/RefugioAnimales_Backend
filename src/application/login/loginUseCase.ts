import { LoginRepository } from '../../domain/login/login.repository';
import { LoginValue } from '../../domain/login/login.value';


export class LoginUseCase{
    constructor(private readonly LoginRepository:LoginRepository){

    }

    public registerUser = async({user, email, password}:{user:string, email:string,password:string})=>{
        const loginValue = new LoginValue({user, email, password});
        const userCreate = await this.LoginRepository.createUser(loginValue);
        return userCreate;
    }

    public postUser =async ({user, email, password}:{user:string, email:string,password:string}) => {
        const validate = await this.LoginRepository.findUserByUserPS({user,email,password})
        return validate;
    }

    public deleteUser =async (id:string) => {
        const userDeleted = await this.LoginRepository.deleteUser(id);
        return userDeleted;
    }
}