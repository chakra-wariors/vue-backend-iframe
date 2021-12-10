<template>
    <iframe width="100%" style="border: none;" height="94%" :src="src" />
</template>

<script>
export default {
  name: 'home',
  components: {},
  data () {
    return {
      src: ''
    }
  },
  watch: {
    $route (route) {
      const { meta: { src } } = route
      this.src = src
    }
  },
  mounted () {
    const { meta: { src } } = this.$route
    this.src = src
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
</style>
