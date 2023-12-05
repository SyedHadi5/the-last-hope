import React, { useState, useEffect } from 'react';
import './component.css';
import Menu from './Menu';
import Messages from './Messages';
import Fade from 'react-bootstrap/Fade';


export default function WelcomeScreen() {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [see, setSee] = useState(true);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        typeWriter()
    }, [])


    var num = 0;
    var text = '〜 Welcome my Child ! Have you come here for peace ?';
    function typeWriter() {
        if (num < text?.length) {
            document.getElementById("demo").innerHTML += text?.charAt(num);
            num++;
            setTimeout(typeWriter, 75);
        }
        if (num == text?.length) {
            setSee(!see)
            setOpen(!open)
        }
    }

    return (
        <div>
            <Menu />
            <div className="text">
                <p id="demo"> </p>
            </div>
            <div className="action">
                <Fade in={open}>
                    <button type="button" disabled={see} className="btn btn-circle btn-xl text-light shadow-none outline-none" onClick={handleShow}>
                        Ask Oogway!
                    </button>
                </Fade>
                <Messages show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
            </div>
        </div>
    )
}