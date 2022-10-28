import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What Is Web Development?</Accordion.Header>
                    <Accordion.Body>
                        Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why should we learn web development?</Accordion.Header>
                    <Accordion.Body>
                        <h4>1. Web Developers Are In-Demand</h4><br />
                        <p>Today, the online experience is essential to the success of every business and organization. Without a web developer, companies are left using drag-and-drop web builders like Squarespace or a WordPress template.
                            While these might do the trick for some companies, many more rely on a web developer or team of developers to deliver the unique, engaging, and well-designed experiences consumers expect today</p>
                        <h4>2. Web Developers Earn a Great Living</h4><br />
                        <p>Though compensation is based on experience like every other industry, the average web developer in Indiana earns $79,476 a year according to Glassdoor. This is around $30 an hour, significantly higher than the Indiana statewide average hourly pay of $17.54 per hour.</p>
                        <h4>3. Web Developers Get to Be Creative
                        </h4><br />
                        <p>As a front-end web developer, you’ll take web design requirements and discuss with user experience experts about colors, layout, and features. Then, it’s your job to take all that discussion and make it come to life. Back-end developers are more immersed in the background components of a website or web application.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    );
};

export default FAQ;