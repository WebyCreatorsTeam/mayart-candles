import * as Joi from 'joi'
const email = Joi
    .string()
    .email()
    .messages({
        'string.email': "האימייל לא תקין",
        'string.empty': "אימייל לא יכול להיות ריק",
    })

const password = Joi
    .string()
    .min(6)
    .pattern(new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$'))
    .messages({
        'string.pattern.base': "הסיסמא חייבת לכלול מספרים ואותיות באנגלית, לפחות תו אחד מיודח !@#$%^&* וללא רווחים",
        'string.min': "הסיסמא חייבת לכלול לפחות 6 תווים"
    })

export const regValid = Joi.object({
    name: Joi.string().min(2).required().messages({
        'string.empty': "השם לא יכול להיות ריק",
        'string.min': "השם חייב לכלול מינימום שני תווים",
    }),
    email,
    password
})

export const loginValid = Joi.object({
    email,
    password
})