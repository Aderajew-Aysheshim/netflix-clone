import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Questions? Call 1-800-000-0000</p>

        <div className="footer__social">
          <FacebookOutlinedIcon className="footer__icon" />
          <TwitterIcon className="footer__icon" />
          <InstagramIcon className="footer__icon" />
          <YouTubeIcon className="footer__icon" />
        </div>

        <div className="footer__linkLists">
          <ul>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Investor Relations</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Speed Test</a></li>
          </ul>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Jobs</a></li>
            <li><a href="/">Cookie Preferences</a></li>
            <li><a href="/">Legal Notices</a></li>
          </ul>
          <ul>
            <li><a href="/">Account</a></li>
            <li><a href="/">Ways to Watch</a></li>
            <li><a href="/">Corporate Information</a></li>
            <li><a href="/">Only on Netflix</a></li>
          </ul>
        </div>

        <p className="footer__copyright">
          Netflix Ethiopia Clone &copy; 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
// This Footer component serves as the bottom section of the Netflix clone app.