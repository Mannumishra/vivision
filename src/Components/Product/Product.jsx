import React from 'react'
import './Product.css'
import productimage1 from '../../Images/product/34566EFB-6FC1-4AF0-BA6E-5A7D4CCBAEB8.jpeg'
import productimage2 from '../../Images/product/4CDD8056-3A99-4F85-97E7-738BF8BA99AA.jpeg'
import productimage3 from '../../Images/product/5094F9AC-6391-4AC6-8B0A-D1F88990A8E2.jpeg'
import productimage4 from '../../Images/product/BAC0FA0C-59AF-458D-9BBC-27C34E1D6E0C.jpeg'
import productimage5 from '../../Images/product/D5A3A40E-EF72-4263-9A90-7A2B7715F629.jpeg'
import productimage6 from '../../Images/product/EBF0247B-0B14-4C6A-8902-BB6C8C365AC9.jpeg'
import productimage7 from '../../Images/product/E4324EAA-4E06-46AC-B4BE-D0869EEFA357.jpeg'
import productimage8 from '../../Images/product/4CDD8056-3A99-4F85-97E7-738BF8BA99AA.jpeg'
import productimage9 from '../../Images/product/D5A3A40E-EF72-4263-9A90-7A2B7715F629.jpeg'
import productimage10 from '../../Images/product/222CF7C0-0779-47F3-9282-582C0E1099A6.jpeg'
import productimage11 from '../../Images/product/EBF0247B-0B14-4C6A-8902-BB6C8C365AC9.jpeg'
import productimage12 from '../../Images/product/BAC0FA0C-59AF-458D-9BBC-27C34E1D6E0C.jpeg'
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
      <div className="productsection">
        <div className="productmain">
          <p className='productsmallheading'>Our products</p>
          <p className='productheading'>outstanding products</p>
          <div className="productdiv">
            <div className="product">
              <div className="img">
                <img src={productimage1} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage10} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage2} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage3} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage4} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage5} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage6} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div> <div className="product">
              <div className="img">
                <img src={productimage7} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage8} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
            <div className="product">
              <div className="img">
                <img src={productimage9} alt="" />
              </div>
              <div className="detail">
                <p>PRODUCT NAME</p>
                <button><Link to={`/productDetails/:_id`}>Read More</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product