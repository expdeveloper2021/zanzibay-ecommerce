import React, { Component } from 'react'
import './index.css'
import firebase from '../../Config/Firebase'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';

export class Registration extends Component {

    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            passwordNotMatched: false,
            inputType: "password",
            inputTypeConfirm: "password",
        }
    }

    createAccount() {
        const { firstName, lastName, email, password, confirmPassword } = this.state
        if (firstName === "") {
            this.setState({ firstNameEmpty: true })
        } else {
            this.setState({ firstNameEmpty: false })
        }
        if (lastName === "") {
            this.setState({ lastNameEmpty: true })
        } else {
            this.setState({ lastNameEmpty: false })
        }
        if (email === "") {
            this.setState({ emailEmpty: true })
        } else {
            this.setState({ emailEmpty: false })
        }
        if (password === confirmPassword) {
            this.setState({ passwordNotMatched: false })
        } else {
            this.setState({ passwordNotMatched: true })
        }
        if (firstName !== "" && lastName !== "" && email !== "" && password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    let obj = {
                        first_name: firstName,
                        last_name: lastName,
                        email: email,
                        password,
                        user_id: user.user.uid,
                    }
                    firebase.database().ref("users/" + user.user.uid).set(obj).then(() => {
                        localStorage.setItem("userid", user.user.uid)
                        window.location.href = "/"
                    })
                })
                .catch((error) => {
                    var errorCode = error.code;
                    console.log(errorCode)
                });
        }
    }

    loginWithFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                let obj = {
                    fullName: result.user.displayName,
                    loggedinVia: "faceboook",
                    email: result.user.email,
                    user_id: result.user.uid
                }
                firebase.database().ref("users/" + result.user.uid).set(obj).then(() => {
                    localStorage.setItem("userid", result.user.uid)
                    window.location.href = "/"
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ...
            });
    }

    render() {
        return (
            // <div className="registration-main">
            //     <div className="inner-registration-main">
            //         <h2 className="main-heading-irm">Create Your Account</h2>
            //         <div className="form-irm">
            //             <div className="inner-form-irm">
            //                 <label>First Name</label>
            //                 <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
            //             </div>
            //             {this.state.firstNameEmpty && <div className="inner-form-irm">
            //                 <label style={{ color: "red" }}>First Name can't be empty</label>
            //             </div>}
            //             <div className="inner-form-irm">
            //                 <label>Last Name</label>
            //                 <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
            //             </div>
            //             {this.state.lastNameEmpty && <div className="inner-form-irm">
            //                 <label style={{ color: "red" }}>Last Name can't be empty</label>
            //             </div>}
            //             <div className="inner-form-irm">
            //                 <label>Email / Number</label>
            //                 <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            //             </div>
            //             {this.state.emailEmpty && <div className="inner-form-irm">
            //                 <label style={{ color: "red" }}>Email can't be empty</label>
            //             </div>}
            //             <div className="inner-form-irm">
            //                 <label>Password</label>
            //                 <input type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
            //             </div>
            //             <div className="inner-form-irm">
            //                 <label>Confirm Password</label>
            //                 <input type="password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
            //             </div>
            //             {this.state.passwordNotMatched && <div className="inner-form-irm">
            //                 <label style={{ color: "red" }}>Password not matched</label>
            //             </div>}
            //             <div className="button-form-irm">
            //                 <button onClick={this.createAccount.bind(this)}>Create Account</button>
            //             </div>
            //             <div className="social-icons">
            //                 <p>Login / Signup with</p>
            //                 <FacebookIcon />
            //                 <EmailIcon />
            //             </div>
            //             <div className="loginlink">
            //                 <p>Already Have Account? LOGIN</p>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="login-main">
                <div className="inner-login-main" style={{ maxWidth: 1000 }}>
                    <div className="left-ilm">
                        <h3>Sign up to:</h3>
                        <ul>
                            <li> <CheckIcon /> List items for sale</li>
                            <li> <CheckIcon /> Get price drop notifications for items you like</li>
                            <li> <CheckIcon /> Set up deal alerts</li>
                            <li> <CheckIcon /> Message buyers and sellers</li>
                        </ul>
                    </div>
                    <div className="right-ilm">
                        <h4 className="heading-rilm">ZANZIBAY</h4>
                        <p className="desc-rilm">Buy or sell any item, anytime</p>
                        <button className="btnfb-rilm" onClick={this.loginWithFacebook.bind(this)}>Continue with Facebook</button>
                        <div className="or-rilm">
                            <div></div>
                            <p>OR</p>
                            <div></div>
                        </div>
                        <div className="form-ilm">
                            <label>First Name</label>
                            <input type="text" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
                        </div>
                        <div className="form-ilm">
                            <label>Last Name</label>
                            <input type="text" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
                        </div>
                        <div className="form-ilm">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                        </div>
                        <div className="form-ilm">
                            <label>Password</label>
                            <input type={this.state.inputType} placeholder="Enter your password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                            {this.state.inputType === "password" ? <VisibilityIcon onClick={() => this.setState({ inputType: "text" })} /> : <VisibilityOffIcon onClick={() => this.setState({ inputType: "password" })} />}
                        </div>
                        <div className="form-ilm">
                            <label>Password</label>
                            <input type={this.state.inputTypeConfirm} placeholder="Confirm password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                            {this.state.inputTypeConfirm === "password" ? <VisibilityIcon onClick={() => this.setState({ inputTypeConfirm: "text" })} /> : <VisibilityOffIcon onClick={() => this.setState({ inputTypeConfirm: "password" })} />}
                        </div>
                        <div className="form-ilm checkboxform" style={{ marginTop: 30 }}>
                            <input type="checkbox" />
                            <label>Yes I agree to <a href="/terms">terms and conditions</a> &  <a href="/privacy-policy">privacy policy</a> </label>
                        </div>
                        <button className="btnlogin-rilm" onClick={this.createAccount.bind(this)}>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration
