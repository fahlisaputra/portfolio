export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://fah.li'
    : 'http://localhost:3000'

export const siteConfig = {
  name: "Fahli's Personal Website",
  title: 'Muhammad Fahli Saputra',
  description:
    'A Fullstack Software Engineer who loves code and learn new things',
  author: {
    name: 'Muhammad Fahli Saputra',
    url: 'https://fah.li',
    email: 'saputra@fahli.net',
    github: 'https://github.com/fahlisaputra',
    linkedIn: 'https://www.linkedin.com/in/fahlisaputra',
    avatar:
      'https://res.cloudinary.com/dyytaftx5/image/upload/v1698027043/vg6mlvhg7w7uodpu86rp.jpg',
    twitter: '@fahlisptr',
  },
  keywords: [
    'fahlisaputra',
    'Muhammad Fahli Saputra',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
  ],
}
