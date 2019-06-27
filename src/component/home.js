import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Row } from 'reactstrap';
import Header from './header';
import Footer from './Footer';
import CarouselComp from './main/casourel';
import AsideSearch from './main/asideSearch';
import ProductList from './main/productList';
import * as firebase from 'firebase'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const starCountRef = firebase.database().ref('Products/');
    starCountRef.on('value', (snapshot) => {
      this.setState({
        products: snapshot.val()
      });
    }, (err) => {
      console.log(err)
    });
  }


  render() {
    const {products} = this.state;
    return (
      <div className="background">
        <Header search="true" history={this.props.history} />
        <div className="my-3 ">
          <CarouselComp />
          <Row className="container-fluid my-4" >
            <AsideSearch />
            <ProductList products={products}  history={this.props.history} />
          </Row>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;