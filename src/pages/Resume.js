import '../sass/App.css'
import Data from '../utils/Data'
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

const Resume = ({language}) => {
    return (
        <>
            <h1> {language ? 'Životopis' : 'Resume'}</h1>
        <div className='resume_layout'>
            <div className='work'>
                    <h4> <WorkOutlineIcon />{language ? 'Pracovní zkušenosti' : 'Jobs'}</h4>
                        {language ? Data.works.map(work => (
                    <ul key={work.id}>
                        <li><h5 className='resume_institution'> {work.company}</h5>
                            <h5 className='resume_title'> {work.title}</h5>
                            <h6><TimelapseIcon/>{work.date}</h6>
                            <p>{work.description}</p>
                        </li>
                    </ul>
                        )) :
                        Data.worksEN.map(work => (
                            <ul key={work.id}>
                                <li><h5 className='resume_institution'> {work.company}</h5>
                                    <h5 className='resume_title'> {work.title}</h5>
                                    <h6><TimelapseIcon/>{work.date}</h6>
                                    <p>{work.description}</p>
                                </li>
                            </ul>
                                ))
                }
        </div>
            <div className='education'>
                    <h4><SchoolOutlinedIcon /> {language ? 'Vzdělání' : 'Education'}</h4>
                    { language ? Data.education.map(edu => (
                        <ul key={edu.id}>
                        <li><h5 className='resume_institution'>{edu.school}</h5>
                            <h5 className='resume_title'>{edu.title}</h5>
                            <h6><TimelapseIcon/>{edu.date}</h6>
                            <p>{edu.description}</p>
                        </li>
                    </ul>
                    )) : 
                    Data.educationEN.map(edu => (
                        <ul key={edu.id}>
                            <li><h5 className='resume_institution'>{edu.school}</h5>
                                <h5 className='resume_title'>{edu.title}</h5>
                                <h6><TimelapseIcon/>{edu.date}</h6>
                                <p>{edu.description}</p>
                            </li>
                        </ul>
                        ))}
                    
                    <div className='certificates'>
                        <h4><i class="fas fa-certificate"></i>{language ? 'Certifikáty' : 'Certificates'}</h4>
                    {Data.certificates.map(cert => (
                    <ul key={cert.id}>
                        <li>
                                <h5 className='resume_title'>{cert.title}</h5>
                                <h5 className='resume_institution'>{cert.organization}</h5>
                                <p> <a href={cert.link} target="_blank" rel="noopener noreferrer"> {language ? 'prohlédnout' : 'Show certificate'} <i class="fas fa-stamp"></i></a>  </p>
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
