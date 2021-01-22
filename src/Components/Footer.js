import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Footer extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', width: '100%', marginTop: 40 }}>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>SHOP</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Categories</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Brands</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Deals</Link>
                    </div>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>COMPANY</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >About us</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Careers</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Blog</Link>
                    </div>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>ALL  FROM HOME</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Authenticate</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Instant Pay</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Mercari Now</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Sell from Home</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Shipping</Link>
                    </div>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>SUPPORT</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Contact us</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Help Center</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >How it Works</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Become a Seller</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Buyers</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Safety Guidelines</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Policy Center</Link>
                    </div>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>ACCOUNT</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Sign up/Log in</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Favorities</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Messages</Link>
                    </div>
                    <div className='foot-links'>
                        <h6 style={{ fontWeight: 'bold', color: 'White', fontSize: '18px' }}>POLICY CENTER</h6>
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Terms of Service</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parking' >Privacy Policy</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Prohibited Items</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Prohibited Items</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Electronic Communications</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >DMCA Policy</Link>
                        <br />
                        <Link style={{ textDecoration: 'none', color: 'White', fontSize: '14px' }} to='/userdashboard/parkingspace' >Requests From Law Enforcement</Link>
                    </div>

                </div>
                <div className='foot-links'>
                    <h4 style={{ fontWeight: 'bold', color: 'white', fontSize: '22px' }}>Ecommerce</h4>
                </div>
                <div className='desktop-footer'>
                    <p>Copyright @2020 Ecommerce,inc.</p>
                    <div style={{ marginRight: '30px' }}></div>
                    <Link style={{ textDecoration: 'none', color: '#999999', fontSize: '13px', marginTop: '3px' }} to='/userdashboard/parkingspace' >Privacy Policy</Link>
                    <div style={{ marginRight: '30px' }}></div>
                    <Link style={{ textDecoration: 'none', color: '#999999', fontSize: '13px', marginTop: '3px' }} to='/userdashboard/parkingspace' >Terms of Service</Link>
                    <div style={{ marginRight: '30px' }}></div>
                    <Link style={{ textDecoration: 'none', color: '#999999', fontSize: '13px', marginTop: '3px' }} to='/userdashboard/parkingspace' >Licenses/Disclosures</Link>
                    <div className='footer-space' style={{ marginRight: '25%', }}  ></div>
                    {/* style={{marginRight: '100px' }} */}
                    <p className="footer-location"  >NMLS ID: 1486447 PO Box 60178, Palo Alto, CA 94306</p>

                </div>
            </div >
        )
    }
}

export default Footer
