import React, { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";
class AsideSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: [false, false, false, false, false]
    };
  }
  handleToggle = index => {
    const { open } = this.state;
    let newOpen = !open[index];
    open.splice(index, 1);
    open.splice(index, 0, newOpen);
    this.setState({
      open
    });
  };
  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <div className="col-md-3">
          <strong>Filter</strong>
          <hr />
          <div className="d-flex justify-content-between  ">
            <div>
              <h6>CATEGORIES</h6>
              <div className="small">All Categories</div>
              {open[0] ? (
                <ul type="none" style={{ marginLeft: "-27px" }}>
                  <li>Properties (332971)</li>
                  <li>Cars (490552)</li>
                  <li>Furniture (308734)</li>
                  <li>Jobs (210935)</li>
                  <li>Electronics & Appliances (555883)</li>
                  <li>Mobiles (683960)</li>
                  <li>Bikes (223504)</li>
                  <li>Books, Sports & Hobbies (122193)</li>
                  <li>Fashion (94434)</li>
                  <li>Pets (25902)</li>
                  <li>Services (90554)</li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <i
              onClick={() => this.handleToggle(0)}
              className="fa fa-sort-desc"
            />
          </div>
          <hr />
          <div className="d-flex justify-content-between  ">
            <div>
              <h6>LOCATIONS</h6>
              <div className="small">India</div>
              {open[1] ? (
                <ul type="none" style={{ marginLeft: "-27px" }}>
                  <li>Maharashtra (466891)</li>
                  <li>Uttar Pradesh (286975)</li>
                  <li>Tamil Nadu (252300)</li>
                  <li>Karnataka (227485)</li>
                  <li>Delhi (224390)</li>
                  {open[2] ? (
                    ""
                  ) : (
                    <span onClick={() => this.handleToggle(2)}>View more</span>
                  )}
                  {open[2] ? (
                    <React.Fragment>
                      <li>Kerala (210363)</li>
                      <li>Gujarat (185393)</li>
                      <li>Telangana (159624)</li>
                      <li>Punjab (142789)</li>
                      <li>West Bengal (137185)</li>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
                  {open[2] ? <span>View less</span> : ""}
                  <div onClick={() => this.handleToggle(3)}>View all India</div>
                  <Modal
                    isOpen={open[3]}
                    toggle={() => this.handleToggle(3)}
                    className={this.props.className}
                  >
                    <ModalHeader toggle={() => this.handleToggle(3)} />
                    <ModalBody>
                      <h2>All states in India</h2>
                      <form class="form-inline w-100">
                        <input
                          class="form-control mr-sm-2 w-75"
                          type="text"
                          placeholder="Search"
                        />
                        <button class="btn btn-success" type="submit">
                          Search
                        </button>
                      </form>
                      <div
                        className="container m-3 "
                        style={{ height: "200px", overflowY: "auto" }}
                      >
                        <Row>
                          <Col md="4">
                            <div>Andaman & Nicobar Islands</div>
                            <div>Andhra Pradesh</div>
                            <div>Arunachal Pradesh</div>
                            <div>Assam</div>
                            <div>Bihar</div>
                            <div>Chandigarh</div>
                            <div>Chhattisgarh</div>
                            <div>Dadra & Nagar Haveli</div>
                            <div>Daman & Diu</div>
                            <div>Delhi</div>
                            <div>Goa</div>
                            <div>Gujarat</div>
                          </Col>
                          <Col md="4">
                            <div>Haryana</div>
                            <div>Himachal Pradesh</div>
                            <div>Jammu & Kashmir</div>
                            <div>Jharkhand</div>
                            <div>Karnataka</div>
                            <div>Kerala</div>
                            <div>Lakshadweep</div>
                            <div>Madhya Pradesh</div>
                            <div>Maharashtra</div>
                            <div>Manipur</div>
                            <div>Meghalaya</div>
                            <div>Mizoram</div>
                          </Col>
                          <Col md="4">
                            <div>Nagaland</div>
                            <div>Odisha</div>
                            <div>Pondicherry</div>
                            <div>Punjab</div>
                            <div>Rajasthan</div>
                            <div>Sikkim</div>
                            <div>Telangana</div>
                            <div>Tripura</div>
                            <div>Uttar Pradesh</div>
                            <div>Uttaranchal</div>
                            <div>West Bengal</div>
                            <div />
                          </Col>
                        </Row>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        onClick={() => this.handleToggle(3)}
                      >
                        Done
                      </Button>{" "}
                      <Button
                        color="secondary"
                        onClick={() => this.handleToggle(3)}
                      >
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Modal>
                </ul>
              ) : (
                ""
              )}
            </div>
            <i
              onClick={() => this.handleToggle(1)}
              className="fa fa-sort-desc"
            />
          </div>
          <hr />
          <div className="d-flex justify-content-between  ">
            <div>
              <h6>PRICE</h6>
              {open[4] ? <div className="d-flex">
              <FormGroup style={{width:"37%"}}>
          <Label for="min">min</Label>
          <Input type="text" name="min" id="min" />
        </FormGroup>
        <div  style={{width:"3%"}} ></div>
        <FormGroup style={{width:"37%"}}>
          <Label for="max">max</Label>
          <Input type="text" name="max" id="max" />
        </FormGroup>
        <Button color="secondary" style={{height: "37px",marginTop: "33px"}}>></Button>

                  {/* <input type="text" style={{width:"37%"}} name="min" value="" />
                  <div  style={{width:"3%"}} ></div>
                  <input type="text"  style={{width:"37%"}}  name="max" value="" />
                  <div  style={{width:"3%"}} ></div>
                  <button  style={{width:"20%"}} >></button> */}
              </div> : ""}
            </div>
            <i
              className="fa fa-sort-desc"
              onClick={() => this.handleToggle(4)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AsideSearch;
