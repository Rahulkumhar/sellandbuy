import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './component/login'
import Home from './component/home';
import ProductDetail from './component/main/productDetail';
import * as firebase from "firebase";




class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            currentUser: null
        }
    }

    async componentDidMount () {
        firebase.auth().onAuthStateChanged((currentUser) => {
            this.setState({
                currentUser,
                loading: false,
            })
        });
    } 
    render() {
        const {currentUser, loading} = this.state;
        if(loading) {
            return (<div> Loading </div>);
        }
        return (
            <BrowserRouter>
                {!currentUser &&<Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                 </Switch>}
                 {currentUser && <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/productDetail" exact component={ProductDetail} />
                    <Route component={Home} />
                </Switch>}

            </BrowserRouter>
        );
    }
}

export default Router;