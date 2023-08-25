import React from 'react'

const Login = () => {
  return (
    <>
         <div className="ps-my-account">
            <div className="container">
                <form className="ps-form--account ps-tab-root" action="#" method="get">
                    <ul className="ps-tab-list">
                        <li className="active"><a href="#sign-in">Login</a></li>
                        <li><a href="#register">Register</a></li>
                    </ul>
                    <div className="ps-tabs">
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Username or email address"/>
                                </div>
                                <div className="form-group form-forgot">
                                    <input className="form-control" type="text" placeholder="Password"/><a href="#">Forgot?</a>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input className="form-control" type="checkbox" id="remember-me" name="remember-me" />
                                        <label for="remember-me">Rememeber me</label>
                                    </div>
                                </div>
                                <div className="form-group submtit">
                                    <button className="ps-btn ps-btn--fullwidth">Login</button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ps-tab" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Username or email address"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Password"/>
                                </div>
                                <div className="form-group submtit">
                                    <button className="ps-btn ps-btn--fullwidth">Login</button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="google" href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login