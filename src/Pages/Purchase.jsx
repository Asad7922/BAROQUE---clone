import './Purchase.css'
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';

function Purchase() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="purchase">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 img-box5  text-center">
              <img src="https://baroque.pk/cdn/shop/files/20_816350b7-ba5b-4d10-9327-df56982b1461.jpg?v=1713608513&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />
              <img src="https://baroque.pk/cdn/shop/files/21_c2e8f0db-d352-46ff-bb29-61e6b01bd7c6.jpg?v=1713608514&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />
              <img src="https://baroque.pk/cdn/shop/files/24_9c9c7035-cb1a-4627-8c61-78621bf242ae.jpg?v=1713608532&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />
              <img src="https://baroque.pk/cdn/shop/files/22_d9380ac0-15af-4198-9281-2069566e8405.jpg?v=1713608532&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />
              <img src="https://baroque.pk/cdn/shop/files/25_290c8663-e4ef-476c-9732-67dd050832e4.jpg?v=1713608532&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />
              <img src="https://baroque.pk/cdn/shop/files/23_c6277eb7-55b6-43cc-808e-e3aeefedbc98.jpg?v=1713608532&width=800" alt="" className="img-fluid" height="78"
                width="52" /><br />

            </div>
            <div className=" col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 img-box6">
              <img src="https://baroque.pk/cdn/shop/files/20_816350b7-ba5b-4d10-9327-df56982b1461.jpg?v=1713608513&width=800" alt="" className="img-fluid" /><br />
              <img src="https://baroque.pk/cdn/shop/files/21_c2e8f0db-d352-46ff-bb29-61e6b01bd7c6.jpg?v=1713608514&width=800" alt="" className="img-fluid" /><br />
              <img src="https://baroque.pk/cdn/shop/files/24_9c9c7035-cb1a-4627-8c61-78621bf242ae.jpg?v=1713608532&width=800" alt="" className="img-fluid" /><br />
              <img src="https://baroque.pk/cdn/shop/files/22_d9380ac0-15af-4198-9281-2069566e8405.jpg?v=1713608532&width=800" alt="" className="img-fluid" /><br />
              <img src="https://baroque.pk/cdn/shop/files/25_290c8663-e4ef-476c-9732-67dd050832e4.jpg?v=1713608532&width=800" alt="" className="img-fluid" /><br />
              <img src="https://baroque.pk/cdn/shop/files/23_c6277eb7-55b6-43cc-808e-e3aeefedbc98.jpg?v=1713608532&width=800" alt="" className="img-fluid" />

            </div>
            <div className=" col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5 ">
              <div className="text-box34">
                <p>EMBROIDERED NET UF-507</p>
                <h5>PKR 10,990.00</h5>
                <p>SKU: BQU-UF-D507-00</p>
                <hr />
              </div>
              <div className="type-box67">
                <p>TYPE:</p>
                <h5>STITCHED</h5>
                <p>SIZE</p>
                <h5>DEFAULT</h5>
                <h6>-&nbsp;&nbsp; 1&nbsp;&nbsp;+</h6>
              </div>
              <div className="cart-button text-center">
                <a href="#" className="btn43-45 btn-46 mt-2" onClick={handleShow} >
                  ADD TO CART
                </a>
              </div>
              <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>CART</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <hr />
                  <p className='p-3'>You are eligible for free shipping.</p>
                  <hr />
                  <div className="container-fluid">
                    <div className="row pt-12">
                      <div className="col-md-6">
                        <img src="https://baroque.pk/cdn/shop/files/20_816350b7-ba5b-4d10-9327-df56982b1461.jpg?v=1713608513&width=800" alt="" />
                      </div>
                      <div className="col-md-6 cart-text">
                        <p className='pb-3 pt-3 '>PRET</p>
                        <p>EMBROIDERED JACQUARD</p>
                        <p>PR-914</p>
                        <p>PKR 6,990.00</p>
                        <p>XS</p>
                        <h6>-&nbsp;&nbsp; 1&nbsp;&nbsp;+</h6>
                      </div>
                    </div>
                    <div className="cart-button text-center  mt-16">
                      <p>Taxes and shipping calculated at checkout</p>
                      <a href="#" className="btn43-45 btn-46 mt-3" onClick={handleShow} >
                        CHEKOUT
                      </a>
                    </div>

                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              <hr />


            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* squad-image-section */}
      <div id="squad-img">
        <div className="container text-center">
          <h1 className='font-semibold text-4xl'>RELATED PRODUCTS</h1>
          <div className="row">
            <div className=" col-12  col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 image-container">
              <img src="https://baroque.pk/cdn/shop/files/01_bc6493b1-b473-4c14-a9a3-835128dd0aa4.jpg?v=1713608427&width=800" alt="Image 1" className="img-fluid" />
              <img src="https://baroque.pk/cdn/shop/files/02_cfef2abe-e311-432f-ba25-20ff01253388.jpg?v=1713608427&width=800" alt="Image 2" className="img-fluid" />
              <div className="text-boximg text-center">
                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                <p>PKR 10,990.00</p>
                <h6>WINTER</h6>
              </div>
            </div>
            <div className=" col-12   col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 image-container">
              <img src="https://baroque.pk/cdn/shop/files/09_f918f4ba-e594-4c8e-8904-cb8eedd58dda.jpg?v=1710410772&width=800" alt="Image 1" className="img-fluid" />
              <img src="https://baroque.pk/cdn/shop/files/13_bf9f6176-ba01-4b97-bec9-fd690f4bd5aa.jpg?v=1710411950&width=800" alt="Image 2" className="img-fluid" />
              <div className="text-boximg text-center">
                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                <p>PKR 10,990.00</p>
                <h6>FORMAL</h6>
              </div>
            </div>
            <div className=" col-12   col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 image-container">
              <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt="Image 1" className="img-fluid" />
              <img src="https://baroque.pk/cdn/shop/files/27_9fb4b3b5-3c9b-46cd-9e50-6da7bccd49e5.jpg?v=1713608562&width=800" alt="Image 2" className="img-fluid" />
              <div className="text-boximg text-center">
                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                <p>PKR 10,990.00</p>
                <h6>FORMAL</h6>
              </div>
            </div>
            <div className=" col-12   col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 image-container">
              <img src="https://baroque.pk/cdn/shop/files/119_5f874088-1c22-4e1b-a630-6b128b1f741f.jpg?v=1711524027&width=800" alt="Image 1" className="img-fluid" />
              <img src="https://baroque.pk/cdn/shop/files/121.jpg?v=1711524027&width=800" alt="Image 2" className="img-fluid" />
              <div className="text-boximg text-center">
                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                <p>PKR 10,990.00</p>
                <h6>WINTER</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Purchase
