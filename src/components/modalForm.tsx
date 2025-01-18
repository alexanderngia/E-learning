import { MouseEventHandler } from "react";

interface ModalProps {
  message: string;
  onClose: MouseEventHandler<HTMLButtonElement>;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  return (
    <div
      className={`flex bg-gray-900 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow w-[250px]">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-3 end-2.5 text-gray-700 bg-transparent hover:text-gray-500 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center flex flex-col items-center">
            {message === "Success" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="text-green-500 bg-white rounded-full border-none"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                />
              </svg>
            )}
            {message === "Error" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="text-white-500 bg-red-500 rounded-full"
              >
                <path
                  fill="currentColor"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            )}
            {message === "Empty" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 56 56"
                className="text-yellow-500"
              >
                <path
                  fill="currentColor"
                  d="M9.59 50.207h36.82c3.516 0 5.719-2.531 5.719-5.719a5.56 5.56 0 0 0-.75-2.812l-18.445-33c-1.055-1.899-2.977-2.883-4.922-2.883c-1.922 0-3.89.984-4.946 2.883L4.645 41.699c-.516.89-.774 1.828-.774 2.79c0 3.187 2.227 5.718 5.719 5.718m18.422-16.055c-1.242 0-1.922-.703-1.969-1.968l-.328-11.578c-.047-1.266.937-2.204 2.273-2.204c1.313 0 2.344.961 2.297 2.227l-.351 11.555c-.047 1.289-.727 1.968-1.922 1.968m0 8.649c-1.36 0-2.625-1.078-2.625-2.532s1.242-2.53 2.625-2.53s2.625 1.054 2.625 2.53c0 1.477-1.266 2.532-2.625 2.532"
                />
              </svg>
            )}

            <h4 className="text-lg text-gray-700 font-semibold mt-5">
              {message === "Success" && "SUCCESSFUL !!"}
              {message === "Empty" && "ERROR !!"}
              {message === "Error" && "FAILED !!"}
            </h4>
            <p className="text-gray-700 text-sm">
              {message === "Success" && "Navigating to Course Page..."}
              {message === "Empty" && "Please enter the information!"}
              {message === "Error" && "Incorrect login information!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
