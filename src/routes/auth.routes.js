import { Router } from "express";
import { register, login, logout, profile, verifytoken } from "../controller/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";    
import {validateSchema} from "../middlewares/validaator.middlewares.js"
import {registerSchema, loginSchema} from "../schemas/auth.schema.js";


const router = Router();

router.post("/register", validateSchema(registerSchema),register);

router.post("/login", validateSchema(loginSchema) ,login);

router.post("/logout", logout);

router.get("/verify" , verifytoken);

router.get("/profile", authRequired ,profile);


export default router;