import express from 'express';
import { 
    perfil, 
    registrar, 
    confirmar, 
    autenticar 
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/addMiddleware.js';


const router = express.Router();

router.post("/", registrar);

router.get("/confirmar/:token", confirmar);

router.post("/login", autenticar);

router.get("/perfil", checkAuth, perfil);

export default router;