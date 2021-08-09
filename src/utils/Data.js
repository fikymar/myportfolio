import GitHubIcon from "@material-ui/icons/GitHub";
import profilecard from "./imgs/profilecard.jpg";
import ubytko from "./imgs/ubytko.jpg";
import articlecomponent from "./imgs/article-preview-component.jpg";
import spsection from "./imgs/spsection.jpg";
import clouds from "./imgs/clouds.jpg";
import techdoc from "./imgs/techdoc.jpg";
import coffee from "./imgs/coffee.jpg";
import hours from "./imgs/hours.jpg";
import crowdfunding from "./imgs/crowfunding.png";
import bubbles from "./imgs/bubbles.png";

export default {
	name: "Marcela Fikrlová",
	title: "začínající frontend developer",
	titleEN: "a beginning frontend developer",
	email: "Marcela.Jaklova@gmail.com",
	mailto: "mailto:marcela.jaklova@gmail.com?body=Zdravím, Marcelo",
	phone: "+420 739 567 245",
	callto: "tel:+420739567245",
	street: "Jirky Kubíka 114",
	town: "Nepomuk, CZ",

	github: {
		link: "https://github.com/fikymar",
		text: "My github profile",
		icon: <GitHubIcon />,
	},

	works: [
		{
			id: 1,
			company: "Prominent Systems, s.r.o., Blovice",
			title: "Nákupní referentka",
			date: "9/2013 - 5/2021",
			description:
				"Komunikace s dodavateli, \n vyhledávání nových dodavatelů, \n objednávky výrobního materiálu",
		},
		{
			id: 2,
			company: "Orchid Flowers CZ, s.r.o., Blovice",
			title: "Nákupčí, logistika, obchod",
			date: "10/2011 - 8/2013",
			description:
				"Vyhledávání nových dodavatelů, \n komunikace s dodavateli v angličtině, \n zodpovědnost za logistický proces, \n plánování a objednávání materiálu, \n komunikace s obchodními řetězci, \n fakturace, vyřizování reklamací",
		},

		{
			id: 3,
			company: "OREA Wellness Hotel Horizont, Špičák",
			title: "Recepční",
			date: "7/2011 - 9/2011",
			description: "Komunikace s hosty, \n rezervace v systému EPITOME ",
		},

		{
			id: 4,
			company: "Faiveley Transport LEKOV a.s., Blovice",
			title: "Nákupní referentka(trainee)",
			date: "7/2010 - 1/2011",
			description: "Objednávky materiálu",
		},
	],

	certificates: [
		{
			id: 1,
			title: "Responsive Web Design",
			organization: "Freecodecamp",
			link: "https://www.freecodecamp.org/certification/fikymar/responsive-web-design",
		},
		{
			id: 2,
			title: "JavaScript Tutorial course",
			organization: "Sololearn",
			link: "https://www.sololearn.com/Certificate/1024-17514864/jpg/",
		},
		{
			id: 3,
			title: "CSS course",
			organization: "Sololearn",
			link: "https://www.sololearn.com/Certificate/1023-17514864/jpg/",
		},

		{
			id: 4,
			title: "HTML course",
			organization: "Sololearn",
			link: "https://www.sololearn.com/Certificate/1014-17514864/jpg/",
		},
	],

	education: [
		{
			id: 1,
			school: "ZČU v Plzni, fakulta ekonomická",
			title: "Systémy projektového řízení",
			date: "9/2010 - 3/2011",
		},

		{
			id: 2,
			school: "ZČU v Plzni, fakulta pedagogická",
			title: "Psychologie se zaměřením na vzdělávání",
			date: "2007 - 2010",
			description: "2010 Bakalářský titul \n Absolvovala s vyznamenáním",
		},

		{
			id: 3,
			school: "ISŠ Klatovy",
			title: "Oděvnictví",
			date: "2003 - 2007",
			description: "2007 Maturita \n Absolvovala s vyznamenáním",
		},
	],

	worksEN: [
		{
			id: 1,
			company: "Prominent Systems, s.r.o., Blovice",
			title: "Buyer",
			date: "9/2013 - 5/2021",
			description:
				"Communication with suppliers, \n search for new suppliers, \n orders for production materials",
		},
		{
			id: 2,
			company: "Orchid Flowers CZ, s.r.o., Blovice",
			title: "Commercial manager",
			date: "10/2011 - 8/2013",
			description:
				"Search for new suppliers, \n responsibility for the portfolio of suppliers (Kenya, Holland) \n responsibility for  logistics process, \n planning and ordering of materials, \n handling listing process with customers(retail chains), \n invoicing, handling complaints",
		},

		{
			id: 3,
			company: "OREA Wellness Hotel Horizont, Špičák",
			title: "Receptionist",
			date: "7/2011 - 9/2011",
		},

		{
			id: 4,
			company: "Faiveley Transport LEKOV a.s., Blovice",
			title: "Buyer  - trainee",
			date: "7/2010 - 1/2011",
		},
	],

	educationEN: [
		{
			id: 1,
			school: "University of West Bohemia in Pilsen, Faculty of Economics",
			title: "Project engineering",

			date: "9/2010 - 3/2011",
		},

		{
			school: "University of West Bohemia in Pilsen, Faculty of Education",
			title: "Psychology",
			date: "2007 - 2010",
			description: "2010 Bachelor degree \n Graduated with Honor",
			id: 2,
		},

		{
			school: "Integrated High School in Klatovy",
			title: "Fashion Design and Creation",
			date: "2003 - 2007",
			description: "2007 Graduated with Honor",
			id: 3,
		},
	],

	about: `Jmenuju se Marcela. \nNa mateřské "dovolené" jsem si našla nové společníky - HTML, CSS a JavaScript. \n V životě už jsem dělala ledacos, ale teď bych se ráda věnovala frontendu.
    \n Momentálně hledám uplatnění jako junior kodér. \n
    Budu ráda, když si uděláte čas a kontaktujete mě s jakoukoliv připomínkou či nabídkou spolupráce `,

	aboutEN: `My name is Marcela. \n On a maternity leave, I found myself several new companions -  HTML, CSS and JavaScript. \nI've done a lot in my life, but now I would like to make a living by Frontend.\n
    I am currently looking for a job as a junior coder. \n
   I will be glad if you find time to contact me with any comments or offers for collaboration.`,

	projects: [
		{
			id: 1,
			title: "Crowdfunding app",
			technologies: ["HTML", "SCSS", "React"],
			framework: "React",
			img: crowdfunding,
			deployed: "https://crowfunding-app.vercel.app/",
			github: "https://github.com/fikymar/Crowfunding-app",
			description:
				"React app \n - uživatelské interakce \n Nakodováno podle předlohy z ",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR",
		},
		{
			id: 2,
			title: "Návrh webu",
			technologies: ["HTML", "SCSS", "JavaScript"],
			framework: "React",
			img: coffee,
			deployed: "https://coffee-website-beta.vercel.app/",
			github: "https://github.com/fikymar/coffee-website",
			description:
				"Design a kód. \n - JS animace \n  - parallax \n - svg filtr. ",
		},
		{
			id: 3,
			title: "Reálný web",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: ubytko,
			deployed: "https://ubytovaniujaklu.cf/",
			github: "https://github.com/fikymar/ubytovani",
			description:
				"Jednoduchý web pro poskytovatele ubytování. \n Design a kód.",
		},
		{
			id: 4,
			title: "Hodiny",
			technologies: ["HTML", "CSS", "JavaScript"],
			img: hours,
			deployed: "https://hours-liart.vercel.app/",
			github: "https://github.com/fikymar/Hours",
			description: "JavaScript hodiny. \n  - barvy se mění v intervalu",
		},
		{
			id: 5,
			title: "Card component",
			technologies: ["HTML", "SCSS"],
			img: profilecard,
			deployed:
				"https://frontend-mentor-profile-card-component-teal.vercel.app/",
			github:
				"https://github.com/fikymar/Frontend-Mentor-profile-card-component",
			description: "Drobný komponent. \n Nakodováno podle předlohy z ",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ",
		},
		{
			id: 6,
			title: "Article preview component",
			technologies: ["HTML", "JavaScript", "SCSS"],
			img: articlecomponent,
			deployed: "https://article-preview-component-pearl-xi.vercel.app/",
			github: "https://github.com/fikymar/Article-preview-component",

			description: "Drobný komponent. \n Nakodováno podle předlohy z ",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT",
		},
		{
			id: 7,
			title: "Social proof section",
			technologies: ["HTML", "SCSS"],
			img: spsection,
			deployed: "https://social-proof-section-master-blush.vercel.app/",
			github: "https://github.com/fikymar/social-proof-section-master",

			description: "Drobný komponent. \n Nakodováno podle předlohy z ",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
		},

		{
			id: 8,
			title: "Mraky na canvasu",
			technologies: ["HTML", "CSS", "JavaScript"],
			img: clouds,
			codepen: "https://codepen.io/MarcelaFi/pen/rNWdgpv",
			github: "https://github.com/fikymar/Animated-clouds",

			description: "Canvas 2D animace ",
		},
		{
			id: 9,
			title: "Bubliny - canvas",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: bubbles,
			deployed: "https://bubbles-six.vercel.app/",
			github: "https://github.com/fikymar/bubbles",

			description: "Canvas 2D animace",
		},
		{
			id: 10,
			title: "Technická dokumentace",
			technologies: ["HTML", "CSS"],
			img: techdoc,
			codepen: "https://codepen.io/MarcelaFi/pen/jOVzaJR",
			description: "Cvičný projekt Freecodecamp",
		},
	],

	projectsEN: [
		{
			id: 1,
			title: "Crowdfunding app",
			technologies: ["HTML", "SCSS", "React"],
			img: crowdfunding,
			deployed: "https://crowfunding-app.vercel.app/",
			github: "https://github.com/fikymar/Crowfunding-app",
			description: "React app \n - user interaction \n Code to design",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR",
		},
		{
			id: 2,
			title: "Design and Code",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: coffee,
			deployed: "https://coffee-website-beta.vercel.app/",
			github: "https://github.com/fikymar/coffee-website",
			description:
				"Design and code. \n - JS animation \n  - parallax \n - svg filter. ",
		},
		{
			id: 3,
			title: "Real website for Accomodation provider",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: ubytko,
			deployed: "https://ubytovaniujaklu.cf/",
			github: "https://github.com/fikymar/ubytovani",
			description: "Simple website. \n Design and code.",
		},
		{
			id: 4,
			title: "Hours",
			technologies: ["HTML", "CSS", "JavaScript"],
			img: hours,
			deployed: "https://hours-liart.vercel.app/",
			github: "https://github.com/fikymar/Hours",
			description:
				"JavaScript hours. \n  - color theme is changing on timeinterval",
		},
		{
			id: 5,
			title: "Card component",
			technologies: ["HTML", "SCSS"],
			img: profilecard,
			deployed:
				"https://frontend-mentor-profile-card-component-teal.vercel.app/",
			github:
				"https://github.com/fikymar/Frontend-Mentor-profile-card-component",
			description: "Small component. \n Code to design",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ",
		},
		{
			id: 6,
			title: "Article preview component",
			technologies: ["HTML", "JavaScript", "SCSS"],
			img: articlecomponent,
			deployed: "https://article-preview-component-pearl-xi.vercel.app/",
			github: "https://github.com/fikymar/Article-preview-component",

			description: "Small component. \n Code to  design",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT",
		},
		{
			id: 7,
			title: "Social proof section",
			technologies: ["HTML", "SCSS"],
			img: spsection,
			deployed: "https://social-proof-section-master-blush.vercel.app/",
			github: "https://github.com/fikymar/social-proof-section-master",

			description: "Small component. \n Code to design",
			frontendmentor:
				"https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA",
		},
		{
			id: 8,
			title: "Clouds on Canvas",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: clouds,
			codepen: "https://codepen.io/MarcelaFi/pen/rNWdgpv",
			github: "https://github.com/fikymar/Animated-clouds",

			description: "Canvas 2D animation ",
		},

		{
			id: 9,
			title: "Bubbles on canvas",
			technologies: ["HTML", "SCSS", "JavaScript"],
			img: bubbles,
			deployed: "https://bubbles-six.vercel.app/",
			github: "https://github.com/fikymar/bubbles",

			description: "Canvas 2D animation",
		},

		{
			id: 10,
			title: "Technical documentation",
			technologies: ["HTML", "CSS"],
			img: techdoc,
			codepen: "https://codepen.io/MarcelaFi/pen/jOVzaJR",
			description: "Small project to Freecodecamp",
		},
	],
};
