import {
    ArrowPathIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    HomeModernIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
  } from '@heroicons/react/24/outline';

export const menus = [
    {
      name: '//Home',
      href: '/',
      icon: HomeModernIcon,
    },
    {
      name: '//Blog',
      href: '/blog',
      icon: ChartBarIcon,
    },
    {
      name: '//Project',
      href: '/project',
      icon: CursorArrowRaysIcon,
    },
    {
      name: '//Support',
      href: '/support',
      icon: ShieldCheckIcon,
    },
    // {
    //   name: 'Perfomance',
    //   href: '/perfomance',
    //   icon: Squares2X2Icon,
    // },
    {
      name: '//About',
      href: '/about',
      icon: ArrowPathIcon,
    },
  ];