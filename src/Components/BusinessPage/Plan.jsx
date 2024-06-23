import React from "react";

const Plan = ({
  Image,
  Heading,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p19,
  p20,
  LinkName,
}) => {
  return (
    <div>
      <div className="mx-2">
        <img src={Image} alt="" />
      </div>
      <div className="space-y-5 mt-5">
        <div className="font-bold text-lg mx-8 text-slate-800">
          <h1>{Heading}</h1>
        </div>
        <div className="mx-8 text-slate-400">
          <div className="p">{p1}</div>
          <div className="font-bold">{p2}</div>
          <div className="p">{p3}</div>
          <div className="p">{p4}</div>
          <div className="p">{p5}</div>
          <div className="p">{p6}</div>
          <div className="font-bold">{p7}</div>
          <div className="font-bold">{p8}</div>
          <div className="font-bold">{p9}</div>
          <div className="">{p10}</div>
          <div className="">{p11}</div>
          <div className="">{p12}</div>
          <div className="">{p13}</div>
          <div className="font-bold">{p14}</div>
          <div className="font-bold">{p15}</div>
          <div className="p">{p16}</div>

          <div className="pt-4">{p17}</div>
          <div className="space-y-7 text-start">
            <div className="">{p19}</div>
            <div className="">{p20}</div>
          </div>
          
          <h1 className="text-sky-500 cursor-pointer underline underline-offset-1 mt-5 font-semibold">
            {LinkName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Plan;
