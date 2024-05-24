import React from 'react'
import './Product.css'
import productimage1 from '../../Images/product/34566EFB-6FC1-4AF0-BA6E-5A7D4CCBAEB8.jpeg'
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
                <div className="anu">
                  <p className='anupara'>read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product