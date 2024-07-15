import React from "react";
import { Link } from "react-router-dom";

const InstagramLogo = ({ link }: { link: string }) => {

  return (
    <Link
      className="flex size-[19.45px] items-center justify-center sm:size-[41.59px] xl:size-[34px]"
      to={link}
    >
      <svg
        className="h-[17.01px] w-[17.01px] sm:h-[36.39px] sm:w-[36.39px] xl:h-[29.16px] xl:w-[29.16px]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.0949 7.84978C23.7595 7.84978 23.4878 7.57795 23.4878 7.24264C23.4878 6.90733 23.7595 6.6355 24.0949 6.6355"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0949 7.84978C24.4303 7.84978 24.7021 7.57795 24.7021 7.24264C24.7021 6.90733 24.4303 6.6355 24.0949 6.6355"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.08438 7.3334C1.08438 3.88233 3.88203 1.08466 7.33313 1.08466H23.9966C27.4476 1.08466 30.2453 3.88233 30.2453 7.3334V23.9968C30.2453 27.4478 27.4476 30.2455 23.9966 30.2455H7.33313C3.88203 30.2455 1.08438 27.4478 1.08438 23.9968V7.3334Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.47198 15.6648C9.47198 16.4781 9.63217 17.2834 9.94339 18.0347C10.2546 18.7861 10.7108 19.4688 11.2858 20.0439C11.8609 20.6189 12.5436 21.0751 13.2949 21.3863C14.0463 21.6975 14.8516 21.8577 15.6648 21.8577C16.4781 21.8577 17.2834 21.6975 18.0347 21.3863C18.7861 21.0751 19.4688 20.6189 20.0439 20.0439C20.6189 19.4688 21.0751 18.7861 21.3863 18.0347C21.6975 17.2834 21.8577 16.4781 21.8577 15.6648C21.8577 14.0224 21.2052 12.4472 20.0439 11.2858C18.8825 10.1244 17.3073 9.47198 15.6648 9.47198C14.0224 9.47198 12.4472 10.1244 11.2858 11.2858C10.1244 12.4472 9.47198 14.0224 9.47198 15.6648Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default InstagramLogo;
