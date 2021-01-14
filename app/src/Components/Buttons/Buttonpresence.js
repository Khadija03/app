import React,{useState} from 'react';
import { x } from '../Members'
import { Button, ButtonGroup, ListGroup, ListGroupItem, Badge, Container, Row, Col, Tooltip, OverlayTrigger, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Buttonpresence.css';

function Buttonpresence() {
    const [data,] = useState(x);
    const [state, setstate] = useState(0);
    const [personne, setpersonne] = useState();
    const [tous, settous] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [start, setstart] = useState(false);

    const Mainfct = (etat) => {

        if (state == 8) {
            setfiltred((prev) => [{ name: personne, etat }, ...prev])
            setpersonne(data[state - 1].prenom + " " + data[state - 1].nom);
            settous((prev) => [{ name: personne, etat }, ...prev]);
            document.getElementById('tohide').style.display = "none";

        }
        else {
            if (etat == "go") {
                setstate(state + 1);
                setpersonne(data[state].prenom + " " + data[state].nom);

            } else {
                setfiltred((prev) => [{ name: personne, etat }, ...prev])
                setstate(state + 1);
                setpersonne(data[state].prenom + " " + data[state].nom);
                settous((prev) => [{ name: personne, etat }, ...prev])

            }
        }

    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Cliquez pour commencer l'appel
        </Tooltip>
    );

    return (
        <div>
             <Container>
                    <Row id='names' xs={1} md={2} lg={4}>
                        <Col >
                            <div id="names" >
                                {start ? null :
                                    <OverlayTrigger
                                        placement="right"
                                        delay={{ show: 250, hide: 400 }}
                                        overlay={renderTooltip}>
                                        <Button onClick={() => {
                                            setstart(!start);
                                            setpersonne(data[state].prenom + " " + data[state].nom);
                                            Mainfct("go");
                                        }} variant='start'><h4 style={{ fontSize: '40px', color: '#e0ded2' }} >Commencer</h4>
                                        </Button>
                                    </OverlayTrigger>
                                }
                                <h3 id="showname" style={{ fontSize: '40px', color: '#e0ded2' }}> {personne}  </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row id='buttons' xs={1} md={2} lg={6} >

                        <Col  >
                            <button type="button" disabled={!start} onClick={() => Mainfct("Present")} className="btn btn-success">Present</button>
                        </Col>
                        <Col >
                            <button type="button" disabled={!start} onClick={() => Mainfct("Excusé")} className="btn btn-warning">Excusé</button>
                        </Col>
                        <Col >
                            <button type="button" disabled={!start} onClick={() => Mainfct("Absent")} className="btn btn-danger">Absent</button>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Buttonpresence
