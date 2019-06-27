import React from 'react';
//import * as firebase from 'firebase';
// import './App.css';
import 'antd/dist/antd.css';

import { Card, Icon, Avatar, Row, Col } from 'antd';
const { Meta } = Card;



function Products({ products, addProduct }) {
  return (
    <div>
      {/* <button onClick={this.addProduct(p)}>Add</button> */}
      <Row>
        {products.map(p => <Col span={6}><Card
          className='col-12'
          // style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={p.image}
            />
          }
          actions={[<Icon type="plus" onClick={() => { addProduct(p) }} />, <Icon type="edit" />, <Icon type="ellipsis" />]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={p.name}
            description={p.price}
          />
        </Card></Col>)}
      </Row>

    </div>
  )


}

export default Products;