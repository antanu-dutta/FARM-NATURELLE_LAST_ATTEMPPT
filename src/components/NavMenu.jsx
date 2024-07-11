import React, { useState } from "react";
import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";
import Search from "./Search";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [showNavLinks, setShowNavLinks] = useState(null);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      {showNavLinks && <div className="fixed-element -z-[1000]"></div>}
      <div className="bg-white h-[80px]">
        <div className="container">
          <div className="relative">
            <div
              className={`py-2 justify-between items-center ${
                openSearch ? "hidden" : "flex"
              }`}
            >
              <div className="flex items-center gap-5">
                <Link to="/">
                  <img
                    src="https://farmnaturelle.com/cdn/shop/files/Logo_1_1.png?v=1694410359"
                    alt=""
                  />
                </Link>

                {/* // ! Menu Links are here  */}

                <NavLinks
                  showNavLinks={showNavLinks}
                  setShowNavLinks={setShowNavLinks}
                />
              </div>

              {/* // ! Nav icons are here  */}

              <NavIcons setOpenSearch={setOpenSearch} />
            </div>
            {/* // ! Search bar  */}
            <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
