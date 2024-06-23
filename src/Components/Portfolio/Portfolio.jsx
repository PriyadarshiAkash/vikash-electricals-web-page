import React from "react";
import Screens from "./Screens";
import Client from "../RealClientTestimonials/Client";

const Portfolio = () => {
  return (
    <div>
      <div className="bg-sky-50 mt-[200px] space-y-5">
        <div className="flex justify-center text-4xl text-slate-700 font-semibold pt-[80px]">
          <h1>Portfolio</h1>
        </div>
        <div className="flex justify-center text-lg">
          <p className="w-[950px] text-slate-500 text-center">
            With the Internet spreading like wildfire and reaching every part of
            our daily life, more and more traffic is directed to websites in
            search for information.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-20">
          <Screens
            Heading={"Empirical Strategy, USA"}
            Paragraph={
              "Corporate Strategy in Lakecity, USA, Business Unit Strategy, Lake City, Privaty Equity Business Website, Strategy Realisation Website Design, Business Analytics  Website Design in USA"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
          <Screens
            Heading={"Ria Institute, Bangalore"}
            Paragraph={
              "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
          <Screens
            Paragraph={
              "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
          <Screens
            Paragraph={
              "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
          <Screens
            Paragraph={
              "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
          <Screens
            Paragraph={
              "Training Institute Web Design in Bangalore, Website Design for Training Institute, Low Cost Website Design India for Coaching Institute, Affordable Website Design Company, Training Institute Website"
            }
            Image={
              "https://th.bing.com/th/id/OIP.O4DchIKgwH9WO4WA5A4OpQHaFV?w=265&h=191&c=7&r=0&o=5&pid=1.7"
            }
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-400 p-2 px-6 mt-3 text-white text-sm font-semibold rounded-md transition-transform duration-300 transform hover:scale-110">
            Ask For More Portfolio by Akash
          </button>
        </div>
        <div className="">
          <Client />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
