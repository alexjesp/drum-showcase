import classnames from 'classnames'
import React, { PropTypes } from 'react'
import './Page.css'

const pageComponents = {
  about: require('../About').default,
  releases: require('../Releases').default,
  media: require('../Media').default,
  contact: require('../Contact').default
}

const Page = (props) => {
  const PageComponent = pageComponents[props.pageType]
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
  className: PropTypes.string,
  pageType: PropTypes.string
}

export default Page
