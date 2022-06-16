import React from "react";
import {Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div>
                <Container>
                <div className="row p-4">
                    <div className="text-center" style={{color: "white"}}>
                        <h1>Contact Us</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="images/logo.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label" style={{color: "white"}}>
                                    Name
                                </label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{color: "white"}}>
                                   Address
                                </label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label" style={{color: "white"}}>
                                    Message
                                </label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-danger">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <br />
                </Container>
            </div>
        </div>
    );
};

export default Contact;