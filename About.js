import { useState } from "react";

function About() {
    return (
        <>
            <style>
                {`
                    .card {
                        border: 1px solid #ddd;
                        border-radius: 10px;
                        transition: transform 0.2s ease-in-out;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    .card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }
                    .card-img-top {
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                        height: 300px;
                        object-fit: cover;
                    }
                    .card-body {
                        padding: 15px;
                    }
                    .card-title {
                        font-size: 1.25rem;
                        margin-bottom: 10px;
                        color: #333;
                    }
                    .card-text {
                        font-size: 1rem;
                        margin-bottom: 10px;
                        color: #555;
                    }
                    .card-footer {
                        background-color: #f8f9fa;
                        border-top: 1px solid #ddd;
                    }
                    .btn-primary, .btn-outline-secondary {
                        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
                    }
                    .btn-primary:hover {
                        background-color: #0056b3;
                    }
                    .btn-outline-secondary:hover {
                        color: #fff;
                        background-color: #6c757d;
                    }
                `}
            </style>
            
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    <strong>Album</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">ABC Automobiles</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Vehicles</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Car Image 1" />
                            <div className="card-body">
                                <h5 className="card-title">Luxury SUV</h5>
                                <p className="card-text">Experience the ultimate in comfort and style with our luxury SUVs, equipped with top-of-the-line features and advanced technology.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Car Image 2" />
                            <div className="card-body">
                                <h5 className="card-title">Sporty Coupe</h5>
                                <p className="card-text">Get behind the wheel of our sporty coupes, designed for performance enthusiasts who crave speed and agility on the road.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Car Image 3" />
                            <div className="card-body">
                                <h5 className="card-title">Eco-friendly Sedan</h5>
                                <p className="card-text">Our eco-friendly sedans offer the perfect balance of efficiency and luxury, with innovative hybrid technology and sleek designs.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
