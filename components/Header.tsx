import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white border-b border-b-gray-800 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-x-5">
          <MobileMenu />
          <Logo> Phong </Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-between gap-5">
          right
        </div>
      </Container>
    </header>
  );
};

export default Header;
