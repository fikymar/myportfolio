import '../sass/App.css'
import hamburgerIcon from '../utils/imgs/icon-hamburger.svg'
import closeIcon from '../utils/imgs/icon-close-menu.svg'
import { useState } from 'react';

const Header = ({ handleLanguage, language }) => {
    const [hamburger, setHamburger] = useState(false);
    const [size, setSize] = useState(window.innerWidth)
   
    const windowSize = () => {
        setSize(window.innerWidth)
    }
    window.addEventListener('resize', windowSize )
   

    const handleHamburger = (e) => {
        setHamburger(!hamburger)
        if (!hamburger) {
            e.target.src = closeIcon; 
        } else {
            e.target.src = hamburgerIcon; 
        }
    }

    return (
        <>
        <nav className={`nav ${hamburger ? 'open' : 'hideNav'}`}>
            <div className={`nav_list ${hamburger ? '' : 'hide'}`}>
            <a className='nav_item' href='/'>{language ? 'O MNĚ' : 'ABOUT ME'}</a>
            <a className='nav_item' href='/resume'>{language ? 'ŽIVOTOPIS' : 'RESUME'}</a>
                <a className='nav_item' href='/portfolio'>PORTFOLIO</a>
                </div>
            <button className={`languageBTN ${hamburger ? '' : 'hideBTN'}`} title='Change language' onClick={() => handleLanguage()}>{language ? 'EN' : 'CZ'}</button>

            {size <= 800 ? 
            <img className='hamburgerLogo' src={hamburgerIcon} alt='hamburger' title='menu' onClick={(e) => handleHamburger(e) }/> : null }
        </nav>
       </>
    )
}

export default Header
