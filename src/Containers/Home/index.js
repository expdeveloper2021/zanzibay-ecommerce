import React, { Component } from 'react'
import './index.css'
import CustomNavbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import firebase from '../../Config/Firebase'

export class Home extends Component {

    constructor() {
        super()
        this.state = {
            arr: [],
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
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <div className="banner-main-home">
                    <div className="inner-bmh">
                        <p>Treat Yourself right</p>
                        <p className="inner-desc-bmh">Tis the season'</p>
                        <button>Shop Deals</button>
                    </div>
                </div>
                <div className="main-wrapper-home">
                    <div className="sell-ship-paid">
                        <div className="inner-ssp">
                            <div className="circle-issp">
                                <img src="https://u-web-assets.mercdn.net/assets/icons/home/ship-it.svg" />
                            </div>
                            <div className="content-issp">
                                <p>Sell it.</p>
                                <p><b>List in minutes.</b> Take a few photos. Add a description. Set your price</p>
                            </div>
                        </div>
                        <div className="inner-ssp">
                            <div className="circle-issp">
                                <img src="https://u-web-assets.mercdn.net/assets/icons/home/ship-it.svg" />
                            </div>
                            <div className="content-issp">
                                <p>Ship it.</p>
                                <p><b>List in minutes.</b> Take a few photos. Add a description. Set your price</p>
                            </div>
                        </div>
                        <div className="inner-ssp">
                            <div className="circle-issp">
                                <img src="https://u-web-assets.mercdn.net/assets/icons/home/ship-it.svg" />
                            </div>
                            <div className="content-issp">
                                <p>Get paid.</p>
                                <p><b>List in minutes.</b> Take a few photos. Add a description. Set your price</p>
                            </div>
                        </div>
                    </div>
                    <div className="off-for-brands">
                        <p>Up to 70% off. All the brands you love.</p>
                        <p>Great stuff. Newe and used. 350,000+ items added every day</p>
                    </div>
                    <div className="brand-list">
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Nike</p>
                        </div>
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Apple</p>
                        </div>
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Funko</p>
                        </div>
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Sony</p>
                        </div>
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Nike</p>
                        </div>
                        <div className="brand-card">
                            <div className="circle-brand-card">
                                <img src="https://u-web-assets.mercdn.net/assets/homeBrands/319.png" />
                            </div>
                            <p>Samsung</p>
                        </div>
                    </div>
                    {this.state.arr.length > 0 && <p className="trending-product">Trending Products</p>}
                    {this.state.arr.length > 0 && <div className="product-list-complete">
                        {this.state.arr.map((g) => {
                            return <div className="product-card" onClick={() => window.location.href = `product-detail/${g.pushKey}`}>
                                <img src={g.images && g.images.length > 0 && g.images[0]} />
                                <p className="title-pc">{g.title}</p>
                                <p className="second-title-pc">{g.category}</p>
                                <p className="price-pc">$ {g.price}</p>
                            </div>
                        })}
                    </div>}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home
