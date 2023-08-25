import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { BASEURL } from "../BASEURL";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch } from 'react-redux'
import {add_to_cart} from '../redux/action/Action'
const ProductsData = (props) => {
  const [productData,setProductData] = useState({})
  const getProductDetails = (item) =>{
    setProductData(item)
  }
  const dispatch = useDispatch();

  const addtocart = (productData) => {
    // console.log(productData);
    dispatch(add_to_cart(productData))
  }
  console.log(props.data);
  return (
    <>
    {props.data && props.data.length>0 &&
    <OwlCarousel className='owl-theme' loop margin={15}  autoWidth>                            
        {props.data.map((item,i)=>{
                        return(    
                        
                        <div className="ps-product ps-product--inner">
                            <div className="ps-product__thumbnail"><Link to={"/product-details/"+item._id}><img style={{width:'206px'}} src={BASEURL+'uploads/'+item.photo} alt=""/></Link>
                                <div className="ps-product__badge">{item.discount}%</div>
                                <ul className="ps-product__actions">
                                    <li><a href="#" data-toggle="tooltip" data-placement="top" title="Read More"><i className="icon-bag2"></i></a></li>
                                    <li><a href="#" data-placement="top" title="Quick View" data-toggle="modal" data-target="#product-quickview" onClick={()=>getProductDetails(item)}><i className="icon-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="top" title="Add to Whishlist"><i className="icon-heart"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="icon-chart-bars"></i></a></li>
                                </ul>
                            </div>
                            <div className="ps-product__container">
                                <p className="ps-product__price sale">${item.price}</p>
                                <p className="ps-product__title">{item.name}</p>                               
                            </div>
                        </div>
                        
                        );
                        })}   
                        </OwlCarousel>        }

                    <div className="modal fade" id="product-quickview" role="dialog" aria-labelledby="product-quickview" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content"><span className="modal-close" data-dismiss="modal"><i className="icon-cross2"></i></span>
                                    <article className="ps-product--detail ps-product--fullwidth ps-product--quickview">
                                        <div className="ps-product__header">
                                            <div className="ps-product__thumbnail" data-vertical="false">
                                                <div className="ps-product__images" data-arrow="true">
                                                <img style={{width:'400px'}} src={productData && BASEURL+'uploads/'+productData.photo} alt=""/>
                                                </div>
                                            </div>
                                            <div className="ps-product__info">
                                                <h1>{productData && productData.name}</h1>
                                                <div className="ps-product__meta">
                                                   
                                                </div>
                                                <h4 className="ps-product__price">${productData && productData.price}</h4>
                                                {/* <div dangerouslySetInnerHTML={{__html: productData&&productData.description!=="" ? productData.description : null  }} className="ps-product__desc">
                                                   
                                                </div> */}
                                                <div className="ps-product__shopping"><div className="ps-btn ps-btn--black" data-dismiss="modal" onClick={()=>addtocart(productData)}>Add to cart</div><a className="ps-btn" href="#">Buy Now</a>                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                        
    </> 
  )
}

export default ProductsData