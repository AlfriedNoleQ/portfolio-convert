import { React, useEffect } from 'react'
import about from '../../assets/img/about.jpg'
import './about.css'
import { sr } from '../../ultis/ScrollReveal';

const About = () => {

    useEffect(() => {
        /*SCROLL ABOUT*/
        sr.reveal('.about__img',{}); 
        sr.reveal('.about__subtitle',{delay: 400}); 
        sr.reveal('.about__text',{delay: 400}); 
    }, [])

    return (
        <>
            <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={about} alt="" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Quy Tran Tien</h2>
                        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>
        </>
    )
}

export default About
