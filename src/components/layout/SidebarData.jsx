// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  // {
  // 	title: 'Overview',
  // 	path: '/overview',
  // 	icon: <AiIcons.AiFillHome />,
  // 	iconOpen: <RiIcons.RiArrowDownSFill />,
  // 	iconClosed: <RiIcons.RiArrowUpSFill />
  // 	// subNav: [
  // 	// 	{
  // 	// 		title: 'Users',
  // 	// 		path: '/overview/users',
  // 	// 		icon: <IoIcons.IoIosPaper />
  // 	// 	},
  // 	// 	{
  // 	// 		title: 'Guests',
  // 	// 		path: '/overview/guest',
  // 	// 		icon: <IoIcons.IoIosAlbums />
  // 	// 	},
  // 	// 	{
  // 	// 		title: 'Admin',
  // 	// 		path: '/overview/admin',
  // 	// 		icon: <IoIcons.IoIosBeer />
  // 	// 	}
  // 	// ]
  // },
  {
    title: 'Clothing',
    path: '/admin/clothing',
    icon: <AiIcons.AiFillControl />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Orders',
        path: '/admin/clothing/orders',
        icon: <IoIcons.IoIosBook />
      },
      {
        title: 'Recent Sales',
        path: '/admin/clothing/recent',
        icon: <IoIcons.IoIosBook />
      }
    ]
  },
  {
    title: 'Users',
    path: '/admin/users',
    icon: <AiIcons.AiOutlineAppstore />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Subscribers',
        path: '/users/subscribers',
        icon: <IoIcons.IoIosPaper />
      },
      // difference is over here all blocked accounts and their source is showed
      {
        title: 'Blocked Accounts',
        path: '/users/blocked',
        icon: <IoIcons.IoIosBeer />
      }
    ]
  },
  {
    title: 'Quiz',
    path: '/admin/quiz',
    icon: <AiIcons.AiOutlineAppstore />,
    iconOpen: <RiIcons.RiArrowDownSFill />,
    iconClosed: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Quiz Winners',
        path: '/admin/quiz/winners',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Highscores',
        path: '/admin/quiz/highscores',
        icon: <IoIcons.IoIosAlbums />
      },
      // specific cause players can be blocked for any reason
      {
        title: 'Blocked Players',
        path: '/admin/quiz/blocked',
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
]
