import { Router } from "express";
const router = Router()
import { getAllCategosies, addCategory, removeCategory } from "../../controllers/category.contoller";

router
.get('/get-categories', getAllCategosies)
.post('/save-category', addCategory)
.delete('/remove-category', removeCategory)

export default router