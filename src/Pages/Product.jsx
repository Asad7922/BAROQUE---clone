
import Dropdown from 'react-bootstrap/Dropdown';
import './Product.css'
import { Link } from 'react-router-dom';

function Product() {
    
    return (
        <>

            {/* product-Name */}
            <div id="product-name">
                <div className="container-fluid text-center">
                    <h1>SHAWLS</h1>
                </div>
            </div>

            {/* product-qunatity */}
            <div id="quantity" >
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                            <p>14 PRODUCTS</p>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    SORT BY
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Featured</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Best selling</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Alphabetically, A-Z</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Alphabetically, Z-A</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Price, low to high</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Price, high to low</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Date, old to new</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Date, new to old</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
            {/* product-section */}
            <div id="products">
                <div className="container-fluid">
                    <div className="row">
                        <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li>
                                    <p className="d-inline-flex gap-1">
                                        <a data-bs-toggle="collapse" href="#collapseExample3" role="button"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            COLLECTION
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample3">
                                        <div className=" card-body">
                                            SHAWLS (14)
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <p className="d-inline-flex gap-1">
                                        <a data-bs-toggle="collapse" href="#collapseExample3" role="button"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            COLLECTION
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample3">
                                        <div className=" card-body">
                                            SHAWLS (14)
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <p className="d-inline-flex gap-1">
                                        <a data-bs-toggle="collapse" href="#collapseExample3" role="button"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            COLLECTION
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample3">
                                        <div className=" card-body">
                                            SHAWLS (14)
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <p className="d-inline-flex gap-1">
                                        <a data-bs-toggle="collapse" href="#collapseExample4" role="button"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            FABRIC
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample4">
                                        <div className=" card-body">
                                            VELVET (14)
                                        </div>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <p className="d-inline-flex gap-1">
                                        <a data-bs-toggle="collapse" href="#collapseExample5" role="button"
                                            aria-expanded="false" aria-controls="collapseExample">
                                            PIECES
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample5">
                                        <div className=" card-body">
                                            1 PIECE (14)
                                        </div>
                                    </div>
                                </li>
                                <hr />
                            </ul>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 image-container">
                            <Link to='/purchase'><img src="https://baroque.pk/cdn/shop/files/20_816350b7-ba5b-4d10-9327-df56982b1461.jpg?v=1713608513&width=800" alt="Image 1" className="img-fluid" />
                                <img src="https://baroque.pk/cdn/shop/files/21_c2e8f0db-d352-46ff-bb29-61e6b01bd7c6.jpg?v=1713608514&width=800" alt="Image 2" className="img-fluid" /></Link>
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  image-container">
                            <img src="https://baroque.pk/cdn/shop/files/102_e4088a17-2755-42e4-8eba-90ce4d1eb5e9.jpg?v=1714203693&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/107_59f6c05b-e4d9-498c-ab43-3dc4615efacf.jpg?v=1714203711&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  image-container">
                            <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/27_9fb4b3b5-3c9b-46cd-9e50-6da7bccd49e5.jpg?v=1713608562&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5   image-container">
                            <img src="https://baroque.pk/cdn/shop/files/119_5f874088-1c22-4e1b-a630-6b128b1f741f.jpg?v=1711524027&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/121.jpg?v=1711524027&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  image-container">
                            <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/27_9fb4b3b5-3c9b-46cd-9e50-6da7bccd49e5.jpg?v=1713608562&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5   image-container">
                            <img src="https://baroque.pk/cdn/shop/files/119_5f874088-1c22-4e1b-a630-6b128b1f741f.jpg?v=1711524027&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/121.jpg?v=1711524027&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  image-container">
                            <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/27_9fb4b3b5-3c9b-46cd-9e50-6da7bccd49e5.jpg?v=1713608562&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5   image-container">
                            <img src="https://baroque.pk/cdn/shop/files/119_5f874088-1c22-4e1b-a630-6b128b1f741f.jpg?v=1711524027&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/121.jpg?v=1711524027&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5  image-container">
                            <img src="https://baroque.pk/cdn/shop/files/26_84ffc035-138d-4697-a3d4-698a73ef008d.jpg?v=1713608564&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/27_9fb4b3b5-3c9b-46cd-9e50-6da7bccd49e5.jpg?v=1713608562&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>
                        </div>
                        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5   image-container">
                            <img src="https://baroque.pk/cdn/shop/files/119_5f874088-1c22-4e1b-a630-6b128b1f741f.jpg?v=1711524027&width=800" alt="Image 1" className="img-fluid" />
                            <img src="https://baroque.pk/cdn/shop/files/121.jpg?v=1711524027&width=800" alt="Image 2" className="img-fluid" />
                            <div className="text-boximg text-center">
                                <h5>EMBROIDERED VELVET SHAWL VS-38</h5>
                                <p>PKR 10,990.00</p>
                                <h6>SHAWLS</h6>
                            </div>

                        </div>
                    </div>




                </div>
            </div>

        </>


    )
}

export default Product
