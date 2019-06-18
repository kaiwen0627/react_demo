const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  // 按需加载
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  //修改antd默认样式，修改完需要重启本地服务器
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#C20C0C" }
  })
);
