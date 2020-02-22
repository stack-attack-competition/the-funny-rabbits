<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <BootstrapTest/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BootstrapTest from '@/components/BootstrapTest.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BootstrapTest
  }
}
</script>
