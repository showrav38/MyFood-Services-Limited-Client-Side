import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './More.css';

const More = () => {
  return (
    <div id="more" className="margin">
      <h2 className="p-5 text-C">Give Feedback and Get 30% Discount</h2>
      <Container className="p-3">
        <Row>
          <Col xs={12} md={6}>
            <h2 className="pb-4">Give Your Feedback</h2>
            <form className=" text-dark row g-3">
              <div className="col-md-6">
                <label htmlFor="inputName4" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="inputName4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputContact4" className="form-label">
                  Contact Number
                </label>
                <input type="number" className="form-control" id="inputContact4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputProblem" className="form-label">
                  Your Feedback
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>

              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">
                  Zip
                </label>
                <input type="text" className="form-control" id="inputZip" />
              </div>

              <div className="col-12 pb-2">
                <Button variant="primary">
                  <Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/">
                    {' '}
                    Submit
                  </Link>
                </Button>{' '}
              </div>
            </form>
          </Col>
          <Col xs={12} md={6} style={{ backgroundColor: '' }}>
            <Row className=" b-4">
              <Col xs={12} md={12} className="p-2">
                <h2> Running Offer(30% OFF)</h2>
                <div className="container inner">
                  <a className='imgal' href="#">
                    <img
                      className="paddingImg"
                      src="https://northcentralhealthdistrict.org/wp-content/uploads/2013/09/food-banner.jpg"
                      alt="Snow"
                      width="400px"
                      height="350px"
                      style={{ opacity: '100', borderRadius: '30px', overflow: 'hidden',marginRight:'30px',marginLeft:'-14px' }}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default More;
