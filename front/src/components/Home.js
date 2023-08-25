import React, { useEffect, useState } from "react";
import { BASEURL } from "../BASEURL";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import  ProductsData from "./ProductsData";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Home = () => {
    let [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    
    useEffect(() => {
        getData();    
      }, []);

    const getData = async () => {
        setLoading(true);
        const myHeaders = new Headers();
        
        myHeaders.append("Content-Type", "application/json");
        await fetch(BASEURL + `get-featured-products/`, {
          method: "POST",
          headers: myHeaders,          
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.status === "201") {
              setData(res.products);
            } else {
              setData();
            }
            setLoading(false);
          })
          .catch((err) => console.log(err));          
  };  

  return (
    <>
      <div id="homepage-1">
        <div className="ps-home-banner ps-home-banner--1">
            <div className="ps-container">
                <div className="ps-section__left">              
            <Carousel showThumbs={false} autoPlay={true}>
                {/* <img src={'img/slider/mobile-tech-banner-template_23-2148818626.jpg'} alt="" /> */}
                    <img src={'img/slider/horizontal-website-banne_451189-110.jpg'} alt="" />
            </Carousel>
                                
                </div>
                <div className="ps-section__right">
                <a className="ps-collection" href="#"><img src="img/slider/ promotion-1.jpg" style={{height:"220px"}} alt=""/></a>
                <a className="ps-collection" href="#"><img src="img/slider/home-1/promotion-2.jpg" style={{height:"220px"}} alt=""/></a>
                </div>
            </div>
        </div>
        <div className="ps-site-features">
            <div className="ps-container">
                <div className="ps-block--site-features">
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-rocket"></i></div>
                        <div className="ps-block__right">
                            <h4>Free Delivery</h4>
                            <p>For all oders over $99</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-sync"></i></div>
                        <div className="ps-block__right">
                            <h4>90 Days Return</h4>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-credit-card"></i></div>
                        <div className="ps-block__right">
                            <h4>Secure Payment</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-bubbles"></i></div>
                        <div className="ps-block__right">
                            <h4>24/7 Support</h4>
                            <p>Dedicated support</p>
                        </div>
                    </div>
                    <div className="ps-block__item">
                        <div className="ps-block__left"><i className="icon-gift"></i></div>
                        <div className="ps-block__right">
                            <h4>Gift Service</h4>
                            <p>Support gift service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ps-deal-of-day pb-2">
            <div className="ps-container">
                <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Featured Items:</h3>

                        </div>
                       
                    </div>
                    
                </div>
                
                <ProductsData data={data} />              
                
            </div>
        </div>
        
      
          </div>

        
    </>
  )
}

export default Home