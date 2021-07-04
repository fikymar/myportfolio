import GitHubIcon from '@material-ui/icons/GitHub';
import profilecard from './imgs/profilecard.jpg'
import ubytko from './imgs/ubytko.jpg'
import articlecomponent from './imgs/article-preview-component.jpg'
import spsection from './imgs/spsection.jpg'
import clouds from './imgs/clouds.jpg'
import techdoc from './imgs/techdoc.jpg'
import coffee from './imgs/coffee.jpg'
import hours from './imgs/hours.jpg'
import crowdfunding from './imgs/crowfunding.png'




export default {

   

    name: 'Marcela Fikrlová',
    title: 'začínající frontend developer',
    email: 'Marcela.Jaklova@gmail.com',
    mailto: 'mailto:marcela.jaklova@gmail.com?body=Zdravím, Marcelo',
    phone: '+420 739 567 245',
    callto: 'tel:+420739567245',
    street: 'Jirky Kubíka 114',
    town: 'Nepomuk, CZ',

    github: {
        link: 'https://github.com/fikymar',
        text: 'My github profile',
        icon: <GitHubIcon />,
    },

    works: [

        {
            company: 'Prominent Systems, s.r.o., Blovice',
            title: 'Nákupní referentka',
            date: '9/2013 - 5/2021',
            description: 'Komunikace s dodavateli, \n vyhledávání nových dodavatelů, \n objednávky výrobního materiálu',
            },
        {
            company: 'Orchid Flowers CZ, s.r.o., Blovice',
            title: 'Nákupčí, logistika, obchod',
        date: '10/2011 - 8/2013',
        description: 'Vyhledávání nových dodavatelů, \n komunikace s dodavateli v angličtině, \n zodpovědnost za logistický proces, \n plánování a objednávání materiálu, \n komunikace s obchodními řetězci, \n fakturace, vyřizování reklamací',
        },

        {
            company: 'OREA Wellness Hotel Horizont, Špičák',
            title: 'Recepční',
            date: '7/2011 - 9/2011',
            description: 'Komunikace s hosty, \n rezervace v systému EPITOME ',   
        },
        
        {
            company: 'Faiveley Transport LEKOV a.s., Blovice',
            title: 'Nákupní referentka(trainee)',
            date: '7/2010 - 1/2011',
            description: 'Objednávky materiálu',   
            },

    ],

    certificates: [
        {
        title: 'Responsive Web Design',
            organization: 'Freecodecamp',
        link: 'https://www.freecodecamp.org/certification/fikymar/responsive-web-design',
            
        },
        {
            title: 'JavaScript Tutorial course',
                organization: 'Sololearn',
            link: 'https://www.sololearn.com/Certificate/1024-17514864/jpg/',
                
        },
        {
            title: 'CSS course',
                organization: 'Sololearn',
            link: 'https://www.sololearn.com/Certificate/1023-17514864/jpg/',
                
        },
        
        {
            title: 'HTML course',
                organization: 'Sololearn',
            link: 'https://www.sololearn.com/Certificate/1014-17514864/jpg/',
                
            },
    ],

    education: [
       
        {
           school: 'ZČU v Plzni, fakulta ekonomická',
            title: 'Systémy projektového řízení',
            date: '9/2010 - 3/2011',
    
        },

       {
           school: 'ZČU v Plzni, fakulta pedagogická',
           title: 'Psychologie se zaměřením na vzdělávání',
           date: '2007 - 2010',
           description: '2010 Bakalářský titul \n Absolvovala s vyznamenáním',
       },
        
        {
            school: 'ISŠ Klatovy',
            title: 'Oděvnictví',
            date: '2003 - 2007',
            description: '2007 Maturita \n Absolvovala s vyznamenáním',   
            },

    ],
   
    about: `Jmenuju se Marcela. \n Na mateřské "dovolené" jsem si našla nové společníky HTML, CSS a JavaScript. V životě už jsem dělala ledacos, ale do budoucna bych se ráda věnovala frontendu, ideálně jako výdělečné činnosti.☺\n Učím se kódovat už rok a půl za pomocí různých online kurzů a tutoriálů. Zatím je můj frontend ještě v plenkách, ale věřím, že se správným tréninkem a péčí poroste. \n Začátky jsou krušné a tak prostřednictvím těchto stránek hledám pomoc ve formě reálných projektů, či rady a kritiky od zkušenějších. \n Díky, že jste dočetli až sem a budu ráda, když si uděláte čas a kontaktujete mě s jakoukoliv připomínkou či nabídkou spolupráce.`,
    
   
    projects: [
        {
            title: 'Crowdfunding app',
            technologies: [
                'HTML', 'SCSS', 'React'
            ],
            img: 
                crowdfunding,
            deployed: 'https://crowfunding-app.vercel.app/',
            github: 'https://github.com/fikymar/Crowfunding-app',
            description: 'React app \n - uživatelské interakce \n Nakodováno podle předlohy z ',
            frontendmentor: 'https://www.frontendmentor.io/solutions',
                
         
        },
        {
            title: 'Návrh webu',
            technologies: [
                'HTML', 'SCSS', 'JavaScript'
            ],
            img: 
                coffee,
            deployed: 'https://coffee-website-beta.vercel.app/',
            github: 'https://github.com/fikymar/coffee-website',
            description: 'Design a kód. \n - JS animace \n  - parallax \n - svg filtr. ',
         
        },
        {
            title: 'Ubytování - reálný web',
            technologies: [
                'HTML', 'SCSS', 'JavaScript'
            ],
            img: 
                ubytko,
            deployed: 'https://ubytovaniujaklu.cf/',
            github: 'https://github.com/fikymar/ubytovani',
            description: 'Jednoduchý web. \n Design a kód.',
         
        },
        {
            title: 'Hodiny',
            technologies: [
                'HTML', 'CSS', 'JavaScript'
            ],
            img: 
                hours,
            deployed: 'https://hours-liart.vercel.app/',
            github: 'https://github.com/fikymar/Hours',
            description: 'JavaScript hodiny. \n  - barvy se mění v intervalu',
         
        },
        {
            title: 'Card component',
            technologies: [
                'HTML', 'SCSS',
            ],
            img: 
                profilecard,
            deployed: 'https://frontend-mentor-profile-card-component-teal.vercel.app/',
            github: 'https://github.com/fikymar/Frontend-Mentor-profile-card-component',
            description: 'Drobný komponent. \n Nakodováno podle předlohy z ',
            frontendmentor: 'https://www.frontendmentor.io/solutions',
                

        },
        {
            title: 'Article preview component',
            technologies: [
                'HTML', 'JavaScript', 'SCSS',
            ],
            img: 
            articlecomponent,
            deployed: 'https://article-preview-component-pearl-xi.vercel.app/',
            github: 'https://github.com/fikymar/Article-preview-component',
           
            description: 'Drobný komponent. \n Nakodováno podle předlohy z ',
            frontendmentor: 'https://www.frontendmentor.io/solutions',
                

        },
        {
            title: 'Social proof section',
            technologies: [
                'HTML', 'SCSS',
            ],
            img:spsection,
            deployed: 'https://social-proof-section-master-blush.vercel.app/',
            github: 'https://github.com/fikymar/social-proof-section-master',
           
            description: 'Drobný komponent. \n Nakodováno podle předlohy z ',
            frontendmentor: 'https://www.frontendmentor.io/solutions',
                

        },
        {
            title: 'Mraky na canvasu',
            technologies: [
                'HTML', 'SCSS','JavaScript'
            ],
            img: clouds,
           codepen: 'https://codepen.io/MarcelaFi/pen/rNWdgpv',
            github: 'https://github.com/fikymar/Animated-clouds',
           
            description: 'Canvas 2D animace na pozadí ',
            
                

        },

        {
            title: 'Technická dokumentace',
            technologies: [
                'HTML', 'CSS',
            ],
            img: techdoc,
            codepen: 'https://codepen.io/MarcelaFi/pen/jOVzaJR',
            description: 'Cvičný projekt Freecodecamp',
            
                

        },
    ],
   
   
};