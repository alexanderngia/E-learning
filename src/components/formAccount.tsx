import Image from "next/image";
import Button from "./button";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "./modalForm";
import { setSessionStorage } from "../helper/sessionStorage";

interface FormProps {
  onClickClose: any;
  signUp?: boolean;
}
const Form: React.FC<FormProps> = ({ onClickClose, signUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("false");
  const router = typeof window !== "undefined" ? useRouter() : null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "123456") {
      setModal(true);
      setMessage("Success");
      setSessionStorage("user", { username: "admin", token: "123456" });

      setTimeout(() => {
        if (router) {
          router.push("/course");
        }
      }, 2000);
    } else if (!username || !password) {
      setModal(true);
      setMessage("Empty");
    } else {
      setModal(true);
      setMessage("Error");
    }
  };

  return (
    <div
      className={`flex flex-col text-white rounded-[24px] text-[20px] lg:w-[400px] absolute top-[80px] shadow-sm shadow-gray-500 ${
        signUp ? "right-[0px]" : "right-[80px]"
      } bg-white p-10`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-gray-700 absolute top-5 right-5 cursor-pointer hover:text-gray-400"
        onClick={onClickClose}
      >
        <path
          fill="currentColor"
          d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
        />
      </svg>
      <h3 className="text-gray-700 font-semibold w-full text-center text-[16px] mb-[20px]">
        Welcome to <span className="text-[var(--primary-color)]">Euréka</span>
      </h3>
      <form
        autoComplete="off"
        className="w-full h-full flex flex-col items-center gap-2 text-gray-500"
      >
        {signUp && (
          <div className="w-[80%]">
            <label
              htmlFor="Email"
              className="block mb-2 text-sm font-normal text-gray-500 pl-3"
            >
              Email
            </label>
            <input
              autoComplete="off"
              type="text"
              id="Email"
              className="block w-full p-2 pl-[15px] text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:border-[var(--primary-color)]"
            />
          </div>
        )}
        <div className="w-[80%]">
          <label
            htmlFor="Username"
            className="block mb-2 text-sm font-normal text-gray-500 pl-3"
          >
            Username
          </label>
          <input
            autoComplete="off"
            type="text"
            id="Username"
            className="block w-full p-2 pl-[15px] text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:border-[var(--primary-color)]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-[80%]">
          <label
            htmlFor="Password"
            className="block mb-2 text-sm font-normal text-gray-500 pl-3"
          >
            Password
          </label>
          <input
            autoComplete="off"
            type="password"
            id="Password"
            className="block w-full p-2 pl-[15px] text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:border-[var(--primary-color)]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleLogin} customClass="mt-[10px] py-[5px] text-sm">
          {signUp ? "Sign up" : "Sign in"}
        </Button>
        {!signUp && <p className="text-sm">Forgot your password ?</p>}
        <div className="flex w-full text-sm items-center justify-between">
          <div className="border-b-gray-700 border-[1px] w-[30%] h-[1px]"></div>
          <p className="text-gray-700">or</p>
          <div className="border-b-gray-700 border-[1px] w-[30%] h-[1px]"></div>
        </div>
        <div>
          <Button
            img={"/asset/gg.png"}
            customClass="mt-[10px] text-sm !text-gray-700 flex items-center gap-3 bg-transparent py-[6px] pl-[10px] pr-[40px] hover:!text-white"
          >
            Continue with Gmail
          </Button>
          <Button
            img={"/asset/fb.png"}
            customClass="mt-[10px] text-sm !text-gray-700 flex items-center gap-3 bg-transparent py-[6px] pl-[10px] pr-[20px] hover:!text-white"
          >
            Continue with Facebook
          </Button>
        </div>
        <p className="text-sm mt-[10px]">
          Already have an account? &nbsp;
          <span className="text-[var(--primary-color)] underline">Log in</span>
        </p>
      </form>
      {modal && <Modal onClose={() => setModal(false)} message={message} />}
    </div>
  );
};

export default Form;
