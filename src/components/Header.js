import React from "react"
import Typed from 'react-typed';

function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web development</h1>
                <Typed
                    className='typed-string'
                    strings={['Web Development', 'Web Design']}
                    typeSpeed={40}
                    backDelay={30}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
