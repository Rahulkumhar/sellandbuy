import React, { Component } from 'react';
import { Row, Col, Button, NavLink } from 'reactstrap';
import Header from '../header';
import Footer from '../Footer';
import * as firebase from "firebase";

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            selectedProduct: props.history.location.state.product,
            loading: true
        }
    }

    componentDidMount() {
        
    }

    openCheckout() {
        const {selectedProduct} = this.state;
        const currentUser = firebase.auth().currentUser
        const options = {
          "key": "rzp_test_NLTPbSULjHYddF",
          "amount": (selectedProduct.amount || 10) * 100 , // 2000 paise = INR 20, amount in paisa
          "name": "Sell and Buy",
          "description": "Purchase Description",
          "image": "/your_logo.png",
          "handler": function (response){
            alert(response.razorpay_payment_id);
          },
          "prefill": {
            "name": currentUser.displayName,
            "email":currentUser.email
          },
          "notes": {
            "address":currentUser.displayName
          },
          "theme": {
            "color": "#F37254"
          }
        };
        const instance = new window.Razorpay(options);
        instance.open();
      }


    render() {
        const { selectedProduct } = this.state;
        return (
            <div>
                <Header search="true" />
                <div className="container my-5">
                    <Row>
                        <Col md="8">
                            <img className="text-center" src={selectedProduct && selectedProduct.imgUrl} alt="" />
                            <div className="my-3">
                                <h3>Details</h3>
                                <Row>
                                    <Col sm="4">Brand</Col>
                                    <Col sm="8">{selectedProduct && selectedProduct.name}</Col>
                                </Row>

                                <hr />
                                <h3>Description</h3>
                                <p>16 GB gold colour in good condition ,finger print is good,screen is good no scratches, camera is good working</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div>
                                <Row className="productDesc">
                                    <Col sm="6">
                                        <div>₹ {selectedProduct && selectedProduct.price}</div>
                                        <div>{selectedProduct && selectedProduct.name}</div>
                                        <div className="small d-flex">
                                            <div>Rating </div>
                                            <div>&nbsp;{selectedProduct && selectedProduct.rating}</div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <i className="fa fa-share-alt mr-3"></i>
                                            <i className="fa fa-heart-o"></i>
                                        </div>
                                        <div></div>
                                        <div>May 19</div>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <h3>Seller description</h3>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4>Arun</h4>
                                    </div>
                                    <div>
                                        <NavLink onClick={this.openCheckout()}> <Button color="primary" size="sm">Buy</Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductDetail;