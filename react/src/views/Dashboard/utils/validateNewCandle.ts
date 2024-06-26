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
