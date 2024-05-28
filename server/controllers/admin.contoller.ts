import { Request, Response } from 'express';
import { Admin } from '../model/admin.model'
import { loginValid, regValid } from '../utils/validation/adminValidation';
import { httpCodes } from '../utils/httpCodes';
import bcrypt from "bcryptjs";
import jwt from "jwt-simple";

export const registAdmin = async (req: Request, res: Response) => {
    try {
        const data = req.body

        const { error } = regValid.validate(data)

        if (error) {
            console.error("admin.controller validation error of RegistAdmin:", error.message);
            return res.status(httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }

        const hashpass = await bcrypt.hash(data.password, 10);

        const newAdmin = new Admin({ ...data, password: hashpass })

        console.log(newAdmin)
        await newAdmin.save()
        return res.status(httpCodes.OK).json({ continueWork: true, message: "משתמש חדש נשמר" })
    } catch (error) {
        console.log(`admin.controller cont error addAdmin`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}

export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const data = req.body

        // console.log(data)
        const { error } = loginValid.validate(data)

        if (error) {
            console.error("admin.controller validation error of loginAdmin:", error.message);
            return res.status(httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }

        const existAdmin = await Admin.findOne({ email: data.email })
        // console.log(existAdmin)

        if (!existAdmin) {
            console.log("admin.controller user not exist loginAdmin");
            return res.status(httpCodes.NOT_FOUND).json({ continueWork: false, message: "משתמש לא קיים" })
        }

        const comparePass = await bcrypt.compare(data.password, existAdmin.password!);

        if (!comparePass) {
            console.log(`admin.controller Password not correc loginAdmin`);
            return res.status(httpCodes.UNAUTHORIZED).json({ continueWork: false, message: "הסיסמא לא נכונה" })
        }

        const cookiesData = { userID: existAdmin._id! };
        const token = jwt.encode(cookiesData, process.env.SECRET!);

        console.log(token)

        return res.status(httpCodes.OK).json({ continueWork: true, token })
    } catch (error) {
        console.log(`admin.controller cont error loginAdmin`)
        console.error(error);
        return res.status(httpCodes.SERVER_ERROR).json({ continueWork: false, message: "שגיא בסרבר, נא לנסות שנית" })
    }
}