import './Footer.css'

function Footer() {
  return (
   <>
    <section id="footer">
        <div className="border-box ">
            <div className="container-fluid text-align">
                <div className="row">
                    <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="stat-box5">
                            <h5 className="pt-2 pb-2 ">ABOUT</h5>
                            <p><a href="#">Who We Are</a></p>
                            <p><a href="#">Our Responsibility</a></p>
                            <p><a href="#">services</a></p>
                            <p><a href="#">Careers</a></p>
                            <p><a href="#">Legal</a></p>
                        </div>
                    </div>
                    <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="stat-box5">
                            <h5 className="pt-2 pb-2 ">CUSTOMER SERVICE</h5>
                            <p><a href="#">Contact Us</a></p>
                            <p><a href="#">Dispatch Timeline</a></p>
                            <p><a href="#">Email: info@baroque.pk</a></p>
                            <p><a href="#">Call: +92 325 700 1111</a></p>
                            <p><a href="#">WhatsApp: +92 325 7001111</a></p>
                        </div>
                    </div>
                    <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="stat-box5">
                            <h5 className="pt-2 pb-2 ">POLICIES</h5>
                            <p><a href="#">privacy policy</a></p>
                            <p><a href="#">Refund policy</a></p>
                            <p><a href="#">Shipping policy</a></p>
                            <p><a href="#">Terms of Service</a></p>
                            <p><a href="#">Exchange Information </a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="social-icons">
            <a href="#" className="uper"><i className="bi bi-facebook"></i></a>
            <a href="#" className="uper"><i className="bi bi-instagram"></i></a>
            <a href="#" className="uper"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="uper"><i className="bi bi-snapchat"></i></a>
            <a href="#" className="uper"><i className="bi bi-whatsapp"></i></a>
            <a href="#" className="uper"><i className="bi bi-youtube"></i></a>
        </div>
        <hr/>
        <p className="copy-right">website created by <a href="#" className="asad">Asad</a></p>
    </section>
   
   </>
  )
}

export default Footer
