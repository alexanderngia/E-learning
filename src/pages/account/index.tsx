import useAuth from "@/helper/useAuth";

const Account = () => {
  useAuth();

  return (
    <div className="flex items-center w-full max-w-[1920px] h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-xl text-black">Account Page</p>
      </div>
    </div>
  );
};
export default Account;
