interface ValidReturn {
  continueWork: boolean;
  message: string;
}

export const validateValues = (
  inputKey: string,
  inputValue: string,
): ValidReturn => {
  switch (inputKey) {
    case "name":
      if (inputValue.length === 0)
        return { continueWork: false, message: "השם לא יכול להיות ריק" };

      break;
    case "password":
      if (inputValue.length === 0)
        return { continueWork: false, message: "נא למלא את הסיסמא" };

      const passwordRegEx: RegExp = new RegExp(
        "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$",
      );
      //add validation that the value is eglish alfabet
      const validPass = passwordRegEx.test(inputValue);

      if (!validPass)
        return {
          continueWork: false,
          message:
            "הסיסמא חייבת לכלול מספרים ואותיות באנגלית, לפחות תו אחד מיוחד !@#$%^&* וללא רווחים ולא פחות מ6 תווים",
        };

      break;
    case "email":
      const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
      const validEmail = emailRegex.test(inputValue);

      if (inputValue.length === 0)
        return {
          continueWork: false,
          message: "אימייל לא יכול להיות ריק",
        };

      if (!validEmail)
        return {
          continueWork: false,
          message: "אימייל לא תקין",
        };

      break;
    default:
      return {
        continueWork: false,
        message: "ישנה שגיאה, נסא שנית",
      };
  }
  return { continueWork: true, message: "" };
};
