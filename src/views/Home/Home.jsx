import React from 'react'
import './home.css'
import perfil from '../../assets/img/perfil.jpg'

const Home = () => {
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
