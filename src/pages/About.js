import '../sass/App.css'
import Data from '../utils/Data'
import materialUI from '../utils/imgs/materialui.svg'
import three from '../utils/imgs/three.svg'
import commerce from '..//utils/imgs/commerce.svg'
import pixlr from '..//utils/imgs/pixlr-header-logo.png'

const About = () => {
    return (
        <div className='about_layout'>
            <div className='about'>
            <h1>Vítám Vás tady...</h1>
            <p>{Data.about}</p>
            </div>
           
                <h3 className='skills_header'>S čím pracuju?</h3>
            <div className='skills'>
                <figure>
                <i class="fab fa-html5"></i>
                    <figcaption>HTML5</figcaption>
                </figure>
                <figure>
                <i class="fab fa-css3-alt"></i>
                    <figcaption>CSS3</figcaption>
                </figure>
                <figure>
                <i class="fab fa-sass"></i>
                    <figcaption>SCSS</figcaption>
                </figure>
                <figure>
                    <i class="fab fa-js-square"></i>
                    <figcaption>JavaScript</figcaption>
                </figure>

                <figure>
                <i class="fab fa-react"></i>
                    <figcaption>React</figcaption>
                </figure>

                <figure>
              <img src={materialUI} alt='materialUI logo' />
                    <figcaption>Material UI</figcaption>
                </figure>
                <figure>
              <img src={three} alt='three logo' />
                    <figcaption>Three.js</figcaption>
                </figure>
                <figure>
              <img src={commerce} alt='commerce.js logo' />
                    <figcaption id='commerce'>Commerce.js</figcaption>
                </figure>
                <figure>
              <img id='pixlr' src={pixlr} alt='pixlr logo' />
                    <figcaption>Pixlr</figcaption>
                </figure>

                <figure>
                <i class="fab fa-figma"></i>
                    <figcaption>Figma</figcaption>
                </figure>
                
              
            </div>
        </div>
    )
}

export default About
