import React, { PropTypes } from 'react'
import './Page.css'

const pageComponents = {
  about: require('../About').default,
  releases: require('../Releases').default
}

const Page = (props) => {
  const PageComponent = pageComponents[props.pageType]
  if (!PageComponent) {
    return null
  }
  return (
    <div className='Page'>
      <PageComponent />
    </div>
  )
}

Page.propTypes = {
  pageType: PropTypes.string
}

export default Page
