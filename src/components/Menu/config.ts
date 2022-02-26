import { MenuEntry } from 'uikit'

const config: () => MenuEntry[] = () => [
  {
    label: 'Dashboard',
    icon: 'images/home.png',
    href: '/home',
  },
  {
    label: 'Treasury',
    icon: 'images/whitepaper.png',
    href: '/home',
  },
  {
    label: '?',
    icon: 'images/home.png',
    href: '/home',
  },
  {
    label: 'WhitePaper',
    icon: 'images/whitepaper.png',
    href: '/home',
  },
  {
    label: 'Tokenomics',
    icon: 'images/tokenomics.png',
    href: '/home',
  },
]

export default config
