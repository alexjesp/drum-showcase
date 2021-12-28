import React from 'react'

export const Page: React.FunctionComponent = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  })
  return <>{props.children}</>
}
