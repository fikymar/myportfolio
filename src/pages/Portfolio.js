import "../sass/App.css";
import Data from "../utils/Data";
import HttpIcon from "@material-ui/icons/Http";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useState } from "react";

const Portfolio = ({ language }) => {
	const [filter, setFilter] = useState("HTML");

	return (
		<>
			<h1>{language ? "Projekty" : "Projects"}</h1>
			<div className="flex">
				<button className="BTN" onClick={() => setFilter("HTML")}>
					{language ? "Vše" : "All"}
				</button>
				<button className="BTN" onClick={() => setFilter("React")}>
					React
				</button>
				<button className="BTN" onClick={() => setFilter("Next")}>
					Next
				</button>
			</div>
			<div div className="portfolio_layout">
				{(language ? Data.projects : Data.projectsEN)
					.filter((project) => project.technologies.includes(filter))
					.map((project) => (
						<div className="portfolio_card" key={project.title}>
							<div className="portfolio_card--content">
								<div className="portfolio_card--front">
									<img src={project.img} alt={project.title} />
									<h2 className="project_title">{project.title}</h2>
								</div>
								<div className="portfolio_card--back">
									<div className="portfolio_card--back--content">
										<h3 className="project_technologies">
											{project.technologies.join(", ")}
										</h3>
										<p>
											{project.description}
											{project.frontendmentor ? (
												<a
													href={project.frontendmentor}
													target="_blank"
													rel="noopener noreferrer"
												>
													Frontendmentor
												</a>
											) : null}
										</p>
										<div className="portfolio_card--icons">
											{project.deployed ? (
												<a
													href={project.deployed}
													target="_blank"
													rel="noopener noreferrer"
													title="Show deployed"
												>
													<HttpIcon />
												</a>
											) : null}

											{project.github ? (
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													title="Show on Github"
												>
													<GitHubIcon />
												</a>
											) : null}

											{project.codepen ? (
												<a
													href={project.codepen}
													target="_blank"
													rel="noopener noreferrer"
													title="Show on Codepen"
												>
													<i className="fab fa-codepen"></i>
												</a>
											) : null}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default Portfolio;
