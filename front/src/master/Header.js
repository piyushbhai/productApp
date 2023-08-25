import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { BASEURL } from "../BASEURL";
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import {remove_from_cart} from '../redux/action/Action'

const Header = () => {
    let [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const cartdata = useSelector((state)=>state.reducer)
    // console.log(cartdata.cartItems);
    
    const dispatch = useDispatch();

    const removeCart = (ProductId) => {
        dispatch(remove_from_cart(ProductId))
    }

  return (
    <>
    <header className="header header--1" data-sticky="true">
        <div className="header__top">
            <div className="ps-container">
                <div className="header__left">
                    <div className="menu--product-categories">
                        <div className="menu__toggle"><i className="icon-menu"></i>
                        <Link className="catlink" to={'/categories'}>Shop by Category</Link></div>
                        <div className="menu__content">
                            <ul className="menu--dropdown">
                                <li><a href="#.html">Hot Promotions</a>
                                </li>
                                <li className="menu-item-has-children has-mega-menu"><a href="#">Consumer Electronic</a><span className="sub-toggle"></span>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                            <h4>Electronic<span className="sub-toggle"></span></h4>
                                            <ul className="mega-menu__list">
                                                <li><a href="#.html">Home Audio &amp; Theathers</a>
                                                </li>
                                                <li><a href="#.html">TV &amp; Videos</a>
                                                </li>
                                                <li><a href="#.html">Camera, Photos &amp; Videos</a>
                                                </li>
                                                <li><a href="#.html">Cellphones &amp; Accessories</a>
                                                </li>
                                                <li><a href="#.html">Headphones</a>
                                                </li>
                                                <li><a href="#.html">Videosgames</a>
                                                </li>
                                                <li><a href="#.html">Wireless Speakers</a>
                                                </li>
                                                <li><a href="#.html">Office Electronic</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="mega-menu__column">
                                            <h4>Accessories &amp; Parts<span className="sub-toggle"></span></h4>
                                            <ul className="mega-menu__list">
                                                <li><a href="#.html">Digital Cables</a>
                                                </li>
                                                <li><a href="#.html">Audio &amp; Video Cables</a>
                                                </li>
                                                <li><a href="#.html">Batteries</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#.html">Clothing &amp; Apparel</a>
                                </li>
                                <li><a href="#.html">Home, Garden &amp; Kitchen</a>
                                </li>
                                <li><a href="#.html">Health &amp; Beauty</a>
                                </li>
                                <li><a href="#.html">Yewelry &amp; Watches</a>
                                </li>
                                <li className="menu-item-has-children has-mega-menu"><a href="#">Computer &amp; Technology</a><span className="sub-toggle"></span>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                            <h4>Computer &amp; Technologies<span className="sub-toggle"></span></h4>
                                            <ul className="mega-menu__list">
                                                <li><a href="#.html">Computer &amp; Tablets</a>
                                                </li>
                                                <li><a href="#.html">Laptop</a>
                                                </li>
                                                <li><a href="#.html">Monitors</a>
                                                </li>
                                                <li><a href="#.html">Networking</a>
                                                </li>
                                                <li><a href="#.html">Drive &amp; Storages</a>
                                                </li>
                                                <li><a href="#.html">Computer Components</a>
                                                </li>
                                                <li><a href="#.html">Security &amp; Protection</a>
                                                </li>
                                                <li><a href="#.html">Gaming Laptop</a>
                                                </li>
                                                <li><a href="#.html">Accessories</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#.html">Babies &amp; Moms</a>
                                </li>
                                <li><a href="#.html">Sport &amp; Outdoor</a>
                                </li>
                                <li><a href="#.html">Phones &amp; Accessories</a>
                                </li>
                                <li><a href="#.html">Books &amp; Office</a>
                                </li>
                                <li><a href="#.html">Cars &amp; Motocycles</a>
                                </li>
                                <li><a href="#.html">Home Improments</a>
                                </li>
                                <li><a href="#.html">Vouchers &amp; Services</a>
                                </li>
                            </ul>
                        </div>
                    </div><Link className="ps-logo" to={'/'}>
                        <h2> ProductApp</h2>
                        </Link>
                </div>
                <div className="header__center">
                    <form className="ps-form--quick-search" action="#" method="get">
                        <div className="form-group--icon"><i className="icon-chevron-down"></i>
                            <select className="form-control">
                                <option value="0" selected="selected">All</option>
                                {data && data.length >0 && data.map((item,i)=>{
                                return(<>
                                <option className="level-0" value="babies-moms">{item.CategoryName}</option>
                                </>)
                                })}                                
                            </select>
                        </div>
                        <input className="form-control" type="text" placeholder="I'm shopping for..." id="input-search" />
                        <button>Search</button>
                        <div className="ps-panel--search-result">
                            <div className="ps-panel__content">
                                <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><Link to="/product-details/2"><img src={BASEURL+"uploads/avatar/image1691569962773.jpg"} alt="" /></Link></div>
                                    <div className="ps-product__content"><Link className="ps-product__title" to="/product-details/2">Midnight Sun – Nail Polish</Link>
                                        <div className="ps-product__rating">
                                            <select className="ps-rating" data-read-only="true">
                                                <option value="1">1</option>
                                                <option value="1">2</option>
                                                <option value="1">3</option>
                                                <option value="1">4</option>
                                                <option value="2">5</option>
                                            </select><span></span>
                                        </div>
                                        <p className="ps-product__price">$75</p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="ps-panel__footer text-center"><a href="#">See all results</a></div>
                        </div>
                    </form>
                </div>
                <div className="header__right">
                    <div className="header__actions">
                    {/* <a className="header__extra" href="#"><i className="icon-chart-bars"></i><span><i>0</i></span></a><a className="header__extra" href="#"><i className="icon-heart"></i><span><i>0</i></span></a> */}
                        <div className="ps-cart--mini"><div className="header__extra"><i className="icon-bag2"></i><span><i>{cartdata && cartdata.cartItems}</i></span></div>
                        <div className="ps-cart__content">
                                        <div className="ps-cart__items">
                                        {cartdata.payload && cartdata.payload.length>0 ?  cartdata.payload.map((item,i)=>{
                                        return(
                                            <>
                                            <div className="ps-product--cart-mobile">
                                                <div className="ps-product__thumbnail"><a href="#"><img src={BASEURL+'uploads/'+item.photo} alt="" /></a></div>
                                                <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" onClick={()=>removeCart(item.ProductId)}></i></a><Link to={`product-details/${item._id}`}>{item.name}</Link> 
                                                    {/* <p><strong>Sold by:</strong> YOUNG SHOP</p> */}
                                                    <br/><small>1 x ${item.price}</small>
                                                </div>
                                            </div>
                                            </>
                                            )
                                            })                                            
                                            
                                            :<p>No products in cart</p> 
                                            }
                                            {/* <div className="ps-product--cart-mobile">
                                                <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/5.jpg" alt="" /></a></div>
                                                <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                                    <p><strong>Sold by:</strong> YOUNG SHOP</p><small>1 x $59.99</small>
                                                </div>
                                            </div> */}
                                        </div>
                                        {
                                        // console.log(cartdata.payload)
                                        cartdata.payload && cartdata.payload.length>0 ? 
                                        <div className="ps-cart__footer">
                                            {/* <h3>Price:<strong>cartdata.payload</strong></h3> */}
                                            <figure><Link className="ps-btn" to={'/cart'}>View Cart</Link><Link className="ps-btn" to={'/checkout'}>Checkout</Link></figure>
                                            
                                        </div>
                                        :null
                                         }

                                        
                                        
                            </div>
                        </div>
                        <div className="ps-block--user-header">
                            <div className="ps-block__left"><i className="icon-user"></i></div>
                            <div className="ps-block__right"><Link to={"/login"}>Login</Link><a href="my-account.html"><Link to={"/register"}>Register</Link></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navigation">
            <div className="ps-container">
                <div className="navigation__left">
                    <div className="menu--product-categories">
                        <div className="menu__toggle">
                        {/* <i className="icon-menu"></i> */}
                        <span>
                         <Link className="catlink" to={'/categories'}>Shop by Category</Link>
                         </span></div>                       
                    </div>
                </div>
                <div className="navigation__right">
                    <ul className="menu">
                        <li ><Link to="/">Home</Link></li>
                        <li ><Link to="/products">Products</Link></li>
                      
                        {/* {data && data.length >0 && data.map((item,i)=>{
                            if(i!==8){
                            return(<>
                                <li className={item.subarr.length>0 && "menu-item-has-children"}>
                                    <Link to={'categories/'+item.slug}>{item.CategoryName}</Link><span className="sub-toggle"></span>
                                    <ul className="sub-menu menu--dropdown">    
                                    {item.subarr && item.subarr.length>0 && item.subarr.map((item_sub,i)=>{   
                                    return(                                    
                                        <li className="menu-item-has-children has-mega-menu"><Link to={'categories/'+item_sub.slug}>{item_sub.CategoryName}</Link><span className="sub-toggle"></span>
                                            {item_sub.sub_sub_category && item_sub.sub_sub_category.length>0 &&
                                            <ul className="sub-menu">
                                            { item_sub.sub_sub_category.map((item_sub_sub,i)=>{   
                                                return(
                                                    <li><Link to={'categories/'+item_sub_sub.slug}>{item_sub_sub.CategoryName}</Link></li>                                            
                                                )                         
                                            }) }
                                            </ul>
                                            }
                                        </li>                                                                        
                                    )                         
                                    }) }
                                    </ul>
                                </li>
                            </>)
                           }   }) }
                          */}

                    </ul>
                    
                </div>
            </div>
        </nav>
    </header>
    <header className="header header--mobile" data-sticky="true">
        <div className="header__top">
            <div className="header__left">
                <p>Welcome to Martfury Online Shopping Store !</p>
            </div>
            <div className="header__right">
                <ul className="navigation__extra">
                    <li><a href="#">Sell on Martfury</a></li>
                    <li><a href="#">Tract your order</a></li>
                    <li>
                        <div className="ps-dropdown"><a href="#">US Dollar</a>
                            <ul className="ps-dropdown-menu">
                                <li><a href="#">Us Dollar</a></li>
                                <li><a href="#">Euro</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div className="ps-dropdown language"><a href="#"><img src="img/flag/en.png" alt="" />English</a>
                            <ul className="ps-dropdown-menu">
                                <li><a href="#"><img src="img/flag/germany.png" alt="" /> Germany</a></li>
                                <li><a href="#"><img src="img/flag/fr.png" alt="" /> France</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="navigation--mobile">
            <div className="navigation__left"><Link className="ps-logo" to={'/'}>
            ProductApp
            </Link></div>
            <div className="navigation__right">
                <div className="header__actions">
                    <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2"></i><span><i>0</i></span></a>
                        <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                <div className="ps-product--cart-mobile">
                                    <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                        <p><strong>Sold by:</strong> YOUNG SHOP</p><small>1 x $59.99</small>
                                    </div>
                                </div>
                                <div className="ps-product--cart-mobile">
                                    <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/5.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                        <p><strong>Sold by:</strong> YOUNG SHOP</p><small>1 x $59.99</small>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-cart__footer">
                                <h3>Sub Total:<strong>$59.99</strong></h3>
                                <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ps-block--user-header">
                        <div className="ps-block__left"><a href="my-account.html"><i className="icon-user"></i></a></div>
                        <div className="ps-block__right"><a href="my-account.html">Login</a><a href="my-account.html">Register</a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ps-search--mobile">
            <form className="ps-form--search-mobile" action="#" method="get">
                <div className="form-group--nest">
                    <input className="form-control" type="text" placeholder="Search something..." />
                    <button><i className="icon-magnifier"></i></button>
                </div>
            </form>
        </div>
    </header>
    </>
  )
}

export default Header