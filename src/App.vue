<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { auth } from './firebase';

export default {
  name: 'App',

  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { email, uid } = user;
        this.$store.dispatch('setUser', { email, uid });
      }
    });
  },
};
</script>

<style lang="scss">
body {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
