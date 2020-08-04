var app  = require('express')();
var { createProxyMiddleware } = require('http-proxy-middleware');

app.use(createProxyMiddleware({
	target: 'http://localhost:3001',
	changeOrigin: true,
	xfwd: true,
	pathRewrite: {'^/api/v1' : '/api/v2/*'}
}));

app.listen(3000, () => console.log('proxy is running on port 3000'));