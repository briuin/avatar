module.exports = {
  outputDir: "./docs",
  filenameHashing: false,
  chainWebpack: config => {
    config.externals(["vue", "vue-router"]);
  }
};
