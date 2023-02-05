import React from 'react';
import TimePicker from 'react-bootstrap-time-picker';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { Link } from 'react-router-dom';


const HeaderImg = () => {

  return (
    <div className="container-fluid himg">
      <div className="home">
        <div className="banner">
          <div className="container-fluid container-xl position-relative">
            <div className="search">
              <h1 className="make-a-reservation">Make a Reservation</h1>
              <form>
                <div className="row g-2 align-items-center md-width justify-content-center flex-lg-nowrap">
                  <div className="col-md-12 pad-5 col-lg-auto">
                    <div className="input-group">
                      <DateRangePicker initialSettings={{
                        startDate: '1/1/2014',
                        endDate: '3/1/2014',
                        singleDatePicker: true,
                        showDropdowns: true,
                        locale: {
                          format: "DD/MM/YYYY"
                        }
                      }}>
                        <input type="text" className="form-control mb-2 datepick radius-7"></input>
                      </DateRangePicker>
                      <TimePicker className="timepick radius-7" start="00:00" end="24:00" step={30}>
                      </TimePicker>
                      <div className="people-input mb-2 radius-7">
                        <select className="form-select spick">
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6">6 People</option>
                          <option value="7">7 People</option>
                          <option value="8">8 People</option>
                          <option value="9">9 People</option>
                          <option value="10">10 People</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm pad-5 col-lg">
                    <input type="text" className="form-control mb-2 radius-7 sinp" placeholder="Location, Restaurant or Custine" />
                  </div>
                  <div className="col-auto pad-5 search-btn">
                    <Link className="btn sign signup mb-2 search-btn" to="/search">Search</Link>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default HeaderImg;