import { apiStatus } from '../../../lib/util'
import { Router } from 'express'
import request from 'request'

module.exports = ({ config, db }) => {
  if (!(config.extensions.proxy)) {
    console.log('No config file found') // eslint-disable-line no-console
    return Router()
  }
  const proxies = config.extensions.proxy.list
  const api = Router()

  api.all('/hook/:name', (req, res) => {
    const { name } = req.params
    const proxy = config.extensions.proxy[name]
    if (!proxy || (proxy.secret && req.query.secret !== proxy.secret)) {
      apiStatus(res, 'Access denied', 403)
      return
    }
    proxy.urls.forEach(proxyUrl => {
      const proxy = request(proxyUrl)
      req.pipe(proxy)
    })
    apiStatus(res, {
      proxies: proxy.urls.length
    })
  })

  api.all('/test', (req, res) => {
    return apiStatus(res, 'Can we dig it?')
  })

  api.all('/test2', (req, res) => {
    return apiStatus(res, 'Yes we can!')
  })

  return api
}
