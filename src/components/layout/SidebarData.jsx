import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Overview',
		path: '/overview',
		icon: <AiIcons.AiFillHome />,
		iconOpen: <RiIcons.RiArrowDownSFill />,
		iconClosed: <RiIcons.RiArrowUpSFill />
		// subNav: [
		// 	{
		// 		title: 'Users',
		// 		path: '/overview/users',
		// 		icon: <IoIcons.IoIosPaper />
		// 	},
		// 	{
		// 		title: 'Guests',
		// 		path: '/overview/guest',
		// 		icon: <IoIcons.IoIosAlbums />
		// 	},
		// 	{
		// 		title: 'Admin',
		// 		path: '/overview/admin',
		// 		icon: <IoIcons.IoIosBeer />
		// 	}
		// ]
	},
	{
		title: 'Merhcandise',
		path: '/merchandise',
		icon: <AiIcons.AiFillControl />,
		iconOpen: <RiIcons.RiArrowDownSFill />,
		iconClosed: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Latest',
				path: '/overview/latest',
				icon: <IoIcons.IoIosBook />
			},
			{
				title: 'Vintage',
				path: '/overview/vintage',
				icon: <IoIcons.IoIosBug />
			},
			{
				title: 'Discount',
				path: '/overview/discount',
				icon: <IoIcons.IoIosCard />
			}
		]
	},
	{
		title: 'Users',
		path: '/users',
		icon: <AiIcons.AiOutlineAppstore />,
		iconOpen: <RiIcons.RiArrowDownSFill />,
		iconClosed: <RiIcons.RiArrowUpSFill />,
		subNav: [
			{
				title: 'Quiz Winners',
				path: '/users/quiz/winners',
				icon: <IoIcons.IoIosPaper />
			},
			{
				title: 'Highscores',
				path: '/users/quiz/top',
				icon: <IoIcons.IoIosAlbums />
			},
			{
				title: 'Blocked Accounts',
				path: '/users/blocked',
				icon: <IoIcons.IoIosBeer />
			}
		]
	},
	{
		title: 'History',
		path: '/history',
		icon: <AiIcons.AiFillHome />,
		iconOpen: <RiIcons.RiArrowDownSFill />,
		iconClosed: <RiIcons.RiArrowUpSFill />
	},
	{
		title: 'Settings',
		path: '/settings',
		icon: <AiIcons.AiFillHome />,
		iconOpen: <RiIcons.RiArrowDownSFill />,
		iconClosed: <RiIcons.RiArrowUpSFill />
	}
];
