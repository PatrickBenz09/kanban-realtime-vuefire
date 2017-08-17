<template>
  <div>
    <!-- <router-view></router-view> -->
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
// import db from '@/firebase'
import Header from '@/components/Header'
import Main from '@/components/Main'

export default {
  name: 'app',
  components: {
    Main,
    Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
