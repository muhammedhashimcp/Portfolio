// Project Details
// put your mastered and valueable skills on top

import {
	AWS,
	Bootstrap,
	CSSImg,
	Express,
	GitHub,
	GoogleCloud_Icon,
	GraphQL_Icon,
	HTML,
	JS,
	Jquery,
	Mongo,
	Mui,
	Mysql_icon,
	Nextjs_Logo,
	Nginx,
	Nodejs,
	PSQL,
	ReactImg,
	Redux,
	Sass,
	SocketIO_Icon,
	Swagger,
	Tailwind,
	TypeScript,
} from '../assets/assets.js';

// import HTML from '../assets/skillsImg/html.png';
// import CSS from '../src/skillsImg/css.png';
// import ReactImg from '../src/skillsImg/react.png';
// import Node from '../src/skillsImg/node.png';
// import AWS from '../src/skillsImg/aws.png';
// import GitHub from '../src/skillsImg/github.png';
// import Tailwind from '../src/skillsImg/tailwind.png';
// import Mongo from '../src/skillsImg/mongo.png';
// import Bootstrap from '../src/skillsImg/bootstrap.png';
// import Express from '../src/skillsImg/express.png';
// import Jquery from '../src/skillsImg/jquery.png';
// import Mui from '../src/skillsImg/mui.png';
// import Nginx from '../src/skillsImg/nginx.png';
// import Redux from '../src/skillsImg/redux.png';
// import Sass from '../src/skillsImg/sass.png';
// import JS from '../src/skillsImg/jspng.png'

let skills = [
	{
		img: Mongo,
		id: 1002,
		title: 'MongoDB',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Express,
		id: 1002,
		title: 'Express',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-gray-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ReactImg,
		id: 1002,
		title: 'React',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Nodejs,
		id: 1002,
		title: 'Node Js',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: HTML,
		id: 1001,
		title: 'HTML',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: CSSImg,
		id: 1000,
		title: 'CSS',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: JS,
		id: 1002,
		title: 'JS',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Jquery,
		id: 1002,
		title: 'Jquery',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Sass,
		id: 1002,
		title: 'Sass',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-pink-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Bootstrap,
		id: 1002,
		title: 'Bootstrap',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Tailwind,
		id: 1002,
		title: 'Tailwind',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Mui,
		id: 1002,
		title: 'MUI',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-800 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: TypeScript,
		id: 1002,
		title: 'TypeScript',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Nextjs_Logo,
		id: 1002,
		title: 'Nextjs',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Redux,
		id: 1002,
		title: 'Redux',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GitHub,
		id: 1002,
		title: 'GitHub',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: AWS,
		id: 1002,
		title: 'AWS',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GoogleCloud_Icon,
		id: 1002,
		title: 'GCP',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-[#ea4335] hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Nginx,
		id: 1002,
		title: 'Nginx',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: PSQL,
		id: 1002,
		title: 'PostgreSQL',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Mysql_icon,
		id: 1002,
		title: 'Mysql',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GraphQL_Icon,
		id: 1002,
		title: 'Graph QL',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-pink-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: SocketIO_Icon,
		id: 1002,
		title: 'Socket.io',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Swagger,
		id: 1002,
		title: 'Swagger',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg',
	},
];

export default skills;
