import "../sass/App.css";
import Data from "../utils/Data";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";

const Resume = ({ language }) => {
	return (
		<>
			<h1> {language ? "Životopis" : "Resume"}</h1>
			<div className="resume_layout">
				<div className="work">
					<h2>
						<WorkOutlineIcon />
						{language ? "Práce" : "Jobs"}
					</h2>
					{(language ? Data.works : Data.worksEN).map((work) => (
						<ul key={work.title}>
							<li>
								<h3 className="resume_institution"> {work.company}</h3>
								<h4 className="resume_title"> {work.title}</h4>
								<h5>
									<TimelapseIcon />
									{work.date}
								</h5>
								<p>{work.description}</p>
							</li>
						</ul>
					))}
				</div>
				<div className="education">
					<h2>
						<SchoolOutlinedIcon /> {language ? "Vzdělání" : "Education"}
					</h2>
					{(language ? Data.education : Data.educationEN).map((edu) => (
						<ul key={edu.title}>
							<li>
								<h3 className="resume_institution">{edu.school}</h3>
								<h4 className="resume_title">{edu.title}</h4>
								<h5>
									<TimelapseIcon />
									{edu.date}
								</h5>
								<p>{edu.description}</p>
							</li>
						</ul>
					))}

					<div className="certificates">
						<h2>
							<i class="fas fa-certificate"></i>
							{language ? "Certifikáty" : "Certificates"}
						</h2>
						{Data.certificates.map((cert) => (
							<ul key={cert.title}>
								<li>
									<h3 className="resume_title">{cert.title}</h3>
									<h4 className="resume_institution">{cert.organization}</h4>
									<p>
										{" "}
										<a
											href={cert.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{" "}
											{language ? "prohlédnout" : "Show certificate"}{" "}
											<i class="fas fa-stamp"></i>
										</a>{" "}
									</p>
								</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Resume;
