import React from 'react';
import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const Blog = () => {

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
      <div className='mt-6 mx-auto shadow-2xl bg-slate-200 '  >
          <Fragment>
            <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    What is cors?
                </AccordionHeader>
                <AccordionBody>
                    CORS is a client-enforced HTTP security technique (web browser). It lets a service (API) declare any other origin from which the client can request resources. In reaction to the same-origin policy (SOP), it restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS specifically allows or rejects cross-origin requests.Web browsers employ CORS, but API clients can too. Chrome, Firefox, Opera, and Safari have it. In January 2014, W3C recommended the standard. That implies that all web browsers, including those not listed, support it.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                Why are you using firebase? What other options do you have to implement authentication?
                </AccordionHeader>
                <AccordionBody>
                Firebase is simple. Google Firebase can quickly turn a JavaScript client-side software into a serverless app. It eliminates database management. Google Firebase is the backend development platform for online and mobile apps because to its various functionalities. It speeds development. Perfect for prototyping. Firebase is easy, lightweight, pleasant, and industry-recognized.
                Without Firebase the most well-known options to Firebase Authentication include Auth0, MongoDB, Passport, Okta.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                How does the private route work?
                </AccordionHeader>
                <AccordionBody>
                    We're not always in the position that we want to be at. We're
                    constantly growing. We're constantly making mistakes. We're constantly
                    trying to express ourselves and actualize our dreams.React Router's Private Routes, also known as Protected Routes, demand that a user has permission to access the route (read: page). Therefore, a user cannot visit a page if they are not authorized to do so. The most prevalent instance of this is authentication in React applications, where a user can only access protected pages after receiving authorization. The only differences between the private route component and the public route are the redirect URL and the authenticate condition. The user can only access the authenticated routes if they are authenticated, otherwise else they will be sent to the login page. If he has been verified (Logged in)
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                How does the private route work?What is Node? How does Node work?
                </AccordionHeader>
                <AccordionBody>
                Node.js is an open-source, single-threaded, cross-platform runtime environment for creating networking and server-side applications that are quick and scalable. It utilizes event-driven, non-blocking I/O architecture and operates on the V8 JavaScript runtime engine, making it effective and suited for real-time applications. Node.js is a framework for creating quick and scalable network applications that is based on Chrome's JavaScript runtime. Node.js is lightweight and efficient, making it ideal for data-intensive real-time applications that operate across dispersed devices. It uses an event-driven, non-blocking I/O approach. Additionally, Node.js offers a comprehensive library of different JavaScript modules, greatly streamlining the creation of web applications utilizing Node.js.
                </AccordionBody>
            </Accordion>
        </Fragment>
      </div>
    );
}

export default Blog;