import logo from '../assets/images/logo.svg';
import cartIcon from '../assets/images/icon-cart.svg';
import avatarImage from '../assets/images/image-avatar.png';

import { IHeader } from './types';

const headerItems:IHeader = [
    {
        pos: 'left',
        items: [
            {
                isImage: true,
                alt: 'header-logo',
                path: '/',
                src: logo
            },
            {
                title: 'Collections',
                path: '/collections',
            },
            {
                title: 'Men',
                path: '/men'
            },
            {
                title: 'Women',
                path: '/women'
            },
            {
                title: 'About',
                path: '/contact'
            }
        ]
    },
    {
        pos: 'right',
        items: [
            {
                isImage: true,
                alt: 'cart-icon',
                path: '/minicart',
                src: cartIcon
            },
            {
                isImage: true,
                alt: 'avatar-image',
                path: '/account',
                src: avatarImage
            }
        ]
    }
]

export { headerItems }