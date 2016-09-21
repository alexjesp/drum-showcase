const config = require('config')
const axios = require('axios')
const qs = require('querystring')

module.exports = function instagram (code) {
  return getAccessToken(code).then(accessToken => {
    console.log(accessToken)
    return axios.get(`https://api.instagram.com/v1/users/${config.instagram.userId}/media/recent/`, {
      access_token: accessToken
    }).then(({ data }) => data)
  })
}

function getAccessToken (code) {
  return axios({
    url: 'https://api.instagram.com/oauth/access_token',
    method: 'POST',
    data: qs.stringify({
      client_id: config.instagram.clientId,
      client_secret: config.instagram.clientSecret,
      grant_type: 'authorization_code',
      redirect_uri: config.instagram.redirectUri,
      code
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).then(({ data }) => {
    console.log(data)
    return data.access_token
  }).catch(e => console.error(e))
}
