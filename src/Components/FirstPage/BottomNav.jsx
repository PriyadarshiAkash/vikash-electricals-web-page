import React from "react";

const BottomNav = () => {
  return (
    <div>
      <div className="flex justify-between p-2">
        <div>
          <img
            className=" h-[60px] w-full transition-transform duration-300 transform hover:scale-110"
            src="https://th.bing.com/th/id/OIP.Q4--ZA6DAbwNkp7lw-iUTQHaEK?w=318&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Reebok logo"
          />
        </div>
        <div className="lg:hidden">
          <a
            className="text-3xl bg-slate-300 rounded-full px-2 font-bold"
            href="#"
          >
            &#8801;
          </a>
        </div>
        <div className="flex space-x-9 text-sm font-semibold mt-4 hidden lg:block lg:flex">
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">FEATURES</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">PRICING</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">DEMO</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">REVIEWS</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">CONTACT</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">SUPPORT</div>
          <div className="cursor-pointer hover:text-sky-500 transition-transform duration-300 transform hover:scale-110">CLIENT AREA</div>
          <div className="h-11 w-7 cursor-pointer hover:sky-500 transition-transform duration-300 transform hover:scale-110">
            <img
              src="https://th.bing.com/th/id/OIP.0B9qUkgn0IAUO6e2pP0pYQHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
