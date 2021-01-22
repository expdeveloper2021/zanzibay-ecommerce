import React, { Component } from 'react'
import './index.css'
import CustomNavbar from '../../Components/Navbar'
import SearchIcon from '@material-ui/icons/Search';
import Footer from '../../Components/Footer';
import firebase from '../../Config/Firebase'

export class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            arr: [],
            arrFiltered: [],
            selectedCategoryToFilter: "",
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
                <div className="product-list-main">
                    <div className="left-product-list">
                        <p className="title-lpl">Filter by</p>
                        <div className="keyword-lpl">
                            <p>Keyword</p>
                            <div className="div-main-klpl">
                                <input type="text" />
                                <SearchIcon />
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Shipping</p>
                            <div className="div-main-klpl">
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradio" />
                                    <label>Any</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradio" />
                                    <label>Free</label>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Delivery</p>
                            <div className="div-main-klpl">
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiodel" />
                                    <label>Any</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiodel" />
                                    <label>Mercari Now</label>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Price</p>
                            <div className="div-main-klpl" style={{ flexDirection: "column" }}>
                                <div className="radio-box" style={{ width: "100%" }}>
                                    <input type="radio" name="inputcheckradioprice" />
                                    <label>Under $25</label>
                                </div>
                                <div className="radio-box" style={{ width: "100%" }}>
                                    <input type="radio" name="inputcheckradioprice" />
                                    <label>$25 to $100</label>
                                </div>
                                <div className="radio-box" style={{ width: "100%" }}>
                                    <input type="radio" name="inputcheckradioprice" />
                                    <label>$50 to $100</label>
                                </div>
                                <div className="radio-box" style={{ width: "100%" }}>
                                    <input type="radio" name="inputcheckradioprice" />
                                    <label>$100 to $200</label>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Condition</p>
                            <div className="div-main-klpl">
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiocond" />
                                    <label>Any</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiocond" />
                                    <label>New</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiocond" />
                                    <label>Like New</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiocond" />
                                    <label>Good</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiocond" />
                                    <label>Fair</label>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Status</p>
                            <div className="div-main-klpl">
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" />
                                    <label>Any</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" />
                                    <label>For Sale</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" />
                                    <label>Sold</label>
                                </div>
                            </div>
                        </div>
                        <div className="keyword-lpl" style={{ borderTop: 0, marginTop: 0 }}>
                            <p>Category</p>
                            <div className="div-main-klpl">
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" onClick={() => {
                                        let filtered = this.state.arr.filter((g) => {
                                            return g.category === "shoes"
                                        })
                                        this.setState({ arrFiltered: filtered })
                                    }} />
                                    <label>SHOES</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" onClick={() => {
                                        let filtered = this.state.arr.filter((g) => {
                                            return g.category === "furniture"
                                        })
                                        this.setState({ arrFiltered: filtered })
                                    }} />
                                    <label>FURNITURE</label>
                                </div>
                                <div className="radio-box">
                                    <input type="radio" name="inputcheckradiostat" onClick={() => {
                                        let filtered = this.state.arr.filter((g) => {
                                            return g.category === "sports"
                                        })
                                        this.setState({ arrFiltered: filtered })
                                    }} />
                                    <label>SPORTS</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-product-list">
                        <div className="top-rpl">
                            <h3 className="main-heading-rpl">Fashion for Women <p>(999+ results)</p></h3>
                            <button>Save this search</button>
                        </div>
                        {this.state.arr.length > 0 && <div className="product-list-complete productlistmain">
                            {this.state.arrFiltered.length > 0 ? this.state.arrFiltered.map((g) => {
                                return <div className="product-card" onClick={() => window.location.href = `product-detail/${g.pushKey}`}>
                                    <img src={g.images && g.images[0]} />
                                    <p className="title-pc">{g.title}</p>
                                    <p className="second-title-pc">{g.category}</p>
                                    <p className="price-pc">$ {g.price}</p>
                                </div>
                            }) : this.state.arr.map((g) => {
                                return <div className="product-card" onClick={() => window.location.href = `product-detail/${g.pushKey}`}>
                                    <img src={g.images && g.images[0]} />
                                    <p className="title-pc">{g.title}</p>
                                    <p className="second-title-pc">{g.category}</p>
                                    <p className="price-pc">$ {g.price}</p>
                                </div>
                            })}
                        </div>}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductList
