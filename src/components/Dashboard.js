import React from "react";
import { Col, Row } from "react-bootstrap";
import img from "./images/pic1.jpeg";
import clearing from "./images/clearing.jpeg";
import delivery from "./images/delivery.jpeg";
import beauty from "./images/beauty.jpeg";
import other from "./images/other.jpeg";
import serch from "./images/search.png";

import "./style.css";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col sm={6} >
          <h2 className="text">Find The Best Job</h2>
          <h6 className="text1">Search from 1500+ jobs</h6>
{/* 
          <div className="input-group">
  <div className="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label className="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i className="fas fa-search"></i>
  </button>
</div> */}


          <div className="search">
            <input type="text" placeholder="Seach Here"></input>
            <div className="button-src">
           
                {" "}
                <img className="searchicon" src={serch} alt="loading" />
         
            </div>
          </div>
          <Grid>
          <Row>
            <Col >
              <img className="icon" src={clearing} alt="loading" />
              <p className="icontext">clearing</p>
            </Col>
            <div className="vl"></div>
             <Col>
              <img className="icon" src={delivery} alt="loading" />
              <p className="icontext">delivery</p>{" "}
            </Col>
            <div className="vl"></div>
            <Col>
              <img className="icon" src={beauty} alt="loading" />
              <p className="icontext">beauty</p>{" "}
            </Col>
            <div className="vl"></div>
            <Col>
              <img className="icon1" src={other} alt="loading" />
              <p className="icontext1">other</p>
            </Col>
          </Row>
          </Grid>
        </Col>
        <Col sm={6}>
          <img className="img" src={img} alt="loading" />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
