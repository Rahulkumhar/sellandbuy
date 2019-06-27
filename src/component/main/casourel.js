
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
class CarouselComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            index: 0,
            direction: null,
         }
    }
   
  
    handleSelect = (selectedIndex, e) => {
        
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() { 
        const {index, direction} = this.state;
        return ( 
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            
          > 
         
            <Carousel.Item  style={{height:"400px"}}>
              <img
                className="d-block w-100"
                src="../image/slide1.jpg"
                alt="First slide"
                style={{height:"100%"}} 
              />
              
            </Carousel.Item>
            <Carousel.Item  style={{height:"400px"}}>
              <img
                className="d-block w-100"
                src="https://www.olxgroup.com/assets/styles/hero/public/2018-03/hero_india_2.jpg?itok=vU0k18l7"
                alt="First slide"
                style={{height:"100%"}} 
              />
              
            </Carousel.Item>
            <Carousel.Item  style={{height:"400px"}}>
              <img
                className="d-block w-100"
                src="../image/slide2.jpg"
                alt="Second slide"
                style={{height:"100%"}} 
              />
    
            </Carousel.Item>
            <Carousel.Item  style={{height:"400px"}}>
              <img
                className="d-block w-100"
                src="https://www.olxgroup.com/assets/styles/hero/public/2018-06/0.jpg?itok=wMOb6fOY"
                alt="Third slide"
                style={{height:"100%"}} 
              />
    
            </Carousel.Item>
            
          </Carousel>
          
         );
    }
}
 
export default CarouselComp;

