import React from 'react';

const Getapp = () => {
  return (
    <section>
      <div className="container-fluid container-xl">
        <div className="get-app radius-4 border">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="get-app-content">
                <h3 className="font-bold lg-font mb-10">Get the App</h3>
                <p className="s-font pb-2">Download Menyooze app and make your reservation from anywhere anytime</p>
                <div className="d-inline-block text-white">
                  <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                    <img src="https://pehoy.com/customer-menyooze/img/appstore@2x.png" className="mb-2 mb-lg-0 me-2" width="170" height="50" alt="playstore"></img>
                  </a>
                  <a href="https://play.google.com/store/games" target="_blank" rel="noopener noreferrer">
                    <img src="https://pehoy.com/customer-menyooze/img/playstore@2x.png" className="mb-2 mb-lg-0" width="170" height="50" alt="playstore"></img>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-5 align-self-end">
            <img src="https://pehoy.com/customer-menyooze/img/img_menyooze_app@2x.png" className="img-fluid" alt="mobile"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Getapp;