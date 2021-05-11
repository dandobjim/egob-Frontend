import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import {useState} from "react";
import CONSTANTS from "../shared/Constants";

const SideBar = ({marcadores}) => {

  const [dropDownValue, setDropDownValue] = useState("Selecciona una consulta");
  const [event, setEvent] = useState();
  
  
  
  const dni_onclick = () => {
    axios.get(`${CONSTANTS.API.url}/virtuoso/create_id`).then(
      res => {
        marcadores(res["data"])
      }
    )

  }

  const selectConsult = () => {
    if(event === "1"){
      dni_onclick();
      
    }else{
      alert("Esto es sólo de ejemplo, por favot use elegir DNI");
    }
  }

  const handleSelect = (e) =>{
    setEvent(e);
    if(e === "1"){
      setDropDownValue("DNI")
    }else if(e === "2"){
      setDropDownValue("Another action")
    }else{
      setDropDownValue("Something else here")
    }
  }

  return (
    <div
      className="col-12 col-md-4 position-md-sticky d-flex align-items-center vh-md-100"
      style={{ top: "0" }}
    >
      <div className=" sidenav py-8 py-md-10" style={{paddingTop:"5rem"}}>
        <h3>e-Gob</h3>
        <p className="font-size-lg mb-7 text-muted">
          Realice aquí sus consultas administrativas
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <DropdownButton onSelect = {handleSelect} size="sm" variant="secondary" title={dropDownValue}>
              <Dropdown.Item eventKey="1">DNI</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
        <button onClick = {selectConsult}>Consult</button>
      </div>
    </div>
  );
};

export default SideBar;
