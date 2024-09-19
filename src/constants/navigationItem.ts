import homeBlackIcon from '@/assets/icons/home-black.svg';
import homeWhiteIcon from '@/assets/icons/home-white.svg';
import paymentsBlackIcon from '@/assets/icons/payments-black.svg';
import paymentsWhiteIcon from '@/assets/icons/payments-white.svg';
import servicesBlackIcon from '@/assets/icons/services-black.svg';
import servicesWhiteIcon from '@/assets/icons/services-white.svg';
import documentsBlackIcon from '@/assets/icons/documents-black.svg';
import documentsWhiteIcon from '@/assets/icons/documents-white.svg';
import licenseProfileWhiteIcon from '@/assets/icons/lease-profile-white.svg';
import licenseProfileBlackIcon from '@/assets/icons/lease-profile-black.svg';

const NAVIGATION_ITEMS = [
  {
    name: 'Home',
    path: '/home',
    alt: 'home icon',
    img: {
      blackIcon: homeBlackIcon,
      whiteIcon: homeWhiteIcon,
    },
  },
  {
    name: 'License Profile',
    path: '/license-profile/contacts',
    alt: 'license profile icon',
    img: {
      blackIcon: licenseProfileBlackIcon,
      whiteIcon: licenseProfileWhiteIcon,
    },
  },
  {
    name: 'Payments',
    path: '/payments/make-payments/',
    alt: 'payment icon',
    img: {
      blackIcon: paymentsBlackIcon,
      whiteIcon: paymentsWhiteIcon,
    },
  },
  {
    name: 'Documents',
    path: '/license-documents/invoice',
    alt: 'license document icon',
    img: {
      blackIcon: documentsBlackIcon,
      whiteIcon: documentsWhiteIcon,
    },
  },
  {
    name: 'Services',
    path: '/services/details',
    alt: 'service icon',
    img: {
      blackIcon: servicesBlackIcon,
      whiteIcon: servicesWhiteIcon,
    },
  },
];

export default NAVIGATION_ITEMS;
