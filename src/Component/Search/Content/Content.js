import React from 'react';
import filter from "./filter.svg";
import newestfirst from "./align-justified.svg";
import plus from "./red-plus.png";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const Content = () => {
    return (
        <main className="content">
            <div className="container-fluid container-xl">
                <div className="row">
                    <div className="col-md-3">
                        <div className="d-flex align-items-center justify-content-around filter-group">
                            <button className="btn d-md-none py-3 fw-bold fs-5 w-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                                <img src={filter} alt="filter" className="me-2"></img>
                                Filter</button>
                            <button className="btn d-md-none py-3 fw-bold fs-5 w-50" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                                <img src={newestfirst} alt="newestfirst" className="me-2"></img>
                                Newest First</button>
                        </div>
                        <div className="offcanvas-md offcanvas-end w-100" tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">Filter</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body d-md-block">
                                <div className="sidebar">
                                    <div className="filter-body">
                                        <div>
                                            <h1 className="filter-title border-bottom-grey">Seating Options</h1>
                                            <div className="mb-30 filter-option">
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Indoor</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Outdoor</label>
                                                </div>
                                            </div>
                                            <h1 className="filter-title border-bottom-grey">Cuisines</h1>
                                            <div className="mb-30 filter-option">
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Chinese</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Italian</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Mexican</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Thai</label>
                                                </div>
                                                <div className="mb-3">
                                                    <img src={plus} alt="plus" height="24" width="24"></img>
                                                    <button className="btn btn-white view-more">View More</button>
                                                </div>
                                            </div>
                                            <div className="mb-30">
                                                <div className="mb-3">
                                                    <h1 className="filter-title border-bottom-grey">Price Range</h1>
                                                    <div class="slider-styled" id="slider-round"></div>
                                                </div>
                                            </div>
                                            <h1 className="filter-title border-bottom-grey">Services</h1>
                                            <div className="mb-30 filter-option">
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">BreakFast</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Lunch</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Dinner</label>
                                                </div>
                                                <div className="mb-3">
                                                    <input className="form-check-input custom-checkbox" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label checkbox-label" for="flexCheckDefault">Cafe</label>
                                                </div>
                                                <div className="mb-3">
                                                    <img src={plus} alt="plus" height="24" width="24"></img>
                                                    <button className="btn btn-white view-more">View More</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Nav className="">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">

                                </Tab.Pane>
                                <Tab.Pane eventKey="second">

                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Content;