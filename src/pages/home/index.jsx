import React from "react";
import { loginBg } from "../../assets/images";
import { useNavigate } from "react-router-dom";

function Home() {
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
          <h4 className="text-black font-bold text-44">Đăng nhập</h4>
          <h3 className="text-18 text-gray-70">
            Please login to continue to your account.
          </h3>
          <input
            className="border border-solid border-blue-400 rounded-lg mt-1 h-12 pl-2 w-full"
            placeholder="Hãy nhập tên đăng nhập"
          />
          <input
            className="border border-solid border-blue-400 rounded-lg mt-2 h-12 pl-2 w-full"
            placeholder="Nhập mật khẩu"
          />
          <div className="flex gap-2 w-full">
            <input
              className="border border-solid border-blue-400 rounded-lg mt-2 h-12 pl-2 w-1/2"
              placeholder="Mã xác minh"
            />
            <div className="w-1/2 h-12 bg-gray-30 mt-2 rounded-lg flex items-center justify-center">
              <p className="text-gray-70">1342134134</p>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <input type="checkbox" />
            <p className="text-gray-80">Ghi nhớ đăng nhập</p>
          </div>
          <button className="text-white flex items-center justify-center bg-blue-500 w-full h-12 rounded-lg mt-1" onClick={()=> navigate("/change-password")}>Đăng nhập</button>
        </div>
        <img src={loginBg} alt="login-bg" className=""/>
      </div>
    </div>
  );
}

export default Home;
