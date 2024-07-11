import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import WishList from "./WishList";
import NavCart from "./NavCart";
import { Link } from "react-router-dom";

const NavIcons = ({ setOpenSearch }) => {
  const [openWishList, setOpenWishList] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const icons = [
    { icon: <FaRegHeart />, id: "Heart-icon", badge: true },
    { icon: <IoIosSearch />, id: "Search-icon" },
    { icon: <CiUser />, id: "User-icon", link: "/login" },
    { icon: <BsCart3 />, id: "Cart-icon", badge: true },
  ];

  const handleIconClick = (iconType) => {
    if (iconType === icons[0].id) {
      setOpenWishList(true);
    }
    if (iconType === icons[1].id) {
      setOpenSearch(true);
    }
    if (iconType === icons[3].id) {
      setOpenCart(true);
    }
  };

  useEffect(() => {
    if (openCart || openWishList) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [openCart, openWishList]);

  return (
    <div className="flex gap-4 items-center">
      {icons.map((curIcon, index) => {
        return (
          <div
            id={curIcon.id}
            key={index}
            className="text-xl relative cursor-pointer"
            onClick={() => {
              handleIconClick(curIcon.id);
            }}
          >
            {curIcon.link ? (
              <Link to={curIcon.link}>{curIcon.icon}</Link>
            ) : (
              curIcon.icon
            )}
            {curIcon.badge && (
              <div className="absolute -top-1 left-3 w-4 h-4 rounded-full bg-primary grid text-white place-content-center text-low">
                0
              </div>
            )}
          </div>
        );
      })}
      {openWishList && <WishList closeWishList={setOpenWishList} />}
      {openCart && <NavCart closeCart={setOpenCart} />}
    </div>
  );
};

export default NavIcons;
