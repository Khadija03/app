import React,{useState} from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem, Badge, Container, Row, Col, Tooltip, OverlayTrigger, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { x } from '../Members'
import './Buttonfilter.css'


function Buttonfilter() {
    const [data,] = useState(x);
    const [state, setstate] = useState(0);
    const [personne, setpersonne] = useState();
    const [tous, settous] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [start, setstart] = useState(false);

    const filtre = (etat) => {
        if (etat == "Tous") {
            setfiltred(tous)
        } else {

            const result = tous.filter(element => element.etat == etat);

            setfiltred(result);
        }


    }


    return (
        <div>
            <Container>
                <Row  id='results1' >
                    <ButtonGroup aria-label="Basic example" size="lg"  >
                        <Button variant='light' onClick={() => filtre("Tous")}>Tous</Button>
                        <Button variant="light" onClick={() => filtre("Absent")}>Absent</Button>
                        <Button variant="light" onClick={() => filtre("Present")} >Present</Button>
                    </ButtonGroup>
                </Row>

            </Container>
        </div>
    )
}

export default Buttonfilter
