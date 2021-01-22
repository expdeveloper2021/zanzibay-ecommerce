import React, { Component } from 'react'
import './index.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import firebase from '../../Config/Firebase'

export class CreateProduct extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            passwordNotMatched: false,
            arrImages: [],
            dropFile: [],
            stock: 1,
            selectedCategory: "shoes",
        }
    }

    componentDidMount() {
        let uid = localStorage.getItem("userid")
        if (!uid) {
            window.location.href = "/login"
        }
        this.setState({ userid: uid })
    }

    uploadImg(e) {
        e.preventDefault()
        let dropFiles = this.state.dropFile
        if (e.target.files && e.target.files.length > 0) {
            let objected = Object.entries(e.target.files)
            objected.map((f, i) => {
                const reader = new FileReader();
                dropFiles.push(objected[i][1])
                reader.addEventListener('load', () => {
                    let img = new Image();
                    let result = reader.result
                    img.onload = (e) => {
                        let arr = this.state.arrImages
                        arr.push(result)
                        this.setState({ arrImages: arr, dropFile: dropFiles })
                    };
                    img.src = result;
                });
                reader.readAsDataURL(objected[i][1]);
                e.target.value = null
            })
        }
    }

    createProduct() {
        const { title, description, price, stock, selectedCategory } = this.state
        if (title === "") {
            this.setState({ titleEmpty: true })
        } else {
            this.setState({ titleEmpty: false })
        }
        if (description === "") {
            this.setState({ descriptionEmpty: true })
        } else {
            this.setState({ descriptionEmpty: false })
        }
        if (price === "") {
            this.setState({ priceEmpty: true })
        } else {
            this.setState({ priceEmpty: false })
        }
        if (title !== "" && description !== "" && price !== "" && this.state.dropFile.length > 0) {
            let obj = {
                title,
                description,
                price,
                stock,
                category: selectedCategory,
                created_by: this.state.userid,
            }
            let pushProducts = firebase.database().ref("all_products").push().key
            obj.pushKey = pushProducts
            firebase.database().ref("all_products/" + pushProducts).set(obj).then(() => {
                this.state.dropFile.map((e) => {
                    let pushProductsImages = firebase.database().ref("all_products/" + pushProducts + "/images").push().key
                    firebase.storage().ref().child(`productimages/${e.name}`).put(e)
                        .then((snapshot) => {
                            snapshot.ref.getDownloadURL().then((snapUrl) => {
                                let objSec = {
                                    image: snapUrl,
                                    pushKey: pushProductsImages,
                                }
                                firebase.database().ref("all_products/" + pushProducts + "/images/" + pushProductsImages).set(objSec)
                                // Redirecting
                                this.setState({
                                    title: "",
                                    arrImages: [],
                                    dropFile: [],
                                    description: "",
                                    price: "",
                                    stock: 1,
                                    selectedCategory: "shoes",
                                })
                                // Redirecting
                            })
                        })
                })
                // setTimeout(() => {
                // }, 2000);
            }).catch((err) => {
                console.log(err)
            })
        }
    }

    render() {
        return (
            <div className="registration-main" style={{ position: "static" }}>
                <div className="inner-registration-main" style={{ marginTop: 40 }}>
                    <h2 className="main-heading-irm">Sell Product</h2>
                    <div className="form-irm">
                        <div className="inner-form-irm">
                            <label>Product title</label>
                            <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                        </div>
                        {this.state.titleEmpty && <div className="inner-form-irm">
                            <label style={{ color: "red" }}>Title can't be empty</label>
                        </div>}
                        <div className="inner-form-irm">
                            <label>Description</label>
                            <textarea value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}></textarea>
                        </div>
                        {this.state.descriptionEmpty && <div className="inner-form-irm">
                            <label style={{ color: "red" }}>Description can't be empty</label>
                        </div>}
                        <div className="inner-form-irm">
                            <label>Product price</label>
                            <input type="text" value={this.state.price} onChange={(e) => this.setState({ price: e.target.value })} />
                        </div>
                        {this.state.priceEmpty && <div className="inner-form-irm">
                            <label style={{ color: "red" }}>Price can't be empty</label>
                        </div>}
                        <div className="inner-form-irm">
                            <label>Stock</label>
                            <input type="number" value={this.state.stock} onChange={(e) => this.setState({ stock: e.target.value })} />
                        </div>
                        <div className="inner-form-irm">
                            <label>Product category</label>
                            <select value={this.state.selectedCategory} onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
                                <option value="shoes">Shoes</option>
                                <option value="furniture">Furniture</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                        <div className="inner-form-irm">
                            <label>Product images</label>
                            <input type="file" multiple onChange={(e) => this.uploadImg(e)} />
                        </div>
                        {this.state.priceEmpty && <div className="inner-form-irm">
                            <label style={{ color: "red" }}>Please select any one image</label>
                        </div>}
                        {this.state.arrImages.length > 0 && <div className="product-images-to-render">
                            {this.state.arrImages.map((e) => {
                                return <img src={e} key={Math.random()} />
                            })}
                        </div>}

                        <div className="button-form-irm">
                            <button onClick={this.createProduct.bind(this)}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProduct
