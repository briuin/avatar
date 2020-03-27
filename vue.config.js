module.exports = {
  publicPath: "/avatar",
  outputDir: "./docs",
  filenameHashing: false,
  chainWebpack: config => {
    config.externals(["vue", "vue-router"]);
  }
};
