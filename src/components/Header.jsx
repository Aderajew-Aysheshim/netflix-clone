import React from "react";
import "./NavBar.css"; // Ensure NavBar.css exists
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className="header">
      <div className="header__contents">
        {/* Netflix Logo */}
        <a href="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </a>

        {/* Navigation Menu */}
        <ul className="header__nav">
          <li><a href="/">Home</a></li>
          <li><a href="/tv-shows">TV Shows</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/new-popular">New & Popular</a></li>
          <li><a href="/my-list">My List</a></li>
          <li><a href="/browse">Browse by Languages</a></li>
        </ul>

        {/* User Section */}
        <div className="header__right">
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>

        {/* User Avatar */}
        <a href="/profile">
          <img
            className="header__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
