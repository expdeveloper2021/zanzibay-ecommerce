import React, { Component } from 'react'
import './index.css'
import firebase from '../../Config/Firebase'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';

export class Login extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            inputType: "password",
        }
    }

    loginEmailPassword() {
        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                localStorage.setItem("userid", user.user.uid)
                window.location.href = "/"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }


    loginWithFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                localStorage.setItem("userid", result.user.uid)
                window.location.href = "/"
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
            <div>
                <div className="login-main">
                    <div className="inner-login-main">
                        <div className="left-ilm">
                            <h3>Log in to:</h3>
                            <ul>
                                <li> <CheckIcon /> List items for sale</li>
                                <li> <CheckIcon /> Get price drop notifications for items you like</li>
                                <li> <CheckIcon /> Set up deal alerts</li>
                                <li> <CheckIcon /> Message buyers and sellers</li>
                            </ul>
                        </div>
                        <div className="right-ilm">
                            <h4 className="heading-rilm">ZANZIBAY</h4>
                            <button className="btnfb-rilm" style={{ marginTop: 20 }} onClick={this.loginWithFacebook.bind(this)}>Continue with Facebook</button>
                            <div className="or-rilm">
                                <div></div>
                                <p>OR</p>
                                <div></div>
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
                            <div className="forgetpasswordlogin">
                                <p style={{ cursor: "pointer" }} onClick={() => window.location.href = "/forget-password"}>Forget Password</p>
                            </div>
                            <button className="btnlogin-rilm" style={{ marginBottom: 0 }} onClick={this.loginEmailPassword.bind(this)}>Log in</button>
                            <button className="btnlogin-rilm" onClick={() => window.location.href = "/registration"}>Don't have an account? Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
