import express, {Application} from 'express';
import cors from 'cors';
import 'dotenv/config';
import { DbInit } from '../database/mongo';

import loginRoute from '../routers/login.router';

export class App{

    private port:string = process.env.PORT || '';
    public app: Application;

    constructor(){

        this.app = express();
        this.middlewares();
        this.routes();
        this.database();
    }

    private middlewares():void{
        //cors
        this.app.use( cors() );
        //json
        this.app.use( express.json() );
    }

    private async database():Promise<void>{
        await DbInit();
    }

    private routes(): void{
        this.app.use(loginRoute)
    }

    async start():Promise<void>{
        this.app.listen(this.port, () =>{
            console.log(`Listening: ${this.port}`);
        });
    }
}