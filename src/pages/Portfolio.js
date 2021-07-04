import '../sass/App.css'
import Data from '../utils/Data'

import HttpIcon from '@material-ui/icons/Http';
import GitHubIcon from '@material-ui/icons/GitHub';

const Portfolio = () => {
    return (
<>
        <h1>Projekty</h1>
        <div className='portfolio_layout'>
          
        {Data.projects.map(project => (
            <div className='portfolio_card' >
                <div className='portfolio_card--front'>
                    <img src={project.img} alt={project.title} />
                    <h5>{project.title}</h5>
                </div>
                <div className='portfolio_card--back'>
			<h6>{project.technologies.join(', ')}</h6>
                    <p>{project.description}
                        {project.frontendmentor ? (
                            <a href={project.frontendmentor} target="_blank" rel="noopener noreferrer" >Frontendmentor</a>) : null}
                        </p>
                    <div className="portfolio_card--icons">
                        {project.deployed ? (
                        <a href={project.deployed} target="_blank" rel="noopener noreferrer"><HttpIcon /></a>             
                        ): null}
            
		
                        {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                        ) : null}
        
                        {project.codepen ? (                          
                        <a href={project.codepen} target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a>
                        ): null }              
                
                </div>
                    </div>
                </div>      
        ))}
            </div>
            </>
    )
}

export default Portfolio
