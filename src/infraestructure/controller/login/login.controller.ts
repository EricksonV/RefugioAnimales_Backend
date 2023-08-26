import {Request, Response} from 'express';
import { LoginUseCase } from '../../../application/login/loginUseCase';

export class LoginController{
    constructor(private loginUseCase:LoginUseCase){

    }

    public postRegisterController = async (req:Request, res:Response)=>{
        const user = await this.loginUseCase.registerUser(req.body);
        res.status(201).send({
            msg: 'user created successfully'
        });
    }

    public postLoginController = async (req:Request, res:Response)=>{
        const user = await this.loginUseCase.postUser(req.body);
        
        const response: any = {
            'ok': user !== null,
            'message': user !== null ? 'Successful Login': 'User not Found'
        };

        const status: number = response.ok ? 200 : 404;

        res.status(status).send({
            msg: `${response.message}`
        });
    }

    public deleteUser =async (req:Request, res: Response) => {
        const { id } = req.params;
        const user = await this.loginUseCase.deleteUser(id);

        res.status(200).send({
            msg: 'Successful Deleted'
        });
    }
    
}