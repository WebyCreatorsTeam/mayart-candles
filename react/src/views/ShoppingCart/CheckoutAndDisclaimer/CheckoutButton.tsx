import { useEffect } from "react";
// import { useActionData, } from "react-router-dom";
import { useNavigation, useActionData } from "react-router-dom";

const CheckoutButton = ({
  candlesArrayTrue,
}: {
  candlesArrayTrue: boolean;
}) => {
  const navigation = useNavigation();

  const actionData = useActionData() as {
    next: boolean | undefined;
    message: string;
  };

  useEffect(()=> {
    if(actionData?.next === true) {
      alert(actionData?.message)
      window.location.reload();
    }
  },[actionData?.message, actionData?.next])
  
  return (
    <>
      <div>
        <p className="text-center text-3xl font-bold text-primary-pink">
          {actionData?.message}
        </p>
      </div>
      {(actionData?.next === undefined || actionData?.next === false) && <button
        className="w-full bg-primary-pink p-[23px] text-center  text-white transition-colors duration-300 active:bg-secondary-pink sm:w-fit sm:px-[100px] sm:py-10"
        name={candlesArrayTrue ? "candlesArrayTrue" : "candlesArrayFalse"}
        id={candlesArrayTrue ? "candlesArrayTrue" : "candlesArrayFalse"}
        type={candlesArrayTrue ? "submit" : "button"}
        disabled={candlesArrayTrue ? false : true}
      >
      {
        navigation.state === "submitting" ? "שולח הזמנה" : "סיום ושליחה"
      }
      </button>}
    </>
  )
};

export default CheckoutButton;
