import React from "react";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="flex w-full flex-col items-center text-center">
      התרחשה שגיאה{" "}
      <button className="w-fit rounded-full bg-primary-pink p-4">
        <Link to="/">חזרה לעמוד הראשי</Link>
      </button>
    </div>
  );
};

export default ErrorComponent;
