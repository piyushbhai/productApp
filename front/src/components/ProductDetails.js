import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { BASEURL } from '../BASEURL';
import { useDispatch } from 'react-redux'
import {add_to_cart} from '../redux/action/Action'

const ProductDetails = () => {
    let [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [Tab, setTab] = useState(1);
    let { slug } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        getData();    
      }, []);

    const getData = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        // let userdata = JSON.parse(localStorage.getItem("isAuth"));
        // if (userdata != null) {
        //   let token = userdata.usertoken;
        //   myHeaders.append("Authorization", token);
        // }
        myHeaders.append("Content-Type", "application/json");
        await fetch(BASEURL + `get-product-details/${slug}`, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({
            // company_uuid: JSON.parse(localStorage.getItem("isAuth")).companydata[0].uuid,
          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.status === "201") {
                // console.log(res.data);
              setData(res.products);
            } else {
              setData([]);
            }
            setLoading(false);
          })
          .catch((err) => console.log(err));          
  };  

  const addtocart = (productData) => {
    // console.log(productData);
    dispatch(add_to_cart(productData))
  }
  return (
    <>
     
    <div className="ps-page--product">
        <div className="ps-container">
            <div className="ps-page__container">
                <div className="ps-page__left">
                    <div className="ps-product--detail ps-product--fullwidth">
                        <div className="ps-product__header">
                            <div className="ps-product__thumbnail" data-vertical="true">
                                <figure>
                                    <div className="ps-wrapper">
                                        <div className="ps-product__gallery" data-arrow="true">
                                            <div className="item"><a href={data && BASEURL+'uploads/avatar/'+data[0].photo}><img style={{width:'489px', height:'489px'}} src={data && BASEURL+'uploads/'+data[0].photo} alt=""/></a></div>                                           
                                        </div>
                                    </div>
                                </figure>
                                <div className="ps-product__variants" data-item="4" data-md="4" data-sm="4" data-arrow="false">                                   
                                </div>
                            </div>
                            <div className="ps-product__info">
                                <h1>{data && data[0].name}</h1>
                              
                                <h4 className="ps-product__price">${data && data[0].price}</h4>
                                
                                <div className="ps-product__variations">
                                    <figure>
                                        <figcaption>Color</figcaption>
                                        <div className="ps-variant ps-variant--color color--1"><span className="ps-variant__tooltip">Black</span></div>
                                        <div className="ps-variant ps-variant--color color--2"><span className="ps-variant__tooltip"> Gray</span></div>
                                    </figure>
                                </div> 
                                <div className="ps-product__shopping">
                                    <figure>
                                        <figcaption>Quantity</figcaption>
                                        <div className="form-group--number">
                                            <button className="up"><i className="fa fa-plus"></i></button>
                                            <button className="down"><i className="fa fa-minus"></i></button>
                                            <input className="form-control" type="text" placeholder="1"/>
                                        </div>
                                    </figure><a className="ps-btn ps-btn--black" onClick={()=>addtocart(data[0])}>Add to cart</a><a className="ps-btn" href="#">Buy Now</a>
                                    <div className="ps-product__actions"><a href="#"><i className="icon-heart"></i></a><a href="#"><i className="icon-chart-bars"></i></a></div>
                                </div>
                              
                                <div className="ps-product__sharing"><a className="facebook" href="#"><i className="fa fa-facebook"></i></a><a className="twitter" href="#"><i className="fa fa-twitter"></i></a><a className="google" href="#"><i className="fa fa-google-plus"></i></a><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></div>
                            </div>
                        </div>
                        <div className="ps-product__content ps-tab-root">
                            <ul className="ps-tab-list">
                               {data&&data[0].desc!=="" && <li onClick={()=>setTab(1)} className="active"><a href="#tab-1">Description</a></li> 
                                }                               
                            </ul>
                            <div className="ps-tabs">
                                { Tab === 1 ?
                                <div className="ps-tab active">
                                    <div className="ps-document" dangerouslySetInnerHTML={{__html: data&&data[0].desc!=="" ? data[0].desc : null  }} >
                                        
                                    </div>
                                </div>
                                : 
                                null
                                }
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-page__right">
                    <aside className="widget widget_product widget_features">
                        <p><i className="icon-network"></i> Shipping worldwide</p>
                        <p><i className="icon-3d-rotate"></i> Free 7-day return if eligible, so easy</p>
                        <p><i className="icon-receipt"></i> Supplier give bills for this product.</p>
                        <p><i className="icon-credit-card"></i> Pay online or when receiving goods</p>
                    </aside>
                    <aside className="widget widget_sell-on-site">
                        <p><i className="icon-store"></i> Sell on Martfury?<a href="#"> Register Now !</a></p>
                    </aside>
                    <aside className="widget widget_ads"><a href="#"><img src="img/ads/product-ads.png" alt=""/></a></aside>
              
                </div>
            </div>
        
        </div>
    </div> 
    </>
  )
}

export default ProductDetails