import React from 'react'
import './gototop.css'

const GoToTop = () => {
    const [visible, setVisible] = React.useState(false);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        });
    }
    
    const handleShow = () => {
        let pageY = window.pageYOffset
        if(pageY > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', handleShow)

        // cleanup function
        return () => window.removeEventListener('scroll', handleShow)
    }, [])

    return (
        <>
            <div 
                className={visible ? 'go__to__top show' : 'go__to__top'} 
                id="go__to__top" 
                onClick={scrollToTop}
            >
                <i class='bx bxs-up-arrow-alt go__to__top--icon'></i>
            </div>
        </>
    )
}

export default GoToTop
