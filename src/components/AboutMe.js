import React from "react";
import author from "../pp.jfif";

function AboutMe() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-image" src={author} alt="author..."></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi reprehenderit iste blanditiis quaerat odit necessitatibus eos, labore consequuntur, quod, recusandae ut doloremque exercitationem nulla asperiores dolore! Magnam dolor, unde aperiam repudiandae doloremque obcaecati impedit excepturi maiores ut molestiae id dolorem vero, mollitia exercitationem modi?labore consequuntur, quod, recusandae ut doloremque exercitatilabore consequuntur, quod, recusandae ut doloremque exercitationem nulla asperiores dolore! Magnam dolor, unde aperiam repudiandae doloremque obcaecati impedit excepturi maiores ut molestiae id dolorem vero, mollitia exercitationem modi?
                    labore consequuntur, quod, recusandae ut doloremque exercitationem nulla asperiores dolore! Magnam dolor, unde aperiam repudiandae doloremque obcaecati impedit excepturi maiores ut molestiae id dolorem vero, mollitia exercitationem modi?onem nulla asperiores
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
