import React from 'react';
import { Link } from 'react-router-dom';

const RegBanner = () => {
  return (
    <section className="mt-5">
      <div className="container-fluid container-xl">
        <div className="reg-banner border radius-4 text-white">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">
              <h4 className="font-xbold lg-font mb-10 reg-banner-title">Register as Restaurant</h4>
              <p className="s-font reg-banner-text">Get on board and increase your sales by 30%*</p>
              <Link className="btn sign signup" to="/search">Search</Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default RegBanner;