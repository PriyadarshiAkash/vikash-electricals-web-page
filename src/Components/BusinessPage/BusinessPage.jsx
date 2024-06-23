import React from "react";
import Plan from "./Plan";

const BusinessPage = () => {
  return (
    <div>
      <div className="space-y-5">
        <div className="mt-[200px] flex justify-center">
          <h1 className="text-4xl text-slate-700">
            Business Website Design Price
          </h1>
        </div>
        <div className="text-center flex justify-center text-lg ">
          <p className="w-[950px] text-slate-500">
            Zauca is India’s most affordable, low cost web design company in
            India offering website designing with Unbeatable “Pricing”
          </p>
        </div>
      </div>
      <div className="flex justify-around">
        <Plan
          p1={"– 1 Free Domain Name"}
          p2={"– 10 Page (Dynamic Website)"}
          p3={"– Business Email id (Webmail)"}
          p4={"– Unlimited Images & Videos"}
          p5={"– Unlimited (Bandwidth/ Space)"}
          p6={"– 100% Responsive Website"}
          p7={"– Live Chat Integration"}
          p8={"– Payment Gateway Integration"}
          p9={"– Social Media Integration"}
          p10={"– 24/7 Support (SLA: 48 Hours)"}
          p11={"– Annual Renewal ₹3000"}
          Heading={"Basic Plan – ₹7800"}
          Image={
            "https://www.zauca.com/wp-content/uploads/2017/10/cropped-planBasic.png"
          }
          LinkName={"Get Quote Now &#8608;"}
        />
        <Plan
          p1={"– 1 Free Domain Name"}
          p2={"– UL (15) Pages* (Dynamic Website)"}
          p3={"– Business Email id (Webmail)"}
          p4={"– Unlimited Images & Videos"}
          p5={"– Unlimited (Bandwidth/ Space)"}
          p6={"– 100% Responsive Website"}
          p7={"– Live Chat Integration"}
          p8={"– Payment Gateway Integration"}
          p9={"– Social Media Integration"}
          p10={"– WhatsApp Integration"}
          p11={"– SSL Certificate"}
          p12={"– 24/7 Support (SLA: 24 Hours)"}
          p13={"– Annual Renewal ₹4000 "}
          Heading={"Classic Plan – ₹9900"}
          Image={
            "https://www.zauca.com/wp-content/uploads/2017/11/planStandard.png"
          }
          LinkName={"Get Quote Now &#8608;"}
        />
        <Plan
          p1={"– 1 Free Domain Name"}
          p2={"– UL (20) Pages* (Dynamic Website)"}
          p3={"– Unlimited Email id (Webmail/ Outlook)"}
          p4={"– Android Application*"}
          p5={"– Unlimited Images & Videos"}
          p6={"– Unlimited (Bandwidth/ Space)"}
          p7={"– 100% Responsive Website"}
          p8={"– Live Chat Integration"}
          p9={"– Payment Gateway Integration"}
          p10={"– Social Media Integration"}
          p11={"– WhatsApp Integration"}
          p12={"– SSL Certificate"}
          p13={"– cPanel* Access"}
          p14={"– 24/7 Support (SLA: 12 Hours)"}
          p15={"– Annual Renewal ₹5000"}
          Heading={"Premium Plan – ₹14300"}
          Image={
            "https://www.zauca.com/wp-content/uploads/2017/10/planPremium.png"
          }
          LinkName={"Get Quote Now &#8608;"}
        />
      </div>
    </div>
  );
};

export default BusinessPage;
