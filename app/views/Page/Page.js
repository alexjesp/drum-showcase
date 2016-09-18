import classnames from 'classnames'
import React, { PropTypes } from 'react'
import './Page.css'

const pageComponents = {
  about: require('../About').default,
  releases: require('../Releases').default,
  media: require('../Media').default,
  contact: require('../Contact').default
}

class Page extends React.Component {
  static propTypes = {
    pageType: PropTypes.string,
    className: PropTypes.string
  };

  componentDidUpdate () {
    window.scrollTo(0, 0)
  }

  render () {
    const PageComponent = pageComponents[this.props.pageType]
    if (!PageComponent) {
      return null
    }
    const className = classnames('Page', this.props.className)
    return (
      <div className={className}>
        <PageComponent />
      </div>
    )
  }
}

export default Page
