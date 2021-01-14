import React, { useState } from 'react'
import { x } from './Members'
import { Button, ButtonGroup, ListGroup, ListGroupItem, Badge, Container, Row, Col, Tooltip, OverlayTrigger, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import Buttonpresence from './Buttons/Buttonpresence'
import Buttonfilter from './Buttons/Buttonfilter';
import Results from './Results/Results';
import './Body.css'


function Body() {
    /*const [data,] = useState(x);
    const [state, setstate] = useState(0);
    const [personne, setpersonne] = useState();
    const [tous, settous] = useState([]);
    const [filtred, setfiltred] = useState([]);
    const [start, setstart] = useState(false);*/




    /*const main = (etat) => {

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



    const filtre = (etat) => {
        if (etat == "Tous") {
            setfiltred(tous)
        } else {

            const result = tous.filter(element => element.etat == etat);

            setfiltred(result);
        }


    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Cliquez pour commencer l'appel
        </Tooltip>
    );
  

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
    */


    return (
        <div id="presence">
            <div id='tohide'>
                <Buttonpresence/>
            </div>
                <Buttonfilter/>
                <Results/>
        </div>       
    )  
}


export default Body
