
import { Link } from 'react-router-dom';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <>
      
            {/* Bannner */}
            <div className="banner">
                <div className="banner text-center">
                    <h1>
                        <a href="#" className="btn42-44 btn-42">
                            SHOP NOW
                        </a>
                    </h1>
                </div>
            </div>
            {/* image-section */}
            <div id="images-bar">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="img-container">
                                <Link to="/product"><img src="https://baroque.pk/cdn/shop/files/02_Banner114.jpg?v=1714207269&width=800" alt="" className="img-fluid zoom" /></Link>
                                <div className="button2">
                                    <p>SHAWL</p>
                                    <Link to="/product" className="btn41-43 btn-41">
                                        SHOP NOW
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="img-container">
                                <a href="../unstitched Page/index.html"><img src="https://baroque.pk/cdn/shop/files/02_Banner115.jpg?v=1714207277&width=800" alt="" className="img-fluid zoom" /></a>
                                <div className="button2">
                                    <p>UNSTITCHED</p>
                                    <a href="#" className="btn41-43 btn-41">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row">
                        <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="img-container">
                                <img src="https://baroque.pk/cdn/shop/files/02_Banner116.jpg?v=1714207277&width=800" alt="" className="img-fluid zoom" />
                                <div className="button2">
                                    <p>SPECIAL PRIZES</p>
                                    <a href="#" className="btn41-43 btn-41">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="img-container">

                                <img src="https://baroque.pk/cdn/shop/files/02_Banner117.jpg?v=1714207277&width=800" alt="" className="img-fluid zoom" />
                                <div className="button2">
                                    <p>CHANTELLE</p>
                                    <a href="#" className="btn41-43 btn-41">
                                        SHOP NOW
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr />
            {/* text-banner */}
            <div className="text-banner">
                <div className="container">
                    <div className="text-box">
                        <h1 className="font-semibold text-4xl">DAILY INTERMIX</h1>
                        <p className="pt-2 pb-2 text-2xl">Elevate your style with versatile separates, the essentials of any wardrobe.</p>
                        <p className="pt-2 pb-2 "><a href="#">Shop Shawls<i className="bi bi-arrow-right"></i></a></p>
                        <p className="pt-2 pb-2 "><a href="#">Shop Bottoms<i className="bi bi-arrow-right"></i></a></p>
                        <p className="pt-2 pb-2 "><a href="#">Shop Dupattas<i className="bi bi-arrow-right"></i></a></p>
                        <p className="pt-2 pb-2"><a href="#">Shop Special Prizes<i className="bi bi-arrow-right"></i></a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            {/* slider-item */}
            <div className="dual-img">
                <h1 className="text-center font-semibold text-4xl pt-3 pb-6" >SHOP THE LOOK</h1>
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item>
                        <div className="carousel-item active">
                            <div className="container text-center">

                                <div className="row">
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <img src="https://baroque.pk/cdn/shop/files/Shop_The_Look56.jpg?v=1714207624&width=600" alt=""
                                            className="img-fluid" />
                                    </div>
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="img-box5">
                                            <img src="https://baroque.pk/cdn/shop/files/07_99957266-53eb-44fe-a0d9-1bdd3a3d8f25.jpg?v=1713351066&width=500" alt="" className="img-fluid right-image"
                                                height="405" width="270" />
                                            <p className="title">EMBROIDERED CHIFFON PR-848</p>
                                            <p>PKR 24,990.00</p>
                                            <a href="#" className="btn42-44 btn-42">
                                                VIEW PRODUCT
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item active">
                            <div className="container text-center">

                                <div className="row">
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <img src="https://baroque.pk/cdn/shop/files/Shop_The_Look56.jpg?v=1714207624&width=600" alt=""
                                            className="img-fluid" />
                                    </div>
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="img-box5">
                                            <img src="https://baroque.pk/cdn/shop/files/07_99957266-53eb-44fe-a0d9-1bdd3a3d8f25.jpg?v=1713351066&width=500" alt="" className="img-fluid right-image"
                                                height="405" width="270" />
                                            <p className="title">EMBROIDERED CHIFFON PR-848</p>
                                            <p>PKR 24,990.00</p>
                                            <a href="#" className="btn42-44 btn-42">
                                                VIEW PRODUCT
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item active">
                            <div className="container text-center">

                                <div className="row">
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <img src="https://baroque.pk/cdn/shop/files/Shop_The_Look56.jpg?v=1714207624&width=600" alt=""
                                            className="img-fluid" />
                                    </div>
                                    <div className=" col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="img-box5">
                                            <img src="https://baroque.pk/cdn/shop/files/07_99957266-53eb-44fe-a0d9-1bdd3a3d8f25.jpg?v=1713351066&width=500" alt="" className="img-fluid right-image"
                                                height="405" width="270" />
                                            <p className="title">EMBROIDERED CHIFFON PR-848</p>
                                            <p>PKR 24,990.00</p>
                                            <a href="#" className="btn42-44 btn-42">
                                                VIEW PRODUCT
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                </Carousel>
            </div>
            <hr />
            {/* trippel-image-section */}
            <div id="triple-img">
                <div className="container-fluid text-center">
                    <h1 className="font-semibold text-4xl pb-12">BE INSPIRED</h1>
                    <div className="row">
                        <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="img-container">
                                <img src="https://baroque.pk/cdn/shop/files/20_816350b7-ba5b-4d10-9327-df56982b1461.jpg?v=1713608513&width=800" alt=""
                                    className="img-fluid zoom" />
                                <div className="button2">

                                    <a href="#" className="btn41-43 btn-41">
                                        EXPLORE MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="img-container">
                                <img src="https://baroque.pk/cdn/shop/files/102_e4088a17-2755-42e4-8eba-90ce4d1eb5e9.jpg?v=1714203693&width=800" alt=""
                                    className="img-fluid zoom" />
                                <div className="button2">

                                    <a href="#" className="btn41-43 btn-41">
                                        EXPLORE MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=" col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <div className="img-container">
                                <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt=""
                                    className="img-fluid zoom" />
                                <div className="button2">

                                    <a href="#" className="btn41-43 btn-41">
                                        EXPORE MORE
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div id="email-banner">
                <div className="container text-center">
                    <p className="pt-12 pb-12 text-2xl fw-semibold">SUBCRIBE FOR NEWS LETTER</p>
                    <input type="Email" placeholder="E-MAIL"/>
                        <div className="menu9">
                            <a href="#" className="btn42-44 btn-42">
                                SHOP NOW
                            </a>
                        </div>
                </div>
            </div>
            <hr />
           
        </>

    )
}

export default Home
