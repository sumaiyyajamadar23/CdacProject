import React from 'react';
//import { useParams } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: `/artist-welcome/${sessionStorage.getItem('authenticatedUser')}`,
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Reports',
  //   path: `/artist-welcome/${sessionStorage.getItem('authenticatedUser')}`,
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Add Products',
    path: '/artist-product',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'See Orders',
    path: `/artist-order/${sessionStorage.getItem('authenticatedUser')}`,
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: `/artist-welcome/${sessionStorage.getItem('authenticatedUser')}`,
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: `/artist-welcome/${sessionStorage.getItem('authenticatedUser')}`,
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];