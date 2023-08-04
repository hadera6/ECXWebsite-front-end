import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Commodities',
    url: '/commodities',
    iconComponent: { name: 'cil-speedometer' },
    children: [
      {
        name: 'AllCommodities',
        url: '/commodities'
      },
      {
        name: 'AddCommodities',
        url: '/commodities/add'
      }
    ]
  },
  {
    name: 'Carousel',
    url: '/commodities',
    iconComponent: { name: 'cil-speedometer' },
    children: [
      {
        name: 'AllCarousel',
        url: '/carousel/add-carousel'
      }
    ]
  },
  {
    name: 'BoardOfDirectors',
    url: '/board-of-directors',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Career',
    url: '/career',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'ContactInfo',
    url: '/contact-info',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Media',
    url: '/media',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'MarketData',
    url: '/market-data',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'CustomerSupport',
    url: '/customer-support',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Pages',
    url: '/pages',
    iconComponent: { name: 'cil-speedometer' }
  }
];
