import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom'
import Registration from '../Containers/Registration'
import Login from '../Containers/Login'
import Home from '../Containers/Home'
import ProductList from '../Containers/Product List'
import ProductDetail from '../Containers/Product Detail'
import Seller from '../Containers/Seller'
import CreateProduct from '../Containers/Create Product'
import ForgetPassword from '../Containers/Forget Password'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/product-list" component={ProductList} />
                <Route path="/product-detail/:productkey" component={ProductDetail} />
                <Route path="/seller/:userid" component={Seller} />
                <Route path="/createproduct" component={CreateProduct} />
                <Route path="/forget-password" component={ForgetPassword} />
            </Router>
        )
    }
}

export default Routes