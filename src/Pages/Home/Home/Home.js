import React from 'react';
import { Button } from 'react-bootstrap';
// import { useLoaderData } from 'react-router-dom';
// import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Brand1 from '../../../assets/brands/Brand1.jpeg';
import Brand2 from '../../../assets/brands/Brand2.jpeg';
import Brand3 from '../../../assets/brands/Brand3.jpeg';
import home from '../../../assets/brands/home.svg';


const Home = () => {
    // const allNews = useLoaderData();
    return (
        <div>
            {/* <h2>Dragon News Home: {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            } */}
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