import React, { useEffect, useState } from "react";
import CouponOffer from "./CouponOffer";
import NavMenu from "./NavMenu";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full z-[100000] transition-all ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <CouponOffer />
      <NavMenu />
    </header>
  );
};

export default Nav;
