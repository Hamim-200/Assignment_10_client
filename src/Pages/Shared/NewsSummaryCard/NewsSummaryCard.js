import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view } = news;

    return (


        // function BasicExample() {
        //     return (
        //         <Card style={{ width: '18rem' }}>
        //             <Card.Img variant="top" src="holder.js/100px180" />
        //             <Card.Body>
        //                 <Card.Title>{title}</Card.Title>
        //                 <Card.Text>
        //                     {
        //                         details.length > 250 ?
        //                             <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link> </>
        //                             :
        //                             details
        //                     }
        //                 </Card.Text>
        //                 <Button variant="primary">Go somewhere</Button>
        //             </Card.Body>
        //         </Card>
        //     );
        // }

        <Card className="mb-5">

            < Card.Body >
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text> {details} </Card.Text>
            </  Card.Body >

            {/* <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer> */}
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