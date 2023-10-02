
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Pages } from './types'


export const pageLinks: Pages = [
    {
        id: 1,
        href: '#home',
        text: 'Home'
    },
    {
        id: 2,
        href: '#about',
        text: 'About'
    },
    {
        id: 3,
        href: '#services',
        text: 'Services'
    },
    {
        id: 4,
        href: '#tours',
        text: 'Tours'
    }
]
export const socialLinks= [
    {
        id: 1,
        href: 'https://www.twitter.com',
        icon: faFacebook
    },
    {
        id: 2,
        href: 'https://www.twitter.com',
        icon: faTwitter
    },
    {
        id: 3.,
        href: 'https://www.twitter.com',
        icon: faInstagram
    },
]


export const services = [
    {
        id: 1,
        icon: 'fas fa-wallet fa-fw',
        title: 'saving money',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'

    },
    {
        id: 2,
        icon: 'fas fa-tree fa-fw',
        title: 'amazing comfort',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'

    },
    {
        id: 3,
        icon: 'fas fa-socks fa-fw',
        title: 'endless hiking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'

    },
]

export const tours = [
    {
        id: 1,
        icon: 'fas fa-map',
        image: '',
        date: 'august 26th, 2020',
        title: 'Lore ipsum',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'lorem',
        duration: 6,
        price: 2100
    },
    {
        id: 2,
        icon: 'fas fa-map',
        image:  '',
        date: 'october 1th, 2020',
        title: 'Lore ipsum',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'lorem',
        duration: 11,
        price: 1400
    },
    {
        id: 3,
        icon: 'fas fa-map',
        image:  '',
        date: 'september 15th, 2020',
        title: 'Lore ipsum',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'lorem',
        duration: 8,
        price: 5000
    },
    {
        id: 4,
        icon: 'fas fa-map',
        image:  '',
        date: 'december 5th, 2019',
        title: 'Lore ipsum',
        info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque  vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        location: 'lorem',
        duration: 20,
        price: 3300
    },
]

export const footerLinks = [
    {
        id: 1,
        href: '#home',
        text: 'home'
    },
    {
        id: 2,
        href: '#about',
        text: 'about'
    },
    {
        id: 3,
        href: '#services',
        text: 'services'
    },
    {
        id: 4,
        href: '#featured',
        text: 'featured'
    }
]