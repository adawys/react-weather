import React from 'react';
import "./Style.css";

const FooterApp = () => {
    return (
        <footer className="bg-light ">
            

            <div className="container ">
            <div className="navbar ext-center row">
            <h4 className="col"> &copy; DESIGN BY ADAWYS</h4>
            <ol className="col fa-ul">
                    <a href="https://pl-pl.facebook.com/"><i className="fab fa-facebook-square fa-2x"></i></a>
                    <a href="https://www.instagram.com/?hl=pl"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="https://twitter.com/?lang=pl"><i className="fab fa-twitter-square fa-2x"></i></a>
                    <a href="https://pl.linkedin.com/"><i className="fab fa-linkedin fa-2x"></i></a>
            </ol>
            </div>
            </div>
            
            
        </footer>
    );
}

export default FooterApp;

