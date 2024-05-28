
import { Router } from "express";
import { loginAdmin, registAdmin } from "../../controllers/admin.contoller";
const router = Router()

router.post('/login-admin', loginAdmin)
router.post('/reg-admin', registAdmin)

export default router


