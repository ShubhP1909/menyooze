import React from 'react';
// import location from "../icons8-location-24.png";
import Button from 'react-bootstrap/Button';
import Login from './Main/Login/Login';
import { Link } from 'react-router-dom';

const Header = () => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <header className="fixed-top bg-white">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid container-xxl">
                        <div className="d-flex align-items-center">
                            <Link className="navbar-brand me-3 me-sm-5" to="/">
                                <img src="https://pehoy.com/customer-menyooze/img/menyooze@2x.png" className="img-1" alt="logo"></img>
                            </Link>
                            <div className="d-flex align-items-center justify-content-around">
                                {/* <img src={location} alt="location"></img> */}
                                <input type="text" className="form-control d-none d-md-block san-fransisco-calif" placeholder="San Francisco, California" />
                                <img src="https://pehoy.com/customer-menyooze/img/ic_arrow_down.svg" alt="downarrow"></img>
                            </div>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse align-items-center" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-md-auto align-items-center">
                                <li className="nav-item">
                                    <Button variant="white" className="border-0 font-bold" onClick={() => setModalShow(true)}>
                                        Login
                                    </Button>
                                </li>
                                <li className="nav-item">
                                    <Button variant="white" className="sign signup" onClick={() => setModalShow(true)}>
                                        Signup
                                    </Button>
                                </li>
                                <li className="nav-item dropdown dp-1">
                                    <a className="nav-link dropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Eng
                                        <img src="https://pehoy.com/customer-menyooze/img/ic_dropdown.svg" alt="droparrow"></img>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-lg-end">
                                        <li><a className="dropdown-item" href="/">Eng</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Italian</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">Spanish</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/">French</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <Login show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
export default Header;