import {Schema, model} from 'mongoose';

const LoginSchema = new Schema(
    {
        user:{
            type:String,
            requiere: [true, 'missing user']
        },
        email:{
            type: String,
            requiere: [true, 'missing email']
        },
        password:{
            type: String,
            requiere: [true, 'missing password']
        },
        state:{
            type: Boolean,
            default: true
        }
    },{
        timestamps: true
    }
);

LoginSchema.methods.toJSON = function(){
    const { __v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}
export default model('Login', LoginSchema);

