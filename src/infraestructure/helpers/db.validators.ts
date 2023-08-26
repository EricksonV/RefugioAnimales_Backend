import loginSchema from "../models/login/login.schema";

export const validEmail = async(email:string = '')=>{
    const existEmail = await loginSchema.findOne({email});
    if(existEmail){
        throw new Error(`El correo: ${email} ya existe en la bd`);
    }
}
export const validUser = async(user:string = '')=>{
    const existEmail = await loginSchema.findOne({user});
    if(existEmail){
        throw new Error(`El usuario: ${user} ya existe en la bd`);
    }
}

export const validId = async(id:string = '') => {
    const existId = await loginSchema.findById(id);
    if( !existId ){
        throw new Error(`El id: ${id} no existe en la bd`);
    }
}


