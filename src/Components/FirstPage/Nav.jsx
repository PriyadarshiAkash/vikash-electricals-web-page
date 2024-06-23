import React from "react";

const Nav = () => {
  return (
    <div>
      <div className="bg-slate-800  hidden md:block ">
        <div className="flex p-3 justify-between">
          <div className=" text-white text-sm flex space-x-6 mx-">
            <div className="flex space-x-2">
              <div>
                <img
                  className="h-5 w-6 rounded-md"
                  src="https://www.pngitem.com/pimgs/m/268-2684180_grey-phone-icon-png-clipart-png-download-grey.png"
                  alt=""
                />
              </div>
              <div>8595432960</div>
            </div>
            <div className="flex space-x-2">
              <div className="">
                <img
                  className="bg-white h-5 w-6 rounded-md"
                  src="https://cdn-icons-png.flaticon.com/128/10421/10421464.png"
                  alt=""
                />
              </div>
              <div>support@akash.in</div>
            </div>
          </div>

          <div className="flex space-x-6">
            <div>
              <img
                className="h-5 w-6 rounded-md"
                src="https://th.bing.com/th/id/OIP.p1qhAUaiuMBYlZznfjfxOgHaHw?w=191&h=200&c=7&r=0&o=5&pid=1.7"
                alt="whatsapp"
              />
            </div>
            <div>
              <img
                className="h-5 w-6 rounded-md"
                src="https://th.bing.com/th/id/OIP.TCXRgFk1N5mv-R3N2PGbtAHaHa?w=200&h=201&c=7&r=0&o=5&pid=1.7"
                alt="facebook"
              />
            </div>
            <div>
              <img
                className="h-5 w-6 rounded-md"
                src="https://th.bing.com/th/id/OIP.HdQ2tep_xFAs1n5lgLX8dgAAAA?pid=ImgDet&w=150&h=150&c=7"
                alt="twitter"
              />
            </div>
            <div>
              <img
                className="h-5 w-6 rounded-md"
                src="https://th.bing.com/th/id/OIP.aGj5ng13KYjm5NCfXyQYkgHaHa?pid=ImgDet&w=203&h=203&c=7"
                alt="p"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Nav;
