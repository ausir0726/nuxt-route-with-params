<template lang="pug">
section
  h1 FINPO project
  .row
    .col
      h2 CIS design
      ul
        li(v-for="item in category_cis.results")
          nuxt-link(:to='`/post1/${item.slug}`') {{item.title}}
    .col
      h2 WEBSITE design
      ul
        li(v-for="item in category_website.results")
          nuxt-link(:to='`/post2/${item.slug}`') {{item.title}}

</template>

<script>
import axios from 'axios';

export default {
  async asyncData() {
    const { data: category_cis } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=55a4aac54cfb0e11005f8fba&page=1&limit=5');
    const { data: category_website } = await axios.get('https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d?category=568a297e5514cb1100996b65&page=1&limit=5');
    return {
      category_cis,
      category_website,
    };
  },
  head() {
    return {
      title: 'sitename',
    };
  },
};
</script>

<style lang="stylus" scoped>

</style>
