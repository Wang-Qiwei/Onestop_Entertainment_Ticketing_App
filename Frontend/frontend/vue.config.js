module.exports = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.output.filename("js/[name].js").end();
      config.output.chunkFilename("js/[name].js").end();
      // 修改生产配置
      config.plugin("extract-css").tap((args) => [
        {
          filename: `css/[name].css`,
          chunkFilename: `css/[name].css`,
        },
      ]);
    }
  },

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
