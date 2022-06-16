import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const About = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-danger fw-bold mb-4">About Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <NavLink to="/contact" className="btn btn-outline-danger px-3">
                            Contact Us
                        </NavLink>
                    </div>
                    {/* <div className="col-md-6 d-flex justify-content-center"> */}
                    <div className="col-md-6">
                        {/* <img src="/assets/images/oreo.png" alt="About Us" height="400px" width="400px" /> */}
                        <div class="map-responsive">
                            <iframe title="Store Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.053083461608!2d127.06415621463597!3d37.50666613531354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f19d8a87b5%3A0x960ce00631ec7836!2sBigHit%20Entertaiment!5e0!3m2!1sid!2sid!4v1654605433838!5m2!1sid!2sid" width={"500"} height={"350"} style={{ border: "0" }} allowfullscreen={""} loading={"lazy"} />
                        </div>
                        <ul>
                            <li class="address">Lorem Ipsum is simply dummy text of the printing and typesetting</li>
                            <li class="telepon">+628123456789</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;