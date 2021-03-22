import "./css/App.css";
import React, { useState }  from 'react';
import Head from "./components/Head";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Map from "./components/Map";

import { Container } from "react-bootstrap";

function App() {
  const [markers, setMarkers] = useState([]);
  return (
    <>
      <head>
        <Head />
      </head>
      <body
        data-theme="light"
        data-layout="fluid"
        data-sidebar-position="left"
        data-sidebar-behavior="sticky"
      >
        <main>
          <NavBar />
          <Container>
            <div className="row">
              <div className="col-md-3">
                <SideBar marcadores = {setMarkers}/>
              </div>
              <div className="col-md-6 maps sticky">
                <Map location marcadores = {markers}/>
              </div>
            </div>
          </Container>

        </main>
      </body>
    </>
  );
}

export default App;
