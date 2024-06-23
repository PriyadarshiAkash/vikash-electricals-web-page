import React from "react";

const Screens = ({Heading, Paragraph, Image}) => {
  return (
    <div className="grid justify-center space-y-5 bg-white h-96 w-96 overflow-hidden shadow-lg outline-none rounded-lg">
      <div className="mt-4">
        <img className="w-full transition-transform duration-300 transform hover:scale-110"
          src={Image}
          alt=""
        />
      </div>
      <div className="w-[270px] text-sm grid text-center space-y-5">
        <div className="">
          <h1 className="font-bold">{Heading}</h1>
        </div>
        <div className="text-slate-500">
          <p>
            {Paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Screens;
