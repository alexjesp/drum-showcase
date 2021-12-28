export type NavItem = {
  href: string
  title: string
  external?: boolean
}

export const navItems: NavItem[] = [
  {
    href: '/about',
    title: 'About'
  },
  {
    href: '/releases',
    title: 'Releases'
  },
  {
    href: '/media',
    title: 'Media'
  },
  {
    href: 'mailto:contact@alexesp.co.uk',
    title: 'Contact',
    external: true
  }
]
