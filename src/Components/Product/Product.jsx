import React, { useEffect, useState } from 'react';
import './Product.css';
import productimage1 from '../../Images/product/34566EFB-6FC1-4AF0-BA6E-5A7D4CCBAEB8.jpeg';
import productimage2 from '../../Images/product/4CDD8056-3A99-4F85-97E7-738BF8BA99AA.jpeg';
import productimage3 from '../../Images/product/5094F9AC-6391-4AC6-8B0A-D1F88990A8E2.jpeg';
import productimage4 from '../../Images/product/BAC0FA0C-59AF-458D-9BBC-27C34E1D6E0C.jpeg';
import productimage5 from '../../Images/product/D5A3A40E-EF72-4263-9A90-7A2B7715F629.jpeg';
import productimage6 from '../../Images/product/EBF0247B-0B14-4C6A-8902-BB6C8C365AC9.jpeg';
import productimage7 from '../../Images/product/E4324EAA-4E06-46AC-B4BE-D0869EEFA357.jpeg';
import productimage8 from '../../Images/product/4CDD8056-3A99-4F85-97E7-738BF8BA99AA.jpeg';
import productimage9 from '../../Images/product/D5A3A40E-EF72-4263-9A90-7A2B7715F629.jpeg';
import productimage10 from '../../Images/product/222CF7C0-0779-47F3-9282-582C0E1099A6.jpeg';
import productimage11 from '../../Images/product/EBF0247B-0B14-4C6A-8902-BB6C8C365AC9.jpeg';
import productimage12 from '../../Images/product/BAC0FA0C-59AF-458D-9BBC-27C34E1D6E0C.jpeg';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Product = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShow = (image) => {
    setSelectedImage(image);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  const products = [
    { id: 1, image: productimage1 },
    { id: 2, image: productimage2 },
    { id: 3, image: productimage3 },
    { id: 4, image: productimage4 },
    { id: 5, image: productimage5 },
    { id: 6, image: productimage6 },
    { id: 7, image: productimage7 },
    { id: 8, image: productimage8 },
    { id: 9, image: productimage9 },
    { id: 10, image: productimage10 },
    { id: 11, image: productimage11 },
    { id: 12, image: productimage12 },
  ];
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <>
      <div className="productsection">
        <div className="productmain">
          <p className='productsmallheading'>Our products</p>
          <p className='productheading'>outstanding products</p>
          <div className="productdiv">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <div className="img" onClick={() => handleShow(product.image)}>
                  <img src={product.image} alt={`Product ${product.id}`} />
                </div>
                <div className="detail">
                  <p>PRODUCT NAME</p>
                  <button><Link to={`/product/details`}>See Details</Link></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Product Image</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Product" className="img-fluid" />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Product;
