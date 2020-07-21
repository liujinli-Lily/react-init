const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://172.16.13.25:8080/",
            changeOrigin: true, // needed for virtual hosted sites
            pathRewrite: {
                '': ''
            }
        })
    );
};
