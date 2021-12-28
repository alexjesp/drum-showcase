export type SocialItemData = {
  name: string
  svgPath: string
  href: string
  wider?: boolean
}

export const socialItems: SocialItemData[] = [
  {
    name: 'twitter',
    svgPath: './icons/twitter.svg',
    href: 'https://twitter.com/aespdrum'
  },
  {
    name: 'instagram',
    svgPath: './icons/instagram.svg',
    href: 'https://instagram.com/aespdrum'
  },
  {
    name: 'github',
    svgPath: './icons/github.svg',
    href: 'https://github.com/alexjesp'
  },
  {
    name: 'youtube',
    svgPath: './icons/youtube.svg',
    wider: true,
    href: 'https://youtube.com/aespdrum'
  }
]
