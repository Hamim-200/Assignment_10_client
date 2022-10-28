import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h3>What is cors?</h3>
                <p><b>Ans:</b> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div>
                <h3>Why are you using `firebase`? What other options do you have to implement authentication?</h3>
                <p><b>Ans:</b> Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range.The other options to implement authentication are Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div>
                <h3>How does the private route work?</h3>
                <p><b>Ans:</b> The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div>
                <h3>What is Node? How does Node work?</h3>
                <p><b>Ans:</b> Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. </p>
            </div>
        </div>
    );
};

export default Blogs;