import React from "react";
import Navbar from "../Navbar/Navbar";
import Searchform from "../Searchform/Searchform";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Find your Book of choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Welcome to our book search platform, where the world of literature
            is at your fingertips. Dive into a vast collection of books from
            various genres, authors, and eras with ease. Whether you're hunting
            for a timeless classic or exploring the latest bestsellers, our
            website is your gateway to discovering, exploring, and immersing
            yourself in the enchanting realm of books. Get ready to embark on a
            journey of literary exploration like never before!
          </p>
          <Searchform />
        </div>
      </header>
    </div>
  );
};

export default Header;
