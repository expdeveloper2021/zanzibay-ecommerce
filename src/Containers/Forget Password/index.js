import React, { Component } from 'react'
import './index.css'
import firebase from '../../Config/Firebase'
import CheckIcon from '@material-ui/icons/Check';

export class ForgetPassword extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            inputType: "password",
        }
    }

    passwordResetEmail() {
        var auth = firebase.auth();
        var emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress).then(function () {
            window.location.href = "/login"
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <div>
                <div className="login-main" style={{ paddingTop: 80 }}>
                    <div className="inner-login-main">
                        <div className="left-ilm">
                            <h3>Forget your password?</h3>
                        </div>
                        <div className="right-ilm">
                            <h4 className="heading-rilm">ZANZIBAY</h4>
                            <p className="desc-rilm">Buy or sell any item, anytime</p>
                            <div className="form-ilm">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <button className="btnlogin-rilm" onClick={this.passwordResetEmail.bind(this)}>Forget Password</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgetPassword
