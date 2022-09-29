// Project Details 
// put your recent and master projects on top
import WorkImg from '../src/skillsImg/workImg.jpeg';
import HTML from '../src/skillsImg/html.png';
import CSS from '../src/skillsImg/css.png';
import ReactImg from '../src/skillsImg/react.png';
import Node from '../src/skillsImg/node.png';
import AWS from '../src/skillsImg/aws.png';
import GitHub from '../src/skillsImg/github.png';
import Tailwind from '../src/skillsImg/tailwind.png';
import Mongo from '../src/skillsImg/mongo.png';
import Bootstrap from '../src/skillsImg/bootstrap.png';
import Express from '../src/skillsImg/express.png';
import Jquery from '../src/skillsImg/jquery.png';
import Mui from '../src/skillsImg/mui.png';
import Nginx from '../src/skillsImg/nginx.png';
import Redux from '../src/skillsImg/redux.png';
import Sass from '../src/skillsImg/sass.png';
import JS from '../src/skillsImg/jspng.png';

let projects = [
	{
		img: WorkImg,
		id: 1000,
		title: 'Activity Tracker',
		desc: 'This is a react application used to add activities we want to perform in a particular month.',
		githubLink: 'https://github.com/Prethush/Activity-Tracker',
		liveLink: 'https://activity-tracker-kt.netlify.app/',
		// techUsed: 'React, Redux, Tailwindcss',
		techUsed: [ReactImg,Redux,Tailwind],
	},
	
];

export default projects;
