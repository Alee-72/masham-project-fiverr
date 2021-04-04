import React from "react";
import { Row } from "react-bootstrap";
import ruth from "./images/ruth.jpeg";
import jams from "./images/jams.jpeg";
import luth from "./images/luth.jpeg";
import star from "./images/star.jpeg";
import whitestar from "./images/whitestar.jpeg";
import "./style.css";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft:"2%",
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Dashboard4 = () => {
  const classes = useStyles();
  return (
    <Row>
      <Grid sm={6}>
        <List className={classes.root}>
          <div>
          <ListItem>
            <img className="dash3img" src={luth} alt="loading" />

            

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
              
            />
           
            <div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
    
          </ListItem>
          

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-16.5%" }}
          >
            4.5 rate
          </p>
</div>


          <Divider variant="inset" component="li" />
          

          <ListItem>
            <img className="dash3img" src={ruth} alt="loading" />

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />

<div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
          </ListItem>


          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-16.5%" }}
          >
            4.5 rate
          </p>

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
                <div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-20%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-20%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-20%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-20%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-20%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-15%" }}
          >
            4.5 rate
          </p>
        </List>
      </Grid>
      <Grid sm={6}>
        <List className={classes.root}>
          <ListItem>
            <img className="dash3img" src={luth} alt="loading" />

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />
                <div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-16.5%" }}
          >
            4.5 rate
          </p>
          <Divider variant="inset" component="li" />

          <ListItem>
            <img className="dash3img" src={ruth} alt="loading" />

            <ListItemText
              primary=" &nbsp; Luth Herath"
              secondary="&nbsp; Plumber |&nbsp;driver | &nbsp;Other"
            />
                <div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-22%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-16.5%" }}
          >
            4.5 rate
          </p>

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
             <div className="v4"></div>
            <a className="link" href="https://www.w3schools.com">View profile</a>
            
          </ListItem>

          <img
            style={{ width: "15px", marginLeft: "22%", marginTop: "-19%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-19%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-19%" }}
            src={star}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-19%" }}
            src={whitestar}
            alt="loading"
          />
          <img
            style={{ width: "15px", marginTop: "-19%" }}
            src={whitestar}
            alt="loading"
          />
          <p
            style={{ marginLeft: "45%", fontSize: "0.8em", marginTop: "-15%" }}
          >
            4.5 rate
          </p>
        </List>
      </Grid>
    </Row>
  );
};

export default Dashboard4;

