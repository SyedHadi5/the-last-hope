import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sparkle from 'react-sparkle';

export default function Messages(props) {

    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('〜 We are what we do. Exellence, therefore, is not an act but a habit. - Aristotle');
    const [data, setData] = useState([
        "We cannot solve problems with the kind of thinking we employed when we came up with them. - Albert Einstein",
        "When you change your thoughts, remember to also change your world. - Norman Vincent Peale",
        "There is always something more to learn. Even for a master. - Master Oogway",
        "Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
        "Success usually comes to those who are too busy looking for it. - Henry David Thoreau",
        "Don’t let yesterday take up too much of today. - Will Rogers",
        "It matters not what someone is born, but what they grow to be. - Master Oogway",
        "If your working on something that you really care about, you dont have to be pushed. The vision pulls you. - Steve Jobs",
        "Either you run the day or the day runs you. - Jim Rohn",
        "If you only do what you can do, you will never be more than you are now. - Master Oogway",
        "It is often the small steps, not the giant leaps, that bring about the most lasting change. - Queen Elizabeth II",
        "The bad news is time flies. The good news is you're the pilot. - Michael Altshuler",
        "When the path you walk always leads back to yourself, you never get anywhere. - Master Oogway",
        "Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman",
        "It is during our darkest moments that we must focus to see the light. - Aristotle",
        "Weaknesses are just strengths in the wrong environment. - Marianne Cantwell",
        "One often meets his destiny on the road he takes to avoid it. - Master Oogway",
        "Don't cry because it's over, smile because it happened. - Dr. Seuss",
        "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
        "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
        "It often requires more courage to dare to do right than to fear to do wrong. - Abraham Lincoln",
        "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
        "It is never too late to be what you might have been. - George Eliot",
        "As we look ahead into the next century, leaders will be those who empower others. - Bill Gates",
    ]);

    useEffect(() => {
        if (props?.show == true) {
            chooseText()
        }
        setOpen(!open)
    }, [props?.show])

    const chooseText = () => {
        let Arr = data;
        let random = Math.floor(Math.random() * Arr?.length);
        let value = Arr[random] || 'Come back, next time for more !';
        setMsg("〜 " + value)
        Arr.splice(random, 1)
        typeMessage()
    }

    var num = 0;
    function typeMessage() {
        if (num < msg?.length) {
            setShow(true)
            document.getElementById("msg").innerHTML += msg?.charAt(num);
            num++;
            setTimeout(typeMessage, 50);
        }
        if (num == msg?.length) {
            setShow(false)
        }
    }

    return (
        <div>
            <Modal show={props?.show} onHide={props?.handleClose} size="lg" centered backdrop="static" keyboard={false}>
                <Sparkle flickerSpeed={'slowest'} color={'#FFF'} count={20} />
                <Modal.Header className="message">
                    <Modal.Title>〜 Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body className="message">
                    <p id="msg"> </p>
                </Modal.Body>
                <Modal.Footer className="message">
                    <Button variant="outline-light" onClick={props?.handleClose} disabled={show}>
                        Ask Again ?
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}