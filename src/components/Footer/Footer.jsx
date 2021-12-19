import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <p className="footer__title">Quy Tran Tien</p>
                <div className="footer__social">
                    <a href="/" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                    <a href="/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                    <a href="/" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
                </div>
                <p>&#169; 2020 copyright all right reserved</p>
            </footer>
        </div>
    )
}

export default Footer
