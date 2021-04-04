import React from "react";
import { Col, Row } from "react-bootstrap";
import ruth from "./images/ruth.jpeg";
import jams from "./images/jams.jpeg";
import luth from "./images/luth.jpeg";
import star from "./images/star.jpeg";

import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  
  },
}));

const Dashboard3 = () => {
  const classes = useStyles();

  return (
    <Row className="dash3">
     
        <Col sm={8}>
      
        <h3 className="dash3txt">Top Workers in December</h3>
        <p className="dash3para"> muhammad masham is number 1 worker </p>
        <p className="dash3para"> masham is number 2 worker </p>
        <p className="dash3para"> Tariq is number 3 worker </p>
        <p className="dash3para"> Imran khan is number 4 worker </p>
        <p className="dash3para"> johni baba is number 5 worker </p>
        <br></br>
        <br></br>
        </Col>
       

        <Col sm={4}>
        <List className={classes.root}>
          
          <ListItem>
            <img className="dash3img" src={luth} alt="loading" />

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
         
          <Divider variant="inset" component="li" />

          <ListItem>
            <img className="dash3img" src={ruth} alt="loading" />

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          

          <Divider variant="inset" component="li" />
          <ListItem>
            <img
              height="90px"
              className="dash3imgjems"
              src={jams}
              alt="loading"
            />
            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-15%" }}
            src={star}
            alt="loading"
          />
         
        </List>
        </Col>
    
        

    </Row>
  );
};

export default Dashboard3;













