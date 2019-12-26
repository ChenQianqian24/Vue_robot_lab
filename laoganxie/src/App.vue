<template>
  <div id="app">
    <HelloWorld />
    <AdministrativeRegistration class="AdministrativeRegistration" />
    <UserRegistration class="UserRegistration" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AdministrativeRegistration from './components/AdministrativeRegistration'
import UserRegistration from './components/UserRegistration'

export default {
  name: 'app',
  components: {
    HelloWorld,
    AdministrativeRegistration,
    UserRegistration
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}
li {
  list-style: none;
}
.AdministrativeRegistration {
  float: left;
  margin-right: 100px;
}
.UserRegistration {
  float: left;
}
</style>
