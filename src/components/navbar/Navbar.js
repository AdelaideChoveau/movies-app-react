import React from "react"
import "./navbar.scss";

const Navbar = () => {
    

    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png" height="50"
                    alt="Netflix" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>News and Popular</span>
                    <span>MyList</span>
                </div>
                <div className="right">
                    <span className="icon"><i class="fa fa-search"></i></span>
       
                <span className="icon">Notification <i class="fa fa-bell"></i></span>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Netflix-new-icon.png" height="50"
                    alt="Avatar" />
                    <div className="profile">
                        <div className="options">
                            <span>Settings</span>
                            <span>Log Out</span>
                        </div>



                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
