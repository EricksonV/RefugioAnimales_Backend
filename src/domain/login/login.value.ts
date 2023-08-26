import { LoginEntity } from "./login.entity";

export class LoginValue implements LoginEntity{
    user: string;
    email: string;
    password: string;
    state: boolean;

    constructor({user, email, password}:{user:string, email:string, password:string}){
        this.user = user;
        this.email = email;
        this.password = password;
        this.state = true;
    }

}