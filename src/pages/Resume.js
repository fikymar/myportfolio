import '../sass/App.css'
import Data from '../utils/Data'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

const Resume = () => {
    return (
        <>
            <h1> Životopis</h1>
        <div className='resume_layout'>
            <div className='work'>
                    <h4> <WorkOutlineIcon />Pracovní zkušenosti</h4>
                        {Data.works.map(work => (
                    <ul>
                        <li><h5 className='resume_institution'> {work.company}</h5>
                            <h5 className='resume_title'> {work.title}</h5>
                            <h6><TimelapseIcon/>{work.date}</h6>
                            <p>{work.description}</p>
                        </li>
                    </ul>
                ))}
        </div>
            <div className='education'>
                    <h4><SchoolOutlinedIcon /> Vzdělání</h4>
                    {Data.education.map(edu => (
                    <ul>
                        <li><h5 className='resume_institution'>{edu.school}</h5>
                            <h5 className='resume_title'>{edu.title}</h5>
                            <h6><TimelapseIcon/>{edu.date}</h6>
                            <p>{edu.description}</p>
                        </li>
                    </ul>
                    ))}
                    
                    <div className='certificates'>
                    <h4><i class="fas fa-certificate"></i>Certifikáty</h4>
                    {Data.certificates.map(cert => (
                    <ul>
                        <li>
                                <h5 className='resume_title'>{cert.title}</h5>
                                <h5 className='resume_institution'>{cert.organization}</h5>
                            <p> <a href={cert.link} target="_blank" rel="noopener noreferrer"> prohlédnout  <i class="fas fa-stamp"></i></a>  </p>
                        </li>
                    </ul>
                ))}
        </div>
                </div>
                
              
       
            </div>
            </>
    )
}

export default Resume
