import React from 'react';

function Home() {
    return (
        <>
            <style>
                {`
                    .carousel-img {
                        height: 600px; 
                        object-fit: cover;
                    }
                    .content-section {
                        padding: 50px 0;
                    }
                    .content-section .container {
                        text-align: center;
                    }
                    .content-section h2 {
                        margin-bottom: 20px;
                        font-size: 2.5rem;
                        font-weight: bold;
                    }
                    .content-section p {
                        margin-bottom: 30px;
                        font-size: 1.125rem;
                        color: #555;
                    }
                    .btn-primary, .btn-secondary {
                        font-size: 1.125rem;
                        padding: 12px 24px;
                        border-radius: 5px;
                    }
                    .btn-primary {
                        background-color: #007bff;
                        border-color: #007bff;
                    }
                    .btn-primary:hover {
                        background-color: #0056b3;
                        border-color: #0056b3;
                    }
                    .btn-secondary {
                        background-color: #6c757d;
                        border-color: #6c757d;
                    }
                    .btn-secondary:hover {
                        background-color: #5a6268;
                        border-color: #545b62;
                    }
                    .logo {
                        width: 150px;
                        height: auto;
                    }
                `}
            </style>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2025/collections/360/grabber-blue-metallic/S650_MY25_300A_ext_Grabber_Blue_32.jpeg" className="d-block w-100 carousel-img" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/193021/pexels-photo-193021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100 carousel-img" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg" className="d-block w-100 carousel-img" alt="Third slide" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

           

            <div className="content-section bg-light">
                <div className="container">
                    <h2>Welcome to ABC Automobiles</h2>
                    <p>Experience the perfect blend of elegance and performance with ABC Automobiles. From our state-of-the-art showroom to our unparalleled customer service, we are dedicated to providing you with a seamless and satisfying car-buying experience.</p>
                    <p>Explore our diverse range of vehicles that cater to every lifestyle and budget. Whether you're looking for a sleek sedan, a spacious SUV, or an eco-friendly hybrid, we've got you covered.</p>
                    <a href="#services" className="btn btn-primary btn-lg">Discover Our Services</a>
                </div>
            </div>

            <div className="content-section">
                <div className="container">
                    <h2>About Us</h2>
                    <p>At ABC Automobiles, we are passionate about delivering excellence. With years of experience in the automotive industry, our team is committed to helping you find the perfect vehicle that meets your needs and exceeds your expectations.</p>
                    <p>We offer a comprehensive selection of cars, from high-performance sports models to family-friendly SUVs. Our knowledgeable staff is here to guide you through every step of the process, ensuring you drive away with confidence and satisfaction.</p>
                    <a href="#contact" className="btn btn-secondary btn-lg">Contact Us Today</a>
                </div>
            </div>
        </>
    );
}

export default Home;
