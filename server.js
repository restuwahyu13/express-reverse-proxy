const { app } = require('./app')
const server = require('express')()
const { createProxyMiddleware } = require('http-proxy-middleware')

server.use(
  createProxyMiddleware({
    target: 'http://localhost:1945',
    changeOrigin: true,
    xfwd: true,
    pathRewrite: {
      '/': '/api/'
    }
  })
)

server.listen(process.env.PROXY_PORT, () => console.log('proxy server is running on port 3000'))
app.listen(process.env.ORIGINAL_PORT, () => console.log('original server is running on port 1945'))
