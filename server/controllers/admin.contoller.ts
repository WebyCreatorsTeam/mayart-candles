import { NextFunction, Request, Response } from 'express';
import { Admin } from '../model/admin.model'
import { loginValid, regValid } from '../utils/validation/adminValidation';
import { httpCodes } from '../utils/httpCodes';
import bcrypt from "bcryptjs";
import jwt from "jwt-simple";

//      /admin/reg-admin
export const registAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body
        const { error } = regValid.validate(data)

        if (error) {
            console.log("error valid")
            return res.status(httpCodes.BAD_REQUEST).json({ continueWork: false, message: error.message });
        }

        const hashpass = await bcrypt.hash(data.password, 10);
        console.log(hashpass)

        const newAdmin = new Admin({ ...data, password: hashpass })
        console.log(newAdmin)
        await newAdmin.save().then(() => {
            return res.json({ continueWork: true, message: "משתמש חדש נשמר" })
        }).catch(err => {
            if (err) return res.status(httpCodes.BAD_REQUEST).json({ continueWork: false, message: "משתמש קיים" });
        })

    } catch (error) {
        next(error);
    }
}

//      /admin/login-admin
export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body

        const { error } = loginValid.validate(data)

        if (error) {
            return res.status(httpCodes.UNAUTHORIZED).json({ continueWork: false, message: error.message });
        }

        const existAdmin = await Admin.findOne({ email: data.email })

        if (!existAdmin) {
            return res.status(httpCodes.NOT_FOUND).json({ continueWork: false, message: "משתמש לא קיים" })
        }

        const comparePass = await bcrypt.compare(data.password, existAdmin.password!);

        if (!comparePass) {
            return res.status(httpCodes.UNAUTHORIZED).json({ continueWork: false, message: "הסיסמא לא נכונה" })
        }

        const cookiesData = { userID: existAdmin._id! };
        const token = jwt.encode(cookiesData, process.env.SECRET!);

        return res.json({ continueWork: true, token })
    } catch (error) {
        next(error);
    }
}

//      /admin/all-admins
export const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const allAdmins = await Admin.find({})
        const admins = allAdmins.map(ad => ({ name: ad.name, _id: ad._id }))
        return res.json({ continueWork: true, admins })
    } catch (error) {
        next(error);
    }
}