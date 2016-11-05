import classnames from 'classnames'
import React, { PropTypes } from 'react'
import pages from './pages'

class Page extends React.Component {
  static propTypes = {
    pageType: PropTypes.string,
    className: PropTypes.string
  };

  componentDidUpdate () {
    window.scrollTo(0, 0)
  }

  render () {
    const PageComponent = pages[this.props.pageType]
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
