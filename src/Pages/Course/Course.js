import React from 'react';
import { Col, Row } from 'react-bootstrap';
import News from '../News/News/News';
// import { useLoaderData } from 'react-router-dom';
// import News from '../News/News/News';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
// import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Course = () => {
    return (
        <div>

            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="10">
                    <h2>All of our Courses </h2>
                    {/* {
                        allNews.map(news => <NewsSummaryCard
                            key={news._id}
                            news={news}
                        ></NewsSummaryCard>)
                    } */}
                    <News></News>


                </Col>

            </Row>

        </div>
    );
};

export default Course;