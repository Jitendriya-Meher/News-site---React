import React from "react";

const Navbar = ({setCategory,setCountry}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary flex flex-wrap justify-center items-center"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <span className="badge bg-light text-dark fs-4 text-center">
            NewsApp
          </span>
        </div>
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav cursor-pointer flex flex-wrap justify-center items-center">
            
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("technology");
              }}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("business");
              }}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("sports");
              }}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("entertainment");
              }}>
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("health");
              }}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("science");
              }}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCategory("general");
              }}>
                General
              </div>
            </li>

          </ul>
        </div>

        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav cursor-pointer flex flex-wrap justify-center items-center">
            
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCountry("in");
              }}>
                India
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link"
              onClick={() => {
                setCountry("us");
              }}>
                USA
              </div>
            </li>
           

          </ul>
        </div>
        
      </div>

    </nav>
  );
};

export default Navbar;
