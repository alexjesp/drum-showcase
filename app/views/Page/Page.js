import React, { PropTypes } from 'react'

const pageComponents = {
  about: require('../About').default
}

const Page = (props) => {
  const PageComponent = pageComponents[props.pageType]
  return (
    <div className='Page'>
      {PageComponent ? <PageComponent /> : null}
    </div>
  )
}

Page.propTypes = {
  pageType: PropTypes.string
}

export default Page
