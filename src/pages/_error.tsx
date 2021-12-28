import { ErrorProps } from 'next/error'
import React from 'react'

const Error: React.FunctionComponent<ErrorProps> = ({ statusCode }) => {
  return (
    <>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </>
  )
}

export const getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
