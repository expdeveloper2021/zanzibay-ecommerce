import React, { Component } from 'react'
import './index.css'
import CustomNavbar from '../../Components/Navbar'
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import firebase from '../../Config/Firebase'

export class ProductDetail extends Component {

    constructor() {
        super()
        this.state = {
            arr: [],
            currentProduct: '',
        }
    }

    componentDidMount() {
        firebase.database().ref("all_products").on("value", (data) => {
            let a = data.val()
            let arr = []
            if (a) {
                let objected = Object.entries(a)
                objected.map((e) => {
                    let arrImages = []
                    if (e[1].images) {
                        let objectedImg = Object.entries(e[1].images)
                        objectedImg.map((f) => {
                            arrImages.push(f[1].image)
                        })
                        e[1].images = arrImages
                        e[1].imagesObjected = objectedImg
                    }
                    arr.push(e[1])
                })
                this.setState({ arr })
            } else {
                this.setState({ arr: [] })
            }
        })
        firebase.database().ref("all_products/" + this.props.match.params.productkey).on("value", (data) => {
            let a = data.val()
            let arrImages = []
            if (a.images) {
                let objectedImg = Object.entries(a.images)
                objectedImg.map((f) => {
                    arrImages.push(f[1].image)
                })
                a.images = arrImages
                a.imagesObjected = objectedImg
            }
            this.setState({ currentProduct: a })
        })
    }

    getSellerName() {
        let filtered = []
        firebase.database().ref("users").on("value", (data) => {
            let a = data.val()
            if (a) {
                let objected = Object.entries(a)
                filtered = objected.filter((g) => {
                    return g[0] === this.state.currentProduct.created_by
                })
            }
        })
        if (filtered.length > 0) {
            return filtered[0][1].first_name + " " + filtered[0][1].last_name
        }
    }

    redirectSeller() {
        let filtered = []
        firebase.database().ref("users").on("value", (data) => {
            let a = data.val()
            if (a) {
                let objected = Object.entries(a)
                filtered = objected.filter((g) => {
                    return g[0] === this.state.currentProduct.created_by
                })
            }
        })
        if (filtered.length > 0) {
            window.location.href = `/seller/${filtered[0][0]}`
        }
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                {this.state.currentProduct && <div className="product-detail-wrapper">
                    <div className="product-list-top">
                        <div className="product-image-lt">
                            <div className="image-holder-pil">
                                <img src={this.state.currentProduct.images[0]} />
                            </div>
                            <div className="seller-information">
                                <p className="title-si">Listed by</p>
                                <div className="content-si-first" onClick={this.redirectSeller.bind(this)}>
                                    <img src="https://mercari-images.global.ssl.fastly.net/members/291722471.jpg?1607665734" />
                                    <div>
                                        <p>{this.getSellerName()}</p>
                                        <p>This seller usually responds within <b>24 hours</b></p>
                                    </div>
                                    <button>Ask a quesiton</button>
                                </div>
                                <div className="content-si-second">
                                    <div className="icon-space">

                                    </div>
                                    <div>
                                        <p>Secure payment options</p>
                                        <p>
                                            Mercari keeps your payment information Secure
                                            <br />
                                            Mercari sellers never recieve your credit card information
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-content-lt">
                            <p className="gray-updation">Updated 1 minute ago</p>
                            <p className="blue-title">{this.state.currentProduct.category}</p>
                            <p className="normal-title">{this.state.currentProduct.title}</p>
                            <p className="normal-price">${this.state.currentProduct.price}</p>
                            <div className="buy-buttons">
                                <button>Buy now</button>
                                <button>Buy with Paypal</button>
                            </div>
                            <div className="addtocart-buttons">
                                <button>Add to cart</button>
                            </div>
                            <div className="special-boost">
                                <p className="title-sb-pdw">Items like this usually sell fast</p>
                                <p className="desc-sb-pdw">Snag it before it's gone</p>
                            </div>
                            <div className="item-details">
                                <p className="title-id-pdw">Item details</p>
                                <div className="id-detailed">
                                    <div className="tid-detailed">
                                        <p>Condition</p>
                                    </div>
                                    <div className="did-detailed">
                                        <p>New</p>
                                    </div>
                                </div>
                                <div className="id-detailed">
                                    <div className="tid-detailed">
                                        <p>Platform</p>
                                    </div>
                                    <div className="did-detailed">
                                        <p>Other</p>
                                    </div>
                                </div>
                                <div className="id-detailed">
                                    <div className="tid-detailed">
                                        <p>Posted</p>
                                    </div>
                                    <div className="did-detailed">
                                        <p>12/21/2020</p>
                                    </div>
                                </div>
                                <div className="id-detailed">
                                    <div className="tid-detailed">
                                        <p>Description</p>
                                    </div>
                                    <div className="did-detailed">
                                        <p>Brand new never opened Xbox series. Have in hand wil ship same day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.arr.length > 0 && <div className="product-list-complete" style={{ marginTop: 30 }}>
                        {this.state.arr.map((g) => {
                            return <div className="product-card">
                                <img src={g.images && g.images[0]} />
                                <p className="title-pc">{g.category}</p>
                                <p className="second-title-pc">{g.title}</p>
                                <p className="price-pc">${g.price}</p>
                            </div>
                        })}
                    </div>}
                </div>}
                {/* <div className="chat-wrapper">
                    <div className="seller-info-cw">
                        <img src="https://mercari-images.global.ssl.fastly.net/members/291722471.jpg?1607665734" />
                        <div className="seller-contact-siw">
                            <p>Seller Name</p>
                            <p>Seller time zone</p>
                        </div>
                        <RemoveIcon />
                        <CloseIcon />
                    </div>
                    <div className="content-cw">
                        <div className="inner-ccw minechat">
                            <div className="chat-box">
                                <p>Hello!</p>
                            </div>
                        </div>
                        <div className="inner-ccw senderchat">
                            <div className="chat-box">
                                <p>Hello! How are you?</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-cw">
                        <input type="text" />
                        <button>Send</button>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default ProductDetail
