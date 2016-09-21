const instagramHandler = require('../handlers/instagram')

module.exports = function instagramRoute (req, res) {
  return instagramHandler(req.query.code).then((data) => {
    res.send(data)
  }).catch(e => {
    res.status(404).send(e.message)
  })
}
