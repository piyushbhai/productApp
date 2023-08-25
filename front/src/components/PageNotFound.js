import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className="ps-page--404">
        <div className="container">
            <div className="ps-section__content"><img src="img/404.jpg" alt=""/>
                <h3>ohh! page not found</h3>
                <p>It seems we can't find what you're looking for. Perhaps searching can help or go back to<Link to="/"> Homepage</Link></p>                
            </div>
        </div>
    </div>
    </>
  )
}

export default PageNotFound