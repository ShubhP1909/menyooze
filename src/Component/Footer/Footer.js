import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container-fluid container-xl">
        <div className="group-30">
          <div className="row justify-content-between">
            <div className="col-sm-6">
              <a href="https://pehoy.com/customer-menyooze" target="_blank" rel="noopener noreferrer">
                <img src="https://pehoy.com/customer-menyooze/img/logo_menyooze.svg" alt="logo" height="40" width="232"></img>
              </a>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-3 col-xl-2">
              <select className="form-control custom-select">
                <option value="1">English</option>
                <option value="2">Italian</option>
                <option value="3">Others</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg">
            <h5 className="mb-10 text-uppercase font-bold">Contact</h5>
            <p className="mb-10">12, Deckard Street, San Francisco, CA</p>
            <p className="mb-10">
              <a href="mailto:support@menyooze.com" className="support">support@menyooze.com</a>
            </p>
            <p className="mb-10">
              <a href="callto:(307) 313-1399" className="contact">(307) 313-1399</a>
            </p>
          <div className="d-flex mt-1 mb-4 pb-2 icon">
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src="https://simg.nicepng.com/png/small/71-717653_instagram-svg-png-icon-free-download-logo-instagram.png" className="me-3" alt="instagram" width="30" height="30"></img>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="http://cdn.onlinewebfonts.com/svg/img_465870.png" className="me-3" alt="facebook" width="30" height="30" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://icon-library.com/images/twitter-svg-icon/twitter-svg-icon-2.jpg" className="me-3" alt="twitter" width="30" height="30"></img>
            </a>
          </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg">
          <h5 className="mb-10 text-uppercase font-bold">Menyooze</h5>
          <ul className="list-unstyled  mb-4">
          <li className="py-1">About Us</li>
          <li className="py-1">Restaurant Sign up</li>
          <li className="py-1">FAQs</li>
          <li className="py-1">Terms and Condition</li>
          <li className="py-1">Privacy Policy</li>
          <li className="py-1">Contact Us</li>
          </ul>
          </div>

          <div className="col-sm-6 col-md-4 col-lg">
          <h5 className="mb-10 text-uppercase font-bold">Discover</h5>
          <ul className="list-unstyled mb-4">
          <li className="py-1">Cuisines near me</li>
          <li className="py-1">Restaurants near me</li>
          <li className="py-1">Clubs near me</li>
          <li className="py-1">Beach Houses near me</li>
          <li className="py-1">Restaurants open now</li>
          </ul>
          </div>

          <div className="col-sm-6 col-md-4 col-lg">
          <h5 className="mb-10 text-uppercase font-bold">Discover</h5>
          <ul className="list-unstyled mb-4">
          <li className="py-1">Cuisines near me</li>
          <li className="py-1">Restaurants near me</li>
          <li className="py-1">Clubs near me</li>
          <li className="py-1">Beach Houses near me</li>
          <li className="py-1">Restaurants open now</li>
          </ul>
          </div>

          <div className="col-sm-6 col-md-4 col-lg">
          <h5 className="mb-10 text-uppercase font-bold">Discover</h5>
          <ul className="list-unstyled mb-4">
          <li className="py-2">
            <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
              <img src="https://pehoy.com/customer-menyooze/img/appstore@2x.png" className="mb-2 mb-md-3 me-2" width="170" height="50" alt="playstore"></img>
            </a>
          </li>
          <li className="py-2">
            <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
              <img src="https://pehoy.com/customer-menyooze/img/playstore@2x.png" className="mb-2 mb-md-3 me-2" width="170" height="50" alt="playstore"></img>
            </a>
          </li>
          </ul>
          </div>

          <div className="footer-bottom text-center border-top">
            <div className="container-fluid container-xl"> 
             <p className="mb-0">Copyright © Menyooze Inc. All Rights Reserved</p>   
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;