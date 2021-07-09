import '../sass/App.css'
import Data from '../utils/Data'

import HttpIcon from '@material-ui/icons/Http';
import GitHubIcon from '@material-ui/icons/GitHub';
//import { useState, useEffect } from 'react';


const Portfolio = ({ language }) => {
    // const [filter, setFilter] = useState(false);
    
    //  let projects = Data.projects.map(project =>
    //     project);
    // console.log(projects)
   
    // let filtered;
    // const filterItems = (keyword) => {
        
    //     setFilter(!filter)
    //     if (filter) {
    //         filtered = projects.filter(project => project.framework === keyword);
    //     }
    // return filtered
    // }
 
    // useEffect(() => {
    //     filterItems('React')
    //     // console.log(filtered)
    // },[]);
    
    return (
<>
            <h1>{language ? 'Projekty' : 'Projects'}</h1>
            <div className='portfolio_layout'>
                {/* <button className='allBTN'>All</button>
          <button className='ReactBTN' >React</button> */}
        {language ? Data.projects.map(project => (
            <div className='portfolio_card' key={project.id} >
               
                    <img src={project.img} alt={project.title} />
                    
                  
                <div className='portfolio_card--back'>
                <h2 className='project_title'>{project.title}</h2>
			<h3 className='project_technologies'>{project.technologies.join(', ')}</h3>
                    <p>{project.description}
                        {project.frontendmentor ? (
                            <a href={project.frontendmentor} target="_blank" rel="noopener noreferrer" >Frontendmentor</a>) : null}
                        </p>
                    <div className="portfolio_card--icons">
                        {project.deployed ? (
                        <a href={project.deployed} target="_blank" rel="noopener noreferrer" title='Show deployed'><HttpIcon /></a>             
                        ): null}
            
		
                        {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title='Show on Github'><GitHubIcon /></a>
                        ) : null}
        
                        {project.codepen ? (                          
                        <a href={project.codepen} target="_blank" rel="noopener noreferrer" title='Show on Codepen'><i className="fab fa-codepen"></i></a>
                        ): null }              
                
                </div>
                    </div>
                </div>      
        )) : Data.projectsEN.map(project => (
            <div className='portfolio_card' key={project.id} >
                    <img src={project.img} alt={project.title} />
                   
                <div className='portfolio_card--back'>
                    <h2 className='project_title'>{project.title}</h2>
                    <h3 className='project_technologies'>{project.technologies.join(', ')}</h3>
                    
                    <p>{project.description}
                        {project.frontendmentor ? (
                            <a href={project.frontendmentor} target="_blank" rel="noopener noreferrer" title='Show challenge' > Frontendmentor</a> ) : null}
                        </p>
                    <div className="portfolio_card--icons">
                        {project.deployed ? (
                        <a href={project.deployed} target="_blank" rel="noopener noreferrer" title='Show deployed version'><HttpIcon /></a>             
                        ): null}
            
		
                        {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title='Show github repo'><GitHubIcon /></a>
                        ) : null}
        
                        {project.codepen ? (                          
                        <a href={project.codepen} target="_blank" rel="noopener noreferrer" title='Show codepen'><i className="fab fa-codepen"></i></a>
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
