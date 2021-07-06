import '../sass/App.css'
import Data from '../utils/Data'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { AlternateEmail } from '@material-ui/icons';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const Profile = ({language}) => {
    return (
        <div className='profile'>
            <h4 className='profile_name'>{Data.name}</h4>
            <h5 className='profile_title'>{language ? Data.title : Data.titleEN}</h5>
            <div className='imgContainer'>
                {/* <img className='profile_img' src={me} alt='me' /> */}
                <div className='img'></div>
                </div>
            <ul>
                
                <li> <a href={Data.callto} title='Call me'><PhoneAndroidIcon /> </a>
                <a href={Data.callto}>{Data.phone} </a></li>
                <li><a href={Data.mailto} title='Email me'><AlternateEmail /></a><a href={Data.mailto}>{Data.email}</a></li>
                <li><ContactMailIcon />
                    <h6>{Data.town}</h6>
                </li>
                <li><a href={Data.github.link} target="_blank" rel="noopener noreferrer" title='Show my github profile'>{Data.github.icon}</a></li>
            </ul>
        </div>
       
       
    )
}

export default Profile
