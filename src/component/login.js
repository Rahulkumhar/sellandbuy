import React, {Component} from 'react';
import Header from './header';
import {Link} from 'react-router-dom';
import * as firebase from "firebase/app";
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
  } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  googleLogin(){
    const  provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      this.props.history.push('/home');
      // ...
    }).catch(function(error) {
      // Handle Errors here.
     // var errorCode = error.code;
      //var errorMessage = error.message;
      // The email of the user's account used.
    //  var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
     // var credential = error.credential;
      // ...
    });
  }
  
  
  render() { 
    return (
      <div>
        <Header />
        <div className="app flex-row align-items-center">
       <Container>
          <div className='text-center'><img src="paris.jpg" alt=""/></div>
            <Row className="justify-content-center">
              <Col md="9" >
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
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
                            autoComplete="username"
                            bsSize="sm"
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
                            // value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                            autoComplete="current-password"
                            bsSize="sm"
                          />
                        </InputGroup>
                       
                        <Row>
                          <Col xs="6">
                            <Button
                            
                              type="submit"
                              color="primary"
                              className="px-4"
                              onClick={(event)=> {
                                event.preventDefault();
                                this.googleLogin()
                              }}
                            >
                              Login with Google
                            </Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            {/* <Button color="link" className="px-0">
                              Forgot password?
                            </Button> */}
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card 
                    className="text-white bg-primary py-5"
                    style={{ width: "44%" }}
                  >
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <br/>
                          
                        
                        <Link to="/register">
                          <
                            Button
                            color="primary"
                            className="mt-3"
                            active
                            tabIndex={-1}
                          >
                            Register Now!
                          </Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
     );
  }
}
 
export default Login;