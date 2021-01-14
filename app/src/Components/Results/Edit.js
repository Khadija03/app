import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, ListGroup, ListGroupItem, Badge, Container, Row, Col, Tooltip, OverlayTrigger, Dropdown } from 'react-bootstrap';
function Edit(element) {
    return (
        <div>
            <Dropdown style={{ span: 4, float: 'right' }}>
                <Dropdown.Toggle pill variant="outline-dark" id="dropdown-basic" size="sm">
                    Edit
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => element.etat = "Present"}>Present</Dropdown.Item>
                    <Dropdown.Item onClick={() => element.etat = "Absent"}>Absent</Dropdown.Item>
                    <Dropdown.Item onClick={() => element.etat = "Excusé"}>Excusé</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Edit
