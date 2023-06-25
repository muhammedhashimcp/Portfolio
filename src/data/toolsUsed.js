import {
	Api,
	Figma,
	Postman,
	Swagger,
	Babel_Icon,
	Canva_Icon,
	ESLint_Icon,
	GitBook_Icon,
	GitLab_Icon,
	JS_Webpack_Icon,
	JSON_Icon,
	W3C_XML_Icon,
	PhpMyAdmin_Icon,
	VisualStudioCode_Icon,
	ChatGPT,
	Dall_E,
	Chrome,
	Firefox,
	Edge,
	Opera,
	Windows,
	Ubuntu,
	Minlify,
	Linux,
	LinuxMint,
	Notion,
	Markdown,
	Slack,
	PrettierLogo,
	Codesandbox,
	Replit,
	CodePen_Icon,
	CodeMirror_Icon,
	Gitpod_Icon,
	VimLogo,
	Jira,
	Copilot,
} from '../assets/assets';
// chat gpt
// ai 
// photoshop
//chrome/firefox/edge/opera
// ubuntu/windows
// obs
// compass
 

let toolsUsed = [
	{
		img: Figma,
		id: 1002,
		title: 'Figma',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Swagger,
		id: 1002,
		title: 'Swagger',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-lime-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Postman,
		id: 1002,
		title: 'Postman',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Canva_Icon,
		id: 1002,
		title: 'Canva',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-400 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: Jira,
		id: 1002,
		title: 'Slack',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Slack,
		id: 1002,
		title: 'Slack',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ChatGPT,
		id: 1002,
		title: 'Chat GPT',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-300 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Dall_E,
		id: 1002,
		title: 'DALL.E',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-pink-900 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Notion,
		id: 1002,
		title: 'Notion',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Markdown,
		id: 1002,
		title: 'Markdown',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GitBook_Icon,
		id: 1002,
		title: 'GitBook',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Copilot,
		id: 1002,
		title: 'Copilot',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Minlify,
		id: 1002,
		title: 'Mintlify',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: GitLab_Icon,
		id: 1002,
		title: 'GitLab',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: JS_Webpack_Icon,
		id: 1002,
		title: 'Webpack',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-400 hover:scale-110 duration-700 rounded-lg',
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
		img: PhpMyAdmin_Icon,
		id: 1002,
		title: 'PhpMyAdmin',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: VisualStudioCode_Icon,
		id: 1002,
		title: 'Vscode',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Codesandbox,
		id: 1002,
		title: 'Code Sand Box',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Replit,
		id: 1002,
		title: 'Replit',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: CodePen_Icon,
		id: 1002,
		title: 'Codepen',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-stone-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: CodeMirror_Icon,
		id: 1002,
		title: 'Code Mirror',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-pink-800 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Gitpod_Icon,
		id: 1002,
		title: 'GitPod',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: VimLogo,
		id: 1002,
		title: 'Vim',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: ESLint_Icon,
		id: 1002,
		title: 'Eslint',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-violet-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: PrettierLogo,
		id: 1002,
		title: 'Prettier',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-600 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Chrome,
		id: 1002,
		title: 'Chrome',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-green-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Firefox,
		id: 1002,
		title: 'Firefox',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-yellow-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Edge,
		id: 1002,
		title: 'Edge',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-cyan-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Opera,
		id: 1002,
		title: 'Opera',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-red-500 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Windows,
		id: 1002,
		title: 'Windows',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Linux,
		id: 1002,
		title: 'Linux',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-white hover:scale-110 duration-700 rounded-lg',
	},
	{
		img: Ubuntu,
		id: 1002,
		title: 'Ubuntu',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-orange-500 hover:scale-110 duration-700 rounded-lg',
	},

	{
		img: LinuxMint,
		id: 1002,
		title: 'Linux Mint',
		hoverClass:
			'shadow-md shadow-[#040c16] hover:shadow-lime-500 hover:scale-110 duration-700 rounded-lg',
	},
];

export default toolsUsed;
