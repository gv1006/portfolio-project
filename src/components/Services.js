import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <div className="services">
            <h1 className="py-5">my services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                            </div>
                            <h3>Web Design</h3>
                            <p>I approach each project individually and always focus on the result.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                            </div>
                            <h3>Web Development</h3>
                            <p>Your website will be built with an new proven technologies.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faChrome} size="2x" />
                            </div>
                            <h3>Browser extension development</h3>
                            <p>Cross browser cross platform extensions will be developed based on requirements given.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faChrome} size="2x" />
                            </div>
                            <h3>Browser extension development</h3>
                            <p>Cross browser cross platform extensions will be developed based on requirements given.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
