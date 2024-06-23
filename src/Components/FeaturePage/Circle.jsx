import React from "react";

const Circle = ({Image, Heading, Paragraph}) => {
  return (
    <div className="justify-around grid flex-wrap md:flex h-60 w-60 ">
      <div className="h-[107px] w-[107px] rounded-full bg-sky-400 mx-12">
        <div className="h-[60px] w-[60px] mx-6 pt-6">
          <img
            className="rounded-full"
            src={Image}
            alt=""
          />
        </div>
      </div>
      <div className="text-center w-[220px] mt-6">
        <h1 className="text-lg font-semibold pr-4 text-slate-700">{Heading}</h1>
        <p className="mt-5 text-slate-500">
          {Paragraph}
        </p>
      </div>
    </div>
  );
};

export default Circle;
