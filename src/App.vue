<template>
  <div id="app">
  <button v-if="userLoggedIn" @click="logout">wyloguj</button>
    <router-view/>
  </div>
</template>

<script>
import { auth } from './firebase';
import router from './router';

export default {
  name: 'App',

  computed: {
    userLoggedIn() {
      return this.$store.getters.currentUserLoggedIn;
    },
  },

  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$store.dispatch('setUser', null);
        router.push('/login');
      });
    },
  },
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
body, html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
