
import { Router } from "express";
import { getAllAdmins, loginAdmin, registAdmin } from "../../controllers/admin.contoller";
const router = Router()

router
    .post('/reg-admin', registAdmin)
    .post('/login-admin', loginAdmin)
    .get('/all-admins', getAllAdmins)

export default router


