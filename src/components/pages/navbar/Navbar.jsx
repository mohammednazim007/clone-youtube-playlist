"use client";
import { Button, Navbar } from "keep-react";
import { Heart, MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
import "./nav.css";
import { Link } from "react-router-dom";
import { useStore } from "easy-peasy";

const NavbarComponent = () => {
  return (
    <Navbar fluid={false} className="bg_nav">
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex items-center justify-between gap-8"
        >
          <Link to={"/home"}>
            <h1 className="text-2xl md:text-4xl">Clean Youtube</h1>
          </Link>
        </Navbar.Container>

        {/*nav list item push here */}
        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-1">
            {/* <Navbar.Link linkName="Home" />
            <Navbar.Link linkName="Projects" /> */}
            <Link className="navList" to={"/home"}>
              Home
            </Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/contact"}>Contact</Link>
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link
              icon={<MagnifyingGlass size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<User size={20} color="#444" />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<Heart size={20} color="#444" />}
              iconAnimation={false}
            />
          </Navbar.Container>

          <Button size="xs" type="outlineGray">
            <span>
              <ShoppingCart size={20} color="#444" />
            </span>
            <span className="ml-1 text-metal-600">Cart $0.00</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};
export default NavbarComponent;
