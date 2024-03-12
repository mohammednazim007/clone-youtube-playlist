"use client";
import { Button, Navbar, TextInput } from "keep-react";
import {
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  User,
  YoutubeLogo,
} from "phosphor-react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useStoreState } from "easy-peasy";
const NavbarComponent = () => {
  const { items } = useStoreState((state) => state.favoriteNotification);

  return (
    <Navbar fluid={false} className="bg_nav">
      <Navbar.Container className="flex items-center justify-between lg:py-3">
        <Navbar.Container
          tag="ul"
          className="lg:flex items-center justify-between gap-5"
        >
          <Link to={"/home"}>
            <YoutubeLogo size={40} color="#fa006c" />
          </Link>
          <Link to={"/home"}>
            <span className="font-bold  text-xl hidden lg:block">
              <span className="text-[#F7418F]">YOU</span>TUBE
            </span>
          </Link>
        </Navbar.Container>

        {/*nav list item push here */}
        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="w-full flex flex-col gap-1">
            <Link className="navList" to={"/home"}>
              Home
            </Link>
            <Link className="navList" to={"/home/product"}>
              Product
            </Link>
            <Link className="navList" to={"/home/contact"}>
              Contact
            </Link>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-center gap-5"
          >
            <div className="hidden lg:flex">
              <TextInput
                id="#id-10"
                placeholder="Search anything"
                color="gray"
                sizing="sm"
                type="text"
                addon={<MagnifyingGlass size={20} color="#5E718D" />}
                addonPosition="left"
              />
            </div>

            {/* === heart notification icon with modal === */}
            <div className="relative ">
              {<Heart size={30} color="#444" />}

              <span className="absolute font-semibold top-[-0.25rem] lg:top-[-0.25rem] left-0 text-red-600 bg-white rounded text-xs w-4 h-4 text-center">
                {items ? items.length : 0}
              </span>
            </div>
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
          </Button>
          <Navbar.Toggle className="w-9" />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
export default NavbarComponent;
