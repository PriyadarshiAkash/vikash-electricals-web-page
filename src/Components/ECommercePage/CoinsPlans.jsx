import Plan from "../BusinessPage/Plan";

const CoinsPlans = () => {
  return (
    <div>
      <div className="mt-[200px] space-y-5">
        <div className="flex justify-center text-4xl text-slate-700">
          <h1>e-Commerce Web Development Pricing</h1>
        </div>
        <div className="flex justify-center text-lg ">
          <p className="w-[950px] text-slate-500 text-center">
            Zauca is India’s most affordable, low cost e-commerce web design
            company in India offering website designing with Unbeatable
            “Pricing”
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <div className="border-2 w-[350px] h-[690px] ">
            <Plan
              Image={
                "https://www.zauca.com/wp-content/uploads/2017/12/Silver2.png"
              }
              Heading={"Silver Plan – ₹12300"}
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
              p16={"– 24/7 Support (SLA</span>: 48 Hours)"}
              p17={"Note: GST @ 18% Applicable on All Purchase"}
            />
          </div>
          <div className="border-2 w-[350px] ">
            <Plan
              Image={
                "https://www.zauca.com/wp-content/uploads/2017/12/Gold2.png"
              }
              Heading={"Gold Plan – ₹15300"}
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
              p16={"– 24/7 Support (SLA</span>: 48 Hours)"}
              p17={"Note: GST @ 18% Applicable on All Purchase"}
            />
          </div>
          <div className="border-2 w-[400px] h-[600px]">
            <Plan
              Image={
                "https://www.zauca.com/wp-content/uploads/2017/12/custom-solutions.jpg"
              }
              Heading={"Custom Solutions for Enterprises"}
              p19={
                "Almost any functionality that a client wants can be coded and integrated into the website, android application and CMS."
              }
              p20={
                "Common applications Special functionality for which there is not an off-the-shelf solution Extend common web components with your special business rules Integrate your web site with other systems. We know software and we engineer custom solutions"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsPlans;
