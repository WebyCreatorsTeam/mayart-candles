
import { Router } from "express";
import {
    getAllAdmins,
    loginAdmin,
    registAdmin,
    removeAdmin
} from "../../controllers/admin.contoller";
const router = Router()

router
    .post('/reg-admin', registAdmin)
    // .post('/login-admin', loginAdmin)
    .get('/all-admins', getAllAdmins)
    .delete('/remove-admin', removeAdmin)

export default router