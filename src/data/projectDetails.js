// Project Details
// put your recent and master projects on top

import {
	AWS,
	Bootstrap,
	CSSImg,
	Crypto,
	Express,
	FRS,
	Firebase,
	Mongo,
	Mui,
	Mysql_icon,
	Netflix,
	Olx,
	Procoder,
	ReactImg,
	Redux,
	Tailwind,
	Todo,
	Waste_MGT,
	portfolio,
} from '../assets/assets.js';

let projects = [
	{
		img: Waste_MGT,
		id: 1007,
		title: 'Waste Mgnt App ',
		desc: 'Company Project: A web tool for waste management service providers.',
		liveLink: 'https://epr-zigma.web.app',
		techUsed: [ReactImg, Redux, Mui, Express, Mongo],
	},
	{
		img: Crypto,
		id: 1006,
		title: 'Crypto  Mgnt App ',
		desc: 'Company Project: A Crypto management web tool (a platform that provides facilities for crypto mining).',
		// liveLink: 'https://alchemist-minors-web.vercel.app/',
		techUsed: [ReactImg, Redux, Mui, Express, Mysql_icon],
	},
	{
		img: FRS,
		id: 1005,
		title: 'Face Recognition App',
		desc: 'Company Project: A react native app used to detect live individuals by analyzing their faces captured through the camera, enabling identification of each person.',
		techUsed: [ReactImg, Redux, Tailwind, AWS],
	},
	{
		img: Procoder,
		id: 1004,
		title: 'Procoder Blog App',
		desc: 'This is a blog app where users can read public blogs, write public blogs, or write private blogs',
		githubLink:
			'https://github.com/muhammedhashimcp/Procoder-Blog-App-Frontend-MERN.git',
		liveLink: 'https://procoderblogapp.netlify.app/',
		techUsed: [ReactImg, Redux, Tailwind, Express, Mongo],
	},
	{
		img: Procoder,
		// img: takemybooks,
		id: 1004,
		title: 'Takemybooks.live',
		desc: '',
		githubLink:
			'https://github.com/muhammedhashimcp/Procoder-Blog-App-Frontend-MERN.git',
		liveLink: 'https://procoderblogapp.netlify.app/',
		techUsed: [ReactImg, Redux, Tailwind, Express, Mongo],
	},
	{
		img: Netflix,
		id: 1003,
		title: 'Netflix',
		desc: 'This is netflix design clone with react and TMDB Api.',
		githubLink:
			'https://github.com/muhammedhashimcp/netflix-react-clone.git',
		liveLink: 'https://netflix-react-clone-tmdb.netlify.app/',
		techUsed: [ReactImg, Bootstrap, CSSImg],
	},
	{
		img: Olx,
		id: 1002,
		title: 'Olx Clone',
		desc: 'This is a Olx design clone with react firebase storage',
		githubLink: 'https://github.com/muhammedhashimcp/Olx-React-Clone.git',
		liveLink: 'https://olx-react-clone.netlify.app/',
		techUsed: [ReactImg, Bootstrap, CSSImg, Firebase],
	},
	{
		img: Todo,
		id: 1001,
		title: 'Todo App',
		desc: 'This is a Todo App with add,edit delete options',
		githubLink: 'https://github.com/muhammedhashimcp/React-Todo-App.git',
		liveLink: '',
		techUsed: [ReactImg, CSSImg],
	},
	{
		img: portfolio,
		id: 1000,
		title: 'Portfolio',
		desc: 'This is my portfolio (This website). This website is used to show case my project and skills.',
		githubLink: 'https://github.com/muhammedhashimcp/Portfolio.git',
		liveLink: 'https://muhammedhashimportfolio.netlify.app/',
		techUsed: [ReactImg, Tailwind],
	},
];

export default projects;
