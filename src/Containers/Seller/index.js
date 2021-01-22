import React, { Component } from 'react'
import './index.css'
import StarIcon from '@material-ui/icons/Star';
import CustomNavbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import firebase from '../../Config/Firebase'

export class Seller extends Component {

    constructor() {
        super()
        this.state = {
            currentSeller: "",
            currentUserProducts: [],
        }
    }

    componentDidMount() {
        firebase.database().ref("users/" + this.props.match.params.userid).on("value", (data) => {
            let a = data.val()
            this.setState({ currentSeller: a })
            firebase.database().ref("all_products").on("value", (data) => {
                let b = data.val()
                if (b) {
                    let objected = Object.entries(b)
                    let arr = []
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
                    let filtered = arr.filter((y) => {
                        return y.created_by === a.user_id
                    })
                    this.setState({ currentUserProducts: filtered })
                }
            })
        })
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <CustomNavbar />
                {this.state.currentSeller && <div className="seller-main">
                    <div className="seller-top">
                        <div className="left-st-main">
                            <img src="https://res.cloudinary.com/tapptitude/w_1300,h_500,c_fit,f_auto/web-images/2016/07/User-Profile-1.jpg" />
                            <div className="stars-lsm">
                                <StarIcon className="filled" />
                                <StarIcon className="filled" />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <p>499 reviews</p>
                        </div>
                        <div className="right-st-main">
                            <p className="user-name-rst">{this.state.currentSeller.first_name} {this.state.currentSeller.last_name}</p>
                            <div className="short-info-rst">
                                <p><b>{this.state.currentUserProducts.length}</b> items listed | <b>479</b> sales</p>
                            </div>
                            <p className="user-seller-rst">Seller Badges</p>
                            <div className="badges-rst">
                                <div className="inner-badge-rst">
                                    <div className="circle-ibrst">
                                        <img src="https://u-web-assets.mercdn.net/assets/icons/sellerbadges/badge_member_since_2020.svg" />
                                    </div>
                                    <p>Member since</p>
                                </div>
                                <div className="inner-badge-rst">
                                    <div className="circle-ibrst">
                                        <img src="https://u-web-assets.mercdn.net/assets/icons/sellerbadges/badge_member_since_2020.svg" />
                                    </div>
                                    <p>Fast Responder</p>
                                </div>
                                <div className="inner-badge-rst">
                                    <div className="circle-ibrst">
                                        <img src="https://u-web-assets.mercdn.net/assets/icons/sellerbadges/badge_member_since_2020.svg" />
                                    </div>
                                    <p>Quick Shipper</p>
                                </div>
                                <div className="inner-badge-rst">
                                    <div className="circle-ibrst">
                                        <img src="https://u-web-assets.mercdn.net/assets/icons/sellerbadges/badge_member_since_2020.svg" />
                                    </div>
                                    <p>Reliable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.currentUserProducts.length > 0 && <div className="product-list-complete" style={{ marginTop: 30 }}>
                        {this.state.currentUserProducts.map((g) => {
                            return <div className="product-card" key={Math.random()}>
                                <img src={g.images[0]} />
                                <p className="title-pc">{g.category}</p>
                                <p className="second-title-pc">{g.title}</p>
                                <p className="price-pc">$ {g.price}</p>
                            </div>
                        })}
                    </div>}
                </div>}
                <Footer />
            </div>
        )
    }
}

export default Seller
