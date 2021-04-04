import React from "react";
import { Col, Row } from "react-bootstrap";

const Fotter = () => {
  return (
    <Row style={{ background: "#423e40", color: "white" }}>
      <Col xs={6} md={3}>
        <div style={{ marginTop: "20px", marginLeft: "40px" }}>
          <h4>Discover</h4>
          <p>
            how it works <br></br> Alltasker for bussiness <br></br> Earn money{" "}
            <br></br> New user FAQ
          </p>
        </div>
      </Col>
      <Col xs={6} md={3}>
        <div style={{ marginTop: "20px", marginLeft: "40px" }}>
          <h4>Company</h4>
          <p>
            About us <br></br> Careers <br></br> Media enquires <br></br>{" "}
            Community guidelines <br></br> Tasker principles<br></br> Terms &
            conditions <br></br> Blogs <br></br>Contact us<br></br>privacy
            policy
          </p>
        </div>
      </Col>
      <Col xs={6} md={3}>
        <div style={{ marginTop: "20px", marginLeft: "40px" }}>
          <h4>Existing Members</h4>
          <p>
            Post a task <br></br> Browse tasks <br></br> Login<br></br> Support
            center
          </p>
        </div>
      </Col>
      <Col xs={6} md={3}>
        <div style={{ marginTop: "20px", marginLeft: "40px" }}>
          <h4>Popular categories</h4>
          <p>
            Handyman services <br></br> Cleaning services <br></br> Delivery
            services <br></br> gardening services <br></br>Automotive<br></br>
            Assembly services<br></br>All services
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Fotter;
