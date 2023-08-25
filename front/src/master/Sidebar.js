import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div id="back2top"><i className="icon icon-arrow-up"></i></div>
    <div className="ps-site-overlay"></div>
    <div className="ps-panel--sidebar" id="cart-mobile">
        <div className="ps-panel__header">
            <h3>Shopping Cart</h3>
        </div>
        <div className="navigation__content">
            <div className="ps-cart--mobile">
                <div className="ps-cart__content">
                    <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt=""/></a></div>
                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
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
    </div>
    <div className="ps-panel--sidebar" id="navigation-mobile">
        <div className="ps-panel__header">
            <h3>Categories</h3>
        </div>
        <div className="ps-panel__content">
            <div className="menu--product-categories">
                <div className="menu__toggle"><i className="icon-menu"></i><span> Shop by Department</span></div>
                <div className="menu__content">
                    <ul className="menu--mobile">
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
            </div>
        </div>
    </div>
    <div className="navigation--list">
        <div className="navigation__content"><a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i className="icon-menu"></i><span> Menu</span></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="icon-list4"></i><span> Categories</span></a><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i className="icon-magnifier"></i><span> Search</span></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="icon-bag2"></i><span> Cart</span></a></div>
    </div>
    <div className="ps-panel--sidebar" id="search-sidebar">
        <div className="ps-panel__header">
            <form className="ps-form--search-mobile" action="#" method="get">
                <div className="form-group--nest">
                    <input className="form-control" type="text" placeholder="Search something..."/>
                    <button><i className="icon-magnifier"></i></button>
                </div>
            </form>
        </div>
        <div className="navigation__content"></div>
    </div>
    <div className="ps-panel--sidebar" id="menu-mobile">
        <div className="ps-panel__header">
            <h3>Menu</h3>
        </div>
        <div className="ps-panel__content">
            <ul className="menu--mobile">
                <li className="menu-item-has-children"><a href="index-2.html">Home</a><span className="sub-toggle"></span>
                    <ul className="sub-menu">
                        <li><a href="index.html">Marketplace Full Width</a>
                        </li>
                        <li><a href="home-autopart.html">Home Auto Parts</a>
                        </li>
                        <li><a href="home-technology.html">Home Technology</a>
                        </li>
                        <li><a href="home-organic.html">Home Organic</a>
                        </li>
                        <li><a href="home-marketplace.html">Home Marketplace V1</a>
                        </li>
                        <li><a href="home-marketplace-2.html">Home Marketplace V2</a>
                        </li>
                        <li><a href="home-marketplace-3.html">Home Marketplace V3</a>
                        </li>
                        <li><a href="home-marketplace-4.html">Home Marketplace V4</a>
                        </li>
                        <li><a href="home-electronic.html">Home Electronic</a>
                        </li>
                        <li><a href="home-furniture.html">Home Furniture</a>
                        </li>
                        <li><a href="home-kid.html">Home Kids</a>
                        </li>
                        <li><a href="homepage-photo-and-video.html">Home photo and picture</a>
                        </li>
                        <li><a href="home-medical.html">Home Medical</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item-has-children has-mega-menu"><a href="shop-default-2.html">Shop</a><span className="sub-toggle"></span>
                    <div className="mega-menu">
                        <div className="mega-menu__column">
                            <h4>Catalog Pages<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="shop-default.html">Shop Default</a>
                                </li>
                                <li><a href="shop-default.html">Shop Fullwidth</a>
                                </li>
                                <li><a href="shop-categories.html">Shop Categories</a>
                                </li>
                                <li><a href="shop-sidebar.html">Shop Sidebar</a>
                                </li>
                                <li><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                                </li>
                                <li><a href="shop-carousel.html">Shop Carousel</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mega-menu__column">
                            <h4>Product Layout<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="product-default.html">Default</a>
                                </li>
                                <li><a href="product-extend.html">Extended</a>
                                </li>
                                <li><a href="product-full-content.html">Full Content</a>
                                </li>
                                <li><a href="product-box.html">Boxed</a>
                                </li>
                                <li><a href="product-sidebar.html">Sidebar</a>
                                </li>
                                <li><a href="product-default.html">Fullwidth</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mega-menu__column">
                            <h4>Product Types<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="product-default.html">Simple</a>
                                </li>
                                <li><a href="product-default.html">Color Swatches</a>
                                </li>
                                <li><a href="product-image-swatches.html">Images Swatches</a>
                                </li>
                                <li><a href="product-countdown.html">Countdown</a>
                                </li>
                                <li><a href="product-multi-vendor.html">Multi-Vendor</a>
                                </li>
                                <li><a href="product-instagram.html">Instagram</a>
                                </li>
                                <li><a href="product-affiliate.html">Affiliate</a>
                                </li>
                                <li><a href="product-on-sale.html">On sale</a>
                                </li>
                                <li><a href="product-video.html">Video Featured</a>
                                </li>
                                <li><a href="product-groupped.html">Grouped</a>
                                </li>
                                <li><a href="product-out-stock.html">Out Of Stock</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mega-menu__column">
                            <h4>Woo Pages<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="shopping-cart.html">Shopping Cart</a>
                                </li>
                                <li><a href="checkout.html">Checkout</a>
                                </li>
                                <li><a href="whishlist.html">Whishlist</a>
                                </li>
                                <li><a href="compare.html">Compare</a>
                                </li>
                                <li><a href="order-tracking.html">Order Tracking</a>
                                </li>
                                <li><a href="my-account.html">My Account</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-has-children has-mega-menu"><a href="#">Pages</a><span className="sub-toggle"></span>
                    <div className="mega-menu">
                        <div className="mega-menu__column">
                            <h4>Basic Page<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="about-us.html">About Us</a>
                                </li>
                                <li><a href="contact-us.html">Contact</a>
                                </li>
                                <li><a href="faqs.html">Faqs</a>
                                </li>
                                <li><a href="comming-soon.html">Comming Soon</a>
                                </li>
                                <li><a href="404-page.html">404 Page</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mega-menu__column">
                            <h4>Vendor Pages<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="become-a-vendor.html">Become a Vendor</a>
                                </li>
                                <li><a href="vendor-store.html">Vendor Store</a>
                                </li>
                                <li><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                                </li>
                                <li><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="menu-item-has-children has-mega-menu"><a href="#">Blogs</a><span className="sub-toggle"></span>
                    <div className="mega-menu">
                        <div className="mega-menu__column">
                            <h4>Blog Layout<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="blog-grid.html">Grid</a>
                                </li>
                                <li><a href="blog-list.html">Listing</a>
                                </li>
                                <li><a href="blog-small-thumb.html">Small Thumb</a>
                                </li>
                                <li><a href="blog-left-sidebar.html">Left Sidebar</a>
                                </li>
                                <li><a href="blog-right-sidebar.html">Right Sidebar</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mega-menu__column">
                            <h4>Single Blog<span className="sub-toggle"></span></h4>
                            <ul className="mega-menu__list">
                                <li><a href="blog-detail.html">Single 1</a>
                                </li>
                                <li><a href="blog-detail-2.html">Single 2</a>
                                </li>
                                <li><a href="blog-detail-3.html">Single 3</a>
                                </li>
                                <li><a href="blog-detail-4.html">Single 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="loader-wrapper">
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
    </div>
    <div className="ps-search" id="site-search"><a className="ps-btn--close" href="#"></a>
        <div className="ps-search__content">
            <form className="ps-form--primary-search" action="#" method="post">
                <input className="form-control" type="text" placeholder="Search for..."/>
                <button><i className="aroma-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
   
    </>
  )
}

export default Sidebar