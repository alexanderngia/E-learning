import React from "react";
import { Input } from "@material-tailwind/react";
import Button from "./button";
interface InputProps {}
const InputComponent: React.FC<InputProps> = () => {
  return (
    <div className="relative flex w-[500px]">
      <input
        type="email"
        placeholder="Email Address"
        className="w-full h-[67px] rounded-full pl-[30px]"
      />
      <Button customClass="!absolute right-1 top-1 h-[60px] rounded-full px-[30px]">
        14 Days Trial
      </Button>
    </div>
  );
};

export default InputComponent;
