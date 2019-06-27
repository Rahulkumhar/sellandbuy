import React, { Component } from 'react';
import { Collapse, Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import * as firebase from "firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async logout(event) {
    event.preventDefault();
    try {
      await firebase.auth().signOut();
    } catch (e) {

    } finally {
      this.props.history.push('/login');
    }
  }


  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar color="secondary" light expand="md">
            <NavbarBrand className="col-md-3" href="/home"><badge color="info"> {firebase.auth().currentUser ? firebase.auth().currentUser.displayName : 'Sell & Buy'} </badge></NavbarBrand>
            {this.props.search === "true" ? <form className="col-md-6 form-inline">
              <input class="form-control w-75" type="text" placeholder="Search" />
              <button class="btn btn-success" type="submit">Search</button>
            </form> : " "}
            {firebase.auth().currentUser && <Collapse className="pull-left" isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink ><a onClick={(e) => this.logout(e)}>Logout</a></NavLink>
                </NavItem>

              </Nav>
            </Collapse>}
          </Navbar>
        </React.Fragment>
      </div>
    );
  }
}

export default Header;