import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import { pages } from './pages'

export const Page = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  const PageComponent = pages[props.pageType]
  if (!PageComponent) {
    return null
  }
  const className = classnames('Page', props.className)
  return (
    <div className={className}>
      <PageComponent />
    </div>
  )
}

Page.propTypes = {
  pageType: PropTypes.string,
  className: PropTypes.string
}
