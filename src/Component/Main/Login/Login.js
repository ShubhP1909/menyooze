import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import "./Login.css";

const Login = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="login-modal">
          <Modal.Header className="justify-content-center border-0">
            <Modal.Title id="contained-modal-title-vcenter">
              <img src="https://pehoy.com/customer-menyooze/img/logo@2x.png" alt='logo' height="120" width="142px"></img>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs defaultActiveKey="first" id="fill-tab-example">
              <Tab eventKey="first" title="Sign In">
                <div className="mt-4">
                  <div className="form-body">
                    <div className="input-g mb-3">
                      <div className="input-g-prepend">
                        <span className="input-group-text input-bg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                          </svg>
                        </span>
                      </div>
                      <input type="email" className="form-control form-email" placeholder="Email" />
                    </div>
                    <div className="input-g mb-3">
                      <div className="input-g-prepend">
                        <span className="input-group-text input-bg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                            <circle cx="12" cy="16" r="1"></circle>
                            <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                          </svg>
                        </span>
                      </div>
                      <input type="password" className="form-control form-email" placeholder="Password" />
                    </div>
                    <div className="text-center forgot-password">
                      <a href="/" className="theme-clr">Forgot Password?</a>
                    </div>
                    <a href="/" className="btn w-100 btn-theme">Sign In</a>
                    <div className="text-center mt-30">
                      New to Menyooze?
                      <a href="/" className="theme-clr">Signup</a>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="second" title="Sign Up">
                <div className="mt-4">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-6 pad">
                        <label htmlFor="FirstName" className="mb-2">FirstName</label>
                        <input type="text" className="form-control" placeholder="Type here..." />
                      </div>
                      <div className="col-6 pad-1">
                        <label htmlFor="Last Name" className="mb-2">Last Name</label>
                        <input type="text" className="form-control" placeholder="Type here..." />
                      </div>
                    </div>
                    <div className="mt-20">
                      <label htmlFor="Phone Number" className="mb-2">Phone Number</label>
                      <div className="input-tel">
                      <select className="form-select select-1">
                        <option>+34</option>
                        <option value="1">+91</option>
                        <option value="2">+01</option>
                      </select>
                      <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control tel-1" placeholder="Type here..." />
                      </div>
                    </div>
                    <div className="mt-20">
                      <label htmlFor="Email" className="mb-2">Email</label>
                      <input type="email" className="form-control" placeholder="Type here..." />
                    </div>
                    <div className="mt-20">
                      <label htmlFor="Password" className="mb-2">Password</label>
                      <input type="password" className="form-control" placeholder="Type here..." />
                    </div>
                    <div className="mt-20">
                      <label htmlFor="Confirm password" className="mb-2">Confirm password</label>
                      <input type="email" className="form-control" placeholder="Type here..." />
                    </div>
                    <div className="mt-20 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>  
                    <label htmlFor="exampleCheck1">I choose to agree to the <a href="/" className="theme-clr">Terms and Conditions </a>and <a href="/" className="theme-clr">Privacy Policy</a>.</label>
                    </div>
                    <a href="/" className="btn w-100 btn-theme mt-20">Sign In</a>
                  </div>
                </div>
              </Tab>
            </Tabs>

          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}


export default Login;