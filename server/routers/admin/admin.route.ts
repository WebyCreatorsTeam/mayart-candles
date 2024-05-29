
import { Router } from "express";
import { getAllAdmins, loginAdmin, registAdmin } from "../../controllers/admin.contoller";
const router = Router()

router.post('/login-admin', loginAdmin)
router.post('/reg-admin', registAdmin)
router.get('/all-admins', getAllAdmins)

export default router


