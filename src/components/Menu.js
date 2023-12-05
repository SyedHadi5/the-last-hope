import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";


export default function Menu() {

    const [time, setTime] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let val = new Date();
            let format = val?.toLocaleTimeString()
            setTime(format)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Navbar variant="dark" className="menu rounded">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="./favicon.ico"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Ask Oogway
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>{time}</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}