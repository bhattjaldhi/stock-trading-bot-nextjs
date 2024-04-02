import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { SiGoogleassistant } from "react-icons/si";


const routes= [
  {
    name: 'Dashboard',
    layout: '/user',
    path: '/dashboard',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Stock Marketplace',
    layout: '/user',
    path: '/stocks',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
  },
  {
    name: 'Manage Bots',
    layout: '/user',
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: '/bots',
  },
  {
    name: 'AI Knowledge Hub',
    layout: '/user',
    path: '/ai-knowledge-hub',
    icon: <SiGoogleassistant width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Profile',
    layout: '/user',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  },
  
];

export default routes;
