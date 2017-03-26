<template lang="pug">
section
  h2 this is WEBSITE design page
  nuxt-link(to="/") <-- back
  h1 {{title}}
  div
    img(:src="cover")

</template>

<script>
import axios from 'axios';

export default {
  async asyncData({ params }) {
    const slug = encodeURI(params.slug);
    const { data } = await axios.get(`https://cdn.upage.cool/f/pages/site/55a489ca4cfb0e11005f8f9d/slug/${slug}`);
    return data;
  },
  head() {
    return {
      title: 'About Page - sitename',
    };
  },
};
</script>

<style lang="stylus" scoped>
h2
  color red
img
  width 300px
</style>
