module.exports = {
    presets: [
      [
        // 最常用的预设配置，自动按目标环境要求引入相应的转换器，通常与 .browserlistrc 配置文件一起使用
        '@babel/preset-env',
        {
          modules: false, // 不让 babel 处理模块
          useBuiltIns: 'usage', // 按需引入 core-js 代码进行 es3 代码转换
          corejs: 3 // 使用 corejs@3 作为转换目标代码
        }
      ]
    ],
    plugins: [
      // 支持 Vue 的 jsx 语法
      '@vue/babel-plugin-transform-vue-jsx',
      // 链式运算符支持，如：const baz = obj?.foo?.bar
      '@babel/plugin-proposal-optional-chaining',
      // 空合并运算符支持，如：const baz = obj.foo ?? 'bar'
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
  }