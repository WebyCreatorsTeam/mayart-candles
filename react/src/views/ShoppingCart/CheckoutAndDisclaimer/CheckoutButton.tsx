import { useActionData } from "react-router-dom";

const CheckoutButton = ({
  candlesArrayTrue,
}: {
  candlesArrayTrue: boolean;
}) => {
  const actionData: any = useActionData();
  if (!actionData) {
    return (
      <button
        className="w-full bg-primary-pink p-[23px] text-center  text-white transition-colors duration-300 active:bg-secondary-pink sm:w-fit sm:px-[100px] sm:py-10"
        name={candlesArrayTrue ? "candlesArrayTrue" : "candlesArrayFalse"}
        id={candlesArrayTrue ? "candlesArrayTrue" : "candlesArrayFalse"}
        type={candlesArrayTrue ? "submit" : "button"}
        disabled={candlesArrayTrue ? false : true}
      >
        סיום ושליחה
      </button>
    );
  }
  else {
    if (!actionData.message) return null;
    return (
      <div>
        <p className="text-center text-3xl font-bold text-primary-pink">
          {actionData.message}
        </p>
      </div>
    );
  }
};

export default CheckoutButton;
