import logo from '../assets/images/logo.svg';
import cartIcon from '../assets/images/icon-cart.svg';
import avatarImage from '../assets/images/image-avatar.png';
import productImage1 from '../assets/images/image-product-1.jpg';
import productThumbImg1 from '../assets/images/image-product-1-thumbnail.jpg';
import productImage2 from '../assets/images/image-product-2.jpg';
import productThumbImg2 from '../assets/images/image-product-2-thumbnail.jpg';
import productImage3 from '../assets/images/image-product-3.jpg';
import productThumbImg3 from '../assets/images/image-product-3-thumbnail.jpg';
import productImage4 from '../assets/images/image-product-4.jpg';
import productThumbImg4 from '../assets/images/image-product-4-thumbnail.jpg';

import { IHeader , IProduct } from './types';

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

const productImages = [
    {
        src: productImage1,
        alt: 'product-image-1',
        thumbnail: productThumbImg1
    },
    {
        src: productImage2,
        alt: 'product-image-2',
        thumbnail: productThumbImg2
    },
    {
        src: productImage3,
        alt: 'product-image-3',
        thumbnail: productThumbImg3
    },
    {
        src: productImage4,
        alt: 'product-image-4',
        thumbnail: productThumbImg4
    },
]

const productProps:IProduct = {
    brand: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    currency: 'USD',
    price: 125,
    oldPrice: 250,
    images: productImages
}

export { headerItems , productProps}