import React, { Component } from "react";
import { Card, CardText, Row, Col } from "reactstrap";
import { Button } from 'antd';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
      redirect:false,
      selectedProductDetail:""
    };
  }
  componentWillMount () {
    this.setState({
      productdb: this.props.productdb
    })
  }

  buyProduct(e, product) {
    e.preventDefault();
    this.props.history.push('/productDetail', {
      product
    });
  }
  
  render() {
    const {products} = this.props;
    return (
      <React.Fragment>
        <div className="col-md-9">
          <Row className="mb-2">
         
           {products.map((data) => (
           
             
             <Col sm="4" style={{marginBottom:"30px"}}>
           
             <Card  body style={{height:"500px"}} >
             
               <CardText style={{overflow:"hidden"}}>
                 <img onClick={() => this.props.handleRedirect(data.productId)}
                   className="d-block"
                   src={data.imgUrl}
                   alt="Third slide"
                   style={{ height: "300px",width:"180px",margin:"5px 15px 5px 15px" }}
                 />
               </CardText>
               <div>
                 <div className="d-flex justify-content-between">
                   <div>₹ {data.price}</div>
                   
                 </div>
                 <div style={{height: "45px"}} className="d-flex justify-content-between">
                   <div>Brand:</div>
                   <div>{data.name}</div>
                 </div>
                 <div className="d-flex justify-content-between">
                   <div>Rating:</div>
                   <div>{data.rating}</div>
                 </div>
                 <div className="d-flex justify-content-between small">
                   <div>Category</div>
                   <div>{data.category}</div>
                 </div>
               </div>
              <Button type="danger" ><a onClick={(e)=> this.buyProduct(e, data)}>Buy</a></Button>
             </Card>
           </Col>
           ))}
              </Row>
              </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
