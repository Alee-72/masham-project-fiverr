import React from "react";
import { Col, Row } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "./style.css";
import dash1 from "./images/dash1.jpeg";
import fan from "./images/fan.jpeg";
import add from "./images/add.png";
import gard from "./images/gard.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "5%",
    width: "100%",
    maxWidth: 360,
  },
}));

const RecjobDashboard = () => {
  const classes = useStyles();
  return (
    <Row>
      <Col sm={8}>
        <h3 className="dash1lefttxt">Recommended Jobs</h3>
        <p className="dashlefttxtp">All the jobs are closed due to crona-19 </p>
        <div className="insidenav">
          <Nav className="mx-auto">
            <Nav
              style={{ colour: "black", paddingTop: "1%", paddingLeft: "2.5%" }}
            >
              Feature
            </Nav>
            <Nav
              style={{ colour: "black", paddingTop: "1%", paddingLeft: "2.5%" }}
            >
              Private
            </Nav>
            <Nav
              style={{ colour: "black", paddingTop: "1%", paddingLeft: "2.5%" }}
            >
              Urgent
            </Nav>
          </Nav>
        </div>
        <Divider variant="outset" component="li" />
        <div className="insidenav">
          <Row>
            <Grid>
              <List className={classes.root}>
                <div>
                  <br></br>
                  <div className="link3" style={{ color: "black" }}>
                    <p>12 jan 2021</p>
                  </div>
                  <br></br>

                  <ListItem>
                    <img className="dash2img" src={fan} alt="loading" />

                    <ListItemText
                      primary=" &nbsp; Fan Installation"
                      secondary="&nbsp; Posted by:James "
                    />

                    <p className="link1" style={{ color: "red" }}>
                      $2456
                    </p>
                    <p className="link2" style={{ color: "black" }}>
                      12 offers
                    </p>
                  </ListItem>

                  <img
                    style={{
                      width: "15px",
                      marginLeft: "24%",
                      marginTop: "-15%",
                    }}
                    src={add}
                    alt="loading"
                  />
                  <p
                    style={{
                      fontSize: "70%",
                      textDecoration: "underline",
                      marginLeft: "30%",
                      marginTop: "-14%",
                    }}
                  >
                    House number 409 muhallah masoom abad bhakkar
                  </p>
                </div>

                <Divider variant="inset" component="li" />

                <div>
                  <br></br>
                  <div className="link3" style={{ color: "black" }}>
                    <p>4 jan 2021</p>
                  </div>
                  <br></br>

                  <ListItem>
                    <img className="dash4img" src={gard} alt="loading" />

                    <ListItemText
                      primary=" &nbsp; Garden Cleaning"
                      secondary="&nbsp; Posted by :  Tom Jerry"
                    />

                    <p className="link1" style={{ color: "red" }}>
                      $2341
                    </p>
                    <p className="link2" style={{ color: "black" }}>
                      12 offers
                    </p>
                  </ListItem>

                  <img
                    style={{
                      width: "15px",
                      marginLeft: "24%",
                      marginTop: "-15%",
                    }}
                    src={add}
                    alt="loading"
                  />
                  <p
                    style={{
                      fontSize: "70%",
                      textDecoration: "underline",
                      marginLeft: "30%",
                      marginTop: "-14%",
                    }}
                  >
                    House number 190 muhallah punukhail minawali
                  </p>
                </div>
              </List>
            </Grid>
          </Row>
        </div>
      </Col>

      <Col sm={4} className="background">
        <center>
          <h5 className="dash1txt">How Does Powered Work</h5>
          <p>
            How Does Powered Work How Does Powered Work How Does Powered Work
          </p>

          <img width="100%" src={dash1} alt="loading" />
        </center>
        <br></br>
        <br></br>
        <br></br>
      </Col>
    </Row>
  );
};

export default RecjobDashboard;
