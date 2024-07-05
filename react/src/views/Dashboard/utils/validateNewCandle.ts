import { ICandles } from "../MainDashboard";

interface ValidReturn {
    continueWork: boolean;
    message: string;
}

export const validateNewCandle = (inputKey: string, inputValue: string): ValidReturn => {
    switch (inputKey) {
        case "name":
            if (inputValue.length === 0) return { continueWork: false, message: "השם לא יכול להיות ריק" };
            break;
        case "price":
            if (Number(inputValue) === 0) return { continueWork: false, message: "מחיר חייב להיות יותר מ0" };
            break;
        case "description":
            if (inputValue.length < 15) return { continueWork: false, message: "התיאור חייב להיות לפחות 15 תווים" };
            break;
        case "color":
            if (inputValue.length === 0) return { continueWork: false, message: "שם הצבע לא יכול להיות ריק" };
            break;
        case "fragrance":
            if (inputValue.length === 0) return { continueWork: false, message: "סוג הריח לא יכול להיות ריק" };
            break;
        case "shape":
            if (inputValue.length === 0) return { continueWork: false, message: "צורת הנר לא יכול להיות ריק" };
            break;
        // case "password":
        //     if (inputValue.length === 0) return { continueWork: false, message: "נא למלא את הסיסמא" };

        //     const passwordRegEx: RegExp = new RegExp('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')
        //     const validPass = passwordRegEx.test(inputValue)

        //     if (!validPass) return { continueWork: false, message: "הסיסמא חייבת לכלול מספרים ואותיות באנגלית, לפחות תו אחד מיוחד !@#$%^&* וללא רווחים ולא פחות מ6 תווים"  }

        //     break;
        // case "email":
        //     const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
        //     const validEmail = emailRegex.test(inputValue);

        //     if (inputValue.length === 0) return {
        //         continueWork: false, message: "אימייל לא יכול להיות ריק"
        //     };

        //     if (!validEmail) return {
        //         continueWork: false, message: "אימייל לא תקין"
        //     };

        //     break;
        // default:
        //     return {
        //         continueWork: false,
        //         message: "ישנה שגיאה, נסא שנית",
        //     };
    }
    return { continueWork: true, message: "" };
};

export const validateNewCandleBeforeSend = (candle: any, images: any) => {
    const arrFields: string[] = []
    const mustFields: string[] = ["name", "price", "colors", "fragrances", "shape", "description", "type", "size"]
    const mustFieldsHeb: any[] = [
        { name: "שם המוצר" },
        { price: "מחיר המוצר" },
        { colors: "צבעים" },
        { "fragrances": "ריח" },
        { shape: "צורה" },
        { description: "תיאור המוצר" },
        { type: "קטגורית הנר" },
        { size: " גודל הנר" }]

    for (let key in candle) {
        const field = candle[key as keyof ICandles]
        if (mustFields.includes(key)) {
            if (field === "" || field === 0) {
                arrFields.push(key);
            } else if (key === "colors") {
                if (candle.colors[0].color === "" && candle.colors[0].hexCode === "") {
                    arrFields.push(key);
                }
            } else if (key === "fragrances") {
                if (candle.fragrances[0] === "") {
                    arrFields.push(key);
                }
            }
        }
    }

    if (arrFields.length > 0) {
        const hebFields = arrFields.map((field: any) => mustFieldsHeb.find((item: any) => item[field]) || field)// Object.values(item[field])
        let fieldsToAlert: any = []
        for (let i = 0; i < hebFields.length; i++) {
            const valuesToShow = Object.values(hebFields[i])
            fieldsToAlert = [...fieldsToAlert, ...valuesToShow]
        }
        return { continueWork: false, message: `נא למלא את הפרטים: ${fieldsToAlert.join(", ")}` }
    }

    if (images.length === 0) { return { continueWork: false, message: "הוסף תמונות" } }

    return { continueWork: true, message: "" }
}