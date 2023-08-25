import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
     <footer className="ps-footer">
        <div className="ps-container">
            <div className="ps-footer__widgets">
                <aside className="widget widget_footer widget_contact-us">
                    <h4 className="widget-title">About us</h4>
                    <div className="widget_content" style={{width:"300px"}}>
                        <Link className="ps-logo" to={'/'}><h3>ProductApp</h3></Link>
                        <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </aside>
                <aside className="widget widget_footer">
                    <h4 className="widget-title">Quick Links</h4>
                    <ul className="ps-list--link">
                        <li><Link to="/products">Products</Link></li>                        
                        
                    </ul>
                </aside>
                <aside className="widget widget_footer">
                    <h4 className="widget-title">Store Info</h4>
                    <ul className="ps-list--link">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact Us</a></li>
                        
                        
                    </ul>
                </aside>
                <aside className="widget widget_footer">
                    <h4 className="widget-title">Contact Us</h4>
                    <p>Call us 24/7</p>
                        <h3>1800 97 00 00</h3>
                        <p>601 Pethapur, Gujarat, India <br/>
                        </p>
                        <ul className="ps-list--social">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="youtube" href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                  
                </aside>
            </div>
            <div className="ps-footer__copyright">
                <p>&copy; 2023 ProductApp. All Rights Reserved</p>
                <p><span>We Using Safe Payment For:</span><a href="#"><img src="img/payment-method/1.jpg" alt="" /></a><a href="#"><img src="img/payment-method/2.jpg" alt="" /></a><a href="#"><img src="img/payment-method/3.jpg" alt="" /></a><a href="#"><img src="img/payment-method/4.jpg" alt="" /></a><a href="#"><img src="img/payment-method/5.jpg" alt="" /></a></p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer