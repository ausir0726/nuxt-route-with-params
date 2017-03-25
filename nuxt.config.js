const axios = require('axios');

module.exports = {
  generate: {
    async routes() {
      const { data: category_cis } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=55a4aac54cfb0e11005f8fba&page=1&limit=5');
      const { data: category_website } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=568a297e5514cb1100996b65&page=1&limit=5');
      const post1Page = category_cis.results.map((post) => { return `/post1/${post.slug}`; });
      const post2Page = category_website.results.map((post) => { return `/post2/${post.slug}`; });
      return [...post1Page,...post2Page];
    }
  },
  /**
   * 如果放置的空間在資料夾內請修改 base
   */
  router: {
    base: '/',
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant',
    },
    title: 'nuxt-route-with-params',
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keyword', name: 'keyword', content: 'nuxt-route-with-params' },
      { hid: 'description', name: 'description', content: 'FINPO project' },
    ],
    script: [
      { src: '/vendor/sniffjs/sniff.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/bs4.scss', lang: 'scss' },
    { src: '~assets/css/main.styl', lang: 'stylus' },
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
