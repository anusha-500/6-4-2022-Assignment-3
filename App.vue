<template>
  <div id="app">
    <que10 ></que10>
    <que6 name="Anusha" mailid="Anusha@500apps" password="******"> </que6>
    <que9></que9>
    <que8></que8>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import que10 from './components/que10.vue'
import que6 from './components/que6.vue'
import que9 from './components/que9.vue'
import que8 from './components/que8.vue'

export default {
  name: 'App',
  components: {
    que10,que6,que9,que8
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
