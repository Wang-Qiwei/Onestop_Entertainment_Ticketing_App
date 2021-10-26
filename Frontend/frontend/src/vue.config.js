module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:9999",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
