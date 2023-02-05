import React from 'react';
import safety from "./ic_.png";

const Card = (props) => {
  return (
    <section>
      <div className="container-fluid container-xl">
        <div className="list-top-bar d-flex justify-content-between align-items-center border-bottom">
          <h3 className="font-xbold sm-font mb-3">{props.title}</h3>
          <a href="/" className="font-bold text-uppercase xs-font ms-3 mb-3 view-all" >View all</a>
        </div>
        <div className="row flex-nowrap rest-row-list">
          <div className="col-md-6 col-lg-3 col-xl-3 card-x">
            <div className="rest-card mb-4">
              <div className="rest-card-body card">
                <div className="top-card position-relative">
                  <a href="/">
                    <img src="https://pehoy.com/customer-menyooze/img/img_rest@2x.png" className="card-img-top" alt="foodItem"></img>
                  </a>
                  <button className="btn-icon bookmark-btn">
                    <input type="checkbox" className="d-none" />
                    <label htmlFor="bookmark" className="mb-0">
                      <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg" className="bookmark" height="24" width="24" alt="bookmark"></img>
                    </label>
                  </button>
                  <p className="percent-off xxs-font text-white position-absolute">20% off</p>
                  <p className="mi xxs-font text-white position-absolute">2.5 mi</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between rest-head">
                    <a href="/">
                      <h5 className="faraels-bistro font-bold mb-0">Farael’s Bistro</h5>
                    </a>
                    <div className="radius-4 ms-3 rating-badge">
                      <img src="https://img.icons8.com/ios-filled/2x/star.png" alt="star" className="star" height="10" width="10" />
                      <span>4.6/5</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <p className="xs-font">Fine Dine</p>
                    <p className="xs-font">£200 for Two</p>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <div className="xs-font">
                      <p className="grey-clr">Vegan, Italian</p>
                      <p className="grey-clr mb-0">793 Degu Manor</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rest-card-footer border-top">
                    <p className="green-clr xxs-font mb-0 d-flex align-items-start justify-content-center">
                      <img src={safety} className="me-1" alt="safety" height="16" width="16"></img>
                      Safe, contactless dining expeirence available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xl-3 card-x">
            <div className="rest-card mb-4">
              <div className="rest-card-body card">
                <div className="top-card position-relative">
                  <a href="/">
                    <img src="https://pehoy.com/customer-menyooze/img/img_rest@2x.png" className="card-img-top" alt="foodItem"></img>
                  </a>
                  <button className="btn-icon bookmark-btn">
                    <input type="checkbox" className="d-none" />
                    <label htmlFor="bookmark" className="mb-0">
                      <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg" className="bookmark" height="24" width="24" alt="bookmark"></img>
                    </label>
                  </button>
                  <p className="percent-off xxs-font text-white position-absolute">20% off</p>
                  <p className="mi xxs-font text-white position-absolute">2.5 mi</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between rest-head">
                    <a href="/">
                      <h5 className="faraels-bistro font-bold mb-0">Farael’s Bistro</h5>
                    </a>
                    <div className="radius-4 ms-3 rating-badge">
                      <img src="https://img.icons8.com/ios-filled/2x/star.png" alt="star" className="star" height="10" width="10" />
                      <span>4.6/5</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <p className="xs-font">Fine Dine</p>
                    <p className="xs-font">£200 for Two</p>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <div className="xs-font">
                      <p className="grey-clr">Vegan, Italian</p>
                      <p className="grey-clr mb-0">793 Degu Manor</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rest-card-footer border-top">
                    <p className="green-clr xxs-font mb-0 d-flex align-items-start justify-content-center">
                      <img src={safety} className="me-1" alt="safety" height="16" width="16"></img>
                      Safe, contactless dining expeirence available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xl-3 card-x">
            <div className="rest-card mb-4">
              <div className="rest-card-body card">
                <div className="top-card position-relative">
                  <a href="/">
                    <img src="https://pehoy.com/customer-menyooze/img/img_rest@2x.png" className="card-img-top" alt="foodItem"></img>
                  </a>
                  <button className="btn-icon bookmark-btn">
                    <input type="checkbox" className="d-none" />
                    <label htmlFor="bookmark" className="mb-0">
                      <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg" className="bookmark" height="24" width="24" alt="bookmark"></img>
                    </label>
                  </button>
                  <p className="percent-off xxs-font text-white position-absolute">20% off</p>
                  <p className="mi xxs-font text-white position-absolute">2.5 mi</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between rest-head">
                    <a href="/">
                      <h5 className="faraels-bistro font-bold mb-0">Farael’s Bistro</h5>
                    </a>
                    <div className="radius-4 ms-3 rating-badge">
                      <img src="https://img.icons8.com/ios-filled/2x/star.png" alt="star" className="star" height="10" width="10" />
                      <span>4.6/5</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <p className="xs-font">Fine Dine</p>
                    <p className="xs-font">£200 for Two</p>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <div className="xs-font">
                      <p className="grey-clr">Vegan, Italian</p>
                      <p className="grey-clr mb-0">793 Degu Manor</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rest-card-footer border-top">
                    <p className="green-clr xxs-font mb-0 d-flex align-items-start justify-content-center">
                      <img src={safety} className="me-1" alt="safety" height="16" width="16"></img>
                      Safe, contactless dining expeirence available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 col-xl-3 card-x">
            <div className="rest-card mb-4">
              <div className="rest-card-body card">
                <div className="top-card position-relative">
                  <a href="/">
                    <img src="https://pehoy.com/customer-menyooze/img/img_rest@2x.png" className="card-img-top" alt="foodItem"></img>
                  </a>
                  <button className="btn-icon bookmark-btn">
                    <input type="checkbox" className="d-none" />
                    <label htmlFor="bookmark" className="mb-0">
                      <img src="https://as1.ftcdn.net/v2/jpg/02/09/95/26/1000_F_209952615_GC39ziD79GKhPENQ3naltEh25GXXw9E3.jpg" className="bookmark" height="24" width="24" alt="bookmark"></img>
                    </label>
                  </button>
                  <p className="percent-off xxs-font text-white position-absolute">20% off</p>
                  <p className="mi xxs-font text-white position-absolute">2.5 mi</p>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between rest-head">
                    <a href="/">
                      <h5 className="faraels-bistro font-bold mb-0">Farael’s Bistro</h5>
                    </a>
                    <div className="radius-4 ms-3 rating-badge">
                      <img src="https://img.icons8.com/ios-filled/2x/star.png" alt="star" className="star" height="10" width="10" />
                      <span>4.6/5</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <p className="xs-font">Fine Dine</p>
                    <p className="xs-font">£200 for Two</p>
                  </div>
                  <div className="d-flex justify-content-between rest-info">
                    <div className="xs-font">
                      <p className="grey-clr">Vegan, Italian</p>
                      <p className="grey-clr mb-0">793 Degu Manor</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="rest-card-footer border-top">
                    <p className="green-clr xxs-font mb-0 d-flex align-items-start justify-content-center">
                      <img src={safety} className="me-1" alt="safety" height="16" width="16"></img>
                      Safe, contactless dining expeirence available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Card;











