import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'
import { BASEURL } from "../BASEURL";


const Products = () => {
    const [product, setproduct] = useState([]);
 
    useEffect(() => {        
        getProducts();
      }, []);
    
      
 
    const getProducts = async (type=0) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        await fetch(BASEURL + `get-products/`, {
          method: "POST",
          headers: myHeaders,       
          body: JSON.stringify({type})  
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.status === "201") {
                setproduct(res.products)
            } else {
                setproduct([])              
            }
          })
          .catch((err) => console.log(err));
    
      
    };

    const sortproduct = (type) =>{
        getProducts(type)
    }
   
  return (
    <>
  
    <div className="ps-page--shop" id="shop-sidebar">
        <div className="ps-container">
            <div className="ps-layout--shop">
                <div className="ps-layout__left">
                    
                    <aside className="widget widget_shop">
                        <figure>
                            <h4 className="widget-title">By Price</h4>
                            <div id="nonlinear"></div>
                            <p className="ps-slider__meta">Price:<span className="ps-slider__value">$<span className="ps-slider__min"></span></span>-<span className="ps-slider__value">$<span className="ps-slider__max"></span></span></p>
                        </figure>
                        <figure>
                            <h4 className="widget-title">By Price</h4>
                            <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="review-1" name="review"/>
                                <label for="review-1"><span><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i></span><small>(13)</small></label>
                            </div>
                            <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="review-2" name="review"/>
                                <label for="review-2"><span><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star"></i></span><small>(13)</small></label>
                            </div>
                            <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="review-3" name="review"/>
                                <label for="review-3"><span><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span><small>(5)</small></label>
                            </div>
                            <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="review-4" name="review"/>
                                <label for="review-4"><span><i className="fa fa-star rate"></i><i className="fa fa-star rate"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span><small>(5)</small></label>
                            </div>
                            <div className="ps-checkbox">
                                <input className="form-control" type="checkbox" id="review-5" name="review"/>
                                <label for="review-5"><span><i className="fa fa-star rate"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span><small>(1)</small></label>
                            </div>
                        </figure>
                        <figure>
                            <h4 className="widget-title">By Color</h4>
                            <div className="ps-checkbox ps-checkbox--color color-1 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-1" name="size" />
                                <label for="color-1"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-2 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-2" name="size" />
                                <label for="color-2"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-3 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-3" name="size" />
                                <label for="color-3"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-4 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-4" name="size" />
                                <label for="color-4"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-5 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-5" name="size" />
                                <label for="color-5"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-6 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-6" name="size" />
                                <label for="color-6"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-7 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-7" name="size" />
                                <label for="color-7"></label>
                            </div>
                            <div className="ps-checkbox ps-checkbox--color color-8 ps-checkbox--inline">
                                <input className="form-control" type="checkbox" id="color-8" name="size" />
                                <label for="color-8"></label>
                            </div>
                        </figure>
                        <figure className="sizes">
                            <h4 className="widget-title">BY SIZE</h4><a href="#">L</a><a href="#">M</a><a href="#">S</a><a href="#">XL</a>
                        </figure>
                    </aside>
                </div>
                <div className="ps-layout__right">                    
                    
                    <div className="ps-shopping ps-tab-root">
                        <div className="ps-shopping__header">
                            <p><strong> {product && product.length}</strong> Products found</p>
                            <div className="ps-shopping__actionsq">
                                <select className="form-control" onChange={(e)=>sortproduct(e.target.value)}>
                                    <option value={0}>Sort by latest</option>
                                    {/* <option value={1}>Sort by popularity</option>
                                    <option value={2}>Sort by average rating</option> */}
                                    <option value={1}>Sort by price: low to high</option>
                                    <option value={2}>Sort by price: high to low</option>
                                </select>
                                {/* <div className="ps-shopping__view">
                                    <p>View</p>
                                    <ul className="ps-tab-list">
                                        <li className="active"><a href="#tab-1"><i className="icon-grid"></i></a></li>
                                        <li><a href="#tab-2"><i className="icon-list4"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="ps-tabs">
                            <div className="ps-tab active" id="tab-1">
                                <div className="ps-shopping-product">
                                    <div className="row">
                                        {product && product.length > 0 ? product.map((item,i)=>{
                                            return(
                                                <div key={i} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 " >
                                                <div className="ps-product">
                                                    <div className="ps-product__thumbnail">
                                                    <Link to={"/product-details/"+item._id}><img style={{width:'206px'}} src={BASEURL+'uploads/'+item.photo} alt=""/></Link>
                                                    <div className="ps-product__badge">{item.discount}%</div>
                                                        <ul className="ps-product__actions" >
                                                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="icon-bag2"></i></a></li>
                                                            <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview"><i className="icon-eye"></i></a></li>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart"></i></a></li>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="ps-product__container">
                                                    {/* <a className="ps-product__vendor" href="#">{item.productName}</a> */}
                                                        <div className="ps-product__content"><Link className="ps-product__title"  to={"/product-details/"+item._id}>{item.name}</Link>
                                                            <p className="ps-product__price sale">${item.price}</p>
                                                        </div>
                                                       
                                                    </div>
                                                </div>
                                            </div>  
                                            )
                                        }) :<h3 className="mt-2">No Products available</h3>}
                                                                                                              
                                    </div>
                                </div>
                                <div className="ps-pagination">
                                    <ul className="pagination">
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">Next Page<i className="icon-chevron-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Products