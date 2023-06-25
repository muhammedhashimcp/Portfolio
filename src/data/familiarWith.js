import {
	Api,
	Firebase,
	Postman,
	Styled,
	Java_Icon,
	C_Programme,
	RTK_Query,
	HBS,
	Auth0_Icon,
	ReactImg,
	Expo_Icon,
	Binance,
	Redis_Icon,
	Mocha_Icon,
	Jest_Icon,
	Docker_Icon,
	Chai_Icon,
	Adminjs,
	Shopify,
	ForestAdmin,
	Babel_Icon,
	Canva_Icon,
	ESLint_Icon,
	GitBook_Icon,
	GitLab_Icon,
	JS_Webpack_Icon,
	JSON_Icon,
	W3C_XML_Icon,
	PhpMyAdmin_Icon,
	Twilio_Icon,
	Axios_Icon,
	Sequelize_Icon,
	Figma,
	Rapid_Api,
	Npm,
	Stripe,
	heroku,
	Chart_js,
	RazorPay,
	VercelLogo,
	RenderLogo,
	Cloudinary,
	Cypress,
	EJS,
	Netlify,
	NodeMailer,
	PrismaORM,
	TypeORM,
	WebSocket,
	Threejs,
} from '../assets/assets';

let familiarWith = [
	{
		img: Firebase,
		id: 1002,
		title: 'FireBase',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-500  hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Netlify,
		id: 1002,
		title: 'Netlify',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-emerald-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: heroku,
		id: 1002,
		title: 'Heroku',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: VercelLogo,
		id: 1002,
		title: 'Vercel',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: RenderLogo,
		id: 1002,
		title: 'Render',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-emerald-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Sequelize_Icon,
		id: 1002,
		title: 'Sequelize',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: PrismaORM,
		id: 1002,
		title: 'Prisma ORM',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: TypeORM,
		id: 1002,
		title: 'Sequelize',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Redis_Icon,
		id: 1002,
		title: 'Redis',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-red-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: PhpMyAdmin_Icon,
		id: 1002,
		title: 'PhpMyAdmin',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ReactImg,
		id: 1002,
		title: 'React Native',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Expo_Icon,
		id: 1002,
		title: 'Expo',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Npm,
		id: 1002,
		title: 'NPM',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Mocha_Icon,
		id: 1002,
		title: 'Mocha',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-900 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Jest_Icon,
		id: 1002,
		title: 'Jest',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-red-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Chai_Icon,
		id: 1002,
		title: 'Chai',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-amber-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Cypress,
		id: 1002,
		title: 'Cypress',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-emerald-600 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Adminjs,
		id: 1002,
		title: 'Adminjs',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ForestAdmin,
		id: 1002,
		title: 'Forest Admin',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Shopify,
		id: 1002,
		title: 'Shopify',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-lime-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Api,
		id: 1002,
		title: 'Api',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-lime-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: JSON_Icon,
		id: 1002,
		title: 'JSON',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: W3C_XML_Icon,
		id: 1002,
		title: 'XML',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Postman,
		id: 1002,
		title: 'Postman',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Axios_Icon,
		id: 1002,
		title: 'Axios',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: RTK_Query,
		id: 1002,
		title: 'RTK Query',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-600 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Auth0_Icon,
		id: 1002,
		title: 'O Auth',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Stripe,
		id: 1002,
		title: 'Stripe',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-600 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: RazorPay,
		id: 1002,
		title: 'Razor Pay',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Cloudinary,
		id: 1002,
		title: 'Cloudinary',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Twilio_Icon,
		id: 1002,
		title: 'Twilio',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-red-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: NodeMailer,
		id: 1002,
		title: 'Node Mailer',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Binance,
		id: 1002,
		title: 'Binance',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Rapid_Api,
		id: 1002,
		title: 'Rapid API ',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: WebSocket,
		id: 1002,
		title: 'WebSocket',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: EJS,
		id: 1002,
		title: 'EJS',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-lime-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: HBS,
		id: 1002,
		title: 'Handlebars',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Styled,
		id: 1002,
		title: 'Styled',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-pink-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Chart_js,
		id: 1002,
		title: 'Chart Js',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-red-300 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Threejs,
		id: 1002,
		title: 'Three js',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Babel_Icon,
		id: 1002,
		title: 'Babel',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: JS_Webpack_Icon,
		id: 1002,
		title: 'Webpack',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ESLint_Icon,
		id: 1002,
		title: 'Eslint',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Figma,
		id: 1002,
		title: 'Figma',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Canva_Icon,
		id: 1002,
		title: 'Canva',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-300 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: GitBook_Icon,
		id: 1002,
		title: 'GitBook',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GitLab_Icon,
		id: 1002,
		title: 'GitLab',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Docker_Icon,
		id: 1002,
		title: 'Docker',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Java_Icon,
		id: 1002,
		title: 'Java',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-700 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: C_Programme,
		id: 1002,
		title: 'C',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},

	// {
	// 	img: Python_Icon,
	// 	id: 1002,
	// 	title: 'Python',
	// 	hoverClass:
	// 		'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	// },
	// {
	// 	img: Django_Icon,
	// 	id: 1002,
	// 	title: 'Django',
	// 	hoverClass:
	// 		'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	// },
	// {
	// 	img: Flutter_Icon,
	// 	id: 1002,
	// 	title: 'Flutter',
	// 	hoverClass:
	// 		'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	// },
];

export default familiarWith;
