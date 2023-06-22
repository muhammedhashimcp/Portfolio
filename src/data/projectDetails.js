// Project Details 
// put your recent and master projects on top

import { Bootstrap, CSSImg, Express, Firebase, Mongo, Netflix, Olx, Procoder, ReactImg, Redux, Tailwind, Todo, portfolio } from "../assets/assets.js";



let projects = [
	{
		img: Procoder,
		id: 1000,
		title: 'Procoder Blog App',
		desc: 'This is a blog app user can read public blogs public or write blogs public or private .',
		githubLink:
			'https://github.com/muhammedhashimcp/Procoder-Blog-App-Frontend-MERN.git',
		liveLink: 'https://procoderblogapp.netlify.app/',
		techUsed: [ReactImg, Redux, Tailwind, Express, Mongo],
	},
	{
		img: Netflix,
		id: 1001,
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
		id: 1002,
		title: 'Todo App',
		desc: 'This is a Todo App with add,edit delete options',
		githubLink: 'https://github.com/muhammedhashimcp/React-Todo-App.git',
		liveLink: '',
		techUsed: [ReactImg, CSSImg],
	},
	{
		img: portfolio,
		id: 1001,
		title: 'Portfolio',
		desc: 'This is my portfolio (This website). This website is used to show case my project and skills.',
		githubLink: 'https://github.com/muhammedhashimcp/Portfolio.git',
		liveLink: 'https://muhammedhashimportfolio.netlify.app/',
		techUsed: [ReactImg, Tailwind],
	},
];

export default projects;
