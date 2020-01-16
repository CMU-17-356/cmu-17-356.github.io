<template>
  <div id="app">
<!--    <Test msg="Hello"/> -->
    <Users/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import Test from './components/Test'
import Users from './components/Users'

export default {
  name: 'App',
  components: {
    Test,
    Users
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
