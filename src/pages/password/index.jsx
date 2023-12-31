import React from "react";
import { passwordBg } from "../../assets/images";
import { useNavigate } from "react-router-dom";

function Password() {
  const navigate  = useNavigate();

  return (
    <div className="flex flex-col items-start justify-center w-full h-full relative">
      <div className="absolute top-10">
        <h1 className="text-black font-semibold text-24">
          Khanh Linh Booking Flight System
        </h1>
      </div>
      <div className="flex gap-2 w-full items-center">
        <div className="flex flex-col items-start  w-1/4">
          <h4 className="text-black font-bold text-44">Đổi mật khẩu</h4>
          <h3 className="text-18 text-gray-70">
            Hãy nhập mật khẩu cho lần đầu tiên
          </h3>
          <input
            className="border border-solid border-blue-400 rounded-lg mt-1 h-12 pl-2 w-full"
            placeholder="Nhập mật khẩu mới"
          />
          <input
            className="border border-solid border-blue-400 rounded-lg mt-2 h-12 pl-2 w-full"
            placeholder="Nhập lại mật khẩu"
          />
          <button className="text-white flex items-center justify-center bg-blue-500 w-full h-12 rounded-lg mt-2"  onClick={()=> navigate("/")}>Xác nhận</button>
        </div>
        <img src={passwordBg} alt="login-bg" className=""/>
      </div>
    </div>
  );
}

export default Password;
