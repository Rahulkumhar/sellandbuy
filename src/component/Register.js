import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Alert} from 'reactstrap';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row} from "reactstrap";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleSubmit = (e) => {
      e.preventDefault();
      axios.get('localhost:8080/demo').then((res) => {
        console.log('res',res)
      })
      .catch((err) => {
        console.log('err',err)
      })
    }

    render() { 
        return ( 
           
<div className="app flex-row align-items-center">
        <Container>
         <Alert></Alert>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="username"
                        // value={username}
                        placeholder="Username"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        name="full_name"
                        // value={full_name}
                        placeholder="FullName"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        name="email"
                        // value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!£$%*()}{@#~?><>,|=_+¬-]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter and one special character and at least 8 or more characters"
                        // value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        name="conformpassword"
                        // value={conformpassword}
                        placeholder="Re-Password"
                        onChange={this.handleChange}
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                        <select
                        name="role"
                        // value={role}
                        onChange={this.handleChange}
                        className="form-control"
                        required
                      >
                        <option value="/">Select type</option>
                        <option value="admin">Admin</option>
                        <option value="merchant">Merchant</option>
                      </select>
                    </InputGroup>

                    <CardFooter className="p-4">
                      <Row>
                        <Col xs="12" sm="6">
                          <Button
                            color="success"
                            block
                            type="submit"
                            className="btn-facebook mb-1"
                          >
                            <span> Create Account</span>
                          </Button>
                        </Col>
                        <Col xs="12" sm="6">
                          <Link to="/">
                            <Button
                              color="primary"
                              className="btn-twitter mb-1"
                              block
                            >
                              <span>Login</span>
                            </Button>
                          </Link>
                        </Col>
                      </Row>
                    </CardFooter>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                        <span>facebook</span>
                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block>
                        <span>twitter</span>
                      </Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

         );
    }
}
 
export default Register;