import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Brand1 from '../../../assets/brands/Brand4.png';
import Brand2 from '../../../assets/brands/Brand5.png';
import Brand3 from '../../../assets/brands/Brand6.png';
import home from '../../../assets/brands/home.svg';


const Home = () => {
    return (
        <div>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg '>
                    <div className='row'>
                        <div className='mx-auto'>
                            <div className='row '>

                                <div className='col-md-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>Welcome to our site <strong className='brand-name'>Web Hero</strong> </h1>
                                    <h3 className='my-3'> We are looking for you. You can learn programming here.</h3>
                                    <div className='mt-3'>
                                        <Link to='/course' className='mx-2 btn-get-started'><Button variant="outline-primary" >Our Course</Button></Link>
                                    </div>
                                </div>

                                <div className='col-lg-5 order-1 order-lg-2 header-img'>
                                    <img
                                        className="d-block w-100 "
                                        src={home}
                                        alt="homeimg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;