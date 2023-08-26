import { Router } from "express";
import { MongoRepository } from '../repository/login/mongo.repository';
import { LoginUseCase } from "../../application/login/loginUseCase";
import { LoginController } from "../controller/login/login.controller";
import { check } from 'express-validator';

import * as helpersValidators from '../helpers/db.validators';
import * as middlewares from '../middlewares/validaCampos';

const route = Router();
/**
 * Inicializacion de repository
*/
const mongoRepository = new MongoRepository();

/**
 * Inicialicacion de casos de uso
*/
const loginUseCase = new LoginUseCase(mongoRepository);

/**
 * Iniciar el Controller
*/

const loginController = new LoginController(loginUseCase);

route.post(`/users`,
    [
        check('user', 'el nombre de usuario es obligatorio').not().isEmpty(),
        check('email').isEmail().withMessage('El email no es valido'),
        check('password', 'el password es obligatorio y con mas de 6 caracteres').isLength({min: 6}),
        check('email').custom(helpersValidators.validEmail),
        check('user').custom(helpersValidators.validUser),
        middlewares.validarCampos
    ]
,loginController.postRegisterController);

route.post(`/login`, 
    [
        check('user', 'El nombre de usuario es necesario para la verificacion').not().isEmpty(),
        check('email', 'El Email es necesario para iniciar sesion').not().isEmpty(),
        check('password', 'La contrasenia es requerida').not().isEmpty(),
        middlewares.validarCampos
    ]
,loginController.postLoginController);

route.delete('/users/:id',
    [
        check('id', 'No es un ID de Mongo').isMongoId(),
        check('id').custom(helpersValidators.validId),
        middlewares.validarCampos
    ]
, loginController.deleteUser)


export default route;