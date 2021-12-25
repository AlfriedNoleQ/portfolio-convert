import { React, useEffect } from 'react'
import './home.css'
import perfil from '../../assets/img/perfil.jpg'
import { sr } from '../../ultis/ScrollReveal';

const Home = () => {
    
    useEffect(() => {
        /*SCROLL HOME*/
        sr.reveal('.home__title',{}); 
        sr.reveal('.button',{delay: 200}); 
        sr.reveal('.home__img',{delay: 400}); 
        sr.reveal('.home__social-icon',{ interval: 200}); 
    }, [])

    return (
        <>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">
                        Hi,<br/>
                        I'am <span className="home__title-color">Quy Tran</span><br/> 
                        FE Developer
                    </h1>

                    <a href="/" className="button">Contact</a>
                </div>

                <div className="home__social">
                    <a href="/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a href="/" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
                    <a href="/" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>

                <div className="home__img">    
                    <img src={perfil} alt=""/>
                </div>
            </section>
        </>
    )
}

export default Home
