const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    //修改antd默认样式，修改完需要重启本地服务器
    modifyVars: { "@primary-color": "#C20C0C" }
  })
);
