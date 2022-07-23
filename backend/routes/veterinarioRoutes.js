import express from 'express';
import { 
    perfil, 
    registrar, 
    confirmar, 
    autenticar,
    olvidePassword,
    comprobarToken,
    nuevoPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/addMiddleware.js';


const router = express.Router();

// ÁREA PÚBLICA
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);

// ÁREA PRIVADA
router.get("/perfil", checkAuth, perfil);

export default router;
