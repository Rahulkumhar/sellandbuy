import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="container-fluid" style={{backgroundColor:"#1b5282"}}>
			<div className="container pt-3">
				<div className="row mt-3">
					<ul type="none" className="col-12 col-md-3 text-white footer">
						<h5>COMPANY </h5>
						<li><Link to="/home">About Us</Link></li>
						{/* <li><Link to="/home">Terms of Use</Link></li>
						<li><Link to="/home">Contact Us</Link></li>
						<li><Link to="/home">Privacy Policy</Link></li> */}
					</ul>
					<ul type="none" className="col-12 col-md-3 text-white footer">
						<h5>ORDER ENQUIRY   </h5>
						{/* <li>Mail Us:<Link to="/home">rahul.kumar9961@gmail.com</Link></li> */}
						<li><Link to="/home">Call Us: 8058467911</Link></li>
						{/* <li>Call us Mon - Fri, between 10 AM - 6 PM</li> */}
					</ul>
					<ul type="none" className="col-12 col-md-3 text-white footer">
						<h5>MY ACCOUNT  </h5>
						{/* <li><Link to="/home">Edit Profile</Link></li> */}
						<li><Link to="/home">My Orders</Link></li>
						{/* <li><Link to="/home">Manage Addresses</Link></li><br /> */}
					</ul>
					<div className="col-12 col-md-3  text-white footer ">
                    <h5>GET IN TOUCH    </h5>
                    <div className="col-12 col-md-12">
                        <span className="icon-footer-span"><Link to="https://www.facebook.com" title="Facebook"><i className="fa fa-facebook icon-footer"></i></Link></span>

                        <span className="icon-footer-span mx-3"><Link to="https://twitter.com/Twitter" title="Facebook"><i className="fa fa-twitter icon-footer"></i></Link></span>
                        
                        <span className="icon-footer-span"><Link to="https://www.instagram.com" title="Facebook"><i class="fa fa-instagram icon-footer"></i></Link></span>
                   
				   </div> 
                </div>
				</div>
			</div>
		</div>
            </div>
         );
    }
}
 
export default Footer;