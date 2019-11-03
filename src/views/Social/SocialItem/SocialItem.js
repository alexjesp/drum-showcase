import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg'
import { ReactComponent as GithubIcon } from '../icons/github.svg'
import { ReactComponent as InstagramIcon } from '../icons/instagram.svg'
import { ReactComponent as YoutubeIcon } from '../icons/youtube.svg'

import './SocialItem.css'

const icons = {
  twitter: TwitterIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon
}

export const SocialItem = (props) => {
  const { data, key } = props
  const className = classnames('SocialItem', {
    [`SocialItem--${data.name}`]: true
  })
  const Icon = icons[data.name]
  return (
    <li key={key} className={className}>
      <a
        className='SocialItem-link'
        href={data.href}
        target='_blank'
        rel="noopener noreferrer"
      ><Icon /></a>
    </li>
  )
}

SocialItem.propTypes = {
  data: PropTypes.object
}
