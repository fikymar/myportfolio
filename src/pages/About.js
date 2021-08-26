import "../sass/App.css";
import Data from "../utils/Data";
import materialUI from "../utils/imgs/materialui.svg";
import three from "../utils/imgs/three.svg";
import commerce from "..//utils/imgs/commerce.svg";
import axios from "..//utils/imgs/axios.svg";
import next from "..//utils/imgs/next.svg";
import pixlr from "..//utils/imgs/pixlr-header-logo.png";
import styled from "..//utils/imgs/styled-components.svg";

const About = ({ language }) => {
	return (
		<div className="about_layout">
			<div className="about">
				{language ? <h1>Vítám Vás tady...</h1> : <h1>Welcome here...</h1>}

				<p>{language ? Data.about : Data.aboutEN}</p>
			</div>

			<h2 className="skills_header">
				{language ? "S čím už jsem se potkala?" : "What I have already met?"}
			</h2>
			<div className="skills">
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

				<figure title="My BFF right now">
					<i class="fab fa-react"></i>
					<figcaption>React</figcaption>
				</figure>
				<figure>
					<img src={next} alt="three logo" />
					<figcaption>Next.js</figcaption>
				</figure>
				<figure>
					<img src={axios} alt="three logo" />
					<figcaption>Axios.js</figcaption>
				</figure>
				<figure>
					<img src={materialUI} alt="materialUI logo" />
					<figcaption>Material UI</figcaption>
				</figure>
				<figure>
					<img src={three} alt="three logo" />
					<figcaption>Three.js</figcaption>
				</figure>
				<figure>
					<img src={commerce} alt="commerce.js logo" />
					<figcaption id="commerce">Commerce.js</figcaption>
				</figure>
				<figure>
					<img id="styled" src={styled} alt="styled-components logo" />
				</figure>
				<figure>
					<img id="pixlr" src={pixlr} alt="pixlr logo" />
					<figcaption>Pixlr</figcaption>
				</figure>

				<figure>
					<i class="fab fa-figma"></i>
					<figcaption>Figma</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default About;
