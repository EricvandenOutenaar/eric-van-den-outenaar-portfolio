import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <SocialLinks type="footer"></SocialLinks>
        <h4>
          copyright&copy; {new Date().getFullYear()} | &nbsp;
          <span>Eric van den Outenaar</span> | all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
