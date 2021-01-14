import React, { useState } from 'react'
import {ListGroup, ListGroupItem, Badge, Container, Row, Col} from 'react-bootstrap';
import '../Buttons/Buttonpresence';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Edit from './Edit'

function Results() {
    const [filtred, setfiltred] = useState([]);

    function giveVariant(etat) {
        var res = "";
        if (etat == "Present")
            res = "success"
        else {
            if (etat == "Absent")
                res = "danger"
            else
                res = "warning"
        }
        return res;

    }
    return (
        <div>
            <Container>
                <ListGroup>
                    {filtred && filtred.map((element, state) =>
                        <div key={state} id='results2'>

                            <Row>
                                <Col xs={24} md={12} lg={24}>
                                    <ListGroupItem style={{ backgroundColor: '#e0ded2' }}>
                                        <Row>
                                            <Col><h5 style={{ textAlign: 'left', color: '#292F36' }}>{element.name}</h5> </Col>
                                            <Col xs={6}>
                                                <Badge style={{ float: 'left' }} pill variant={giveVariant(element.etat)} >{element.etat}</Badge>
                                            </Col>
                                            <Col >
                                                <Edit />
                                            </Col>

                                        </Row>
                                    </ListGroupItem>

                                </Col>
                            </Row>


                        </div>
                    )}

                </ListGroup>
            </Container>
        </div>
    )
}

export default Results
