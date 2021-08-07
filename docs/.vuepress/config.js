module.exports = {
  // 提交到gitee则开启base
  //base: '/blogs/',
  title: '小朱的网站',
  description: '网页测试',
  head: [
    // 增加自定义的 icon, 作为网页图标
    ['link', { rel: 'icon', href: '/fav.ico' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          '/css/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          '/css/github-markdown.min.css',
      },
    ],
  ],
  // 设置输出目录
  dest: './dist',
  // 设置主题配置项
  themeConfig: {
    // 将同时提取markdown中h2和h3标题，显示在侧边栏上。
    sidebarDepth: 2,
    // 文档更新时间：每个文件git最后提交的时间
    lastUpdated: '更新于',
    // 添加导航栏
    nav: [
      { text: '数据可视化实践', link: 'https://datav.aliyuncs.com/share/c5fe85f805b0425186d01be47dc34322' },

      { text: '前端技术小结', link: '/front-end/' },
      { text: '高效办公方法', link: '/office/' },
      { text: '通用知识速查', link: '/general/' },
      { text: '政治教育学习', link: '/CPC/' },

      {
        text: '⭐️资源',
        // 这里是下拉列表展现形式。
        items: [
          {text: 'echarts示例', link: 'https://echarts.apache.org/examples/zh/index.html' },
          {text: 'AJ-Report', link: 'https://report.anji-plus.com/report-doc/'},
          {text: '阿里云DataV', link: 'https://help.aliyun.com/document_detail/86874.html'},
          {text: '码云Git大全', link: 'https://gitee.com/all-about-git'},
          {text: '得到APP网页版', link: 'https://www.dedao.cn/' },
          {text: '大疆教育平台', link: 'https://edu.dji.com/hub/docs'},
        ],
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      // 前端技术
      '/front-end/': [
        'javascript', 'pattern', 'typescript', 'es6', 'css',
        'node', 'design', 'npm', 'vuepress', 'babel',
      ],

      // 数据可视化
      //'/practice/': ['Hilo', 'canvas', 'react', 'zrender', 'search', 'phaser', 'medicine'],

      // 高效办公
      '/office/': ['word', 'excel', 'other', 'software'],
      // 通用知识
      '/general/': ['git', 'markdown', 'nexus', 'latex', 'vscode', 'guide', 'reg'],

      // 党史教育
      '/CPC/': ['100sentences', 'historyPRC'],
    },
  },
  // vuepress插件系统
  plugins: [
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
      },
    ],
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-code-copy', true],
  ],
  // markdown增强
  markdown: {
    extendMarkdown: (md) => {
      md.set({
        breaks: true,
        html: true,
      })
      md.use(require('markdown-it-katex'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-task-lists'))
      md.use(require('markdown-it-mark'))
      md.use(require('markdown-it-ins'))
    },
  },
}
