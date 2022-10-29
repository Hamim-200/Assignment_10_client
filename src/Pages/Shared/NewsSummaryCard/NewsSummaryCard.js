import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NewsSummaryCard = ({ news }) => {
    const { title, details, image_url, total_view } = news;

    return (
        <Card className="mb-5">

            < Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text> {details} </Card.Text>
            </  Card.Body >
            <Card.Footer className="d-flex justify-content-between" >
                <div>
                    <Button variant="success">Enroll Now</Button>
                </div>
                <div>
                    <span className='me-2'>Total Enroll: {total_view}</span>
                    <FaEye></FaEye>
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummaryCard;